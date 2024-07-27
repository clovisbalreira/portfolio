Descrição Projeto HTMX

Este projeto é um exemplo de como carregar conteúdo dinamicamente em uma página web utilizando JavaScript e HTML. Ele demonstra o uso de um botão para carregar conteúdo de um arquivo externo e inseri-lo na página sem recarregá-la.

Linguagens Utilizadas

    HTML: Estrutura da página web.
    JavaScript: Manipulação do DOM e carregamento de conteúdo dinâmico.
    CSS: Não há CSS incluído diretamente no exemplo, mas pode ser adicionado para estilizar os elementos.

Estrutura HTML

A estrutura do HTML é composta pelas seguintes tags:

    <!DOCTYPE html>: Define o tipo de documento como HTML5.
    <html lang="pt-br">: Define o idioma da página como português do Brasil.
    <head>: Contém metadados da página, como charset e viewport.
        <meta charset="UTF-8">: Define a codificação de caracteres como UTF-8.
        <meta name="viewport" content="width=device-width, initial-scale=1.0">: Configura a visualização para dispositivos móveis.
        <title>HTMX</title>: Define o título da página.
        <script defer src="https://unpkg.com/htmx.org@2.0.1" integrity="sha384-QWGpdj554B4ETpJJC9z+ZHJcA/i59TyjxEPXiiUgN2WmTyV5OEZWCD6gQhgkdpB/" crossorigin="anonymous"></script>: Inclui a biblioteca HTMX de forma assíncrona.
    <body>: Contém o corpo do documento.
        <button id="carregar-btn">Clique para carregar</button>: Botão que, ao ser clicado, carrega o conteúdo dinâmico.
        <div id="resultado"></div>: Div onde o conteúdo carregado será inserido.
        <script src="./js/script.js"></script>: Inclui o arquivo JavaScript que contém a lógica de carregamento de conteúdo.

Classes e IDs no CSS

No exemplo fornecido, temos os seguintes IDs usados para aplicar estilos CSS ou para manipulação via JavaScript:

    #carregar-btn: Botão que dispara o evento de carregamento de conteúdo.
    #resultado: Div onde o conteúdo carregado será inserido.

Funções JavaScript

A funcionalidade JavaScript é responsável por carregar o conteúdo dinamicamente. Aqui está a descrição da função:

    document.getElementById('carregar-btn').addEventListener('click', function() {...}): Adiciona um ouvinte de evento de clique ao botão com o ID carregar-btn.
        fetch('conteudo.html'): Faz uma requisição para o arquivo conteudo.html.
        .then(response => response.text()): Converte a resposta da requisição para texto.
        .then(data => { document.getElementById('resultado').innerHTML = data; }): Insere o conteúdo carregado na div com o ID resultado.
        .catch(error => { console.error('Erro ao carregar conteúdo:', error); }): Captura e exibe erros que possam ocorrer durante o carregamento do conteúdo.