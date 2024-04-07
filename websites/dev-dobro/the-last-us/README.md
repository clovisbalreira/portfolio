Projeto The Last of Us - Série: Apresentação Web

Este projeto é uma apresentação web dedicada à série "The Last of Us", produzida pela HBO, baseada na aclamada franquia de jogos de videogame com o mesmo nome, criada por Neil Druckmann. A página proporciona uma experiência visual através de um carrossel de imagens representativas da série, acompanhadas de uma breve descrição e links para redes sociais.
Características Principais

    Carrossel de Imagens: Exibição dinâmica das principais cenas e personagens da série, criando uma experiência imersiva para o usuário.
    Design Responsivo: Adaptável a diferentes tamanhos de tela, garantindo uma visualização otimizada em dispositivos móveis e desktops.
    Integração com Redes Sociais: Links diretos para GitHub e LinkedIn, promovendo a conexão entre o criador do projeto e a comunidade.

Linguagens Utilizadas

    HTML5: Estruturação do conteúdo e layout da página.
    CSS3: Estilização e design responsivo.
    JavaScript: Funcionalidades interativas, como a navegação no carrossel de imagens.

HTML: Principais Tags Utilizadas

    <main>: Agrupa o conteúdo principal da página.
    <div>: Utilizado para a estruturação do layout, como a área do carrossel e a seção de informações.
    <img>: Exibe as imagens representativas da série.
    <button>: Botões de navegação do carrossel.
    <aside>: Contém os links para redes sociais.
    <ul>, <li>, <a>: Estruturação da lista de ícones das redes sociais.

CSS: Classes e IDs Destacados

    Classes:
        .carrossel, .imagem, .ativa: Estilização e controle de exibição das imagens do carrossel.
        .conteudo, .informacoes, .descricao: Layout e estilização da seção de descrição da série.
        .botoes-carrossel, .botao, .selecionado: Design e interatividade dos botões do carrossel.
        .menu-lateral, .icone: Estilização do menu lateral e ícones de redes sociais.
    Media Queries: Implementação de design responsivo para adaptar o layout em diferentes tamanhos de tela (max-width: 1280px, 768px, 425px).

JavaScript: Funções Principais

    Navegação do Carrossel:
        desativarBotaoSelecionado(): Remove a classe de ativo do botão anteriormente selecionado.
        selecionarBotaoCarrossel(botao): Adiciona a classe de ativo ao botão clicado.
        esconderImagemAtiva(): Esconde a imagem atualmente ativa.
        mostrarImagemDeFundo(indice): Mostra a imagem correspondente ao botão clicado no carrossel.