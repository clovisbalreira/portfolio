import { criarTabela } from "./criarTabela.js"
import { criarThead } from "./criarThead.js";
import { criarTbody } from "./criarTbody.js";
import { criarTd } from "./criarTd.js";

export function tabelaAcoes(index, fatura){
    let trTable = document.createElement('tr')
    trTable.appendChild(criarTabela(6, 'acao', index))
    let table = trTable.querySelector('td').querySelector('table')
    let titulos = ['Nome', 'Sigla', 'Quantidade', 'Valor Ação', 'Valor Total', 'Valor Investido', 'Lucro', 'Data Dividendos', 'Valor Dividendos']
    table.appendChild(criarThead(titulos))
    table.appendChild(criarTbody('1'))
    let tr = document.createElement('tr')
    tr.appendChild(criarTd(fatura.acao.nome, 1, false))
    tr.appendChild(criarTd(fatura.acao.sigla, 1, false))
    tr.appendChild(criarTd(fatura.acao.ativo[fatura.acao.ativo.length - 1].quantidade, 1, false))
    tr.appendChild(criarTd(`R$ ${parseFloat(fatura.acao.ativo[fatura.acao.ativo.length - 1].valorAtual / fatura.acao.ativo[fatura.acao.ativo.length - 1].quantidade).toFixed(2)}`, 1, false))
    tr.appendChild(criarTd(fatura.acao.ativo[fatura.acao.ativo.length - 1].valorAtual, 1, true))
    tr.appendChild(criarTd(fatura.acao.ativo[fatura.acao.ativo.length - 1].valorInvestido, 1, true))
    tr.appendChild(criarTd(`R$ ${parseFloat(fatura.acao.ativo[fatura.acao.ativo.length - 1].valorAtual - fatura.acao.ativo[fatura.acao.ativo.length - 1].valorInvestido).toFixed(2)}`, 1, false, fatura.acao.ativo[fatura.acao.ativo.length - 1].valorAtual - fatura.acao.ativo[fatura.acao.ativo.length - 1].valorInvestido <= 0 ? 'red' : 'green'))
    tr.appendChild(criarTd(fatura.acao.dataRendimento, 1, false))
    tr.appendChild(criarTd(fatura.acao.ir, 1, false))
    table.querySelector('tbody').appendChild(tr)
    return trTable
}