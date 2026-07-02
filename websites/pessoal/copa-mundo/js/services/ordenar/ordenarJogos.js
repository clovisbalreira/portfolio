import { criterioDatas } from "../criterioDatas.js"
import { confederacoesContinental } from "../../mvc/controll/confederacoesContinental.js"

export function ordenarJogos(campeonato){
    campeonato.jogos.sort((a, b) => criterioDatas(a, b))
    campeonato.campeonato.jogos.sort((a, b) => criterioDatas(a, b))
    jogosContinentais()
}

function jogosContinentais(){
    confederacoesContinental.forEach( continente => {
        continente.jogos.forEach( jogo => {
            jogo.jogos.sort((a, b) => criterioDatas(a, b))
        })
    })
}