Projeto Player de Música

Descrição:
Este projeto consiste em um player de música personalizável e responsivo, desenvolvido com HTML, CSS e JavaScript. O design foca na simplicidade e na eficiência, apresentando controles de reprodução intuitivos, exibição de capas de álbuns e informações sobre a faixa atual, como nome da música e artista. Além disso, o player suporta a troca de faixas com botões de avançar e retroceder, permitindo aos usuários explorar diferentes músicas com facilidade.

Linguagens Utilizadas:

    HTML
    CSS
    JavaScript

HTML: Tags Principais

    <!DOCTYPE html>
    <html>
    <head>
    <body>
    <div>
    <audio>
    <img>
    <h1>, <p>
    <div> para controles como play, pause, next e previous.

CSS: Classes e IDs

    IDs: #radioPlayer, #app, #player-1, #player-2, #player-3 - Utilizados para identificar elementos únicos como o player de áudio e cada player individualmente.
    Classes: .player, .wrapper, .info, .controls, .track-time, .track, .time - Utilizadas para estilizar e agrupar partes do player, como controles de reprodução, informação da faixa atual e a barra de progresso.

JavaScript: Funções Principais

    playRadio(): Responsável por iniciar a reprodução da faixa atual.
    pausaRadio(): Pausa a faixa que está sendo reproduzida.
    inicio(): Configura o player com as informações da faixa selecionada, como imagem, nome e cidade.
    Event listeners para os botões prev, play/pause e next, que permitem navegar entre as faixas disponíveis.

Funcionalidades:

    Autoplay inicial com a possibilidade de pausar e tocar manualmente.
    Navegação entre faixas disponíveis.
    Exibição dinâmica das informações de cada faixa, incluindo capa do álbum, nome da música e artista.
    Design responsivo que se adapta a diferentes tamanhos de tela.

Como Utilizar:
Para usar o player, simplesmente abra o arquivo index.html em um navegador. Os controles de reprodução estão intuitivamente dispostos na interface, permitindo uma navegação fácil entre as músicas disponíveis.

Este projeto é ideal para quem busca um template de player de música personalizável e fácil de integrar a outros projetos. Com um design limpo e funcionalidades básicas de um player, oferece uma ótima base para desenvolvimento e customização adicionais.