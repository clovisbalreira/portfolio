import { gravarFavoritos } from "./like.js";

export function mostrarPlayer(radio, programacao){
    let player = document.getElementById('player')
    let audio = document.createElement('audio')
    audio.id = "radioPlayer"
    audio.autoplay = true;
    audio.loop = true;
    audio.src = `./sons/${radio.url}`
    player.appendChild(audio)
    let audioPrincipal = document.createElement('div')
    audioPrincipal.id = 'audio-principal'
    let audioComandos = document.createElement('div')
    audioComandos.id = 'audio-comandos'
    audioPrincipal.appendChild(audioComandos)
    let divAudio = document.createElement('div')
    divAudio.id = 'img-audio'
    let imgAudioImagem = document.createElement('img')
    imgAudioImagem.id = 'audio-imagem'
    imgAudioImagem.alt = radio.nome 
    imgAudioImagem.src = `./img/radio/${radio.imagem}`
    divAudio.appendChild(imgAudioImagem)
    let divAudioPlayPause = document.createElement('div')
    divAudioPlayPause.id = 'audio-play-pause'
    let divLike = document.createElement('div')
    divLike.id = 'like'
    divLike.innerHTML = '<i class="fa-regular fa-heart"></i>'
    divAudioPlayPause.appendChild(divLike)
    let audioPlay = document.createElement('div')
    audioPlay.id = 'audio-play'
    audioPlay.classList.add('audio-play-pause')
    divAudioPlayPause.appendChild(audioPlay)
    let audioPlayPause = document.createElement('div')
    audioPlayPause.id = 'audio-pause'
    audioPlayPause.classList.add('audio-play-pause')
    let divPause1 = document.createElement('div')
    audioPlayPause.appendChild(divPause1)
    let divPause2 = document.createElement('div')
    audioPlayPause.appendChild(divPause2)
    divAudioPlayPause.appendChild(audioPlayPause)
    divAudio.appendChild(divAudioPlayPause)
    let divAudioInput= document.createElement('div')
    divAudioInput.id = 'audio-input-div'
    divAudioInput.innerHTML = '<i class="fa-solid fa-volume-high"></i>'
    let range = document.createElement('input')
    range.id = 'vol-control'
    range.type = 'range';
    range.min = '0';
    range.max = '100';
    range.value = '50';
    range.step = '1';
    divAudioInput.appendChild(range)
    let audioFundo = document.createElement('div')
    audioFundo.id = 'audio-fundo'
    audioComandos.appendChild(audioFundo)
    let audioFrase = document.createElement('div')
    audioFrase.id = 'audio-frase'
    audioComandos.appendChild(divAudio)
    audioComandos.appendChild(divAudioInput)
    audioComandos.appendChild(audioFrase)
    audioPrincipal.appendChild(audioComandos)
    player.appendChild(audioPrincipal)
    mostrarFrase(programacao)
    gravarFavoritos()
}

const mostrarFrase = (programacao) => {
    let intervalID
    const radioPlayer = document.getElementById('radioPlayer');
    const playButton = document.querySelectorAll('.audio-play-pause');
    const play = document.getElementById('audio-play')
    const pause = document.getElementById('audio-pause')
    const volumeControl = document.getElementById('vol-control');
    const frase = document.getElementById('audio-frase')
    frase.innerHTML = ''
    
    let isplayPause = false

    const estaEntre = (horaMinutos, horaInicio, horaFim) => {
        return horaMinutos >= horaInicio && horaMinutos < horaFim;
    }

    const programa = (horaMinutos, programacao) => {
        let programaAtual = []
        programacao.dia.forEach( programa => {
            programa.programas.forEach( (tempo, index) => {
                if(estaEntre(horaMinutos, tempo.horaInicio, tempo.horaFim)){
                    programaAtual.push({indice : index, nome : tempo.programa.nome})
                }
            })
        })
        return programaAtual
    }

    const programaDepois = (diaAtual, horaMinutos, programacao) => {
        let indice = programa(horaMinutos, programacao)[0].indice
        let nome = programa(horaMinutos, programacao)[0].nome
        let programaApos = 'Agora'
        programacao.dia.forEach( (programa, index)=> {
            if(programa.programas.length - 1 == indice){
                if((diaAtual == 6 ? 0 : diaAtual + 1) === index){
                    programaApos = nome == programa.programas[0].nome ? programa.programas[1].nome : programaApos = programa.programas[0].nome
                }
            }else if(diaAtual === index){
                programaApos = programa.programas[parseInt(indice) + 1].programa.nome
            }
        })
       return programaApos
    }

    const comecarTocar = () => {
        if(isplayPause){
            play.style.display = 'block'
            pause.style.display = 'none'
            isplayPause = false
            radioPlayer.pause();
        }else{
            play.style.display = 'none'
            pause.style.display = 'flex'
            isplayPause = true
            radioPlayer.play();
        }
    }
    
    playButton.forEach((plays) => {
        plays.addEventListener('click', comecarTocar)}
    )

    volumeControl.addEventListener('input', function() {
        radioPlayer.volume = parseFloat(volumeControl.value) / 100;
    });

    function tagClicar(event) {
        if(event.target.parentNode.classList.contains('button-radios')){
            comecarTocar()
        }
    }
    
    document.addEventListener('click', tagClicar);
    clearInterval(intervalID)
    intervalID = setInterval( () => {
        let data = new Date()
        let diaAtual = data.getDay()
        let hora = data.getHours()
        let minutos = data.getMinutes()
        let horaMinutos = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`
        frase.innerHTML = `${programacao.radio.nome} - ${programacao.radio.slogan} | Você está ouvindo agora: ${programa(horaMinutos, programacao)[0].nome} | Em seguida, você vai ouvir: ${programaDepois(diaAtual, horaMinutos, programacao)} | ${programacao.radio.site} | ${programacao.radio.cidade}, ${programacao.radio.estado}, ${programacao.radio.pais}.`
    }, 1000)
    radioPlayer.play()
}