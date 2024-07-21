Projeto Pet Live

O projeto Pet Live é um site desenvolvido com o objetivo de oferecer informações sobre serviços veterinários e produtos para pets. O site é intuitivo e responsivo, proporcionando uma experiência agradável e acessível aos usuários. O código foi desenvolvido utilizando HTML, CSS e JavaScript, combinando diferentes tecnologias para criar uma interface rica e funcional.
Linguagens Utilizadas

    HTML
    CSS
    JavaScript

Estrutura HTML

O HTML estrutura o conteúdo da página e define os elementos que serão estilizados e manipulados pelo CSS e JavaScript. Aqui estão as principais tags e seções:

    <header>: Contém a logo e a barra de navegação com links para as seções do site.
    <main>: Abriga o conteúdo principal dividido em quatro seções:
        <section id="inicio">: Seção inicial com uma imagem, título, parágrafo e botões de ação.
        <section id="clinica">: Informação sobre a clínica veterinária.
        <section id="farmacia">: Detalhes sobre o petshop e farmácia.
        <section id="duvidas">: Perguntas frequentes (FAQ).
    <footer>: Contém informações adicionais, links rápidos e formas de contato.
    <div id="copyright">: Créditos do desenvolvimento.

Apresentação CSS

O CSS é usado para estilizar a página, proporcionando uma aparência atraente e moderna. A seguir, são apresentadas algumas classes e IDs com suas respectivas funcionalidades:
Classes

    .paragrafo: Define o estilo dos parágrafos com espaçamento e altura da linha.
    .botao: Estiliza os botões principais com cores, espaçamento e bordas arredondadas.
    .botao-transparente: Variante dos botões com fundo transparente e cor de texto diferente.
    .absolute: Utilizada para posicionar elementos de forma absoluta.
    .duvida: Estilo para os itens de perguntas frequentes.
    .ativa: Aplica estilos adicionais aos itens de perguntas frequentes quando estão ativos.

IDs

    #inicio: Estilo da seção inicial com layout flexível.
    #clinica: Estilo da seção da clínica com layout flexível e espaçamento.
    #farmacia: Estilo da seção do petshop com texto centralizado.
    #duvidas: Estilo da seção de perguntas frequentes com layout flexível.
    #copyright: Estilo para a seção de créditos no rodapé.

Funcionalidades em JavaScript

O JavaScript é utilizado para adicionar interatividade à página. A seguir, é apresentada a função principal:

    Alternância de Visibilidade das Perguntas Frequentes: Adiciona e remove a classe .ativa nos itens de perguntas frequentes ao serem clicados, revelando ou ocultando a resposta.