Descrição Casa do Dragão

Este projeto é uma aplicação web simples que apresenta um carrossel de imagens e informações sobre dragões do universo de Game of Thrones. Ao clicar nos botões do carrossel, a imagem e as informações sobre cada dragão são atualizadas dinamicamente.
Linguagens Utilizadas

    HTML: Estrutura da página web.
    CSS: Estilização da interface e layout responsivo.
    JavaScript: Interatividade e manipulação do DOM.

Estrutura HTML

A estrutura HTML do projeto é composta pelas seguintes tags:

    <!DOCTYPE html>: Define o tipo de documento como HTML5.
    <html lang="pt-br">: Define o idioma da página como português do Brasil.
    <head>: Contém metadados e links para estilos externos e fontes.
        <meta charset="UTF-8">: Define a codificação de caracteres como UTF-8.
        <meta http-equiv="X-UA-Compatible" content="IE=edge">: Garante a compatibilidade com versões antigas do IE.
        <meta name="viewport" content="width=device-width, initial-scale=1.0">: Configura a visualização para dispositivos móveis.
        <title>Casa do dragão</title>: Define o título da página.
        Links para fontes do Google e arquivos CSS para estilização.
    <body>: Contém o corpo do documento.
        <main>: Elemento principal que envolve o carrossel de imagens e as informações.
            <div class="carrossel">: Contém as imagens do carrossel.
                <img class="imagem ativa" src="./src/imagens/balerion.png" alt="Dragão Balerion">: Exibe a imagem ativa do carrossel.
            <div class="conteudo">: Contém as informações sobre os dragões.
                <div class="informacoes ativa">: Exibe as informações ativas sobre o dragão.
                    <h1>Balerion</h1>: Nome do dragão.
                    <p class="descricao">Balerion, chamado de Terror Negro...</p>: Descrição do dragão.
                <div class="botoes-carrossel">: Botões de navegação do carrossel.
                    <button class="botao selecionado"></button>: Botão selecionado no carrossel.

Estilização com CSS

O projeto utiliza diversas classes e IDs para aplicar estilos CSS, incluindo:

    body: Define o fundo, fonte e largura máxima da página.
    @font-face: Importa uma fonte personalizada para o projeto.
    .carrossel: Define a posição e o tamanho das imagens do carrossel.
    .informacoes: Estiliza as informações exibidas sobre os dragões.
        .informacoes.ativa: Exibe as informações ativas.
    .conteudo: Configura o layout e a disposição dos elementos na página.
    .botoes-carrossel: Estiliza e posiciona os botões de navegação do carrossel.
    .imagem: Define o tamanho, ajuste e animação das imagens.
        .imagem.ativa: Exibe a imagem ativa no carrossel.
    @media: Define regras de estilo para diferentes tamanhos de tela, garantindo que o layout seja responsivo.

Funções JavaScript

A interatividade do carrossel é gerida por um script JavaScript que manipula o DOM:

    Seleção de Elementos:
        const botoesCarrossel = document.querySelectorAll('.botao');: Seleciona todos os botões do carrossel.
        const imagens = document.querySelectorAll('.imagem');: Seleciona todas as imagens do carrossel.
        const descricoes = document.querySelectorAll('.informacoes');: Seleciona todas as descrições dos dragões.

    Manipulação de Eventos:
        botoesCarrossel.forEach((botao, indice) => { ... }): Adiciona um ouvinte de evento a cada botão do carrossel.
            botao.addEventListener('click', () => { ... }): Define a função a ser executada ao clicar no botão.
            .classList.remove('selecionado');: Remove a classe selecionado do botão atual.
            .classList.add('ativa');: Adiciona a classe ativa à imagem e descrição correspondentes ao botão clicado.