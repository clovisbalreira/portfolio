Descrição do Projeto Apresentação

Este projeto é um portfólio pessoal que apresenta informações profissionais, habilidades e projetos do desenvolvedor. Destina-se a empregadores potenciais, colegas de profissão e ao público em geral interessado em conhecer o trabalho do desenvolvedor. O site é dividido em três seções principais: "Apresentação", "Links" e "Imagens", cada uma acessível através de sua respectiva página. Além disso, inclui uma seção de "Currículo" detalhada, que pode ser visualizada em diferentes idiomas, enriquecendo a experiência do usuário.

Tecnologias Utilizadas

    HTML5: Estruturação do conteúdo das páginas.
    CSS3: Estilização visual das páginas.
    JavaScript: Dinamização do conteúdo e interatividade.

Tags HTML Utilizadas

    <!DOCTYPE html>: Declaração do tipo de documento.
    <html>: Raiz do documento HTML.
    <head>: Contém metadados/dados de cabeçalho.
    <meta>: Metadados sobre o documento HTML.
    <link>: Relacionamento com a folha de estilos CSS.
    <script>: Inclusão de arquivos JavaScript.
    <title>: Título do documento.
    <body>: Corpo do documento, contendo todo o conteúdo visível.
    <header>, <main>, <footer>: Definem o cabeçalho, o conteúdo principal e o rodapé do documento, respectivamente.
    <div>: Define uma divisão ou seção.
    <p>: Define um parágrafo.
    <a>: Define um hiperlink.
    <svg>: Define gráficos vetoriais escaláveis.
    <img>: Incorpora uma imagem ao documento.
    <button>: Define um botão clicável.
    <nav>: Define um conjunto de links de navegação.

CSS Utilizado

Reset de Estilos

    *: Define que todas as propriedades de margem e preenchimento devem ser zeradas para todos os elementos HTML.

Estilos Gerais

    body: Aplica um fundo gradiente azul ao corpo da página.
    header, footer: Define um fundo semi-transparente azul para os cabeçalhos e rodapés das páginas, centraliza o conteúdo e adiciona um espaçamento interno.

Estilos Específicos

    #header-curriculo: Centraliza e alinha os itens dentro do cabeçalho específico para a página do currículo.
    main: Centraliza e organiza os elementos dentro do conteúdo principal da página.
    .star: Define a forma do elemento com base em um polígono, cria um efeito de estrela amarela com fundo amarelo e torna-o clicável.
    #links, #imagens, #formulario: Define a largura, altura, espaçamento e alinhamento para as seções específicas das páginas.
    footer a, a: Remove a decoração de links e define a cor do texto para preto, além de configurar o cursor para ser um ponteiro.

Estilos Responsivos

    @media: Aplica regras de estilo específicas para diferentes tamanhos de tela, ajustando margens, espaçamentos e layouts para garantir uma boa experiência do usuário em dispositivos de diferentes tamanhos.

Funções JavaScript

    Sua função links é uma maneira direta de adicionar ouvintes de eventos a elementos identificados por sua classe, que, ao clicar, navegarão para a URL especificada no quadro pai (a aba/janela atual, na maioria dos contextos). Sua função inicio configura esses ouvintes de eventos para elementos com as classes .star-1, .star-2 e .star-3, direcionando o navegador para links.html, curriculo.html e imagens.html, respectivamente.

    Essa abordagem é limpa e modular, facilitando a adição ou modificação de links associados a diferentes elementos apenas ajustando a função inicio ou adicionando mais chamadas à função links com diferentes parâmetros.

    Lembre-se de garantir que os elementos com essas classes existam no seu HTML e sejam destinados a agir como links ou botões. Se esses elementos não forem destinados a ser interagidos como links, considere revisar os nomes de suas classes ou a estrutura do seu JavaScript para refletir melhor seu propósito.

    Além disso, esteja ciente de que usar window.open(url, '_parent') é semelhante a definir window.location para a nova URL para fins de navegação dentro da mesma aba ou janela, especialmente porque você está especificando '_parent' como o alvo, o que se refere ao quadro pai do quadro atual. Se você não estiver lidando com frames ou iframes, isso efetivamente se comporta da mesma maneira que navegar diretamente para o link.

    Funções Auxiliares: Funções como titulo, subTitulo, h1, h4, divDadosPessoais, a, strong, p, empresas, experienciaProfissional, formacaoAcademica, objetivos, interesseProfissionais, competenciaTecnicas, idiomas, projeto e formacaoProfissional são funções auxiliares. Cada uma é responsável por criar elementos HTML específicos (por exemplo, títulos, parágrafos, links) ou seções (por exemplo, experiência profissional, formação acadêmica, idiomas) que compõem o CV.

    Funções Específicas de Idioma: As funções portugues, espanhol e ingles são responsáveis por anexar todo o conteúdo do CV a um elemento de seção nos respectivos idiomas. Eles usam as funções auxiliares para criar cada parte do CV e, em seguida, anexá-las para construir a estrutura completa do documento.

    Função mostrarDadosCurriculo: Esta é a função principal que controla qual versão do CV será exibida com base na seleção de idioma do usuário. Primeiro, limpa o conteúdo atual da seção do CV e, em seguida, chama uma das funções específicas de idioma (portugues, espanhol, ingles) para gerar e exibir o CV no idioma selecionado.

    Ouvintes de Evento: No final do script, ouvintes de evento são adicionados aos botões (ou outros elementos com os IDs 'portugal', 'espanha' e 'inglaterra'). Esses ouvintes chamam a função mostrarDadosCurriculo com o parâmetro de idioma apropriado quando clicados, fazendo com que o CV mude para o idioma selecionado.

No geral, este script é uma maneira dinâmica e flexível de apresentar um CV multilíngue em uma página da web, permitindo que os usuários alternem facilmente entre os idiomas.