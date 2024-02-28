Projeto Relógios

Este projeto apresenta um conjunto de relógios com funcionalidades digitais, analógicas e de cronômetro. Utilizando tecnologias web como HTML, CSS e JavaScript, o projeto oferece uma visão interativa e dinâmica do tempo, permitindo aos usuários visualizarem as horas em formatos diferentes e utilizarem um cronômetro com funções de início, pausa, marcação e reinício.
Tecnologias Utilizadas

    HTML5: Estruturação da página e definição dos elementos de relógio digital, analógico e cronômetro.
    CSS3: Estilização dos componentes da página, incluindo os relógios e botões de ação do cronômetro.
    JavaScript: Lógica de funcionamento dos relógios e interatividade do cronômetro.
    Font Awesome: Ícones para os botões do cronômetro, melhorando a usabilidade e a estética.

Tags HTML Principais

    <main>: Contém as seções principais do projeto (relógio digital, analógico e cronômetro).
    <section>: Define cada uma das áreas de funcionalidade (digital, analógico, cronômetro).
    <div>: Usado para agrupar elementos e componentes visuais específicos.
    <span>: Exibe as partes do relógio digital (horas, minutos, segundos).
    <button>: Botões de ação para o cronômetro (iniciar/pausar, marcar, reiniciar).

CSS: Principais Características

    Variáveis CSS: Definição de cores para facilitar a manutenção e a consistência do design.
    Flexbox: Utilizado para alinhar e distribuir os elementos da página de forma responsiva e adaptável.
    Transformações e Transições: Aplicadas aos ponteiros do relógio analógico para simular o movimento contínuo e aos botões para feedback visual interativo.

Funções JavaScript: Funcionamento

    newTime(): Atualiza o relógio digital a cada segundo, mostrando a hora atual.
    fixTime(time): Formata os números do tempo para garantir que sempre tenham dois dígitos.
    numberAnalog(): Adiciona os números ao redor do relógio analógico.
    getTime(): Obtém a hora atual, que é usada para calcular a posição dos ponteiros do relógio analógico.
    formatTime(time): Formata o tempo do cronômetro em horas, minutos, segundos e centésimos de segundo.
    addMarkToList(markIndex, markTime): Adiciona marcas de tempo à lista do cronômetro.
    markTime(): Marca um tempo no cronômetro e o adiciona à lista.
    toggleTime(): Inicia ou pausa o cronômetro, atualizando o ícone do botão conforme o estado.
    resetTimer(): Reinicia o cronômetro, limpando as marcas de tempo e redefinindo o tempo para zero.
    setTimer(time): Atualiza o display do cronômetro com o tempo formatado.