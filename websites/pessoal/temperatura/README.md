Clima Agora

Este projeto é uma aplicação web que exibe informações climáticas de uma cidade específica. Ele foi desenvolvido utilizando HTML, CSS e JavaScript.
Descrição

A aplicação permite que o usuário insira o nome de uma cidade e visualize dados climáticos como temperatura, condições do tempo, umidade e velocidade do vento. Os dados são obtidos através da API do OpenWeatherMap.
Linguagens Utilizadas

    HTML
    CSS
    JavaScript

Estrutura HTML

O HTML da aplicação é responsável por estruturar os elementos da interface do usuário. Aqui está um resumo das principais tags utilizadas:

    <div class="container">: Contém toda a aplicação.
    <div class="form">: Contém o formulário de entrada de dados.
    <input type="text" id="city-input">: Campo de texto onde o usuário digita o nome da cidade.
    <button id="search" onclick="apertou()">: Botão para iniciar a busca pelos dados climáticos.
    <div id="weather-data" class="hide">: Contém os dados climáticos que são exibidos após a busca.

Estilos CSS

O CSS define o estilo visual da aplicação, utilizando classes e IDs para aplicar estilos específicos. Aqui estão algumas das principais classes e IDs utilizados:
Classes

    .container: Define o contêiner principal da aplicação, incluindo fundo, sombra e espaçamento.
    .form: Estiliza o formulário de entrada de dados.
    .form-input-container: Define o layout flexível para o campo de texto e o botão de busca.
    .hide: Esconde elementos, usada para ocultar os dados climáticos até que sejam buscados.

IDs

    #city-input: Estiliza o campo de texto para entrada do nome da cidade.
    #search: Estiliza o botão de busca.
    #weather-data: Define a aparência da seção de dados climáticos.
    #description-container: Estiliza o contêiner das descrições do clima.
    #details-container: Estiliza o contêiner que contém detalhes adicionais como umidade e velocidade do vento.

Funções JavaScript

O JavaScript adiciona a funcionalidade à aplicação, manipulando eventos e interagindo com a API do OpenWeatherMap. Aqui estão as principais funções:

    getWeatherData: Função assíncrona que busca os dados climáticos da API do OpenWeatherMap.
    showWeatherData: Função assíncrona que exibe os dados climáticos na interface do usuário.
    apertou: Função chamada ao clicar no botão de busca ou pressionar Enter no campo de texto, que inicia o processo de busca e exibição dos dados.
    DOMContentLoaded: Evento que adiciona um listener ao campo de texto para detectar a tecla Enter e acionar a busca.