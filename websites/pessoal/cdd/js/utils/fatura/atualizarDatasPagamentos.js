import { valoresSelects } from "../../utils/valoresSelects.js";

export function atualizarDatasPagamentos(pagamento){
    if(pagamento.dataPagamento[0] != undefined){
        let valorFinal = 0
        let dataMes
        pagamento.dataPagamento.forEach( data => {
            if(data.vencimento.getMonth() == valoresSelects().mes - 1 && data.vencimento.getFullYear() == valoresSelects().ano){
                dataMes = data.vencimento
                valorFinal = {fatura : pagamento, pagamento : pagamento.formaPagamento.nome == "Dinheiro" ? dataMes : dataMes.getDate() < new Date(pagamento.formaPagamento.validade).getDate() ? dataMes : new Date(new Date(dataMes).setMonth(dataMes.getMonth() - 1))}
            }
        })
        return valorFinal
    }else if(pagamento.forma == 'Unico'){
        return {fatura : pagamento, pagamento :  pagamento.dataPagamento
        }
    }else if(pagamento.forma == 'Mensal'){
        return {fatura : pagamento, pagamento : pagamento.formaPagamento.nome == 'Dinheiro' ? new Date(`${valoresSelects().mes}/${new Date(pagamento.dataPagamento).getDate()}/${valoresSelects().ano}`) : new Date(pagamento.dataPagamento).getDate() <= new Date(pagamento.formaPagamento.validade).getDate() ? new Date(`${valoresSelects().mes}/${new Date(pagamento.dataPagamento).getDate()}/${valoresSelects().ano}`) : new Date(`${valoresSelects().mes - 1}/${new Date(pagamento.dataPagamento).getDate()}/${valoresSelects().ano}`)}
    }else if(pagamento.forma == 'Unico - Mensal'){
        return {fatura : pagamento, pagamento : new Date(new Date(pagamento.dataPagamento).setMonth(new Date(pagamento.dataPagamento).getMonth() + 1))}
    }else if(pagamento.forma == 'Anual'){
        return {fatura : pagamento, pagamento : new Date(new Date(pagamento.dataPagamento).setFullYear(valoresSelects().ano))}
    }
}
