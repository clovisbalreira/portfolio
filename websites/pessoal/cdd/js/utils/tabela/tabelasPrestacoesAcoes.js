import { tabelaParcela } from "./tabelaParcelas.js";
import { tabelaAcoes } from "./tabelaAcoes.js";

export function tabelasPrestacoesAcoes(tr, tbody, index, fatura, totalParcelasAcao){
    tr.style.cursor = 'Pointer'
    fatura.tipoPagamento.nome == 'Parcelado' ? tr.classList.add(`mostra-parcelas-${fatura.formaPagamento.nome.replace(' ', '-').toLowerCase()}-${totalParcelasAcao}`) : tr.classList.add(`mostra-acoes-${fatura.formaPagamento.nome.replace(' ', '-').toLowerCase()}-${totalParcelasAcao}`)
    fatura.tipoPagamento.nome == 'Parcelado' ? tbody.appendChild(tabelaParcela(index, fatura)) : tbody.appendChild(tabelaAcoes(index, fatura))
}