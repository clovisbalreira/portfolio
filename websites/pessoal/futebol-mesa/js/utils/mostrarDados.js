import { listas } from "./listas.js"

export function mostrarDados(dados, texto, id){
    let div = document.createElement('div')
    div.id = id
    div.appendChild(listas(dados, { tag: 'h2', nome: texto} , '' , ''))
    return div
}