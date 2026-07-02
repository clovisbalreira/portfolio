import { criarElemento } from "./criarElemento.js"
import { criarImg } from "./criarImg.js"

export function criarHeader(campeonato){
    let section = document.createElement('section')
    section.classList.add('pais-sede')
    section.appendChild(paisSede(campeonato))
    section.appendChild(criarElemento('h2', `${campeonato.campeonato.nome} - ${campeonato.ano}`))
    section.appendChild(mascote(campeonato))
    return section
}

function paisSede(campeonato){
    let div = document.createElement('div')
    campeonato.sede.forEach( pais => {
        div.appendChild(criarImg(pais.imagem, pais.nome))
    })
    return div
}

function mascote(campeonato){
    if(campeonato.mascote == ''){
        return paisSede(campeonato)
    }else{
        let div = document.createElement('div')
        div.appendChild(criarImg(`img/mascotes/${campeonato.mascote}`, campeonato.nome))
        return div
    }
}