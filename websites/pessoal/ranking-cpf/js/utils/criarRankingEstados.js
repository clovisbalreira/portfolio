import { estados } from "../mvc/controll/estados.js"
import { clubes } from "../mvc/controll/clubes.js"

export function criarRankingEstados(){
    zeroPontos()
    clubes.forEach( clube => {
            estados.forEach( estado => {
                if(clube.estado.sigla == estado.sigla){
                    estado.pontosTotal += clube.pontosTotal
                    clube.pontos.forEach( colocacao => {
                        estado.pontos.push({clube: clube.nome, ano: colocacao.ano, campeonato: colocacao.campeonato, colocacao: colocacao.colocacao, pontos: colocacao.pontos})
                    })
                } 
            })
    })
    return estados.sort((a, b) => b.pontosTotal - a.pontosTotal)
}

function zeroPontos(){
    estados.forEach( estado => {
        while (estado.pontos.length > 0) {
            estado.pontos.pop()
            estado.pontosTotal = 0
        }
    })
}