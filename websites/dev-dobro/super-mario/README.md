Projeto Super Mario Bros - O Filme: Site Oficial

Este projeto de código aberto é um site dedicado ao filme "Super Mario Bros". Utiliza tecnologias web modernas para oferecer uma experiência envolvente aos usuários, incluindo um vídeo de fundo automático, galeria de imagens, informações sobre o filme e um trailer interativo.
Tecnologias Utilizadas

    HTML5
    CSS3
    JavaScript

Funcionalidades

    Vídeo de Fundo: Um loop de vídeo do universo Mario para imersão e engajamento.
    Menu Navegável: Facilita o acesso a diferentes seções do site.
    Modal de Trailer: Permite que os usuários assistam ao trailer oficial diretamente no site.

Tags HTML Importantes

    <video>: Utilizado para o fundo do vídeo.
    <header>: Contém o cabeçalho do site.
    <main>: O conteúdo principal do site, incluindo informações do filme e o trailer.
    <iframe>: Para incorporar o trailer do YouTube dentro do modal.

Classes e IDs CSS Relevantes
Classes

    .fundo-video: Estiliza o fundo de vídeo.
    .cabecalho: Estiliza o cabeçalho do site.
    .menu: Utilizado para o menu de navegação.
    .modal: Controla a exibição do modal de trailer.
    .botao-trailer: Estilo do botão que ativa o modal do trailer.

IDs

    #video: Identificador único para o iframe do trailer.

Funções JavaScript

    alterar(): Alterna a exibição do modal de trailer.
    Event Listeners para .botao-trailer e .fechar-modal: Ativam a função alterar() quando clicados.

Responsividade

O site é totalmente responsivo, adaptando-se a diferentes tamanhos de tela, de desktops a dispositivos móveis. Isso é conseguido através do uso de media queries no CSS, ajustando layout e elementos visuais conforme necessário.