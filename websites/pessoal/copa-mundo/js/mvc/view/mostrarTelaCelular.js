import { criarTabela } from "../../componentes/criarTabela.js"
import { criarTopo } from "../../componentes/criarTopo.js"
import { criarPlacar } from "../../componentes/criarPlacar.js"
import { criarGols } from "../../componentes/criarGols.js"
import { mostrarInfo } from "./mostrarInfo.js"
import { mostrarMelhoresTerceiros } from "./mostrarMelhoresTerceiros.js"
import { mostrarEliminatoriaTelaCelular } from "./mostrarEliminatoriaTelaCelular.js"

export function mostrarTelaCelular(campeonato){
    let section = document.createElement('section')
    section.classList.add('celular')
    let terceiros = true
    campeonato.fases.forEach( fase => {
        let div = document.createElement('div')
        let divEliminatorio = document.createElement('div')
        divEliminatorio.classList.add('card-jogo')
        divEliminatorio.id = fase.nome 
        fase.fase.forEach( (jogos, index) => {
            if(jogos.participantes != undefined){
                let divTabela = document.createElement('div')
                divTabela.classList.add('grupos')
                divTabela.appendChild(criarTabela(jogos))
                divTabela.appendChild(criarJogosGrupos(jogos))
                div.appendChild(divTabela)
                section.appendChild(div)
            }else{
                if(terceiros){
                    mostrarMelhoresTerceiros(campeonato, div)
                    terceiros = false
                }
                mostrarEliminatoriaTelaCelular(divEliminatorio, jogos, div, section)
            }
        })
    })
    return section
}

function criarJogosGrupos(jogos){
    let div = document.createElement('div')
    div.classList.add('card-jogo')
    let rodadaAnterior = 0
    jogos.jogos.forEach( jogo => {
        if(rodadaAnterior != jogo.rodada) div.appendChild(criarTopo(jogo))        
        div.appendChild(criarPlacar(jogo))     
        div.appendChild(criarGols(jogo))     
        div.appendChild(mostrarInfo(jogo))     
        rodadaAnterior = jogo.rodada   
    })
    return div
}