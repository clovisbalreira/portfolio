import { criarTabela } from "../../componentes/criarTabela.js"

export function mostrarClassificacaoGoleadores(campeonato){
    let section = document.createElement('section') 
    section.classList.add('classificacao-goleadores')
    section.appendChild(criarTabela(campeonato, 'Classificação Geral'))
    section.appendChild(criarTabela(campeonato, 'Goleadores'))
    return section
}