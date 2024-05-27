Netflix

Descrição

Este projeto consiste em uma página web inspirada no layout da Netflix, utilizando HTML, CSS e JavaScript. A página apresenta um cabeçalho com navegação, uma seção principal destacando um filme, e um carrossel de miniaturas de filmes. O design é responsivo, ajustando-se a diferentes tamanhos de tela.
Linguagens Utilizadas

    HTML: Para a estruturação da página.
    CSS: Para a estilização e layout responsivo.
    JavaScript: Para a funcionalidade do carrossel de filmes.

Estrutura HTML

    Tags Principais
        <!DOCTYPE html>: Define o documento como HTML5.
        <html lang="pt-br">: Define o idioma como português do Brasil.
        <head>: Contém metadados, links para arquivos CSS e o título da página.
        <body>: Contém o conteúdo visível da página, dividido em cabeçalho, seção principal e carrossel de filmes.

    Apresentação das Tags
        <header>: Cabeçalho da página com logotipo e navegação.
            <div class="container">: Container centralizado para o conteúdo do cabeçalho.
                <h2 class="logo">Netflix</h2>: Logotipo estilizado.
                <nav>: Navegação principal com links para diferentes seções.
        <main>: Seção principal destacando um filme.
            <div class="filme-principal">: Seção com informações sobre o filme principal.
                <h3 class="titulo">House of Cards</h3>: Título do filme.
                <p class="descricao">...texto...</p>: Descrição do filme.
                <div class="botoes">: Botões de ação.
                    <button class="botao">: Botão para assistir agora.
                    <button class="botao">: Botão para mais informações.
        <div class="carrosel-filmes">: Seção contendo o carrossel de miniaturas de filmes.
            <div class="owl-carousel owl-theme">: Carrossel estilizado com Owl Carousel.
                <div class="item">: Itens do carrossel com miniaturas de filmes.

Estilização CSS

    Classes e IDs Principais
        .container: Centraliza e organiza o conteúdo.
        .logo: Estilização do logotipo.
        .filme-principal: Estiliza a seção principal com o filme destacado.
        .titulo: Título do filme principal.
        .descricao: Descrição do filme principal.
        .botao: Estilização dos botões de ação.
        .box-filme: Estilização das miniaturas de filmes no carrossel.

    Apresentação das Classes e IDs
        :root: Define variáveis CSS para cores.
        *: Reseta margens e paddings.
        body: Estiliza o corpo da página com fundo e fontes.
        header .container: Alinha e espaça os itens do cabeçalho.
        .filme-principal: Define a imagem de fundo e o layout da seção principal.
        .botao: Estiliza os botões com transições de hover.
        .box-filme: Define o tamanho das miniaturas no carrossel.