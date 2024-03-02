Projeto Botões Dinâmicos com Efeitos de Cursor

Descrição:
Este projeto demonstra a implementação de botões interativos com efeitos visuais e de cursor usando HTML, CSS e JavaScript. Os usuários podem interagir com os botões para ver mudanças em sua aparência e o comportamento do cursor, proporcionando uma experiência de usuário mais rica e interativa.

Linguagens Utilizadas:

    HTML
    CSS
    JavaScript

Recursos Externos:

    Fontes do Google (Inter e Roboto)
    Ícones da biblioteca Phosphor

HTML

Tags Utilizadas:

    <!DOCTYPE html>: Define o tipo de documento.
    <html>: Elemento raiz de um documento HTML.
    <head>: Contém metadados/informações para o documento.
    <link>: Usado para vincular a recursos externos como CSS e fontes.
    <meta>: Metadados sobre o HTML document.
    <title>: Título do documento.
    <body>: Contém o conteúdo do documento.
    <div>: Container para conteúdo de fluxo.
    <h1>: Cabeçalho de nível superior.
    <p>: Parágrafo.
    <button>: Representa um botão clicável.
    <i>: Ícone da biblioteca Phosphor.

CSS

Classes e IDs:

    #app: Estiliza o contêiner principal do aplicativo.
    .buttons: Estiliza a seção que contém os botões.
    .primary, .secondary, .tertiary: Estiliza os botões com diferentes estilos visuais.
    .loading: Aplica estilos e animações a um botão em estado de carregamento.
    .movable: Adiciona um cursor de movimento para indicar que o elemento pode ser movido.

Propriedades CSS Importantes:

    --bg-default e --bg-hover: Variáveis CSS para cores de fundo padrão e de hover dos botões.
    @keyframes spin: Define uma animação de giro para ícones dentro de botões em estado de carregamento.

JavaScript

Funções:

    loading(event): Altera o estado de um botão para "loading" quando clicado, modificando seu conteúdo HTML para incluir um ícone de carregamento e aplicando a classe .loading para ativar a animação.

Apresentação Visual

O projeto utiliza uma combinação de cores contrastantes e animações sutis para criar uma experiência de usuário envolvente. Os botões mudam de cor quando interagidos e exibem diferentes comportamentos de cursor (por exemplo, cursor: progress para carregamento e cursor: move para o botão móvel) para indicar sua funcionalidade.
Conclusão

Este projeto é um exemplo prático de como combinar HTML, CSS e JavaScript para criar componentes de interface ricos e interativos. É ideal para desenvolvedores procurando inspiração em UI/UX ou buscando entender melhor a interação entre as diferentes tecnologias web.