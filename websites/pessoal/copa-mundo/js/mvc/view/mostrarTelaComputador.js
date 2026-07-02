import { mostrarGruposConputador } from "./mostrarGruposConputador.js"
import { mostrarFaseEliminatoriaConputador } from "./mostrarFaseEliminatoriaConputador.js"

export function mostrarTelaComputador(campeonato){
    let fasesEliminatorio = campeonato.fases.filter( fase => !fase.nome.includes('Grupo'))
    let section = document.createElement('section')
    section.classList.add('computador')
    section.appendChild(mostrarGruposConputador(campeonato, fasesEliminatorio, section))
    section.appendChild(mostrarFaseEliminatoriaConputador(campeonato, fasesEliminatorio))
    return section
}