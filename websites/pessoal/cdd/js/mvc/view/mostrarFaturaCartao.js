import { contas } from "../control/contas.js";
import { cartoes } from "../control/cartoes.js";
import { criarTheadTbodyTfoot } from "../../utils/tabela/criarTheadTbodyTfoot.js";
import { criarTd } from "../../utils/tabela/criarTd.js";
import { atualizarFatura } from "../../utils/fatura/atualizarFatura.js";
import { contarParcelasPagas } from "../../utils/contarParcelasPagas.js";
import { atualizarHfoot } from "../../utils/tabela/atualizarHfoot.js";
import { tabelasPrestacoesAcoes } from "../../utils/tabela/tabelasPrestacoesAcoes.js";
import { atualizarThead } from "../../utils/tabela/atualizarThead.js";

export function mostrarFaturasCartao(){
    let numerosIndice = []
    let totalFatura = []
    let prefixo = 'fatura'
    contas.forEach( (conta, totalParcelasAcao) => {
        cartoes.forEach( (cartao, index) => {
            if(conta.formaPagamento == undefined) return
            if(cartao.nome == conta.formaPagamento.nome ){
                if (!numerosIndice.includes(index)) {
                    let titulos = ['Conta', 'Credito: Valor Total', 'Valor', 'Debito: Valor Total', 'Valor']
                    totalFatura = criarTheadTbodyTfoot(index, titulos, totalFatura, prefixo, 'cartao', cartoes, conta)
                }
                numerosIndice.push(index)
                totalFatura = criarLinhasFaturaCartao(conta, totalFatura, `${prefixo}-tbody-${index}`, totalParcelasAcao)
                atualizarHfoot(`${prefixo}-tfoot-${index}`, totalFatura)
            }
        })   
    })
    cartoes.forEach( ( cartao , index) => {
        atualizarThead(`cartao-thead-${index}`, totalFatura, cartao.tipoConta)
    })
}

function criarLinhasFaturaCartao(fatura, totalFatura, id, totalParcelasAcao){
    let tbody = document.getElementById(id)
    let index = parseInt(id.split('-').pop()); 
    let valorTotalCredito = 0
    let valorCredito = 0
    let tr = document.createElement('tr')
    if(fatura.formaPagamento.nome == 'Dinheiro' && fatura.modo == 'Crédito'){
        return totalFatura
    }
    let faturaAtualizada = atualizarFatura(fatura)
    
    if(faturaAtualizada.condicao){
        let valorAtual = faturaAtualizada.fatura.acao != null ? faturaAtualizada.fatura.valorTotal[faturaAtualizada.fatura.valorTotal.length - 1].valorAtual : typeof faturaAtualizada.fatura.valorTotal == 'number' ? faturaAtualizada.fatura.valorTotal : faturaAtualizada.fatura.valorTotal[faturaAtualizada.fatura.valorTotal.length - 1].valor
        let parcelasPagas = contarParcelasPagas(faturaAtualizada.fatura.dataPagamento)
        // tr nome da fatura
        tr.appendChild(criarTd(`${faturaAtualizada.fatura.nome} ${faturaAtualizada.fatura.dataPagamento[0] != undefined ? `( ${parcelasPagas + 1} / ${faturaAtualizada.fatura.dataPagamento.length} )` : ``}`, 1, false))
        if(faturaAtualizada.fatura.modo == 'Crédito'){
            if(fatura.formaPagamento.nome != 'Dinheiro'){
                tr.appendChild(criarTd(valorAtual - (parcelasPagas * (faturaAtualizada.fatura.valor * (faturaAtualizada.fatura.pagadores.length - 1))), 1, true ))
                tr.appendChild(criarTd(fatura.valor * fatura.pagadores.length, 1,true))
                valorTotalCredito = valorAtual - (parcelasPagas * (faturaAtualizada.fatura.valor * (faturaAtualizada.fatura.pagadores.length - 1)))
                valorCredito = fatura.valor * fatura.pagadores.length
            }
        }else{
            // tr valor total
            if(faturaAtualizada.fatura.pagadores.length == 1){
                if(faturaAtualizada.fatura.formaPagamento.nome == 'Dinheiro' ){
                    tr.appendChild(criarTd('-', 1, false))
                    tr.appendChild(criarTd('-', 1, false))
                }else {
                    tr.appendChild(criarTd(faturaAtualizada.fatura.pagadores[0].nome == faturaAtualizada.fatura.formaPagamento.donoCartao.nome ? '-' : valorAtual - (parcelasPagas * (faturaAtualizada.fatura.valor * faturaAtualizada.fatura.pagadores.length)), 1, faturaAtualizada.fatura.pagadores[0].nome == faturaAtualizada.fatura.formaPagamento.donoCartao.nome ? false : true))
                    tr.appendChild(criarTd(faturaAtualizada.fatura.pagadores[0].nome == faturaAtualizada.fatura.formaPagamento.donoCartao.nome ? '-' : faturaAtualizada.fatura.valor, 1, faturaAtualizada.fatura.pagadores[0].nome == faturaAtualizada.fatura.formaPagamento.donoCartao.nome ? false : true))
                    valorTotalCredito = faturaAtualizada.fatura.pagadores[0].nome == faturaAtualizada.fatura.formaPagamento.donoCartao.nome ? 0 : valorAtual - (parcelasPagas * (faturaAtualizada.fatura.valor * faturaAtualizada.fatura.pagadores.length))
                    valorCredito = faturaAtualizada.fatura.valor
                }
            }else{
                let donoCartao = false
                faturaAtualizada.fatura.pagadores.forEach( pagador => {
                    if(faturaAtualizada.fatura.formaPagamento.nome != 'Dinheiro' && faturaAtualizada.fatura.formaPagamento.donoCartao.nome == pagador.nome ){
                        donoCartao = true
                    }
                })
                if(donoCartao){
                    // tr valor Credito	
                    tr.appendChild(criarTd((faturaAtualizada.fatura.pagadores.length - 1) *(faturaAtualizada.fatura.valor * (faturaAtualizada.fatura.pagadores.length - 1)) , 1, true))
                    tr.appendChild(criarTd(faturaAtualizada.fatura.valor, 1, true))
                    valorTotalCredito = (valorAtual - (parcelasPagas * (faturaAtualizada.fatura.valor * (faturaAtualizada.fatura.pagadores.length - 1))))
                    valorCredito = faturaAtualizada.fatura.valor * (faturaAtualizada.fatura.pagadores.length - 1)    
                }else{
                    tr.appendChild(criarTd(faturaAtualizada.fatura.valor * (faturaAtualizada.fatura.pagadores.length - 1), 1, true))
                    tr.appendChild(criarTd(faturaAtualizada.fatura.valor, 1, true))
                    valorTotalCredito = faturaAtualizada.fatura.valor * (faturaAtualizada.fatura.pagadores.length - 1)
                    valorCredito = faturaAtualizada.fatura.valor
                }
            }
        }
        // tr valor total Debito
        tr.appendChild(criarTd(faturaAtualizada.fatura.modo == 'Debito' ? fatura.formaPagamento.nome == 'Dinheiro' ? valorAtual / faturaAtualizada.fatura.pagadores.length : valorAtual - (parcelasPagas * (faturaAtualizada.fatura.valor * faturaAtualizada.fatura.pagadores.length)) : '-' , 1, faturaAtualizada.fatura.modo == 'Debito' ? true : false))
        // tr valor total
        tr.appendChild(criarTd(faturaAtualizada.fatura.modo == 'Debito' ? faturaAtualizada.fatura.valor * faturaAtualizada.fatura.pagadores.length : '-' , 1, fatura.modo == 'Debito' ? true : false))
        let indexFatura = totalFatura.findIndex(elemento => elemento.indice === index);
        if((faturaAtualizada.fatura.formaPagamento.nome == 'Dinheiro' && faturaAtualizada.fatura.modo == 'Debito') || faturaAtualizada.fatura.modo == 'Debito' ){
            totalFatura[indexFatura].debitoValorTotal += fatura.formaPagamento.nome == 'Dinheiro' ? valorAtual / faturaAtualizada.fatura.pagadores.length : valorAtual - (parcelasPagas * faturaAtualizada.fatura.valor * faturaAtualizada.fatura.pagadores.length)
            totalFatura[indexFatura].debitoValor += faturaAtualizada.fatura.valor * faturaAtualizada.fatura.pagadores.length
            if(faturaAtualizada.fatura.pagadores.length > 1){
                faturaAtualizada.fatura.pagadores.forEach( pagador => {
                    if(pagador.nome != faturaAtualizada.fatura.pagadores[0].nome){
                        totalFatura[indexFatura].creditoValorTotal += valorTotalCredito / (faturaAtualizada.fatura.pagadores.length - 1)
                        totalFatura[indexFatura].creditoValor += valorCredito / (faturaAtualizada.fatura.pagadores.length - 1)
                    }
                }) 
            }else if( faturaAtualizada.fatura.formaPagamento.nome != 'Dinheiro'){
                if(faturaAtualizada.fatura.pagadores[0].nome != fatura.formaPagamento.donoCartao.nome && faturaAtualizada.fatura.pagadores.length == 1){
                    totalFatura[indexFatura].creditoValorTotal += valorTotalCredito
                    totalFatura[indexFatura].creditoValor += valorCredito
                }
            }
        }else{
            totalFatura[indexFatura].creditoValorTotal += valorTotalCredito
            totalFatura[indexFatura].creditoValor += valorCredito
        }
        tbody.appendChild(tr)
        if(faturaAtualizada.fatura.tipoPagamento.nome == 'Parcelado' || faturaAtualizada.fatura.acao != null){ 
            tabelasPrestacoesAcoes(tr, tbody, index, faturaAtualizada.fatura, totalParcelasAcao)
        }   
    }
    return totalFatura
}