Pedra, Papel ou Tesoura?

Descrição

Este projeto é um jogo interativo de "Pedra, Papel e Tesoura", incluindo a versão ampliada "Pedra, Papel, Tesoura, Lagarto e Spock". Criado utilizando HTML, CSS e JavaScript, o jogo permite que os jogadores escolham uma opção e disputem contra o computador, que faz uma escolha aleatória. O jogo também inclui uma verificação de idade antes do início.

Tecnologias Utilizadas

HTML: Estrutura do jogo e formulário de entrada.

CSS: Estilização da interface, animações e responsividade.

JavaScript: Lógica do jogo, interatividade e manipulação do DOM.

Estrutura do Código

HTML

Principais elementos:

div.container: Contêiner principal do jogo.

div.content: Contém o formulário e as interações.

input#nome e input#idade: Campos para o jogador inserir seu nome e idade.

button: Botão para entrar no jogo e escolher opções.

div#emojis: Exibição dos emojis de escolha.

div#resposta: Exibição do resultado do jogo.

CSS

Principais classes e IDs:

.logo: Posiciona a logo no canto superior direito.

.container: Define o fundo do jogo.

.content: Centraliza o formulário e o conteúdo.

.emoji: Estiliza as opções do jogo com hover.

button:hover: Muda a cor do botão ao passar o mouse.

JavaScript

Principais funções:

verificarIdade(): Verifica se o jogador é maior de idade para continuar no jogo.

crirTag(tagNome, texto, id): Cria elementos HTML dinamicamente.

mostrarJogo(array, condicao, nome, p): Atualiza a interface para exibir o jogo.

colocarEmojis(array, condicao, nome): Adiciona os emojis na tela.

escolherEmoji(array, condicao, nome): Define a ação ao clicar em um emoji.

jogar(escolhaJogador, array, nome): Define a lógica do jogo e determina o vencedor.

Funções de condição para determinar o resultado do jogo (ex: condicaoPedra(), condicaoPapel(), etc.).

mostrarResultado(): Exibe o resultado do jogo na tela.

Como Executar o Projeto

Insira seu nome e idade para iniciar o jogo.

Escolha uma opção e jogue contra o computador!