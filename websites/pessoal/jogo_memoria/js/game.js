const tabuleiro = document.getElementById('tabuleiro')
const imagens = [
    'https://logodetimes.com/times/gremio/logo-gremio-256.png',
    'https://logodetimes.com/times/internacional/logo-internacional-256.png',
    'https://logodetimes.com/times/cruzeiro/logo-cruzeiro-256.png',
    'https://logodetimes.com/times/atletico-mineiro/logo-atletico-mineiro-256.png',
    'https://logodetimes.com/times/flamengo/logo-flamengo-256.png',
    'https://logodetimes.com/times/fluminense/logo-fluminense-256.png',
    'https://logodetimes.com/times/vasco-da-gama/logo-vasco-da-gama-256.png',
    'https://logodetimes.com/times/botafogo/logo-botafogo-256.png',
    'https://logodetimes.com/times/sao-paulo/logo-sao-paulo-256.png',
    'https://logodetimes.com/times/santos/logo-santos-256.png',
    'https://logodetimes.com/times/palmeiras/logo-palmeiras-256.png',
    'https://logodetimes.com/times/corinthians/logo-corinthians-256.png'
];
const fundo = "https://logodetimes.com/times/selecao-brasileira-brasil-novo-logo-2019-com-estrelas/logo-selecao-brasileira-brasil-novo-logo-2019-com-estrelas-256.png"

let codigoHTML = '';

imagens.forEach(img => {
    codigoHTML += `
        <div class="memory-card">
            <img class="frente-carta" src="${img}">
            <img class="fundo-carta" src="${fundo}">
        </div>
    `;
});

tabuleiro.innerHTML = codigoHTML + codigoHTML;

const cartas = document.querySelectorAll(".memory-card");

function virar(){
    this.classList.add('virar')
}

cartas.forEach( c => c.addEventListener('click',virar()))