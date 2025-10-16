import { projetos } from "../controll/projetos.js"
import { criarElemento } from "../../utils/criarElemento.js";

export function mostrarProjetos(){
    let divProjetosContainer = document.getElementById('projeto-container')
    projetos.forEach( projeto => {
        let divProjeto = criarElemento('div', 'projeto')
        let a = criarElemento('a', 'a')
        a.href = projeto.link
        a.target = '_black'
        let img = criarElemento('img', 'foto')
        img.src = projeto.imagem
        img.alt = projeto.titulo
        a.appendChild(img)
        divProjeto.appendChild(a)
        let divProjetoInfo = criarElemento('div', 'projeto-info')
        let periodo = criarElemento('p', 'periodo')
        periodo.textContent = projeto.periodo
        divProjetoInfo.appendChild(periodo)
        let h3 = criarElemento('h3', 'titulo')
        h3.textContent = projeto.titulo
        divProjetoInfo.appendChild(h3)
        let subtitulo = criarElemento('p', 'subtitulo')
        subtitulo.textContent = projeto.subtitulo
        divProjetoInfo.appendChild(subtitulo)
        let details = criarElemento('details', 'details')
        let summary = criarElemento('summary', 'summary')
        summary.textContent = 'Saiba mais...'
        details.appendChild(summary)
        let descricao = criarElemento('p', 'descricao')
        descricao.textContent = projeto.descricao
        details.appendChild(descricao)
        divProjetoInfo.appendChild(details)
        divProjeto.appendChild(divProjetoInfo)
        divProjetosContainer.appendChild(divProjeto)
    })
}