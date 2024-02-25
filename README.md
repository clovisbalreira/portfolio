Projeto Portfólio Pessoal

Este projeto consiste em um portfólio pessoal desenvolvido para exibir informações profissionais, projetos realizados e habilidades técnicas. Utilizando uma combinação de tecnologias web modernas, o projeto oferece uma interface elegante e responsiva, adaptável a diferentes dispositivos. A estrutura do projeto é delineada em HTML5, com a estilização realizada através de CSS3, e a interatividade proporcionada por JavaScript.
Tecnologias Utilizadas

    HTML5: Estrutura o conteúdo e layout da página.
    CSS3: Responsável pelo estilo visual, incluindo cores, tipografia, e layout responsivo.
    JavaScript: Adiciona interatividade ao portfólio, permitindo a manipulação dinâmica dos elementos da página.

Tags HTML Principais

    <!DOCTYPE html>: Define o tipo de documento como HTML5.
    <html>: Elemento raiz de um documento HTML.
    <head>: Contém metadados/informações para o documento.
    <body>: Representa o conteúdo principal do documento HTML.
    <header>, <main>, <footer>: Estruturam as seções principais da página.
    <img>: Incorpora uma imagem no documento.
    <a>: Define um hiperlink.

CSS: Classes e Seletores Principais

    .light: Possivelmente destinada a definir o tema claro para a página.
    :root: Define variáveis CSS globais (ex: --azul para cor).
    *: Aplica estilos de forma global (reset básico de margens, padding e box-sizing).
    .dados, .redes-sociais: Estilizam as seções de informações pessoais e links de redes sociais.
    header, footer: Definem o estilo das seções de cabeçalho e rodapé.
    @media: Regras de media query para responsividade em diferentes tamanhos de tela.

JavaScript: Funções e Variáveis

    criarSection(titulo, dados): Cria dinamicamente seções no <main> com base em dados fornecidos (ex: linguagens, instrutores, escolas), exibindo apenas os itens com status true.
    pastasImagens(titulo, imagem): Determina o caminho das imagens a serem usadas baseando-se no título da seção. Esta função parece incompleta na descrição fornecida.

Como Funcionam as Funções JavaScript

    criarSection(titulo, dados): Recebe um título (string) e um array de dados. Filtra os dados pelo status true e, se houver elementos filtrados, cria uma seção no <main> com um <h2> para o título e um <section> contendo um <button> para cada item filtrado, incluindo um <h3> e <img> para nome e imagem, respectivamente.

    pastasImagens(titulo, imagem): A função deveria definir o caminho da pasta baseando-se no título da seção e o nome da imagem fornecido. Contudo, a descrição termina abruptamente, sugerindo que a função calcula o diretório da imagem com base no tipo de conteúdo (Linguagens, Instrutores, Escolas) e o nome da imagem.

    Este projeto é um exemplo de como integrar tecnologias web fundamentais para criar uma experiência de usuário rica e responsiva. Ideal para desenvolvedores que desejam demonstrar suas habilidades e projetos de maneira profissional e atraente.