import { criarTd } from "../../utils/tabela/criarTd.js";

export function atualizarHfoot(index, totalFatura){
    if(totalFatura == undefined) return
    let resultado = totalFatura.filter(obj => obj.indice === parseInt(index.split('-').pop()));
    let tfooter = document.getElementById(index)
    tfooter.innerHTML = ''
    let tr = document.createElement('tr')
    let th = document.createElement('th')
    th.innerHTML = `Valor:  R$: ${(resultado[0].creditoValor - resultado[0].debitoValor ).toFixed(2)}<br>Valor Total:  R$: ${(resultado[0].creditoValorTotal - resultado[0].debitoValorTotal).toFixed(2)}`
    if(index.includes("pagadores")){
        th.colSpan = 3
    }
    tr.appendChild(th)
    tr.appendChild(criarTd(resultado[0].creditoValorTotal, 1, true))
    tr.appendChild(criarTd(resultado[0].creditoValor, 1, true))
    tr.appendChild(criarTd(resultado[0].debitoValorTotal, 1, true))
    tr.appendChild(criarTd(resultado[0].debitoValor, 1, true))
    tfooter.appendChild(tr)
    return tfooter
}