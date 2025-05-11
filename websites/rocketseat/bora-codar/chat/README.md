Projeto de Chat Virtual

Descrição

Este projeto consiste em uma interface de chat virtual desenvolvida com HTML, CSS e JavaScript, apresentando funcionalidades básicas para a comunicação entre um atendente e um cliente. O objetivo é simular um chat de atendimento ao cliente com respostas pré-definidas e interatividade limitada. 
Abaixo, detalho os principais componentes do projeto:

Linguagens Utilizadas

    HTML: Estrutura do site.
    CSS: Estilização da interface.
    JavaScript: Lógica de interação e dinamismo no chat.

Tags HTML

    <!DOCTYPE html>: Declaração do tipo de documento.
    <html>: Elemento raiz de um documento HTML.
    <head>: Contém metadados/informações para o documento.
    <body>: Contém o conteúdo do documento, visível para o usuário.
    <div>: Usado para agrupar elementos e aplicar estilos CSS ou realizar operações usando JS.
    <img>: Representa uma imagem.
    <input>: Usado para criar controles interativos para formulários baseados na web.
    <button>: Representa um botão clicável.

Classes e IDs CSS

    IDs:
        #app: Container principal do chat.
        #top: Seção superior do chat que contém informações do usuário e botão para fechar o chat.
        #user-info: Contém a imagem e status do usuário.
        #messages: Área onde as mensagens são exibidas.
        #bottom: Seção inferior contendo o campo de entrada de texto e o botão de enviar.
    Classes:
        .status: Indica o status de conexão do usuário.
        .input-wrapper: Estilização do contêiner do campo de entrada de texto e botão enviar.
        .messages: Aplica estilos à área de mensagens.
        .message: Aplica estilos individuais às mensagens.

Funções JavaScript

    criarMensagem(dialogos): Cria e exibe as mensagens na tela a partir do array dialogos.
    atualizarMensagem(): Atualiza a exibição das mensagens quando uma nova mensagem é enviada.
    incluirValores(name, texto): Inclui novas mensagens ao array dialogos.
    pegarTexto(dialogos): Capta o texto inserido pelo usuário e atualiza o chat.
    realizarCompra(dialogos, texto), desconto(), compraEvetuada(), realizarCompraComDesconto(), finalizarCompra(): Funções para simular a interação de compra e descontos no chat.

Conclusão

Este projeto simula um sistema de chat simples, ideal para demonstrações de atendimento ao cliente ou para servir como base para sistemas mais complexos. É possível expandir suas funcionalidades para torná-lo mais interativo e adaptado a diferentes cenários de uso.