<?php

declare(strict_types=1);

/** Lista de resultados: desenha os amigos e liga os botões Editar/Excluir. */
final class Resultados
{
    private static function mensagemSemResultados(string $busca, bool $filtroIdade)
    {
        if ($busca !== '' && $filtroIdade) {
            return Mensagens::criar([
                ['Não encontrei ninguém com ', false],
                [$busca, true],
                [' no nome nessa faixa de idade.', false],
            ]);
        }

        if ($busca !== '') {
            return Mensagens::criar([
                ['Não encontrei ninguém com ', false],
                [$busca, true],
                [' no nome.', false],
            ]);
        }

        if ($filtroIdade) {
            return Mensagens::criar([['Não encontrei ninguém nessa faixa de idade.', false]]);
        }

        return Mensagens::criar([['Não existem amigos cadastrados.', false]]);
    }

    private static function mensagemResumo(int $quantidade, string $busca, bool $filtroIdade)
    {
        $plural = $quantidade === 1 ? '' : 's';

        if ($busca !== '') {
            return Mensagens::criar([
                ['Ao todo encontrei ', false],
                [(string) $quantidade, true],
                [" amigo{$plural} com '", false],
                [$busca, true],
                ["'", false],
                [$filtroIdade ? ' nessa faixa de idade' : '', false],
                ['.', false],
            ]);
        }

        if ($filtroIdade) {
            return Mensagens::criar([
                ['Ao todo encontrei ', false],
                [(string) $quantidade, true],
                [" amigo{$plural} nessa faixa de idade.", false],
            ]);
        }

        return Mensagens::criar([
            ["Ao todo existem {$quantidade} amigo{$plural} cadastrado{$plural}.", false],
        ]);
    }

    private static function criarBotao(string $titulo, string $icone, Closure $callback)
    {
        $documento = Dom::documento();

        $botao = $documento->createElement('button');

        $botao->setAttribute('title', $titulo);
        $botao->setAttribute('aria-label', $titulo);

        $i = $documento->createElement('i');
        $i->className = $icone;

        $botao->appendChild($i);
        $botao->addEventListener('click', $callback);

        return $botao;
    }

    private static function criarResultado(Amigo $amigo, Closure $callbackEdicao, Closure $callbackExclusao)
    {
        $documento = Dom::documento();

        $resultado = $documento->createElement('div');
        $resultado->className = 'resultado';

        $nome = $documento->createElement('strong');
        $nome->textContent = $amigo->nome;

        $info = $documento->createElement('span');
        $info->textContent = $amigo->formatarNascimento();

        $resultado->appendChild($nome);
        $resultado->appendChild($documento->createElement('br'));
        $resultado->appendChild($info);
        $resultado->appendChild($documento->createElement('br'));

        $resultado->appendChild(self::criarBotao('Editar', 'fa-solid fa-pen', $callbackEdicao));
        $resultado->appendChild(self::criarBotao('Excluir', 'fa-solid fa-trash', $callbackExclusao));

        return $resultado;
    }

    /**
     * @param Amigo[] $resultados
     * @param callable(int,string,string):Closure $criarCallbackEdicao
     * @param callable(int,string):Closure $criarCallbackExclusao
     */
    public static function exibir(
        array $resultados,
        string $busca,
        callable $criarCallbackEdicao,
        callable $criarCallbackExclusao,
        bool $filtroIdade = false,
    ): void {
        $container = Dom::elemento('resultados');

        $container->replaceChildren();

        if ($resultados === []) {
            $container->appendChild(self::mensagemSemResultados($busca, $filtroIdade));

            return;
        }

        foreach ($resultados as $amigo) {
            $container->appendChild(self::criarResultado(
                $amigo,
                $criarCallbackEdicao($amigo->id, $amigo->nome, $amigo->nascimento),
                $criarCallbackExclusao($amigo->id, $amigo->nome),
            ));
        }

        $container->appendChild(self::mensagemResumo(count($resultados), $busca, $filtroIdade));
    }
}
