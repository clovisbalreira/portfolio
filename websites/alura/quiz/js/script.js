// PARTE 1: Lista de perguntas e respostas
let perguntas = [
  {
    pergunta: "Qual é a capital da França?",
    respostas: [
      { opcao: "Paris", correto: true },
      { opcao: "Londres", correto: false },
      { opcao: "Berlim", correto: false },
      { opcao: "Roma", correto: false },
    ],
  },
  {
    pergunta: "Qual é o maior planeta do sistema solar?",
    respostas: [
      { opcao: "Terra", correto: false },
      { opcao: "Júpiter", correto: true },
      { opcao: "Marte", correto: false },
      { opcao: "Saturno", correto: false },
    ],
  },
  {
    pergunta: "Quem pintou a Mona Lisa?",
    respostas: [
      { opcao: "Leonardo da Vinci", correto: true },
      { opcao: "Vincent van Gogh", correto: false },
      { opcao: "Pablo Picasso", correto: false },
      { opcao: "Claude Monet", correto: false },
    ],
  },
  {
    pergunta: "Qual é o elemento químico representado pelo símbolo 'O'?",
    respostas: [
      { opcao: "Ouro", correto: false },
      { opcao: "Oxigênio", correto: true },
      { opcao: "Osmium", correto: false },
      { opcao: "Óxido", correto: false },
    ],
  },
  {
    pergunta: "Quantos continentes existem no mundo?",
    respostas: [
      { opcao: "5", correto: false },
      { opcao: "6", correto: false },
      { opcao: "7", correto: true },
      { opcao: "8", correto: false },
    ],
  },
  {
    pergunta: "Qual é o animal terrestre mais rápido do mundo?",
    respostas: [
      { opcao: "Leão", correto: false },
      { opcao: "Guepardo", correto: true },
      { opcao: "Cavalo", correto: false },
      { opcao: "Leopardo", correto: false },
    ],
  },
  {
    pergunta: "Qual é o idioma mais falado no mundo?",
    respostas: [
      { opcao: "Inglês", correto: false },
      { opcao: "Mandarim", correto: true },
      { opcao: "Espanhol", correto: false },
      { opcao: "Hindi", correto: false },
    ],
  },
  {
    pergunta: "Quem foi o primeiro homem a pisar na Lua?",
    respostas: [
      { opcao: "Neil Armstrong", correto: true },
      { opcao: "Buzz Aldrin", correto: false },
      { opcao: "Yuri Gagarin", correto: false },
      { opcao: "Michael Collins", correto: false },
    ],
  },
  {
    pergunta: "Qual é a fórmula química da água?",
    respostas: [
      { opcao: "H2O", correto: true },
      { opcao: "CO2", correto: false },
      { opcao: "O2", correto: false },
      { opcao: "H2", correto: false },
    ],
  },
  {
    pergunta: "Qual é o maior oceano do mundo?",
    respostas: [
      { opcao: "Oceano Atlântico", correto: false },
      { opcao: "Oceano Pacífico", correto: true },
      { opcao: "Oceano Índico", correto: false },
      { opcao: "Oceano Ártico", correto: false },
    ],
  },
  {
    pergunta: "Qual é a montanha mais alta do mundo?",
    respostas: [
      { opcao: "Monte Everest", correto: true },
      { opcao: "Monte Kilimanjaro", correto: false },
      { opcao: "Monte Fuji", correto: false },
      { opcao: "Monte McKinley", correto: false },
    ],
  },
  {
    pergunta: "Qual é o país com a maior população do mundo?",
    respostas: [
      { opcao: "China", correto: true },
      { opcao: "Índia", correto: false },
      { opcao: "Estados Unidos", correto: false },
      { opcao: "Indonésia", correto: false },
    ],
  },
  {
    pergunta: "Quem escreveu 'Dom Quixote'?",
    respostas: [
      { opcao: "Miguel de Cervantes", correto: true },
      { opcao: "William Shakespeare", correto: false },
      { opcao: "Jorge Luis Borges", correto: false },
      { opcao: "Gabriel García Márquez", correto: false },
    ],
  },
  {
    pergunta: "Qual é o menor país do mundo?",
    respostas: [
      { opcao: "Vaticano", correto: true },
      { opcao: "Mônaco", correto: false },
      { opcao: "San Marino", correto: false },
      { opcao: "Liechtenstein", correto: false },
    ],
  },
  {
    pergunta: "Qual é o maior deserto do mundo?",
    respostas: [
      { opcao: "Deserto do Saara", correto: false },
      { opcao: "Antártida", correto: true },
      { opcao: "Deserto de Gobi", correto: false },
      { opcao: "Deserto de Kalahari", correto: false },
    ],
  },
  {
    pergunta: "Quem desenvolveu a teoria da relatividade?",
    respostas: [
      { opcao: "Albert Einstein", correto: true },
      { opcao: "Isaac Newton", correto: false },
      { opcao: "Galileu Galilei", correto: false },
      { opcao: "Nikola Tesla", correto: false },
    ],
  },
  {
    pergunta: "Qual é o maior mamífero do mundo?",
    respostas: [
      { opcao: "Baleia-azul", correto: true },
      { opcao: "Elefante-africano", correto: false },
      { opcao: "Orca", correto: false },
      { opcao: "Tubarão-baleia", correto: false },
    ],
  },
  {
    pergunta: "Qual é o rio mais longo do mundo?",
    respostas: [
      { opcao: "Rio Amazonas", correto: true },
      { opcao: "Rio Nilo", correto: false },
      { opcao: "Rio Yangtzé", correto: false },
      { opcao: "Rio Mississippi", correto: false },
    ],
  },
  {
    pergunta: "Quem pintou o teto da Capela Sistina?",
    respostas: [
      { opcao: "Michelangelo", correto: true },
      { opcao: "Leonardo da Vinci", correto: false },
      { opcao: "Raphael", correto: false },
      { opcao: "Donatello", correto: false },
    ],
  },
  {
    pergunta: "Qual é o maior país do mundo em área territorial?",
    respostas: [
      { opcao: "Rússia", correto: true },
      { opcao: "Canadá", correto: false },
      { opcao: "China", correto: false },
      { opcao: "Estados Unidos", correto: false },
    ],
  },
  {
    pergunta: "Qual é o nome do planeta mais próximo do Sol?",
    respostas: [
      { opcao: "Mercúrio", correto: true },
      { opcao: "Vênus", correto: false },
      { opcao: "Terra", correto: false },
      { opcao: "Marte", correto: false },
    ],
  },
  {
    pergunta: "Quem é conhecido como o pai da computação?",
    respostas: [
      { opcao: "Alan Turing", correto: true },
      { opcao: "Charles Babbage", correto: false },
      { opcao: "John von Neumann", correto: false },
      { opcao: "Ada Lovelace", correto: false },
    ],
  },
  {
    pergunta: "Qual é o maior órgão do corpo humano?",
    respostas: [
      { opcao: "Pele", correto: true },
      { opcao: "Fígado", correto: false },
      { opcao: "Cérebro", correto: false },
      { opcao: "Pulmão", correto: false },
    ],
  },
  {
    pergunta: "Qual é a moeda oficial do Japão?",
    respostas: [
      { opcao: "Iene", correto: true },
      { opcao: "Won", correto: false },
      { opcao: "Yuan", correto: false },
      { opcao: "Dólar", correto: false },
    ],
  },
  {
    pergunta: "Qual é o nome do cientista que descobriu a penicilina?",
    respostas: [
      { opcao: "Alexander Fleming", correto: true },
      { opcao: "Louis Pasteur", correto: false },
      { opcao: "Marie Curie", correto: false },
      { opcao: "Gregor Mendel", correto: false },
    ],
  },
  {
    pergunta: "Qual é o maior estado do Brasil em área territorial?",
    respostas: [
      { opcao: "Amazonas", correto: true },
      { opcao: "Pará", correto: false },
      { opcao: "Mato Grosso", correto: false },
      { opcao: "Minas Gerais", correto: false },
    ],
  },
  {
    pergunta: "Qual é o nome do famoso físico que formulou a lei da gravitação universal?",
    respostas: [
      { opcao: "Isaac Newton", correto: true },
      { opcao: "Albert Einstein", correto: false },
      { opcao: "Galileu Galilei", correto: false },
      { opcao: "Stephen Hawking", correto: false },
    ],
  },
  {
    pergunta: "Qual é o oceano que banha a costa leste do Brasil?",
    respostas: [
      { opcao: "Oceano Atlântico", correto: true },
      { opcao: "Oceano Pacífico", correto: false },
      { opcao: "Oceano Índico", correto: false },
      { opcao: "Oceano Ártico", correto: false },
    ],
  },
  {
    pergunta: "Qual é o nome do autor de 'Harry Potter'?",
    respostas: [
      { opcao: "J.K. Rowling", correto: true },
      { opcao: "J.R.R. Tolkien", correto: false },
      { opcao: "George R.R. Martin", correto: false },
      { opcao: "Suzanne Collins", correto: false },
    ],
  },
  {
    pergunta: "Qual é o símbolo químico do ferro?",
    respostas: [
      { opcao: "Fe", correto: true },
      { opcao: "F", correto: false },
      { opcao: "I", correto: false },
      { opcao: "Ir", correto: false },
    ],
  },
];

// Array com os quatro naipes e seus respectivos emojis
let naipes = [
  { nome: "Copas", emoji: "♥️" },
  { nome: "Espadas", emoji: "♠️" },
  { nome: "Ouros", emoji: "♦️" },
  { nome: "Paus", emoji: "♣️" },
];

// Array com todas as cartas possíveis (sem repetição)
const cartasDisponiveis = ["A", "2", "3","K"];

// Função para embaralhar 
function embaralhar(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Função para atribuir cartas únicas a cada naipe
function atribuirCartasUnicas(naipes, cartas) {
  const cartasEmbaralhadas = embaralhar(cartas);
  return naipes.map((naipe, index) => ({
    ...naipe,
    carta: cartasEmbaralhadas[index], // Atribui uma carta única a cada naipe
  }));
}

naipes = embaralhar(naipes)

// Atribui cartas únicas aos naipes
naipes = atribuirCartasUnicas(naipes, cartasDisponiveis);

perguntas = embaralhar(perguntas); // Embaralha as perguntas

// PARTE 1.2: Embaralhando as respostas de cada pergunta
function embaralharRespostas(perguntas) {   
  perguntas.forEach((pergunta) => {
    pergunta.respostas = pergunta.respostas.sort(() => Math.random() - 0.5); // Embaralha as respostas  
  });
  return perguntas; // Retorna as perguntas com respostas embaralhadas  
}
perguntas = embaralharRespostas(perguntas); // Embaralha as respostas de cada pergunta      

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");
const carta = document.querySelector(".carta");
const pulo = document.querySelector(".pulo");
const ajuda = document.querySelector(".ajuda");
const cartas = document.querySelectorAll(".carta-escolher");
const cartasBaralho = document.querySelector(".cartas")
const universitarios = document.getElementById('universitarios')
const universitario = document.querySelectorAll(".universitario");
const divRespostas = document.getElementById('respostas')

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos
let respostas = [] // respostas do quis
let ajudas = { universitarios : false, cartas: false, pulos: 0} // ajudas do quis

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta(condicao) {
  for (let i = 0; i < 10; i++) {
    progressoElemento.innerHTML = `${indiceAtual + 1}/10`; // Atualiza o progresso
    const perguntaAtual = perguntas[condicao ? indiceAtual + 1 : indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta
  
    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
  
    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {

      // Pega a resposta atual com base no índice 'i'
      const resposta = perguntaAtual.respostas[i];
      // Cria um novo elemento 'button' (botão)
      const botao = document.createElement("button");
      // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
      botao.classList.add("botao-resposta");
      // Define o texto do botão com a opção de resposta (resposta.opcao)
      botao.innerText = resposta.opcao;
      // Adiciona um evento de clique no botão
      botao.onclick = function () {
        esconderOpcoes()

        // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
        if (resposta.correto) {
          acertos++; // Incrementa o contador de acertos
        }

        //adicionando respostas
        respostas.push({ pergunta: perguntaAtual.pergunta, resposta: resposta.opcao, acerto: resposta.correto ? '✔️' : '❌'})
        
        // Avança para a próxima pergunta
        indiceAtual++;
  
        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < 10) {
          carregarPergunta(false); // Carrega a próxima pergunta
        } else {
          // Se não houver mais perguntas, finaliza o jogo
          finalizarJogo();
        }
      };
  
      // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
      respostasElemento.appendChild(botao);
    }
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de 10`; // Exibe o resultado
  // condicao de acertos para colorir o texto
  if(acertos < 5){
    textoFinal.style.color = 'red'
  }else if(acertos > 5){
    textoFinal.style.color = 'green'
  }else{
    textoFinal.style.color = 'yellow'
  }
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
  ajuda.style.display = "none"; // Esconde o botão de ajuda
  pulo.setAttribute("disabled", "false") // Desabilita o botão de pular
  let table = document.createElement('table') // criando tabela
  let thead = document.createElement('thead') // criando thead
  let tr = document.createElement('tr')  // criando tr
  tr.appendChild(criarlinha('th', 'Pergunta')) // criando th
  tr.appendChild(criarlinha('th', 'Resposta')) // criando th
  tr.appendChild(criarlinha('th', 'Questão')) // criando th
  thead.appendChild(tr)
  table.appendChild(thead)
  let tbody = document.createElement('tbody')
  respostas.forEach( resposta => {
    tr = document.createElement('tr')
    resposta.acerto == '✔️' ? tr.style.color = 'green' : tr.style.color = 'red'
    tr.appendChild(criarlinha('td', resposta.pergunta)) // criando td
    tr.appendChild(criarlinha('td', resposta.resposta)) // criando td
    tr.appendChild(criarlinha('td', resposta.acerto)) // criando td
    tbody.appendChild(tr)
  })
  table.appendChild(tbody)
  let tfoot = document.createElement('tfoot') // criando thead
  tr = document.createElement('tr')  // criando tr
  tr.appendChild(criarTfoot('th', !ajudas.universitarios && !ajudas.cartas && ajudas.pulos == 0 ? 'Você não teve nenhuma ajuda!!' : `Você teve ${ajudas.universitarios || ajudas.cartas ?`ajuda d${(!ajudas.universitarios && ajudas.cartas) || ajudas.cartas ? 'as' : 'os'}` : `${ajudas.pulos} pulo${ajudas.pulos == 2 ? 's' : '' }`} ${ajudas.cartas ? 'Cartas' : ''} ${ajudas.universitarios && ajudas.cartas ? 'e dos' : ''} ${ajudas.universitarios ? 'Universitários' : ''} ${(ajudas.universitarios || ajudas.cartas) && ajudas.pulos > 0 ? `e ${ajudas.pulos} pulo${ajudas.pulos == 2 ? 's' : '' }` : ''}`)) // criando th com condições de ajuda
  tfoot.appendChild(tr)
  table.appendChild(tfoot)
  divRespostas.appendChild(table)
}

function criarlinha(tag, variavel){
  let elemento = document.createElement(tag)
  elemento.textContent = variavel
  return elemento
}

function criarTfoot(tag, variavel){
  let elemento = document.createElement(tag)
  elemento.colSpan = 3
  elemento.textContent = variavel
  return elemento
}

function esconderOpcoes(){
  cartasBaralho.style.display = 'none'
  universitarios.style.display = 'none'
}

function criarPulo(e) {
  esconderOpcoes()
  disabledBotao(document.getElementById(e.id))
  ajudas.pulos += 1
  carregarPergunta(true)
}

function disabledBotao(botao){
  botao.setAttribute
  ("disabled", "true") // Desabilita
  botao.style.backgroundColor = "gray" // Muda a cor do botão para cinza
}

function mostraCartas(condicao){
  cartasBaralho.style.display = 'flex'
  universitarios.style.display = 'none'
  cartas.forEach((carta, index) => {
    carta.innerHTML = naipes[index].emoji; // Limpa o conteúdo da carta
    if(naipes[index].nome == "Copas" || naipes[index].nome == "Ouros") carta.style.color = "red"; // Muda a cor da carta para vermelho
    if(condicao) {
      carta.innerHTML += naipes[index].carta; // Limpa o conteúdo da carta
      carta.setAttribute("disabled", "true") // Desabilita o botão
      // Remover apenas os emojis da string
    }
  });
  escolherCarta() // Chama a função para escolher a carta
}

function escolherCarta() {
  let valor
  cartas.forEach((carta) => {
    carta.onclick = function () { 
      valor = naipes.filter((naipe) => carta.textContent == naipe.emoji)
      mostraCartas(true) // Limpa o conteúdo da carta
      condicaoCarta(valor[0].carta == "A" ? 1 : valor[0].carta == "K" ? 0 : valor[0].carta) // Chama a função para escolher a carta
      ajudas.cartas = true
    }
  })
}

function condicaoCarta(change){
  let perguntaSelecionada = filtrarPerguntaSelecionada()
  let respostasErradas = filtrarRespostasErradas(perguntaSelecionada)
  const respostasUnica = document.querySelectorAll(".botao-resposta");
  let condicao = criarRespostasErradas(change)
  respostasUnica.forEach((elemento) => {
    let condicaoCopia = [...condicao]; // Cria uma cópia do array `condicao` para cada iteração
    respostasErradas.forEach((resposta) => {
      if (resposta.opcao == elemento.textContent && condicaoCopia[0]) {
        elemento.style.backgroundColor = "white"; // Muda a cor do botão
        elemento.setAttribute("disabled", "true"); // Desabilita o botão
      }
      condicaoCopia.shift(); // Remove o primeiro elemento da cópia, não do array original
    });
  });  
  disabledBotao(carta)
}

function filtrarPerguntaSelecionada(){
  let perguntaMomento = perguntaElemento.textContent
  let perguntaSelecionada = perguntas.filter((perguntaAtual) => perguntaAtual.pergunta == perguntaMomento)[0]
  return perguntaSelecionada
}

function filtrarRespostasErradas(perguntaSelecionada){
  return perguntaSelecionada.respostas.filter(resposta => !resposta.correto)
}

function criarRespostasErradas(quantidade){
  let respostas = []
  for(let i = 0 ; i < 3; i++){
    if(i < quantidade){
      respostas.push(true)
    }else{
      respostas.push(false)
    }
  }
  return embaralhar(respostas)
}

function escolhaUniversitarios(){
  universitarios.style.display = 'flex'
  cartasBaralho.style.display = 'none'
  let perguntaSelecionada = filtrarPerguntaSelecionada()
  let respostasErradas = filtrarRespostasErradas(perguntaSelecionada)
  let respostaCerta = perguntaSelecionada.respostas.filter(resposta => resposta.correto)[0].opcao
  universitario.forEach( nome => {
    nome.textContent += `: ${Math.floor(Math.random() * 2) == 1 ? respostaCerta : respostasErradas[Math.floor(Math.random() * 3)].opcao}`
  })
  disabledBotao(document.querySelector('.universitarios')) 
  ajudas.universitarios = true
}

// Limpa o conteúdo da carta
function reiniciarJogo() {
  location.reload(); // Recarrega a página para reiniciar o jogo
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta(false)

