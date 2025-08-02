import { valoresSelects } from "./valoresSelects.js"
import { incluirContas } from "../mvc/control/contas.js"

export function contaFutura(nome, contas){
    let resultado = 'maior'
    let contaFiltro = contas.filter( conta => conta.nome == nome)
    if(new Date(contaFiltro[0].valorTotal[contaFiltro[0].valorTotal.length - 1].data).getFullYear() >= valoresSelects().ano && new Date(contaFiltro[0].valorTotal[contaFiltro[0].valorTotal.length - 1].data).getMonth() + 1 >= valoresSelects().mes){
        resultado = 'maior'
    }else if(new Date(contaFiltro[0].valorTotal[contaFiltro[0].valorTotal.length - 1].data).getFullYear() <= valoresSelects().ano && new Date(contaFiltro[0].valorTotal[contaFiltro[0].valorTotal.length - 1].data).getMonth() + 1 < valoresSelects().mes){
        resultado = 'media'
    }else if(new Date(contaFiltro[0].valorTotal[contaFiltro[0].valorTotal.length - 1].data).getFullYear() <= valoresSelects().ano){
        resultado = 'media'
    }
    let valores = contaFiltro.map(conta => {
        let valor = 0
        if(Array.isArray(conta.valorTotal)){
            conta.valorTotal.map( data => { 
                if(new Date(data.data).getMonth() + 1 == valoresSelects().mes && new Date(data.data).getFullYear() == valoresSelects().ano){
                    valor = data.valor
                }
            })
        }
        return valor
    })
    let incluir = true
    contaFiltro.forEach( conta => {
        if(new Date(conta.dataPagamento).getMonth() + 1 == valoresSelects().mes && new Date(conta.dataPagamento).getFullYear() == valoresSelects().ano){
            incluir = false
        }
    })
    if(contaFiltro.length == 0){
        incluir = false
    }
    if(incluir){
        let valor = 0
        if(resultado == 'media'){
            valor = contaFiltro[0].valorTotal.reduce((max, item) => item.valor > max ? item.valor : max, 0)
        }else if(resultado == 'maior'){
            valor = valores        
        }
        incluirContas(contas, contaFiltro[0].nome, new Date(`${valoresSelects().mes.padStart(2, '0')}/${new Date(contaFiltro[0].dataPagamento).getDate()}/${valoresSelects().ano}`), valor, contaFiltro[0].modo, contaFiltro[0].forma, contaFiltro[0].tipoPagamento, contaFiltro[0].formaPagamento, contaFiltro[0].pagadores)
    }
}