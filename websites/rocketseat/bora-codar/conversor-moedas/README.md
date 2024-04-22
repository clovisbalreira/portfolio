Projeto Conversor de Moedas Interativo

Descrição:

Este aplicativo web de conversor de moedas dinâmico que permite aos usuários converter valores entre diferentes moedas com base nas taxas de câmbio atuais. O projeto é integrado com APIs externas para buscar informações atualizadas sobre moedas e suas respectivas taxas de câmbio.

Características Principais:

    Conversão de Moedas: Permite aos usuários converter montantes entre uma variedade de moedas globais.
    Visualização de Taxas de Câmbio: Exibe um gráfico de taxas de câmbio históricas para diferentes períodos selecionados pelos usuários.

Linguagens Utilizadas:

    HTML5: Estrutura básica da página web.
    CSS3: Estilização e design responsivo da aplicação.
    JavaScript: Lógica de funcionamento do conversor, manipulação de eventos e integração com APIs externas.

Tags HTML Principais:

    <main>, <section>: Usadas para estruturar as principais áreas do conteúdo.
    <div>, <h2>, <button>: Utilizados para a definição de divisões, títulos e botões interativos.

Classes e IDs CSS Relevantes:

    Classes:
        .conversor e .cambio: Diferenciam as seções de conversão e visualização de câmbio.
        .wrapper e .money-wrapper: Estilização dos contêineres que encapsulam os elementos de entrada e saída da conversão.
        .chart-controls: Estilo aplicado aos controles do gráfico de câmbio.
    IDs:
        #chart: Identificador do elemento que hospeda o gráfico de taxas de câmbio.

Funções JavaScript Destacadas:

    pegarMoeda(): Busca a lista de moedas disponíveis através de uma API externa.
    pegarCotacao(): Obtém a cotação histórica de uma moeda específica para o intervalo de tempo definido.
    contacaoMoeda(): Coordena a obtenção de dados e atualiza a interface do usuário conforme necessário.
    trocarMoeda(): Manipula a seleção e troca de moedas entre os campos de entrada.
    trocarBandeiras(): Auxilia na alteração das bandeiras dos países conforme a seleção da moeda.