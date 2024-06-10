Descrição do Projeto

Este projeto, desenvolvido X-DEVS, é uma página web interativa que apresenta personagens fictícios de desenvolvedores, cada um com suas próprias características e histórias. A interface permite que os usuários naveguem pelos cartões dos personagens utilizando botões de navegação.
Linguagens Utilizadas

    HTML: Estruturação do conteúdo da página.
    CSS: Estilização e layout da página.
    JavaScript: Funcionalidade de navegação interativa.

Estrutura HTML

    Tags Principais:
        <!DOCTYPE html>: Define o documento como HTML5.
        <html lang="pt-BR">: Define o idioma da página como português do Brasil.
        <head>: Contém metadados e links para estilos.
            <meta charset="UTF-8">: Define a codificação de caracteres.
            <meta name="viewport" content="width=device-width, initial-scale=1.0">: Configura a visualização em dispositivos móveis.
            <title>: Título da página.
            <link rel="stylesheet" href="src/css/reset.css">: Reseta estilos padrão.
            <link rel="stylesheet" href="src/css/estilos.css">: Estilos personalizados.
            <link rel="stylesheet" href="src/css/responsivo.css">: Estilos responsivos.
        <body>: Contém o conteúdo visível da página.
            <header class="cabecalho">: Cabeçalho com título.
            <main class="personagens-slider">: Contém a lista de personagens e botões de navegação.
                <button class="btn-seta btn-voltar" id="btn-voltar">: Botão de voltar.
                <ul class="lista-personagens">: Lista de personagens.
                    <li class="cartao selecionado fundo-1">: Cartão de personagem (exemplo).
                        <h2 class="nome">: Nome do personagem.
                        <img class="imagem-personagem" src="src/imagens/seuclope.png" alt="Seu Clope">: Imagem do personagem.
                        <div class="descricao">: Descrição do personagem.
                            <h3 class="titulo">: Título da descrição.
                            <p class="texto">: Texto da descrição.
                <button class="btn-seta" id="btn-avancar">: Botão de avançar.

Classes e IDs CSS

    Classes:
        .cabecalho: Estilização do cabeçalho.
        .titulo: Estilização do título.
        .personagens-slider: Estilização do container principal.
        .lista-personagens: Estilização da lista de personagens.
        .btn-seta: Estilização dos botões de navegação.
        .btn-voltar: Estilização específica do botão de voltar.
        .cartao: Estilização dos cartões de personagens.
        .nome: Estilização dos nomes dos personagens.
        .descricao: Estilização da descrição dos personagens.
        .selecionado: Classe aplicada ao cartão atualmente visível.
        .fundo-1, .fundo-2, .fundo-3, .fundo-4, .fundo-5, .fundo-6: Estilização de fundos específicos dos cartões.

    IDs:
        #btn-voltar: Botão de voltar.
        #btn-avancar: Botão de avançar.

Funções JavaScript
    Função para Esconder Cartão Selecionado
    Função para Mostrar Cartão
    Função para Visibilidade de Botões
    Evento de Click no Botão Avançar
    Evento de Click no Botão Voltar
