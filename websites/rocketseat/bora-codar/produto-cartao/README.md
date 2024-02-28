Projeto Visualizador de Produto com Animação

Descrição:
Este projeto é uma página web simples que permite aos usuários visualizar um produto (neste caso, um sofá) em duas formas: uma imagem estática e uma animação. O usuário pode alternar entre a imagem estática e a animação clicando em botões dedicados. O design é responsivo e utiliza uma paleta de cores suaves, proporcionando uma experiência de usuário agradável e acessível.

Linguagens Utilizadas:

    HTML5
    CSS3
    JavaScript

Recursos do HTML:

    <!DOCTYPE html>: Define o documento como HTML5.
    <html lang="pt-br">: Especifica o idioma da página.
    <head>: Contém metadados e links para fontes externas.
    <body>: Agrupa o conteúdo visível da página.
    <div>, <h1>, <h4>, <p>, <button>, <img>: Tags utilizadas para estruturar o conteúdo e a interface.

Classes e IDs do CSS:

    Classes: Não especificadas diretamente no HTML, mas o documento utiliza seletores de tag e IDs para estilização.
    IDs:
        #app: Estiliza o contêiner principal da aplicação.
        #product-image: Estiliza a seção de imagem do produto.
        #product-details: Estiliza a seção de detalhes do produto.
        #btn-360, #btn-close, #static, #animated: Controlam a visibilidade e estilização dos botões e das imagens.

Funcionalidades do JavaScript:

    toggle(): Função que alterna a classe animated no elemento <html>, o que, por sua vez, alterna a visibilidade dos elementos de imagem e botões para mostrar a animação do produto ou a imagem estática.

Como Utilizar:

    Visualização do Produto: Ao carregar a página, o usuário verá uma imagem estática do sofá e um botão para iniciar a animação.
    Animação do Produto: Clicando no botão de animação (ícone de 360), a imagem estática é substituída por uma animação do sofá, dando ao usuário uma visão mais dinâmica do produto.
    Retornar à Imagem Estática: Para voltar à visualização estática do produto, o usuário pode clicar no botão de fechar a animação.

Conclusão:

Este projeto demonstra o uso eficaz de HTML, CSS e JavaScript para criar uma experiência interativa de visualização de produtos. A implementação simples, mas poderosa, torna-o um excelente ponto de partida para projetos mais complexos de visualização de produtos.