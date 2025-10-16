# Ranking CPF 

Apaixonado por futebol e programação? Unindo essas duas paixões, desenvolvi o "Ranking CPF",  uma aplicação web que explora o histórico de
campeonatos de futebol no Brasil.
O projeto permite visualizar de forma interativa o ranking da C.B.F. por clubes e estados, com a possibilidade de filtrar os resultados por 
ano, trazendo uma perspectiva interessante sobre o desempenho das equipes ao longo do tempo.
Para a construção, utilizei HTML, CSS e JavaScript puro, estruturando o código com o padrão MVC (Model-View-Controller) para uma melhor   
organização e manutenibilidade.
Foi um ótimo exercício para aprimorar minhas habilidades em manipulação do DOM, lógica de programação e organização de projetos front-end.

## Funcionalidades

*   Visualizar o ranking de clubes por campeonato.
*   Visualizar o ranking de estados por campeonato.
*   Filtrar o ranking por ano.
*   Selecionar clube e estado.

## Tecnologias Utilizadas

*   HTML
*   CSS
*   JavaScript

## Estrutura do Projeto

```
├───index.html
├───css\
│   └───style.css
└───js\
    ├───main.js
    ├───mvc\
    │   ├───controll\
    │   │   ├───campeoes.js
    │   │   ├───campeonatos.js
    │   │   ├───clubes.js
    │   │   ├───estados.js
    │   │   └───selects.js
    │   ├───model\
    │   │   ├───Campeao.js
    │   │   ├───Campeoanato.js
    │   │   ├───Clube.js
    │   │   ├───Estado.js
    │   │   └───Select.js
    │   └───view\
    │       ├───mostraRankingrCampeonatoEstados.js
    │       ├───mostrarRankingCampeonatoClubes.js
    │       ├───mostrarRankingClubes.js
    │       └───mostrarRankingEstados.js
    └───utils\
        ├───atualizarAno.js
        ├───atualizarClube.js
        ├───atualizarEstado.js
        ├───button.js
        ├───criarRankingClubes.js
        ├───criarRankingEstados.js
        ├───inicio.js
        ├───inputSomar.js
        ├───selectAno.js
        ├───selectClube.js
        └───selectEstado.js
```
