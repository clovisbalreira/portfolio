Projeto de restaurante japonês

Projeto de página web estática para um restaurante japonês. A página é construída utilizando HTML para a estrutura e CSS para estilização e animações
Linguagens Utilizadas

    HTML: Para estruturação do conteúdo.
    CSS: Para estilização e animações.

Estrutura HTML

A estrutura do documento HTML é organizada com as seguintes tags principais:

    <!DOCTYPE html>: Declaração do tipo de documento.
    <html lang="pt-br">: Elemento raiz definindo o idioma da página.
    <head>: Contém metadados e links para recursos externos (CSS e fontes).
        <meta charset="UTF-8">: Define a codificação de caracteres.
        <meta name="viewport" content="width=device-width, initial-scale=1.0">: Configurações para responsividade.
        <title>: Título da página.
        <link rel="stylesheet" href="./css/style.css">: Link para o arquivo CSS externo.
        Fontes externas do Google Fonts.
    <body>: Contém o conteúdo visível da página.
        <div id="bg-image">a</div>: Div com imagem de fundo.
        <h1>Japanese <span>Food</span></h1>: Título principal com destaque.
        <p>: Parágrafo descritivo.
        <a href="https://api.whatsapp.com/send?phone=seunumerodetelefone&text=Oi quero fazer um pedido" target="_blank">Faça seu pedido</a>: Link para fazer pedidos via WhatsApp.

Classes e IDs no CSS

O CSS está localizado no arquivo ./css/style.css e utiliza várias classes e IDs para estilização:

    Seletores globais e básicos
        *: Reset de margens, preenchimentos e box-sizing.
        body: Estilização do corpo da página.
    Elementos específicos
        h1: Estilo para o título principal.
        h1 span: Cor diferente para a parte do título.
        p: Estilo para parágrafos.
        a: Estilo para links.
        a:hover: Estilo para links ao passar o mouse.
    IDs
        #bg-image: Estilização da imagem de fundo.
    Animações
        @keyframes appear: Definição de animação para aparecimento gradual.
        Aplicação de animação em h1, p, a.