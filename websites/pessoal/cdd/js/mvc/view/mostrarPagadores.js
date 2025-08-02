import { pagadores } from "../control/pagadores.js"
import { linkWhatsap } from "../../utils/linkWhatsap.js"
import { criarThead } from "../../utils/tabela/criarThead.js"
import { criarTbody } from "../../utils/tabela/criarTbody.js"
import { criarTabela } from "../../utils/tabela/criarTabela.js"

export function mostrarPagadores(){
    let titulos = ['Pagadores']
    let divPagadores = document.getElementById('pagadores')
    divPagadores.innerHTML = ''
    let table = document.createElement('table')
    table.appendChild(criarThead(titulos))
    let tbody = document.createElement('tbody')
    pagadores.forEach( (pagador, index) => {
        let tr = document.createElement('tr')
        tbody.appendChild(tr)
        let a = linkWhatsap(pagador)
        titulos = [pagador.nome, a]
        tr.appendChild(criarTabela(6, 'pagador-nome', pagador.nome.replace(' ', '-').toLowerCase()))
        let tablePagador = tr.querySelector('td').querySelector('table')
        tablePagador.appendChild(criarThead(titulos, `pagador-thead-${index}`))
        tablePagador.appendChild(criarTbody(`pagador-body-${index}`))
        let tbodyPagador = tablePagador.querySelector('tbody')
        let trTable = document.createElement('tr')
        trTable.appendChild(criarTabela(6, 'conta', index))
        tbodyPagador.appendChild(trTable)
    })
    table.appendChild(tbody)
    divPagadores.appendChild(table)
}
