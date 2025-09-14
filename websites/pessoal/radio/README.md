Projeto Rádio online

Este projeto de rádio online fictícia permite que usuários escutem as faixas background-music-instrumental-207886 e station-radio-238854, explorem a programação completa, conheçam locutores e apresentadores, façam pedidos de músicas e leiam posts/novidades. Além das funcionalidades básicas, a versão estendida inclui perfis detalhados de locutores, programas e autores de posts (escritores). Os nomes dos locutores, programas e autores são fictícios — gerados aleatoriamente com o metodo Math.random() — e as fotos de perfil são carregadas dinamicamente a partir da API externa https://randomuser.me/api/portraits/, garantindo imagens realistas sem precisar de um banco de imagens próprio, com resposibilidade e espaços para a publicidade.

Linguagens:

    HTML: Utilizado para estruturar a interface do usuário, definindo os elementos de página, como botões, formulários, tabelas e divs.

    CSS: Responsável pela estilização da página, incluindo a definição de cores, fontes, tamanhos e layout para garantir uma apresentação visual atraente e coesa.

    JavaScript: Implementa a lógica de interação do usuário, como reprodução de áudio, manipulação de eventos de clique, atualização dinâmica de conteúdo e interação com APIs externas.

Tags HTML:

    <div>: Utilizada para agrupar e estruturar diferentes elementos da página, facilitando a organização do layout e permitindo a estilização por meio de CSS.

    <button>: Empregada para criar botões interativos que os usuários podem clicar para executar ações específicas, como reproduzir ou pausar a rádio.

    <select>: Utilizada para criar menus suspensos que permitem aos usuários selecionar opções, como países, estados e cidades, em um formulário.

Classes e IDs CSS:

    Classes: São usadas para aplicar estilos a um ou mais elementos HTML que compartilham características semelhantes. Por exemplo, a classe "button-radios" é atribuída aos botões que representam diferentes estações de rádio, permitindo que eles tenham um estilo uniforme.

    IDs: São usados para identificar exclusivamente um elemento HTML. Por exemplo, o ID "radioPlayer" é atribuído ao elemento de áudio que reproduz a rádio selecionada pelo usuário, permitindo que seja controlado por meio de JavaScript.

Funções JavaScript:

    mostrarPlayer(): Esta função é responsável por exibir o player de áudio na página, permitindo que os usuários reproduzam e pausam a rádio, ajustem o volume e visualizem informações sobre a programação atual e futura.

    mostrarPosts(): Utilizada para exibir notícias relacionadas a uma estação de rádio específica, apresentando o título, descrição e imagem de cada post em um layout de lista.

    mostrarProgramacao(): Responsável por exibir a programação da rádio, incluindo os programas agendados para cada dia da semana, seus horários de início e fim, e seus respectivos nomes.

    mostrarSelectPaises(): Esta função cria um menu suspenso que permite aos usuários selecionar o país de onde desejam ouvir rádios, oferecendo uma experiência de usuário mais personalizada.