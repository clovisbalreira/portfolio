let palavras = [
    "Abacaxi",
    "Computador",
    "Elefante",
    "Janela",
    "Bicicleta",
    "Chocolate",
    "Montanha",
    "Escola",
    "Relogio",
    "Futebol"
];

let palavraAtual = "";
let letrasDigitadasValidas = [];
let todasLetrasDigitadas = [];
let erros = 0;
let partesCorpo = ['cabeca','braco-esquerdo','torso','braco-direito','perna-esquerda','perna-direita']
let numeroAleatorio = 0//Math.floor(Math.random() * palavras.length);

// -------------------- INICIAR JOGO --------------------
function iniciarJogo(){
    palavraAtual = palavras[numeroAleatorio];
    letrasDigitadasValidas = new Array(palavraAtual.length).fill('');
    erros = 0;
    renderizarPalavra();
}

// -------------------- RENDER --------------------
function renderizarPalavra(){
    let div = document.querySelector('.palavra');
    div.innerHTML = '';
    letrasDigitadasValidas.forEach(letra => {
        let span = document.createElement('span');
        span.classList.add('letra');
        span.textContent = letra;
        div.appendChild(span);
    });
}

// -------------------- LÓGICA --------------------
function verificarLetra(letraDigitada){
    let acertou = false;
    palavraAtual.split('').forEach((letra, index) => {
        if(letra.toUpperCase() === letraDigitada.toUpperCase()){
            letrasDigitadasValidas[index] = letra.toUpperCase();
            acertou = true;
        }
    });
    return acertou;
}

// -------------------- FORCA ----------------------
function forca(){
    erros++;
    for(let i = 0; i < erros; i++){
        document.querySelector(`.${partesCorpo[i]}`).style.display = 'none'
    }
}

// -------------------- EVENTO BOTÃO --------------------
function configurarBotao(){
    let button = document.querySelector('#enviar');
    button.addEventListener('click', () => {
        let input = document.querySelector('#chute');
        let valor = input.value.trim();
        if(valor === '') return;
        todasLetrasDigitadas.push(valor)
        let acertou = verificarLetra(valor);
        if(!acertou) forca()
        input.value = '';
        liberarResposta()
        input.focus()
        mostrarLetrasDigitadas()
        renderizarPalavra();
        verificarFimDeJogo()
    });
}

// -------------------- FIM DE JOGO --------------------
function mostrarLetrasDigitadas(){
    let respostaResultado = document.querySelector('.resultado')
    let todasLetrasDigitadasFiltrada = [...new Set(todasLetrasDigitadas.filter(letra => letra !== ''))];
    respostaResultado.innerHTML = `Letras Digitadas: ( ${todasLetrasDigitadasFiltrada.length} ) `
    todasLetrasDigitadasFiltrada.forEach( (letra, index) => {
        respostaResultado.textContent += letra.toUpperCase();
        if(index < todasLetrasDigitadasFiltrada.length - 1) respostaResultado.textContent += ', '
    })
}

// -------------------- ESCONDER BOTOES --------------------
function esconderBotoes(id, condicao){
    let div = document.getElementById(id)
    condicao ? div.style.display = 'grid' : div.style.display = 'none'
}

// -------------------- BOTOES --------------------
function botoes(condicao){
    esconderBotoes('divResposta', condicao)
    esconderBotoes('divChute', condicao)
}

// -------------------- FIM DE JOGO --------------------
function verificarFimDeJogo(){
    let respostaResultado = document.querySelector('.resultado')
    // venceu
    if(!letrasDigitadasValidas.includes('')){
        resultadoFinal('Você venceu!')
    }
    // perdeu
    if(erros >= 6){
        resultadoFinal(`Você perdeu! A palavra era: <span>${palavraAtual}<span>`)
    }
}

// -------------------- RESULTADO FINAL --------------------
function resultadoFinal(texto){
    let respostaResultado = document.querySelector('.resultado')
    respostaResultado.innerHTML += `<p>${texto}</p>`
    botoes(false)
    reiniciar()
    let botao = document.getElementById('reiniciar').style.display = 'block'
}

function liberarResposta(){
    if(todasLetrasDigitadas.length > 2){
        responder()
        esconderBotoes('divResposta', true)
    }
}

// -------------------- RESPONDER A PALAVRA INTEIRA --------------------
function responder(){
    let botao = document.getElementById('enviarResposta')
    botao.addEventListener('click', () => {
        let input = document.getElementById('resposta')
        if(input.value.toUpperCase() == palavraAtual.toUpperCase()){
            resultadoFinal('Você venceu!')
            input.value = ''
            mostrarPalavra()
            return
        }else{
            forca()
        }
        input.value = ''
    })
}

// -------------------- MOSTRAR PALAVRA --------------------
function mostrarPalavra(){
    let div = document.querySelector('.palavra');
    div.innerHTML = '';
    palavraAtual.split("").forEach(letra => {
        let span = document.createElement('span');
        span.classList.add('letra');
        span.textContent = letra.toUpperCase();
        div.appendChild(span);
    });
}

// -------------------- REINICIAR --------------------
function reiniciar(){
    let botao = document.getElementById('reiniciar')
    botao.addEventListener('click', () => {
        numeroAleatorio = Math.floor(Math.random() * palavras.length);
        botoes(true)
        palavraAtual = "";
        letrasDigitadasValidas = [];
        todasLetrasDigitadas = [];
        document.querySelector('.resultado').innerHTML = ""
        inicio()
        botao.style.display = 'none'
        esconderBotoes('divResposta', false)
        partesCorpo.forEach( parte => {
            document.querySelector(`.${parte}`).style.display = 'block'
        })
    })
}

// -------------------- INICIO --------------------
function inicio(){
    iniciarJogo();
    configurarBotao();
    let respostaResultado = document.querySelector('.resultado')
}

// -------------------- START --------------------
inicio()