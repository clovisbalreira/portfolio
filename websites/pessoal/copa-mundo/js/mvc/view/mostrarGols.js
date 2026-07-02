import { criarElemento } from "../../componentes/criarElemento.js"

export function mostrarGols(gols, classe){
    let div = document.createElement('div')
    div.classList.add(classe)
    if(gols != undefined && typeof gols == 'object'){
        gols.forEach( gol => {
            div.appendChild(criarElemento('p', `${gol.favor ? '⚽' : '❌⚽'} ${gol.nome}` ))
        })
    }
    return div
}