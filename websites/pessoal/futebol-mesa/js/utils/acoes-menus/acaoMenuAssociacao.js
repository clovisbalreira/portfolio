import { inicio } from "../inicio.js"

export function acaoMenuAssociacao(socios, campeonatos, associacoes, temporadas, variavelGlobal, tipos, regras){
    let menu = document.querySelectorAll('.lista-associacao')
    menu.forEach( (item, index) => {
        item.addEventListener( 'click', () => {
            variavelGlobal.associacao = index
            variavelGlobal.campeonato = null
            inicio(socios, campeonatos, associacoes, temporadas, variavelGlobal, tipos, regras)
            document.getElementById('navegacao-associacao').classList.add('esconder-navegacao-associacao')
        })
    })
}