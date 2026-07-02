import { criarTopo } from "../../componentes/criarTopo.js"
import { criarPlacar } from "../../componentes/criarPlacar.js"
import { criarGols } from "../../componentes/criarGols.js"
import { mostrarInfo } from "./mostrarInfo.js"

export function mostrarJogosTabelasComputador(campeonato, section){
    let jogosGrupo = campeonato.jogos.filter( jogo => jogo.fase.length == 1)
    let div = document.createElement('div')
    div.classList.add('card-jogo')
    let rodada = 0
    jogosGrupo.forEach( jogo => {
        let divJogo = document.createElement('div')
        if(jogo.rodada != rodada) divJogo.appendChild(criarTopo(jogo))        
        divJogo.appendChild(criarPlacar(jogo))     
        divJogo.appendChild(criarGols(jogo))     
        divJogo.appendChild(mostrarInfo(jogo))
        div.appendChild(divJogo)
        section.appendChild(div)
        rodada = jogo.rodada
    })
}