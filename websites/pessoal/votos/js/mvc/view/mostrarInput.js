import { configuracoes } from "../controll/configuracoes.js"

export function mostrarInputs(){
    let divConfiguracao = document.getElementById('configuracao')
    let div = document.createElement('div')
    div.id = 'configuracao-div'
    let p = document.createElement('p')
    div.innerHTML = '<i class="fa-solid fa-filter"></i>'
    p.textContent = 'Configurações'
    div.appendChild(p)
    divConfiguracao.appendChild(div)
    let configuracao = [
        { id: 'configurao-deputado', titulo: 'Deputado', valores: configuracoes.deputados},
        { id: 'configurao-partido', titulo: 'Partido', valores: configuracoes.partidos},
        { id: 'configurao-lei', titulo: 'Lei', valores: configuracoes.leis},
    ] 
    divConfiguracao.appendChild(divInputs(configuracao))   
    configuracao.forEach( dado => {
        escolherInput(dado.id)
    })
}

function divInputs(configuracao){
    let div = document.createElement('div')
    div.id = 'div-inputs'
    configuracao.forEach( dado => {
        div.appendChild(divInput(dado.id, dado.titulo, dado.valores))
    })
    return div
}

function divInput(id, texto, numero){
    let div = document.createElement('div')
    div.appendChild(criarLabel(id, texto))
    div.appendChild(criarInput(id, numero))
    return div
}

function criarLabel(id, texto){
    let label = document.createElement('label')
    label.for = id
    label.textContent = texto
    return label
}

function criarInput(id, numero){
    let input = document.createElement('input')
    input.id = id
    input.min = 1
    input.max = 10
    input.type = 'number'
    input.value = numero
    return input
}

function escolherInput(id) {
    const input = document.getElementById(id);
    input.addEventListener('change', () => {
        mudarValores(id, input)
    })
    input.addEventListener('input', () => {
        mudarValores(id, input)
    })
}

function mudarValores(id, input){
    if(id.includes('deputado')){
        configuracoes.deputados = isNaN(parseInt(input.value)) || (parseInt(input.value) > 0 && parseInt(input.value) <= 10)? parseInt(input.value) : 1
    }else if(id.includes('partido')){
        configuracoes.partidos = parseInt(input.value)
    }else if(id.includes('lei')){
        configuracoes.leis = parseInt(input.value)
    }
}
