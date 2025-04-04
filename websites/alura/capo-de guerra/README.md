🏆 Capo de Guerra - Força ou Queda
Capo de Guerra é um jogo interativo onde o jogador monta seu próprio time de heróis e enfrenta um time aleatório de vilões. A força de cada personagem é sorteada aleatoriamente, e o resultado da batalha é baseado na soma dessas forças.

🧪 Tecnologias Utilizadas
HTML5 – Estrutura da página.

CSS3 – Estilização e responsividade.

JavaScript (Vanilla) – Lógica do jogo e manipulação dinâmica da DOM.

🧩 Estrutura HTML
As principais tags utilizadas foram:

<div> – Contêineres para organização visual dos elementos.

<input> – Entrada de dados do jogador e personagens.

<button> – Ações do usuário (Jogar, Adicionar, Iniciar, Ver Resultado).

<ul> e <li> – Listagem dos personagens e resultados.

<h2>, <h5>, <p>, <label> – Títulos e textos explicativos.

Apresentação:
A estrutura é dividida em seções:

.logo: exibe o título visual do jogo.

.titulo: título principal.

.conteudo-jogo: área central onde o jogo acontece.

#container: envolve os elementos interativos como input e botões.

🎨 Estilização com CSS
As classes e ids mais importantes:

.logo – Alinha a logo à direita.

.conteudo-jogo – Caixa principal do jogo com fundo escuro e sombra neon.

.input e #botoes – Estilização flexível para inputs e botões.

.btn-input – Estilo personalizado para botões.

#times – Layout em coluna dupla para mostrar os times.

.resultado – Exibe informações e resultado do jogo com destaque.

Apresentação:
O design usa um fundo com imagem, estilização com rgba() para sobrepor um efeito escuro e interações como :hover para botões e áreas principais. O foco está na imersão do usuário, usando fontes legíveis e destaque para os resultados.

⚙️ Lógica com JavaScript
As principais funções usadas no jogo:

jogar()
Inicia o jogo validando o nome do jogador e mostra a área para adicionar personagens.

timeJogador()
Cria inputs dinamicamente para adicionar até 10 personagens com força aleatória.

iniciarJogo()
Gera o time inimigo com nomes e forças aleatórias e inicia o confronto.

timeViloes()
Cria um time aleatório de vilões com nomes pré-definidos e força aleatória.

mostrarTimes()
Exibe os times (jogador e computador) na tela com ou sem a força.

mostrarResultado()
Soma as forças dos times, determina o vencedor, e exibe o resultado.

criarInput() / criarBotao()
Manipulam a DOM para adicionar novos elementos dinamicamente.

desabilitarInput() / desabilitarBotao()
Impede que o usuário altere inputs ou clique nos botões após ações.

criarBotaoResetar()
Cria um botão que reinicia o jogo recarregando a página.

🚀 Como jogar?
Digite seu nome.

Adicione até 10 personagens para seu time.

Inicie a batalha.

Veja o resultado e descubra se seu time é forte o suficiente para vencer!