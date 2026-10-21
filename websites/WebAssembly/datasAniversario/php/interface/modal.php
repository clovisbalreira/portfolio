<?php

declare(strict_types=1);

/** Modal de confirmação de exclusão. */
final class Modal
{
    private static bool $visivel = false;

    /** Ação a executar se o usuário confirmar a exclusão. */
    private static ?Closure $acaoPendente = null;

    public static function abrir(string $nome, Closure $aoConfirmar): void
    {
        self::$acaoPendente = $aoConfirmar;

        Dom::elemento('modal-mensagem')->textContent = "Tem certeza que deseja excluir {$nome}?";

        $modal = Dom::elemento('modal-exclusao');

        $modal->style->display = 'flex';
        $modal->setAttribute('aria-hidden', 'false');

        self::$visivel = true;

        Dom::elemento('botao-cancelar-exclusao')->focus();
    }

    public static function fechar(): void
    {
        self::$acaoPendente = null;
        self::$visivel = false;

        $modal = Dom::elemento('modal-exclusao');

        $modal->style->display = 'none';
        $modal->setAttribute('aria-hidden', 'true');
    }

    public static function aberto(): bool
    {
        return self::$visivel;
    }

    public static function confirmar(): void
    {
        $acao = self::$acaoPendente;

        self::fechar();

        if ($acao !== null) {
            $acao();
        }
    }

    public static function cancelar(): void
    {
        Mensagens::limparCadastro();

        self::fechar();
    }
}
