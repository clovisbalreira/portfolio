let palavras = [
    "Abacaxi",
    "Computador",
    "Elefante",
    "Janela",
    "Bicicleta",
    "Chocolate",
    "Montanha",
    "Escola",
    "Relógio",
    "Futebol"
];

let letras = [];

let erros = 0;

let numeroAleatorio = 0//Math.floor(Math.random() * palavras.length);

function escolherPalavra(){
    let div = document.querySelector('.palavra');
    palavras[numeroAleatorio].split('').forEach(letra => {
        let span = document.createElement('span');
        span.classList.add('letra');
        span.textContent = '';
        div.appendChild(span);
    });
    acaoButton()
}

function analizarPalavra(input){
    if(letras.length == 0){
        naoContemLetra(input)
    }
    else{
        contemLetra(input)
    }
}

function naoContemLetra(input){
    palavras[numeroAleatorio].split('').forEach(letra => {
        if(letra.toLocaleUpperCase() === input.value.toLocaleUpperCase()){
            letras.push(letra);
        }else{
            letras.push('');
        }
    })
}

function contemLetra(input){
    palavras[numeroAleatorio].split('').forEach((palavra, index) => {
        if(input.value === palavra){
            letras[index] = input.value 
        }
    }) 
}

function mostrarPalavra(div){
    letras.forEach(letra => {
        let span = document.createElement('span');
        span.classList.add('letra');
        if(letra !== ''){
            span.textContent = letra;
        } else {
            span.textContent = '';
        }
        div.appendChild(span);
    });
    acaoButton()
}

function acaoButton(){
    let button = document.querySelector('#enviar');
    button.addEventListener('click', () => {
        let input = document.querySelector('#chute');
        let div = document.querySelector('.palavra');
        div.innerHTML = '';
        analizarPalavra(input)
        mostrarPalavra(div)
        input.value = '';
    })
    console.log(erros)
}

escolherPalavra()