import { adicionarTotais } from "./adicionarTotais.js";
import { adicionarEspaco } from "./adicionarEspaco.js";

export function textoWhatsapp(index, pagador){
    let trs = document.querySelectorAll(`#pagadores-tbody-${index} > tr`)
    let valores = document.querySelectorAll(`#pagadores-tfoot-${index} > tr td`)
    let texto = ['Conta', 'Crédito', 'Débito', '%0A']
    let frase = ''
    trs.forEach( tr => {
        if(tr.querySelector('td').getAttribute('class') == null){
            let tds = tr.querySelectorAll('td')
            tds.forEach( (td, index) => {
                if(index == 0 || index == 4 || index == 6){
                    texto.push(td.textContent)
                }
            })
            texto.push('%0A')
        }
    })
    
    texto = adicionarTotais(texto, valores)

    texto.forEach( (palavra, index) => {
        frase += adicionarEspaco(palavra, index % 4 == 0 ? 33 : 20)
    })
    
    let a = document.getElementById(`whatsapp-${pagador.nome}`)
    a.href = a.getAttribute('href') + `&text=${frase}`
}