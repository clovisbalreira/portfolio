Chão de Vidro

Descrição

"Chão de Vidro" é um projeto interativo desenvolvido com HTML, CSS e JavaScript. O jogo desafia o jogador a atravessar um caminho seguro escolhendo corretamente os pisos não quebráveis. Inspirado em desafios de superação, o jogo exige coragem e estratégia para ser concluído.

Linguagens Utilizadas

HTML: Estrutura do jogo e formulário de entrada.

CSS: Estilização dos elementos visuais.

JavaScript: Lógica do jogo e interatividade.

Estrutura HTML

O arquivo index.html contém os seguintes elementos principais:

Cabeçalho (<head>):

Importação do CSS e JavaScript.

Configuração de metadados.

Corpo (<body>):

img.logo: Exibe o logotipo do jogo.

div.container: Contém o conteúdo principal.

h2 e p: Exibição de mensagens ao jogador.

input#nome e input#rodada: Campos de entrada para nome e rodada.

p#resposta: Exibe mensagens de erro ou feedback ao jogador.

button: Aciona a função do jogo.

footer: Creditação do projeto.

Estilização CSS

O arquivo style.css define a aparência do jogo. Algumas classes e IDs importantes:

Globais:

body: Fundo preto e fonte padrão.

Logo:

.logo: Posição absoluta no canto superior direito.

Container:

.container: Fundo com imagem e centralização do conteúdo.

Jogo:

.content: Caixa de texto e botão com fundo transparente.

.input: Organização dos campos de entrada.

#resposta: Aparece em vermelho ao exibir mensagens de erro.

Botão:

button: Estilização interativa ao passar o mouse.

Caminho do Jogo:

.div-caminho: Layout do caminho.

.div-coluna: Organiza os pisos lado a lado.

.div-linha: Representa cada piso do jogo.

Funções JavaScript

O arquivo script.js contém a lógica do jogo, incluindo:

jogar(): Inicia o jogo e valida a entrada do usuário.

criandoRodada(rodada): Gera um conjunto de pisos para cada rodada.

iniciarJogo(rodadas, passos, nome): Renderiza o caminho e as opções do jogo.

criarCaminho(rodadas): Monta os pisos coloridos do jogo.

criandoH2(texto): Cria elementos de título dinamicamente.

criarOpcoes(): Gera as opções de cores.

escolherCaminho(rodadas, passos, nome): Captura a escolha do jogador.

caminhando(caminho, rodadas, passos, nome): Define a lógica de avanço no jogo.

reiniciar(rodadas, passos, nome): Reinicia a rodada.

reset(passos, nome, rodadas): Finaliza o jogo ao vencer.

Como Jogar

Insira seu nome e o número de rodadas desejadas.

Clique em "Bora jogar!".

Escolha um piso colorido para avançar.

Complete todas as rodadas sem pisar nos pisos quebráveis!

Tecnologias Utilizadas

HTML5

CSS3

JavaScript (DOM Manipulation, Eventos, Arrays)