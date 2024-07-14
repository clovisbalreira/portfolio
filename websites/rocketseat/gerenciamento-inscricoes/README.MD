Projeto: NLW UNITE - Gerenciamento de Inscrições

Descrição: NLW UNITE é um projeto desenvolvido para facilitar o gerenciamento de inscrições em eventos, permitindo o registro de participantes e a realização de check-in de maneira simples e eficiente. Utilizando tecnologias web modernas, o projeto oferece uma interface amigável para cadastro de participantes, exibição da lista de inscritos, e uma funcionalidade de check-in com apenas um clique.

Tecnologias Utilizadas:

    HTML5
    CSS3
    JavaScript
    Day.js (Biblioteca JavaScript para manipulação de datas)

Recursos do HTML:

    <header>: Utilizado para exibir o logo do evento.
    <form>: Formulário para inscrição de novos participantes.
    <fieldset> e <legend>: Para agrupar visualmente o formulário de inscrição.
    <input>: Campos para inserção do nome e email do participante.
    <button>: Botão para submeter o formulário de inscrição.
    <section>: Seção dedicada à lista de participantes inscritos.
    <table>, <thead>, <tbody>, <tr>, <th>, <td>: Estrutura para exibição da lista de participantes e suas respectivas informações.

Classes e IDs do CSS:

    .container: Aplica estilos ao container principal da página.
    .input-wrapper: Estilo aplicado aos contêineres dos campos de entrada do formulário.
    .lista-participantes: Estilo aplicado à seção que lista os participantes.
    IDs não são utilizados explicitamente neste código.

Funções JavaScript:

    criarNovoParticipante(): Cria uma nova linha na tabela de participantes baseado nas informações do participante inscrito.
    atualizarLista(): Atualiza o HTML da tabela de participantes com as informações mais recentes dos participantes.
    adicionarParticipante(): Captura as informações do formulário de inscrição, cria um novo participante, e atualiza a lista.
    fazerCheckIn(): Realiza o check-in de um participante específico, atualizando seu status na lista de participantes.

Como Usar:

    Para adicionar um participante, preencha o nome completo e o e-mail nos campos do formulário de inscrição e clique em "REALIZAR INSCRIÇÃO".
    A lista de participantes inscritos será atualizada automaticamente abaixo do formulário.
    Para realizar o check-in de um participante, clique no botão "Confirmar check-in" correspondente ao participante desejado na lista.

Observações:

    O projeto utiliza a biblioteca Day.js para manipular e formatar datas de inscrição e check-in.
    O uso de variáveis CSS promove a facilidade de manutenção e consistência do estilo visual.
    O projeto é responsivo, garantindo uma boa visualização em dispositivos de diferentes tamanhos.