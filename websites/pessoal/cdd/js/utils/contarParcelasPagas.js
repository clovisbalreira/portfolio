import { valoresSelects } from './valoresSelects.js';

export function contarParcelasPagas(pagamentos){
    let parcelas = 0
    if(pagamentos[0] != undefined){
        pagamentos.forEach( pagamento => {
            if(pagamento.vencimento < new Date(`${valoresSelects().mes}/01/${valoresSelects().ano}`)){
                parcelas += 1
            }
        })
    }
    return parcelas
}