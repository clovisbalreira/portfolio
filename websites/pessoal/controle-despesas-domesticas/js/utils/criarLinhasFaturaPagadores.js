import { atualizarFatura } from "./fatura/atualizarFatura.js";
import { contarParcelasPagas } from "./contarParcelasPagas.js";
import { criarTd } from "./tabela/criarTd.js";

export function criarLinhasFaturaPagadores(fatura, totalFatura, id, totalParcelasAcao){
    if(fatura.formaPagamento == null) return
    let tbody = document.getElementById(id)
    let index = parseInt(id.split('-').pop()); 
    let tr = document.createElement('tr')
    if((fatura.modo == 'Debito' && fatura.pagadores.length < 1)){
        return totalFatura
    }
    let faturaAtualizada = atualizarFatura(fatura)
    if(faturaAtualizada.condicao){
        let valorAtual = faturaAtualizada.fatura.acao != null ? faturaAtualizada.fatura.valorTotal[faturaAtualizada.fatura.valorTotal.length - 1].valorAtual : typeof faturaAtualizada.fatura.valorTotal == 'number' ? faturaAtualizada.fatura.valorTotal : faturaAtualizada.fatura.valorTotal[faturaAtualizada.fatura.valorTotal.length - 1].valor
        let parcelasPagas = contarParcelasPagas(faturaAtualizada.fatura.dataPagamento)
        //tr nome
        tr.appendChild(criarTd(`${faturaAtualizada.fatura.nome} ${faturaAtualizada.fatura.dataPagamento[0] != undefined ? `( ${parcelasPagas + 1} / ${faturaAtualizada.fatura.dataPagamento.length} )` : ``}`, 1, false))
        // tr nome Fatura
        tr.appendChild(criarTd(faturaAtualizada.fatura.formaPagamento.nome, 1, false))
        // tr nome Tipo Pagamento
        tr.appendChild(criarTd(`${faturaAtualizada.fatura.tipoPagamento.nome}${faturaAtualizada.fatura.tipoPagamento.nome == 'A Vista' ? '' : ` em ${faturaAtualizada.fatura.tipoPagamento.vezes}x`} `, 1, false))
        // tr valor total Credito
        tr.appendChild(criarTd(faturaAtualizada.fatura.modo == 'Crédito' ? (valorAtual / faturaAtualizada.fatura.pagadores.length) - (parcelasPagas * faturaAtualizada.fatura.valor) : '-' , 1, faturaAtualizada.fatura.modo == 'Crédito' ? true : false))
        // tr valor Credito
        tr.appendChild(criarTd(faturaAtualizada.fatura.modo == 'Crédito' ? faturaAtualizada.fatura.valor : '-' , 1, faturaAtualizada.fatura.modo == 'Crédito' ? true : false))
        // tr valor total Debito
        tr.appendChild(criarTd(faturaAtualizada.fatura.modo == 'Debito' ? (valorAtual / faturaAtualizada.fatura.pagadores.length) - (parcelasPagas * faturaAtualizada.fatura.valor) : '-' , 1, faturaAtualizada.fatura.modo == 'Debito' ? true : false))
        // tr valor Debito
        tr.appendChild(criarTd(faturaAtualizada.fatura.modo == 'Debito' ? faturaAtualizada.fatura.valor : '-' , 1, faturaAtualizada.fatura.modo == 'Debito' ? true : false))
        try{
            let indexFatura = totalFatura.findIndex(elemento => elemento.indice === index);
            if(faturaAtualizada.fatura.modo == 'Crédito'){
                totalFatura[indexFatura].creditoValorTotal += (valorAtual / faturaAtualizada.fatura.pagadores.length) - (parcelasPagas * faturaAtualizada.fatura.valor)
                totalFatura[indexFatura].creditoValor += faturaAtualizada.fatura.valor
            }else{
                totalFatura[indexFatura].debitoValorTotal += (valorAtual / faturaAtualizada.fatura.pagadores.length) - (parcelasPagas * faturaAtualizada.fatura.valor)
                totalFatura[indexFatura].debitoValor += faturaAtualizada.fatura.valor
            }
            tbody.appendChild(tr)
            if(faturaAtualizada.fatura.tipoPagamento.nome == 'Parcelado' || faturaAtualizada.fatura.acao != null){ 
                tabelasPrestacoesAcoes(tr, tbody, index, faturaAtualizada.fatura, totalParcelasAcao)
            }  
        }catch(erro){}
    }
    return totalFatura
}
