import { criarTabela } from "../../componentes/criarTabela.js"

export function mostrarTabelasComputador(campeonato, faseEliminatorio, div){
    let faseGrupos = campeonato.fases.find( fase => fase.nome.includes('Grupo'))
    faseGrupos.fase.forEach( participante => {
        let divJogo = document.createElement('div')
        divJogo.appendChild(criarTabela(participante))
        div.appendChild(divJogo)
    })
}