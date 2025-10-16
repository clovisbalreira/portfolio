import { cursos } from '../controll/cursos.js'
import { criarElemento } from '../../utils/criarElemento.js'
import { formatarData } from '../../utils/formatarData.js'

export function mostrarCursos(){
  let divFormacaoContainer = document.getElementById('formacao-container')
  cursos.forEach( curso => {
    let a = criarElemento('a', 'link')
    a.href = curso.link
    a.target = '_blank'
    let divCurso = criarElemento('div', 'curso')
    let pTitulacao = criarElemento('p', 'periodo')
    pTitulacao.textContent = `${formatarData(curso.dataInicio)} - ${formatarData(curso.dataFim)}`
    divCurso.appendChild(pTitulacao)
    let h3Instituicao = criarElemento('h3', 'instituicao')
    h3Instituicao.textContent = curso.instituicao
    divCurso.appendChild(h3Instituicao)
    let pPeriodo = criarElemento('p', 'titulacao')
    pPeriodo.textContent = curso.nome
    divCurso.appendChild(pPeriodo)
    a.appendChild(divCurso)
    divFormacaoContainer.appendChild(a)
  })
}