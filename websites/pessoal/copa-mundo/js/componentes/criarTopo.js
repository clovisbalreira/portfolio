import { criarElemento } from "./criarElemento.js"

export function criarTopo(jogo, eliminatorio = false, fase = false){
    let div = document.createElement('div')
    div.classList.add('topo')
    if(eliminatorio){
        div.classList.add('topo-fase-eliminatorio')
        if(jogo.rodada == 1) div.appendChild(criarElemento('span', jogo.fase))
    }else {
        fase ? div.appendChild(criarElemento('span', `Jogo ${jogo.rodada}`)) :
        div.appendChild(criarElemento('span', `${jogo.rodada}º Rodada`))
    }
    return div
}