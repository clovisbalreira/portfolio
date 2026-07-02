import { mostrarGols } from "../mvc/view/mostrarGols.js"

export function criarGols(jogo){
    let div = document.createElement('div')
    div.classList.add('gols')
    div.appendChild(mostrarGols(jogo.golsJogaresCasa, 'gols-casa'))
    div.appendChild(mostrarGols(jogo.golsJogaresFora, 'gols-fora'))
    return div
}