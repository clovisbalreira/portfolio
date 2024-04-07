Projeto Pokedex Interativa

Descrição:
Este projeto é uma Pokedex interativa feita com HTML, CSS e JavaScript. Ela exibe uma lista de Pokémons com suas respectivas imagens, tipos e uma breve descrição. A interface permite a mudança de tema (claro/escuro) para uma melhor experiência do usuário.

Linguagens Utilizadas:

    HTML
    CSS
    JavaScript

Recursos HTML:

    <!DOCTYPE html>: Define o tipo do documento.
    <html>: Elemento raiz de um documento HTML.
    <head>: Contém metadados/informações para o documento.
    <body>: Contém o conteúdo visível da página.
    <header>: Representa um grupo de suporte introdutório ou navegação.
    <main>: Especifica o conteúdo principal do documento.
    <ul> e <li>: Usados para listar os Pokémons.
    <div>: Usado para agrupar conteúdo.
    <span>: Usado para colorir e estilizar textos.
    <img>: Usado para incorporar imagens.
    <p>: Usado para parágrafos de texto.
    <button>: Usado para interações do usuário.

CSS: Classes e IDs:

    .logo e .imagem-botao: Estilização da logo e do botão de mudança de tema.
    #botao-alterar-tema: Especifica o botão para alterar o tema.
    .listagem-pokemon: Estilo da lista de Pokémons.
    .cartao-pokemon: Estilo dos cartões individuais de cada Pokémon.
    .informacoes, .tipos, .descricao: Estilos para as informações dentro de cada cartão de Pokémon.
    .modo-escuro: Tema escuro para o site.

Funções JavaScript:

    Alteração de Tema: A função addEventListener está vinculada ao botão de alteração de tema. Quando clicado, verifica se o tema escuro está ativo. Se estiver, muda para o tema claro, e vice-versa, alterando também a imagem do botão.

Como Funciona:
A página inicial exibe uma série de cartões, cada um representando um Pokémon. Cada cartão mostra o nome do Pokémon, seu número na Pokedex, uma imagem animada, seus tipos (como grama, veneno, etc.) e uma breve descrição. Um botão no cabeçalho permite ao usuário alternar entre os temas claro e escuro, melhorando a acessibilidade e a experiência do usuário.

Como Utilizar:
Para interagir com a Pokedex, simplesmente navegue pelas listas de Pokémons. Para mudar o tema da página de claro para escuro ou vice-versa, clique no botão do sol/lua no cabeçalho.