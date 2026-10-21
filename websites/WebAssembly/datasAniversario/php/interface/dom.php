<?php

declare(strict_types=1);

/**
 * Acesso à página (window/document) pela ponte Vrzno do php-wasm.
 *
 * `new Vrzno` representa o escopo global do JavaScript: ler/escrever
 * propriedades e chamar métodos nele executa o código JavaScript
 * correspondente. A partir dele chegamos ao `window` e ao `document`.
 */
final class Dom
{
    /** O `window` da página. */
    private static $janela = null;

    public static function janela()
    {
        return self::$janela ??= (new Vrzno)->window;
    }

    public static function documento()
    {
        return self::janela()->document;
    }

    public static function elemento(string $id)
    {
        return self::documento()->getElementById($id);
    }

    /** Data local do navegador no formato AAAAMMDD (não a do servidor: PHP usa UTC). */
    public static function hoje(): int
    {
        return (int) vrzno_eval(
            '(() => { const d = new Date();'
            . ' return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate(); })()'
        );
    }
}
