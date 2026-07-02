import { criarElemento } from "../../componentes/criarElemento.js"
import { criarTabela } from "../../componentes/criarTabela.js"

export function mostrarMelhoresTerceiros(campeonato, section){
    let divJogo = document.createElement('div')
    divJogo.appendChild(criarTabela(campeonato.melhoresTerceiros, 'Melhores Terceiros'))
    section.appendChild(divJogo)
}