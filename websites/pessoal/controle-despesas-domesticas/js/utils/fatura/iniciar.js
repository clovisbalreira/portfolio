import { mostrarCartoes } from "../../mvc/view/mostrarCartoes.js";
import { mostrarFaturasCartao } from "../../mvc/view/mostrarFaturaCartao.js";
import { mostrarPagadores } from "../../mvc/view/mostrarPagadores.js";
import { mostrarFaturasPagadores } from "../../mvc/view/mostrarFaturasPagadores.js";

export function iniciar(){
    mostrarCartoes()
    mostrarFaturasCartao()
    mostrarPagadores()
    mostrarFaturasPagadores()
    mostrarTabelasPagamentoPagadorAcoes('[id^="cartao-thead"]', 'cartao')
    mostrarTabelasPagamentoPagadorAcoes('[id^="pagador-thead"]', 'conta')
    mostrarPrestacoesAcoes('mostra-parcelas')
    mostrarPrestacoesAcoes('mostra-acoes')
}

function mostrarTabelasPagamentoPagadorAcoes(idElemento, classe){
    let ids = document.querySelectorAll(idElemento)
    ids.forEach( id => {
        id.addEventListener('click', () => {
            for( let i = 0; i < ids.length; i++){
                let idModificar = document.getElementById(`${classe}-${i}`)
                if(id.getAttribute('id').includes(i)){
                    if(idModificar.style.display == 'table'){
                        idModificar.style.display = 'none'
                    }else{
                        idModificar.style.display = 'table'
                        idModificar.style.width = '100%'
                    }
                }else{
                    idModificar.style.display = 'none'
                }
            }
        })
    })
}

function mostrarPrestacoesAcoes(classe){
    let classes = document.querySelectorAll(`[class^="${classe}"]`)
    classes.forEach(  ( classe ) => {
        classe.addEventListener('click' , () => {
            let id = classe.getAttribute('class')
            let trs = classe.parentNode.querySelectorAll('tr')
            trs.forEach( (tr, index) => {
                let classe = tr.getAttribute('class');
                if(tr.getAttribute('class') == id){
                    if(trs[index + 1].querySelector('td').querySelector('table').style.display == 'table'){
                        trs[index + 1].querySelector('td').querySelector('table').style.display = 'none' 
                    }else{
                        trs[index + 1].querySelector('td').querySelector('table').style.display = 'table'
                        trs[index + 1].querySelector('td').querySelector('table').style.width = '100%'
                    }
                }else if (classe && classe.includes(`${classe}`)) {
                  trs[index + 1].querySelector('td').querySelector('table').style.display = 'none'
                }
            })
        })
    })
}