<?php

declare(strict_types=1);

/** Formulário de cadastro: alterna entre "Cadastrar" e "Salvar alterações". */
final class Formulario
{
    private static function definirBotao(string $icone, string $titulo): void
    {
        $botao = Dom::elemento('botao-cadastrar');

        $botao->innerHTML = '<i class="' . $icone . '"></i>';

        $botao->setAttribute('title', $titulo);
        $botao->setAttribute('aria-label', $titulo);
    }

    public static function limpar(): void
    {
        Dom::elemento('nome')->value = '';
        Dom::elemento('nascimento')->value = '';

        self::definirBotao('fa-solid fa-plus', 'Cadastrar');

        Dom::elemento('botao-cancelar-edicao')->hidden = true;
    }

    public static function preencher(string $nome, string $nascimento): void
    {
        $campoNome = Dom::elemento('nome');

        $campoNome->value = $nome;
        Dom::elemento('nascimento')->value = $nascimento;

        self::definirBotao('fa-solid fa-floppy-disk', 'Salvar alterações');

        Dom::elemento('botao-cancelar-edicao')->hidden = false;

        $campoNome->focus();
    }
}
