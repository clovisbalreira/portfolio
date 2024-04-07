Projeto para Galeria de Personagens One Piece

Este projeto é uma galeria interativa dedicada aos personagens do popular anime "One Piece". Ele permite aos usuários visualizar informações detalhadas sobre alguns dos personagens mais icônicos da série, trocando entre eles por meio de botões dedicados. Desenvolvido com HTML, CSS e JavaScript, este projeto oferece uma experiência envolvente através de uma interface limpa e responsiva.
Tecnologias Utilizadas:

    HTML para estruturação da página.
    CSS para estilização, incluindo layouts responsivos adaptados para diferentes tamanhos de tela.
    JavaScript para interatividade, permitindo a troca entre os personagens ao clicar nos botões correspondentes.

Características Principais:

    Estrutura HTML:
        Uso de tags semânticas (<main>, <div>, <img>, <h2>, <p>) para uma melhor estruturação e acessibilidade.
        Aplicação de classes e IDs para referência CSS e JavaScript (class="personagem", id="chopper", etc.).

    Estilização CSS:
        Estilos globais, componentes e responsividade são separados em arquivos distintos (reset.css, estilos.css, responsivo.css) para melhor organização.
        Uso de variáveis CSS e media queries para garantir que o site seja responsivo e adaptável a diferentes dispositivos e tamanhos de tela.
        Animações sutis e transformações (ex.: transform: scale(1.2);) para melhorar a interação do usuário.

    Funcionalidades JavaScript:
        Manipulação do DOM para adicionar interatividade na seleção de personagens (document.querySelectorAll, addEventListener, classList.add).
        Funções dedicadas para tornar o código mais modular e reutilizável (ex.: desselecionarPersonagem(), desselecionarBotao()).

Como Usar:

    Seleção de Personagem: Clique nos botões localizados na lateral direita da tela para alternar entre os personagens. A informação do personagem selecionado será exibida no centro da tela.
    Visualização Responsiva: A interface do usuário se adapta a diferentes tamanhos de tela, garantindo uma boa visualização em dispositivos móveis e desktops.