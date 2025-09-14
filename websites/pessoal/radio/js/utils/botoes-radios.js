import { mostrarSite } from "../utils/mostrarSite.js";
import { radios } from "../mvc/control/radios.js";
import { programacao } from "../mvc/control/programacao.js";
import { parada } from "../mvc/control/parada.js";
import { posts } from "../mvc/control/posts.js";
import { variavelGlobal } from "../mvc/control/global.js";
import { links } from "../mvc/control/links.js"

export function escolherRadio(){
    const botoes = document.querySelectorAll('.button-radios')
    botoes.forEach( botao => {
        botao.addEventListener('click', (e) => {
            radios.forEach( (dado, index) => {
                if(e.target.alt == dado.nome){
                    variavelGlobal.indexRadio = index
                    variavelGlobal.conta = 2
                    links.splice(0, links.length)
                    deletarId()
                    mostrarSite(radios[variavelGlobal.indexRadio], programacao, radios, parada, posts, variavelGlobal)
                }
            })
        })
    })
}

function deletarId(){
    const ids = ["player","navegacao","radios","redes-sociais","parada","programacao","programa","locutor","posts","section-post","post","formulario","pedido","footer"]
    for( let i = 0; i < ids.length; i++){
        document.getElementById(ids[i]).innerHTML = ''
    }
}