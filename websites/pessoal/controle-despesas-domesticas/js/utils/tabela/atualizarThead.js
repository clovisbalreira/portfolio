import { somarTotalFatura } from "../somarTotalFatura.js";
import { diminirCredito } from "../diminirCredito.js";
import { somarCredito } from "../somarCredito.js";

export function atualizarThead(index, totalFatura, tipoConta){
    let resultado = totalFatura.filter(obj => obj.indice === parseInt(index.split('-').pop()));
    if(document.getElementById(index).querySelectorAll('td')[0].textContent == 'Dinheiro'){
        if(resultado[0] != undefined){
            somarTotalFatura(index, 1, resultado[0].debitoValor)
        }
    }else{
        if(resultado[0] != undefined){
            somarTotalFatura(index, 2, resultado[0].debitoValor)
            if(tipoConta == 'Crédito'){
                diminirCredito(index, resultado[0].debitoValorTotal)
            }else{
                somarCredito(index, resultado[0].creditoValorTotal)
            }
        }
    }
}