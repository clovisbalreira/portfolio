const radioPlayer = document.getElementById('radioPlayer');
const prevButton = document.querySelectorAll('.prev');
const playButton = document.querySelectorAll('.play');
const nextButton = document.querySelectorAll('.next');
const images = document.querySelectorAll('img');
const h1 = document.querySelectorAll('h1');
const p = document.querySelectorAll('p');

let isplayPause = true

let radios = [
    {
        nome : 'Rádio C.N.S.',
        cidade : 'Canoas - RS',
        image : './img/cns.jpg',
        link : 'https://s18.maxcast.com.br:8702/live',
    },
    {
        nome : 'C.N.S.',
        cidade : 'Canoas',
        image : './img/cns.jpg',
        link : 'https://s18.maxcast.com.br:8702/live',
    },
    {
        nome : 'Rádio',
        cidade : 'RS',
        image : './img/cns.jpg',
        link : 'https://s18.maxcast.com.br:8702/live',
    }
]

let escolha = 1

function playRadio(){
    playButton.forEach((play) => {
        play.querySelector('i').classList.remove('bi-play-btn-fill')
        play.querySelector('i').classList.add('bi-pause-btn-fill')
    })
    radioPlayer.play();
}

function pausaRadio(){
    playButton.forEach((play) => {
        play.querySelector('i').classList.remove('bi-pause-btn-fill')
        play.querySelector('i').classList.add('bi-play-btn-fill')
    })
    radioPlayer.pause();
}

function inicio(){
    images.forEach((image) => {
        image.src = radios[escolha].image
    })    
    
    h1.forEach((texto) => {
        texto.innerHTML = radios[escolha].nome
    })
        
    p.forEach((texto) => {
        texto.innerHTML = radios[escolha].cidade
    })  
    radioPlayer.src = radios[escolha].link
}


prevButton.forEach((prev) => {
    prev.addEventListener('click', () => {
        escolha = escolha === 0 ? radios.length - 1 : escolha -= 1
        inicio()
    })
})

playButton.forEach((play) => {
    play.addEventListener('click', () => {
        if(isplayPause){
            isplayPause = false
            playRadio()
        }else{
            isplayPause = true
            pausaRadio()
        }
    })
})

nextButton.forEach((next) => {
    next.addEventListener('click', () => {
        escolha = escolha === radios.length - 1 ? 0 : escolha += 1
        inicio()
    })
})

inicio()
