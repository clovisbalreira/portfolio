🐉 Projeto: Dragon Ball

Este projeto é uma página web interativa inspirada em personagens fictícios com uma pegada futurista e cyberpunk, idealizada durante a Semana do Zero ao Programador Contratado. Os usuários podem clicar em botões laterais para alternar entre personagens, visualizando suas imagens e descrições.

✨ Tecnologias Utilizadas

HTML5: Estrutura do conteúdo da página.

CSS3: Estilização visual, responsividade e efeitos.

JavaScript (ES6+): Interatividade e manipulação dinâmica dos elementos.

🪡 Estrutura do HTML

Tags principais:

<main class="personagens">: Onde os personagens são renderizados dinamicamente.

<ul id="botoes" class="botoes">: Lista dos botões com os ícones de seleção dos personagens.

🎨 CSS - Classes e IDs

Layout Principal

.personagens: Container principal de todos os personagens.

.personagem: Cada personagem individual.

.selecionado: Classe que ativa e exibe um personagem ou destaca um botão.

Texto e Conteúdo

.conteudo: Container de texto (nome e descrição).

.nome-personagem: Estilo do nome do personagem.

.descricao: Estilo do parágrafo com a descrição.

Botões

.botoes: Container lateral dos botões.

.botao: Estilo dos botões redondos.

Classes adicionais para estilos personalizados:

.cyberstorm

.codepixie

.hexblade

.neonpulse

.codebreaker

💻 Funções JavaScript

criarBotoes()

Cria os botões de seleção a partir de um array com os dados dos personagens.

criarPersonagens()

Gera dinamicamente os elementos de cada personagem (imagem, nome, descrição).

mostrarDadosPersonagens(dados)

Retorna uma div com nome e descrição. (Pode ser usada para melhorias futuras).

acoesBotoes()

Adiciona os eventos de clique aos botões, permitindo trocar entre os personagens.

Inicialização:

criarBotoes();
criarPersonagens();
acoesBotoes();

📱 Responsividade

Com uso de media queries, o layout se adapta a diferentes tamanhos de tela:

Telas menores que 768px e 425px recebem estilos específicos para mobile.

Os botões, textos e imagens são redimensionados automaticamente.

💡 Aprendizados

Manipulação de DOM.

Criação dinâmica de elementos HTML.

Estilização com foco visual.

Responsividade com CSS.

Estruturação de dados com arrays de objetos.

