
function jogar(){
    let nomeJogador = document.getElementById('nome').value
    let p = document.querySelector('p')
    p.textContent = ''
    if(nomeJogador == ''){  
        p.textContent = 'Preencha seu nome!'
        p.style.color = 'red'   
        return  
    }
    desabilitarInput(document.getElementById('nome'))
    desabilitarBotao(document.getElementById('btn-input'))
    document.getElementById('adicionarPersonagem').style.display = 'block'
    let personagens = []
    let posicao = 1
    timeJogador(posicao, personagens, nomeJogador)
}

function iniciarJogo(array, nomeJogador){
    let viloes = []
    timeViloes(viloes, array)
    mostrarTimes(array, viloes, true, nomeJogador)
}

function timeJogador(posicao, array, nomeJogador){
    criarInput(posicao)
    let p = document.querySelector('p')
    let btnAdicionar = document.getElementById('adicionar')
    btnAdicionar.addEventListener('click', () => {
        let nome = document.getElementById('nome-personagem').value
        if(nome == ''){
            p.textContent = 'Preencha o nome do personagem!'
            p.style.color = 'red'  
        }else{
            posicao++
            p.textContent = ''
            let forcaPersonagem = Math.floor(Math.random() * 10) + 1  
            array.push({nome: nome, forca: forcaPersonagem})
        }
        timeJogador(posicao, array, nomeJogador)
    })
    let btnIniciarJogo = document.getElementById('iniciar-jogo')
    btnIniciarJogo.addEventListener('click', () => {
        if(posicao > 1){
            p.textContent = ''  
            desabilitarInput(document.getElementById('nome-personagem'))
            desabilitarBotao(btnAdicionar)
            desabilitarBotao(btnIniciarJogo)
            iniciarJogo(array, nomeJogador)   
        }else{
            p.textContent = 'Adicione pelo menos um personagem!'
            p.style.color = 'red'  
            return
        }
    })
    if(posicao >= 10){
        desabilitarInput(document.getElementById('nome-personagem'))
        desabilitarBotao(btnAdicionar)
        desabilitarBotao(btnIniciarJogo)
        iniciarJogo(array, nomeJogador)
    }
}

function desabilitarInput(input){
    input.setAttribute('readonly', true)
}

function desabilitarBotao(botao){
    botao.setAttribute('disabled', true)
}

function criarInput(posicao){
    let divInput = document.getElementById('input')
    divInput.innerHTML = ''
    let div = document.createElement('div')
    div.classList.add('input')
    let label = document.createElement('label')
    label = document.createElement('label')
    label.textContent = `Digite o ${posicao}º jogador`
    div.appendChild(label)
    let input = document.createElement('input')
    div.appendChild(input)
    input.id = 'nome-personagem'
    input.type = 'text'
    div.appendChild(criarBotao('Adicionar', 'adicionar'))
    div.appendChild(criarBotao('Iniciar Jogo', 'iniciar-jogo'))
    divInput.appendChild(div)
}

function criarBotao(texto, id){
    let btn = document.createElement('button')
    btn.id = id
    btn.classList.add('btn-input')
    btn.textContent = texto
    return btn
}

function timeViloes(array, personagens){
    nomes = [
        "Darth Vader", "Joker", "Thanos", "Voldemort", "Loki", "Magneto", "Palpatine", "Doctor Octopus", "Freddy Krueger", "Dracula"
    ]   
    for(let index = 0; index < personagens.length; index++){
        let indiceAleatorio = Math.floor(Math.random() * nomes.length)
        let forcaPersonagem = Math.floor(Math.random() * 10) + 1  
        array.push({nome: nomes[indiceAleatorio], forca: forcaPersonagem})
        nomes.splice(indiceAleatorio, 1)
    }
}

function mostrarTimes(personagens, viloes, condicao, nomeJogador){
    mostrarArrays("informacoesJogador", personagens, condicao)
    mostrarArrays("informacoesComputador", viloes, condicao)
    let botao = document.getElementById("resultadoBtn")
    botao.style.display = 'block'
    botao.addEventListener('click', () => mostrarResultado(personagens, viloes, nomeJogador))
}

function mostrarArrays(id, array, condicao){
    let ul = document.getElementById(id)
    ul.innerHTML = ''
    let li
    array.forEach( dado => {
        li = document.createElement('li')
        li.textContent = `${dado.nome} ${condicao ? '' : ` - ${dado.forca}`}`
        ul.appendChild(li)
    })
}

function mostrarResultado(personagens, viloes, nomeJogador){
    let forcaPersonagem = personagens.reduce((total, personagem) => {
        return total += personagem.forca
    }, 0)
    let forcaVilao = viloes.reduce((total, vilao) => {
        return total += vilao.forca
    }, 0)
    let resultado
    let pResultado = document.getElementById("resultadoFinal")
    if(forcaPersonagem > forcaVilao){
        resultado = `Seu time é forte! ${nomeJogador} ganhou o capo de guerra! Sua força foi: ${forcaPersonagem}`
        pResultado.style.color = 'green'
    }else if(forcaPersonagem < forcaVilao){
        resultado = `Seu time é fraquinho! O computador ganhou o capo de guerra! Sua força foi: ${forcaPersonagem}`
        pResultado.style.color = 'red'
    }else{
        resultado = `Equipes com força iguais com muito esforço `
        let esforco = Math.floor(Math.random() * 2) + 1
        if( esforco == 1){
            resultado += `${nomeJogador} ganhou o capo de guerra! Sua força foi: ${forcaPersonagem}`
        pResultado.style.color = 'green'
        }else{
            resultado += `o computador ganhou o capo de guerra! Sua força foi: ${forcaPersonagem}`
            pResultado.style.color = 'red'
        }  
    }
    mostrarTimes(personagens, viloes, false)
    pResultado.textContent = resultado
    desabilitarBotao(document.getElementById('resultadoBtn'))
    document.getElementById('botoes').appendChild(criarBotaoResetar())
}

function criarBotaoResetar(){
    let btnResetar = document.createElement('button')
    btnResetar.textContent = 'Reiniciar Jogo'
    btnResetar.addEventListener('click', () => location.reload())
    return btnResetar
}
