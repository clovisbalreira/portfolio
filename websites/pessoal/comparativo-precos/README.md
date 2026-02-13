# Comparativo de Preços

O Comparativo de Preços é uma aplicação web simples que permite aos usuários comparar preços de produtos em diferentes lojas. A aplicação foi construída com HTML, CSS e JavaScript puro, utilizando uma arquitetura baseada em MVC (Model-View-Controller) para organizar o código.

## Funcionalidades

-   **Adicionar Lojas**: Os usuários podem adicionar as lojas onde costumam fazer compras, informando o nome da loja, se oferece tele-entrega, o valor mínimo para tele-entrega e o custo da tele-entrega.
-   **Adicionar Compras**: Os usuários podem adicionar os produtos que desejam comprar, especificando o nome do produto, a quantidade desejada e os detalhes do produto em cada loja (descrição, tamanho, valor).
-   **Comparar Preços**: A aplicação exibe uma tabela comparativa com os preços dos produtos em cada loja, destacando o menor, o maior e os preços iguais.
-   **Analisar Compra**: Os usuários podem analisar a lista de compras e selecionar manualmente os produtos que desejam incluir na lista final.
-   **Lista de Compras Final**: A aplicação gera uma lista de compras final com os produtos mais baratos selecionados.
-   **Salvar e Carregar Dados**: A aplicação salva os dados das lojas e das compras no armazenamento local do navegador, permitindo que os usuários continuem de onde pararam.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

-   `index.html`: O arquivo HTML principal da aplicação.
-   `css/style.css`: A folha de estilos da aplicação.
-   `js/`: A pasta principal do código JavaScript, que está dividida em:
    -   `main.js`: O ponto de entrada da aplicação.
    -   `acao/`: Contém os módulos responsáveis por manipular as ações do usuário (cliques em botões e tabelas).
    -   `mvc/`: Contém a arquitetura MVC da aplicação:
        -   `controll/`: Os controladores, que gerenciam os dados da aplicação.
        -   `model/`: Os modelos, que definem a estrutura dos dados (Loja e Compra).
        -   `view/`: A view, que é responsável por exibir os dados na interface do usuário.
    -   `navegador/`: Contém os módulos para salvar e carregar os dados do armazenamento local do navegador.
    -   `telas/`: Contém os módulos responsáveis por criar os elementos da interface do usuário (tabelas, botões, inputs, etc.).
    -   `utils/`: Contém vários módulos de utilidades, como criar um modal, escolher compras, incluir lojas, etc.

## Como Usar

1.  Abra o arquivo `index.html` em seu navegador.
2.  Adicione as lojas onde você deseja comparar os preços.
3.  Adicione os produtos que você deseja comprar.
4.  A aplicação exibirá uma tabela comparativa com os preços dos produtos em cada loja.
5.  Clique em "Analisar Compra" para selecionar os produtos que você deseja incluir na lista final.
6.  Clique em "Finalizar Compra" para ver a lista de compras final com os produtos mais baratos.
7.  Clique em "Fazer Nova Pesquisa" para limpar todos os dados e começar de novo.

## Detalhes da Implementação

A aplicação utiliza JavaScript moderno (ES6 modules) e não possui dependências externas. O código é organizado em módulos para facilitar a manutenção e a reutilização. A arquitetura MVC ajuda a separar as preocupações e a manter o código limpo e organizado. A aplicação também é responsiva e se adapta a diferentes tamanhos de tela.
