import { associacoes } from "../controll/associacoes.js"

export function mostrarAssociacoes(){
    let ul = document.getElementById('menu-associacoes')
    associacoes.forEach( associacao => {
        let li = document.createElement('li')
        li.textContent = associacao.sigla
        li.classList.add('lista-associacao')
        ul.appendChild(li)
    })
}