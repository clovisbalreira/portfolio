import { cartoes } from "../control/cartoes.js"
import { criarTabela } from "../../utils/tabela/criarTabela.js"
import { criarTbody } from "../../utils/tabela/criarTbody.js"
import { criarThead } from "../../utils/tabela/criarThead.js"
import { criarTd } from "../../utils/tabela/criarTd.js"



export function mostrarCartoes(){    
    let titulos = ['Pagamento', 'Validade', 'Fatura', 'Limite', 'Crédito', 'Anuidade']
    let divCartoes = document.getElementById('cartoes')
    divCartoes.innerHTML = ''
    let table = document.createElement('table')
    table.appendChild(criarThead(titulos))
    let tbody = document.createElement('tbody')
    cartoes.forEach( (cartao, index) => {
        let tr = document.createElement('tr')
        tbody.appendChild(tr)
        tr.appendChild(criarTabela(6, 'forma-pagamento', cartao.nome.replace(' ', '-').toLowerCase()))
        let tableFormaPagamento = tr.querySelector('td').querySelector('table')
        titulos = ['Pagamento', 'Validade', 'Fatura', 'Limite', 'Crédito', 'Anuidade']
        tableFormaPagamento.appendChild(criarThead(titulos))
        tableFormaPagamento.appendChild(criarTbody(`forma-pagamento-body-${index}`))
        let theadFormaPagamento = tableFormaPagamento.querySelector('thead')
        let trDados = document.createElement('tr')
        theadFormaPagamento.appendChild(trDados)
        trDados.setAttribute('id', `cartao-thead-${index}`)
        if( cartao.nome == 'Dinheiro'){  
            trDados.appendChild(criarTd(cartao.nome, 2, false))
            trDados.appendChild(criarTd(0, 4, true))
        }else{
            trDados.appendChild(criarTd(cartao.nome, 1, false))
            trDados.appendChild(criarTd(cartao.validade, 1,    false))
            trDados.appendChild(criarTd(cartao.adicionarAnuidade() , 1, true))
            trDados.appendChild(criarTd(cartao.limite, 1, true))
            trDados.appendChild(criarTd(0, 1, true))
            trDados.appendChild(criarTd(cartao.anuidade, 1, true))
        }
        let tbodyFormaPagamento = tableFormaPagamento.querySelector('tbody')
        let trTable = document.createElement('tr')
        trTable.appendChild(criarTabela(6, 'cartao', index))
        tbodyFormaPagamento.appendChild(trTable)
    })
    table.appendChild(tbody)
    divCartoes.appendChild(table)
}

