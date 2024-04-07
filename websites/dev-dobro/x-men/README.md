Projeto X-men

Descrição:
Este projeto é uma aplicação web interativa onde os usuários podem visualizar e selecionar personagens dos X-men para ver detalhes específicos, como nome, descrição e habilidades. A seleção do personagem é feita por meio de um efeito de hover, e as informações do personagem escolhido são exibidas centralmente na tela. O design é responsivo, garantindo uma boa usabilidade em dispositivos móveis e desktops.

Linguagens Utilizadas:

    HTML5
    CSS3
    JavaScript

HTML:

    Estrutura básica com <!DOCTYPE html>, <html>, <head>, e <body>.
    Uso de elementos semânticos como <header>, <main>, <section>, e <ul>.
    Classes e IDs para estilização e manipulação via JavaScript.

Tags Principais:

    <header>: Contém o logo dos X-men.
    <main>: Inclui duas seções principais – uma lista de personagens e a exibição do personagem selecionado.
    <section class="personagens">: Lista todos os personagens disponíveis.
    <section class="personagem-selecionado">: Exibe o personagem selecionado com uma imagem maior e detalhes.

CSS:

    Utilização de Flexbox para layouts responsivos.
    Emprego de @media queries para adaptar o layout a diferentes tamanhos de tela.
    Uso de variáveis CSS para cores e fontes, facilitando manutenção e alterações de tema.
    Transições e sombras para melhorar a interatividade e feedback visual.

Classes e IDs Principais:

    .logo: Estiliza o logo dos X-men no cabeçalho.
    .selecao-de-personagens: Estiliza a seção que contém a lista de personagens e a visualização do personagem selecionado.
    .personagem: Aplica estilos a cada personagem listado.
    .selecionado: Destaca o personagem atualmente selecionado.
    .personagem-grande: Estiliza a imagem do personagem selecionado mostrado em destaque.
    #nome-personagem, #descricao-personagem: IDs utilizados para dinamicamente atualizar o nome e a descrição do personagem selecionado.

JavaScript:

    Seleção e manipulação do DOM para interatividade do usuário.
    Event listeners para capturar ações do usuário (como mouse hover) e atualizar a UI correspondente.

Funções Principais:

    adicionarSelecaoDoPersonagem(): Adiciona a classe .selecionado ao personagem sob o mouse.
    alterarDescricaoPersonagem(), alterarNomePersonagemSelecionado(): Atualiza a descrição e o nome do personagem na visualização destacada.
    alterarImagemPersonagemSelecionado(): Muda a imagem para o personagem selecionado.
    removerSelecaoDoPersonagem(): Remove a seleção visual de qualquer personagem previamente selecionado.

Instruções de Uso:
Para utilizar a aplicação, simplesmente passe o mouse sobre o personagem de interesse na lista. A imagem, nome e descrição do personagem serão atualizados automaticamente na seção de visualização destacada. A interface é intuitiva e projetada para fornecer uma experiência fluida em diferentes dispositivos.