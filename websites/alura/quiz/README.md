Quiz Interativo Ajudas
Esse projeto é um jogo de perguntas e respostas (quiz) feito com HTML, CSS e JavaScript, onde o jogador responde a 10 perguntas sorteadas aleatoriamente de uma lista, podendo utilizar ajudas especiais, como pular questões, pedir ajuda aos universitários ou revelar cartas.

🧠 Funcionamento geral
As perguntas são embaralhadas aleatoriamente a cada partida.

Cada pergunta possui 4 alternativas também embaralhadas.

O jogador responde até 10 perguntas.

Ao final, é exibida a pontuação, o desempenho e um resumo das respostas com feedback visual (✔️ ou ❌).

✨ Recursos implementados
🃏 Cartas (Ajudas)
Cada naipe (Copas, Ouros, Espadas, Paus) recebe uma carta única aleatória (A, 2, 3 ou K).

Essas cartas são exibidas ao jogador e podem representar uma ajuda, bônus ou penalidade (dependendo de como você quiser usar).

📚 Ajuda dos Universitários
Quando ativada, simula uma dica dos “universitários” (estilo Show do Milhão).

Pode ser usado apenas uma vez por partida.

🔄 Pular Perguntas
O jogador pode pular até duas perguntas por jogo.

O botão de pular é desativado após o limite.

🔄 Lógica do Jogo
O índice atual da pergunta é controlado por indiceAtual.

As respostas corretas são armazenadas em respostas.

O sistema de progresso atualiza a cada nova pergunta (1/10, 2/10, etc.).

Ao clicar em uma resposta, o botão se desativa e carrega a próxima pergunta.

📊 Tela Final
Exibe o número de acertos com cores:

Vermelho: < 5 acertos

Amarelo: 5 acertos

Verde: > 5 acertos

Mostra uma tabela com todas as perguntas respondidas, suas respostas e se estavam corretas.

Exibe também as ajudas utilizadas durante o jogo.

🛠 Extras
A função embaralhar() garante aleatoriedade para perguntas e respostas.

A estrutura do jogo está modularizada para fácil manutenção.

A lógica permite expansão para mais perguntas, diferentes cartas ou novas formas de ajuda.