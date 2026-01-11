import { mostrarHeader } from "../body/mostrarHeader.js"
import { mostrarMain } from "../body/mostrarMain.js"
import { navegacaoSocioCampeonato } from "../navegacaoSocioCampeonato.js"
import { mudarStyleCor } from "../mudarStyleCor.js"

export function acaoMenuAssociacao(socios, campeonatos, associacoes, variavelGlobal, temporadas){
    let menu = document.querySelectorAll('.lista-associacao')
    menu.forEach( (item, index) => {
        item.addEventListener( 'click', () => {
            variavelGlobal.associacao = index
            variavelGlobal.campeonato = null
            let associacao = associacoes[variavelGlobal.associacao]
            mudarStyleCor(associacao)
            mostrarHeader(associacoes, variavelGlobal)
            mostrarMain(socios, associacao, campeonatos, temporadas)
            navegacaoSocioCampeonato(associacoes, associacao, variavelGlobal, socios, campeonatos, temporadas)
            document.getElementById('navegacao-associacao').classList.add('esconder-navegacao-associacao')
        })
    })
}