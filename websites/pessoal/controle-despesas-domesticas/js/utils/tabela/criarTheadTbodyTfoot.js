import { criarThead } from "./criarThead.js";
import { criarTbody } from "./criarTbody.js";   
import { criarFoot } from "./criarFoot.js";

export function criarTheadTbodyTfoot(index, titulos, totalFatura, prefixo, id, cartoes, fatura){
    let debito
    fatura.pagadores.forEach( pagador => {
        debito = 0
        cartoes.forEach( cartao => {
            if(cartao.nome != 'Dinheiro'){
                if(pagador.nome == cartao.donoCartao.nome){
                    debito = cartao == undefined ? 0 : cartao.anuidade
                }
            }
        })
    })
    let table = document.getElementById(`${id}-${index}`)
    table.appendChild(criarThead(titulos))
    table.appendChild(criarTbody(`${prefixo}-tbody-${index}`))
    table.appendChild(criarFoot(`${prefixo}-tfoot-${index}`))
    if(totalFatura.length == 0 ){
        totalFatura.push({indice: index, creditoValorTotal : 0, creditoValor : 0, debitoValorTotal : 0, debitoValor : debito})
    }else{  
        let gravar = false
        for(let i = 0; i < totalFatura.length; i++){
            totalFatura.forEach( fatura => {
                if(fatura.indice != index){
                    gravar = true
                }
            })
        }
        if(gravar){
            totalFatura.push({indice: index, creditoValorTotal : 0, creditoValor : 0, debitoValorTotal : 0, debitoValor : debito})
            gravar = false
        }
    }
    return totalFatura
}

