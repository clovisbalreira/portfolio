import { campeoes } from "../mvc/controll/campeoes.js"
import { clubes } from "../mvc/controll/clubes.js"

export function criarRankingClubes(){
    let ano = parseInt(document.getElementById('ano').value) - 6
    zeroPontos()
    for( let i = 1; i < 6; i++){
        let campeonatos = campeoes.filter( campeao => campeao.ano == ano + i )
        campeonatos.forEach(campeonato => {
            campeonato.colocacao.forEach( colocacao => {
                if(typeof colocacao.clube == 'object'){
                    if(typeof colocacao.clube.nome == 'string'){
                        somarPontos(colocacao, campeonato, i)
                    }else{
                        colocacao.clube.forEach( colocacaoClube => {
                            somarPontos(colocacaoClube, campeonato, i, colocacao)
                        })
                    }
                }
            })
        })
    }
    somarTotais()
    return clubes.sort((a, b) => b.pontosTotal - a.pontosTotal)
}

function zeroPontos(){
    clubes.forEach( clube => {
        while (clube.pontos.length > 0) {
            clube.pontos.pop();
        }
    })
}

function somarPontos(colocacao, campeonato, i, colocacaoArray){
    clubes.forEach( clube => {
        if(colocacao.clube != undefined){
            if(colocacao.clube.nome == clube.nome && colocacao.clube.estado.sigla == clube.estado.sigla){
                campeonato.campeonato.ranking.forEach( ranking => {
                    if(ranking.colocacao == colocacao.colocacao) {
                        clube.pontos.push({ ano: campeonato.ano, campeonato: campeonato.campeonato.nome, colocacao: ranking.colocacao, pontos: ranking.pontos * i})
                    }
                })
            } 
        }else{
            if(colocacao.nome == clube.nome && colocacao.estado.sigla == clube.estado.sigla){
                campeonato.campeonato.ranking.forEach( ranking => {
                    if(ranking.colocacao == colocacaoArray.colocacao) {
                        clube.pontos.push({ ano: campeonato.ano, campeonato: campeonato.campeonato.nome, colocacao: ranking.colocacao, pontos: ranking.pontos * i})
                    }
                })
            }
        }
    })
}

function somarTotais(){
    clubes.forEach( clube => {
        clube.adicionarTotal()
    })
}