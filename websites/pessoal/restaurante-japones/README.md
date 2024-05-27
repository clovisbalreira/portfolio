Restaurante Japones

Este repositório contém o código fonte de um projeto web responsivo, desenvolvido para um restaurante japones. O projeto utiliza HTML, CSS e JavaScript para criar uma página web interativa e visualmente atraente, apresentando um cardápio de pratos japones e outras funcionalidades.

O objetivo deste projeto é criar uma página web responsiva para um restaurante japones, que inclui um cardápio dinâmico, uma galeria de fotos e uma navegação intuitiva. A página é projetada para oferecer uma experiência de usuário consistente em dispositivos de diferentes tamanhos.

Linguagens Utilizadas

    HTML: Estrutura básica da página e organização do conteúdo.
    CSS: Estilização e layout responsivo.
    JavaScript: Interatividade e manipulação dinâmica do DOM.

Estrutura do Projeto
Tags do HTML

    header: Contém a logo do restaurante e a navegação principal.
    nav: Menu de navegação com links para diferentes seções da página.
    main: Contém o conteúdo principal, como o cardápio e descrições dos pratos.
    section: Usado para diferentes seções da página, como o cardápio e fotos.
    footer: Contém informações de rodapé.

Classes e IDs do CSS

    .header-imagem: Define a altura das imagens no cabeçalho.
    .header-logo: Define o tamanho da logo no cabeçalho.
    .img-nav: Define o tamanho das imagens de navegação.
    .img-objeto: Estiliza as imagens dos produtos.
    #cardapio: Estiliza a seção do cardápio, organizando os itens em uma coluna.
    #produto, #fotos: Define o layout das seções de produtos e fotos em grid.
    @media: Media queries para responsividade, ajustando o layout para diferentes tamanhos de tela.

Funções do JavaScript

    adicionarFotos(id, pasta, array): Adiciona fotos dinamicamente a uma seção especificada da página.
    callBack(): Restaura as imagens de navegação ao estado original e chama a função mostrarSelecionado.
    mostrarSelecionado(): Atualiza as imagens de navegação para indicar a página atualmente selecionada.
    swapImage1(), swapImage2(), ... , swapImage7(): Funções para trocar as imagens de navegação ao passar o mouse sobre elas.
    Inicialização do Header e Navegação: Scripts para dinamicamente adicionar elementos de imagem e navegação ao cabeçalho.