import { criarTabela } from "./criarTabela.js"
import { criarThead } from "./criarThead.js";
import { criarTbody } from "./criarTbody.js";
import { criarTd } from "./criarTd.js";

export function tabelaParcela(index, fatura){      
    let trTable = document.createElement('tr')
    trTable.appendChild(criarTabela(6, 'parcelado', index))
    let table = trTable.querySelector('td').querySelector('table')
    let titulos = ['Parcelas', 'Validade', 'Valor']
    table.appendChild(criarThead(titulos))
    table.appendChild(criarTbody('1'))
    fatura.dataPagamento.forEach( (dados, parcelas) => {
        let tr = document.createElement('tr')
        if(dados.vencimento < new Date()){
            tr.style.color = 'red'
        }
        tr.appendChild(criarTd(`${parcelas + 1}`, 1, false))
        let data = new Date(dados.vencimento)
        tr.appendChild(criarTd(`${data.getDate() < 10 ? `0${data.getDate()}` : data.getDate()}/${data.getMonth() + 1 < 10 ? `0${data.getMonth() + 1 }` : data.getMonth() + 1 }/${data.getFullYear()}`, 1, false))
        tr.appendChild(criarTd(dados.valor, 1, true))
        table.querySelector('tbody').appendChild(tr)
    })
    return trTable
}