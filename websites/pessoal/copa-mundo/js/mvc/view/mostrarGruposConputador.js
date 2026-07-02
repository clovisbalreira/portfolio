import { mostrarTabelasComputador } from "./mostrarTabelasComputador.js"
import { mostrarJogosTabelasComputador } from "./mostrarJogosTabelasComputador.js"
import { mostrarMelhoresTerceiros } from "./mostrarMelhoresTerceiros.js"

export function mostrarGruposConputador(campeonato, faseEliminatorio){
    let div = document.createElement('div')
    div.classList.add(`computador-grupo-participantes${campeonato.participantes.length}-grupos${campeonato.fases.find( grupo => grupo.nome.includes('Grupo')).fase.length}`)
    mostrarTabelasComputador(campeonato, faseEliminatorio, div)
    mostrarJogosTabelasComputador(campeonato, div)
    mostrarMelhoresTerceiros(campeonato, div)
    return div
}