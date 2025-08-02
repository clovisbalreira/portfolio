import { valoresSelects } from "../valoresSelects.js";
import { atualizarDatasPagamentos } from "../fatura/atualizarDatasPagamentos.js";

export function atualizarFatura(fatura){
    if(fatura.formaPagamento == null) return
    // validade Cartão
    let validadeCartao = fatura.formaPagamento.nome == 'Dinheiro' ? new Date(`${valoresSelects().mes + 1}/01/${valoresSelects().ano}`) : new Date(fatura.formaPagamento.validade)
    // data fim da fatura
    let inicioFatura = fatura.formaPagamento.nome == 'Dinheiro' ? new Date(`${(parseInt(valoresSelects().mes))}/01/${valoresSelects().ano}`) : new Date(`${valoresSelects().mes - 1}/${validadeCartao.getDate()}/${ valoresSelects().ano}`)
    // data inicio da fatura
    let fimFatura = fatura.formaPagamento.nome == 'Dinheiro' ? new Date(`${parseInt(valoresSelects().mes) + 1 == 13 ? 1 : parseInt(valoresSelects().mes) + 1}/01/${parseInt(valoresSelects().mes) + 1 == 13 ? parseInt(valoresSelects().ano) + 1 : valoresSelects().ano}`) : new Date(`${valoresSelects().mes}/${validadeCartao.getDate()}/${valoresSelects().ano}`)
    let novaFatura = atualizarDatasPagamentos(fatura, valoresSelects().mes, valoresSelects().ano)
    return { condicao : novaFatura.pagamento >= inicioFatura && novaFatura.pagamento <= fimFatura, fatura : novaFatura.fatura}
}