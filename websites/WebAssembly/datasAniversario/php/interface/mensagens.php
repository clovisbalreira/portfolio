<?php

declare(strict_types=1);

/** Mensagens exibidas na página. */
final class Mensagens
{
    /**
     * Monta <p class="mensagem"> com partes normais e em negrito.
     *
     * @param array<array{0:string,1:bool}> $partes cada parte é [texto, emNegrito]
     */
    public static function criar(array $partes)
    {
        $documento = Dom::documento();

        $paragrafo = $documento->createElement('p');
        $paragrafo->className = 'mensagem';

        foreach ($partes as [$texto, $negrito]) {
            if ($negrito) {
                $no = $documento->createElement('strong');
                $no->textContent = $texto;
            } else {
                $no = $documento->createTextNode($texto);
            }

            $paragrafo->appendChild($no);
        }

        return $paragrafo;
    }

    public static function exibir($elemento, string $texto): void
    {
        $elemento->replaceChildren(self::criar([[$texto, false]]));
    }

    public static function limparCadastro(): void
    {
        Dom::elemento('mensagem-cadastro')->replaceChildren();
    }
}
