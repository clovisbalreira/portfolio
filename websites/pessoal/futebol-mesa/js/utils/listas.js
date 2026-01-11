import { criarTag } from "./tags/criarTag.js"
import { criarUl } from "./tags/criarUl.js"

export function listas(dados, tag){
    let div = document.createElement('div')
    if(tag != '') div.appendChild(criarTag(tag.tag, tag.nome))
    div.appendChild(criarUl(dados))
    return div
}