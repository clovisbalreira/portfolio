Rockcast Player

O Rockcast Player é um player de música elegante e funcional construído com HTML, CSS e JavaScript, oferecendo uma experiência de usuário interativa e agradável. Com um design responsivo e fácil de usar, este player permite aos usuários controlar a reprodução de músicas, ajustar o volume e navegar entre as faixas facilmente. O projeto utiliza ícones do Material Design e o framework Materialize para uma interface limpa e moderna.
Tecnologias Utilizadas

    HTML5: Estrutura do player, incluindo controles de reprodução e informações da música atual.
    CSS3: Estilização personalizada do player, utilizando variáveis CSS, pseudo-elementos e importações de fontes e frameworks externos.
    JavaScript: Funcionalidades interativas, como controle de play/pause, ajuste de volume, mute e navegação entre faixas.

Recursos do HTML

    <!DOCTYPE html>: Declara o tipo de documento e a versão do HTML.
    <html>: Raiz do documento HTML.
    <head>: Contém metadados e links para CSS externo.
    <body>: Contém o conteúdo visível da página.
    <div>: Usada para agrupar conteúdo e/ou para estilização (com CSS).
    <h4>, <h5>: Representam cabeçalhos de diferentes níveis.
    <p>: Representa um parágrafo.
    <a>: Define um hiperlink.
    <input type="range">: Cria um controle deslizante que permite ao usuário especificar um valor numérico.

Estilização CSS

    IDs e Classes Importantes:
        #player: Estiliza o container principal do player.
        .card-image: Estiliza a imagem de fundo do player.
        #play-pause e #mute: Controlam os ícones de play/pause e mute, respectivamente.
        input[type="range"]: Customiza a barra de progresso da música e controle de volume.

Funções JavaScript

    Principais Funções:
        play(): Inicia a reprodução da música.
        pause(): Pausa a música.
        togglePlayPause(): Alterna entre play e pause.
        toggleMute(): Alterna o estado de mute.
        next(): Avança para a próxima faixa.
        setVolume(): Ajusta o volume.
        setSeek(): Define a posição atual da música.
        timeUpdate(): Atualiza o tempo atual da música na interface.
        update(): Atualiza as informações da faixa atual e prepara o player para reprodução.
        restart(): Reinicia a playlist do início.