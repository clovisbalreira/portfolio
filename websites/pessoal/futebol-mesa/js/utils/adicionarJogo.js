import { criarTag } from "./tags/criarTag.js"

export function adicionarJogo(classe, dados){
    let div = document.createElement('div')
    div.classList.add(classe)
    dados.forEach( dado => {
        div.appendChild(criarTag('p', dado))
    })
    return div
}