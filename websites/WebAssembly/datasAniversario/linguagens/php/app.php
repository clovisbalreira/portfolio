<?php

declare(strict_types=1);

require_once __DIR__ . '/interface/dom.php';
require_once __DIR__ . '/amigo.php';
require_once __DIR__ . '/banco_amigos.php';
require_once __DIR__ . '/interface/mensagens.php';
require_once __DIR__ . '/interface/formulario.php';
require_once __DIR__ . '/interface/modal.php';
require_once __DIR__ . '/interface/resultados.php';

/**
 * Backend PHP.
 *
 * Mesma responsabilidade dos backends Python (linguagens/python/app.py), JavaScript
 * (linguagens/javascript/app.js), C e Java: busca, cadastro, edição e
 * exclusão. O roteador (js/backend/roteador.js) liga os botões da página
 * a estas ações quando PHP é a linguagem escolhida.
 *
 * Roda no navegador (PHP compilado para WebAssembly pelo php-wasm); o estado
 * abaixo persiste entre uma ação e outra.
 */
final class App
{
    private const ORDEM_PADRAO = 'nome_asc';

    /** Quando não é null, o botão salva alterações em vez de cadastrar. */
    private static ?int $idEmEdicao = null;

    private static ?BancoAmigos $banco = null;

    private static function banco(): BancoAmigos
    {
        return self::$banco ??= new BancoAmigos;
    }

    /** Um erro inesperado não pode derrubar o backend: vai para a tela. */
    private static function protegido(callable $acao): void
    {
        try {
            $acao();
        } catch (Throwable $erro) {
            Mensagens::exibir(Dom::elemento('mensagem-cadastro'), 'Erro inesperado: ' . $erro->getMessage());
        }
    }

    // ------------------------------------------------------------------
    // Callbacks dos botões Editar / Excluir
    // ------------------------------------------------------------------

    private static function criarCallbackExclusao(int $idAmigo, string $nome): Closure
    {
        return function ($evento = null) use ($idAmigo, $nome): void {
            self::protegido(function () use ($idAmigo, $nome): void {
                Modal::abrir($nome, function () use ($idAmigo, $nome): void {
                    self::excluir($idAmigo, $nome);
                });
            });
        };
    }

    private static function criarCallbackEdicao(int $idAmigo, string $nome, string $nascimento): Closure
    {
        return function ($evento = null) use ($idAmigo, $nome, $nascimento): void {
            self::protegido(function () use ($idAmigo, $nome, $nascimento): void {
                self::editar($idAmigo, $nome, $nascimento);
            });
        };
    }

    // ------------------------------------------------------------------
    // Edição
    // ------------------------------------------------------------------

    private static function editar(int $idAmigo, string $nome, string $nascimento): void
    {
        self::$idEmEdicao = $idAmigo;

        Formulario::preencher($nome, $nascimento);
    }

    private static function cancelarEdicao(): void
    {
        self::$idEmEdicao = null;

        Formulario::limpar();
        Mensagens::limparCadastro();
    }

    // ------------------------------------------------------------------
    // Cadastro, alteração e exclusão
    // ------------------------------------------------------------------

    private static function cadastrar(): void
    {
        $mensagem = Dom::elemento('mensagem-cadastro');

        $nome = Amigo::aparar((string) Dom::elemento('nome')->value);
        $nascimento = (string) Dom::elemento('nascimento')->value;

        $amigo = new Amigo(self::$idEmEdicao, $nome, $nascimento);

        $mensagem->replaceChildren();

        $erro = $amigo->validar();

        if ($erro !== null) {
            Mensagens::exibir($mensagem, $erro);

            return;
        }

        try {
            $editando = self::$idEmEdicao !== null;

            $resultado = $editando
                ? self::banco()->atualizar(self::$idEmEdicao, $nome, $nascimento)
                : self::banco()->inserir($nome, $nascimento);

            if ($resultado['status'] === 'DUPLICADO') {
                Mensagens::exibir($mensagem, 'Essa pessoa já está cadastrada.');

                return;
            }

            // Sai do modo de edição: sem isto, o próximo cadastro
            // sobrescreveria a pessoa que acabou de ser editada.
            self::$idEmEdicao = null;

            Formulario::limpar();

            Mensagens::exibir(
                $mensagem,
                $editando ? 'Alteração realizada com sucesso!' : 'Cadastro realizado com sucesso!'
            );

            self::atualizarLista();
        } catch (Throwable $erro) {
            Mensagens::exibir($mensagem, 'Erro ao cadastrar: ' . $erro->getMessage());
        }
    }

    public static function excluir(int $idAmigo, string $nome): void
    {
        $mensagem = Dom::elemento('mensagem-cadastro');

        try {
            $resultado = self::banco()->excluir($idAmigo);

            if ($resultado['status'] === 'EXCLUIDO') {
                // Se a pessoa excluída estava aberta para edição,
                // encerra a edição para não recriar nem alterar nada.
                if (self::$idEmEdicao === $idAmigo) {
                    self::cancelarEdicao();
                }

                Mensagens::exibir($mensagem, "{$nome} foi excluído com sucesso!");

                self::atualizarLista();
            }
        } catch (Throwable $erro) {
            Mensagens::exibir($mensagem, 'Erro ao excluir: ' . $erro->getMessage());
        }
    }

    // ------------------------------------------------------------------
    // Busca, filtros e ordenação
    // ------------------------------------------------------------------

    private static function executarBusca(
        string $busca,
        string $ordem = self::ORDEM_PADRAO,
        string $idadeMinima = '',
        string $idadeMaxima = '',
    ): void {
        try {
            $resultados = self::banco()->buscar($busca, $ordem, $idadeMinima, $idadeMaxima);

            Resultados::exibir(
                $resultados,
                $busca,
                fn (int $id, string $nome, string $nascimento): Closure => self::criarCallbackEdicao($id, $nome, $nascimento),
                fn (int $id, string $nome): Closure => self::criarCallbackExclusao($id, $nome),
                $idadeMinima !== '' || $idadeMaxima !== '',
            );
        } catch (Throwable $erro) {
            Mensagens::exibir(Dom::elemento('resultados'), 'Erro ao realizar a busca: ' . $erro->getMessage());
        }
    }

    /** Refaz a busca respeitando busca, ordem e filtros de idade atuais. */
    private static function atualizarLista(): void
    {
        $ordem = (string) Dom::elemento('ordem')->value;

        self::executarBusca(
            Amigo::aparar((string) Dom::elemento('busca')->value),
            $ordem !== '' ? $ordem : self::ORDEM_PADRAO,
            (string) Dom::elemento('idade_minima')->value,
            (string) Dom::elemento('idade_maxima')->value,
        );
    }

    private static function buscar(): void
    {
        Mensagens::limparCadastro();

        self::atualizarLista();
    }

    private static function listarTodos(): void
    {
        Dom::elemento('busca')->value = '';
        Dom::elemento('idade_minima')->value = '';
        Dom::elemento('idade_maxima')->value = '';

        self::atualizarLista();
    }

    private static function limparFiltros(): void
    {
        Mensagens::limparCadastro();

        Dom::elemento('busca')->value = '';
        Dom::elemento('idade_minima')->value = '';
        Dom::elemento('idade_maxima')->value = '';
        Dom::elemento('ordem')->value = self::ORDEM_PADRAO;

        self::atualizarLista();
    }

    // ------------------------------------------------------------------
    // Modal de exclusão
    // ------------------------------------------------------------------

    private static function escape(): void
    {
        if (Modal::aberto()) {
            Modal::cancelar();
        }
    }

    // ------------------------------------------------------------------
    // Contrato com o roteador
    // ------------------------------------------------------------------

    private static function ativar(): void
    {
        self::atualizarLista();
    }

    private static function desativar(): void
    {
        self::cancelarEdicao();

        Modal::fechar();
    }

    /**
     * Cria o objeto {nome, ativar, desativar, acoes} no formato do roteador
     * (veja js/backend/roteador.js). O carregador (js/backend/php/app.js)
     * o recolhe de `window.backendPhp` e o registra.
     */
    public static function registrar(): void
    {
        $janela = Dom::janela();

        $acoes = $janela->Object->create(null);

        $ligacoes = [
            'buscar' => fn () => self::buscar(),
            // Ordenar faz o mesmo que buscar: lê todos os campos da tela.
            'ordenar' => fn () => self::buscar(),
            'listar_todos' => fn () => self::listarTodos(),
            'limpar_filtros' => fn () => self::limparFiltros(),
            'cadastrar' => fn () => self::cadastrar(),
            'cancelar_edicao' => fn () => self::cancelarEdicao(),
            'confirmar_exclusao' => fn () => Modal::confirmar(),
            'cancelar_exclusao' => fn () => Modal::cancelar(),
            'escape' => fn () => self::escape(),
        ];

        foreach ($ligacoes as $nome => $acao) {
            $acoes->$nome = function ($evento = null) use ($acao): void {
                self::protegido($acao);
            };
        }

        $backend = $janela->Object->create(null);

        $backend->nome = 'php';
        $backend->ativar = function () { self::protegido(fn () => self::ativar()); };
        $backend->desativar = function () { self::protegido(fn () => self::desativar()); };
        $backend->acoes = $acoes;

        $janela->backendPhp = $backend;
    }
}

App::registrar();
