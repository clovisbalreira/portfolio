# Votos: Análise Parlamentar Personalizada

Este projeto oferece uma plataforma interativa para que você possa explorar e analisar o cenário político brasileiro de forma personalizada. Com ele, você pode selecionar deputados, partidos e leis de seu interesse, configurar suas preferências e realizar análises comparativas.

## Funcionalidades Principais

*   **Seleção de Deputados:** Escolha os deputados que deseja acompanhar e analisar.
*   **Seleção de Partidos:** Filtre e selecione os partidos políticos para uma análise aprofundada.
*   **Seleção de Leis:** Explore as leis em tramitação ou já aprovadas e veja como elas se relacionam com os deputados e partidos selecionados.
*   **Configurações Personalizadas:** Quandos deputados, partidos e leis que pode analizar.
*   **Análise Comparativa:** Com base nas suas seleções, o sistema permite que você faça uma análise detalhada sobre o desempenho e alinhamento do seu deputado e partido de interesse, comparando-os com outros ou com suas próprias expectativas.

## Tecnologias Utilizadas

*   HTML5
*   CSS3
*   JavaScript

## Estrutura do Projeto

O projeto segue uma estrutura organizada para facilitar o desenvolvimento e a manutenção:

*   `index.html`: A página principal da aplicação.
*   `css/`: Contém os arquivos de estilo (`estilos.css`).
*   `img/`: Armazena imagens, incluindo bandeiras de estados e logos de partidos.
*   `js/`: Contém toda a lógica JavaScript, dividida em módulos:
    *   `api/`: Módulos para interação com APIs externas (buscar deputados, estados, leis, partidos).
    *   `mvc/`: Implementação do padrão Model-View-Controller para organizar a lógica da aplicação.
        *   `controll/`: Lógica de controle para gerenciar interações e dados.
        *   `model/`: Definição dos modelos de dados (Configuracao, Deputado, EscolhasUsuario, etc.).
        *   `view/`: Funções para renderizar a interface do usuário.
    *   `utils/`: Funções utilitárias e helpers.
