import { criarTh } from "../../utils/tabela/criarTh.js"
import { criarThead } from "../../utils/tabela/criarThead.js"
import { criarTd } from "../../utils/tabela/criarTd.js"
import { mediaFatura } from "../../utils/fatura/mediaFatura.js"

export function mostrarContasMensal(nome, contas){
    let contasAtualizadas = contas.filter( conta => {
            return conta.nome == nome
    })    
    let tabela = mediaFatura(contasAtualizadas)
    let titulos = [`Contas ${nome}`]
    let sectionLuz = document.getElementById(nome.toLowerCase())
    sectionLuz.innerHTML = ''
    let table = document.createElement('table')
    table.appendChild(criarThead(titulos))
    table.querySelector('thead').querySelector('tr').querySelector('th').colSpan = 3
    let tbody = document.createElement('tbody')
    let tr = document.createElement('tr')
    tr.appendChild(criarTh('Validade'))
    tr.appendChild(criarTh('Consumo'))
    tr.appendChild(criarTh('Valor'))
    tbody.appendChild(tr)
    contasAtualizadas.forEach( conta => {
        conta.valorTotal.forEach( (c, index) => {
        tr = document.createElement('tr')
            backgroundColorTr(tr, tabela, conta.valorTotal[index].consumo)
            tr.appendChild(criarTd(`${new Date(conta.valorTotal[index].data).getDate(conta.valorTotal[index].data) < 10 ? `0${new Date(conta.valorTotal[index].data).getDate(conta.valorTotal[index].data)}` : new Date(conta.valorTotal[index].data).getDate(conta.valorTotal[index].data)}/${new Date(conta.valorTotal[index].data).getMonth(conta.valorTotal[index].data) + 1 < 10 ? `0${new Date(conta.valorTotal[index].data).getMonth(conta.valorTotal[index].data) + 1}` : new Date(conta.valorTotal[index].data).getMonth(conta.valorTotal[index].data) + 1 }/${new Date().getFullYear()}`, 0, false))
            tr.appendChild(criarTd(`${conta.valorTotal[index].consumo}${nome == 'Luz' ? ` - (kWh)` : ` - (m³)`}`, 0, false))
            tr.appendChild(criarTd(conta.valorTotal[index].valor, 0, true))
            tbody.appendChild(tr)
        })
    })
    table.appendChild(tbody)
    let tfoot = document.createElement('tfoot')
    let titulosTfoot = ['Consumo', 'Mensal', 'Diario']
    tr = document.createElement('tr')
    titulosTfoot.forEach( titulo => {
        tr.appendChild(criarTh(titulo))
        tfoot.appendChild(tr)
    })
    tabela.forEach( dado => {
        tr = document.createElement('tr')
        tr.style.backgroundColor = dado.cor
        tr.appendChild(criarTh(dado.condicao))
        tr.appendChild(criarTd(`${contasAtualizadas[0].nome == 'Luz' ? `${(dado.consumo).toFixed(2)} - (kWh)` : `${(dado.consumo).toFixed(2)} - (m³)`}`))
        tr.appendChild(criarTd(`${contasAtualizadas[0].nome == 'Luz' ? `${(dado.consumo / 31).toFixed(2)} - (kWh)` : `${(dado.consumo / 31).toFixed(2)} - (m³)`}`))
        tfoot.appendChild(tr)
    })
    table.appendChild(tfoot)
    sectionLuz.appendChild(table)
} 

function backgroundColorTr(tr, tabela, conta){
    for( const contaTabela of tabela){
        if(conta == contaTabela.consumo) tr.style.backgroundColor = contaTabela.cor
    }
}