import { criarTabela } from "../criarTabela.js"
import { classificacaoFases } from "./classificacaoFases.js"
import { criterioDesempate } from "../criterioDesempate.js"

export function classificacaoInterno(campeonato){
    campeonato.classificacaoGeral.forEach( classificacao => {
        classificacaoContinentalFederacao(classificacao, campeonato.campeonato.classificacaoFederacao, classificacao.pais.filiacao)
        classificacaoContinentalFederacao(classificacao, campeonato.classificacaoFederacao, classificacao.pais.filiacao)
    })
}

function classificacaoContinentalFederacao(classificacao, tabela, classificacaoNome){
    let filtro = tabela.find( equipe => equipe.pais.nome == classificacaoNome.nome )
    if(filtro == undefined){
        tabela.push(criarTabela(classificacaoNome))
        somar(tabela[tabela.length - 1], classificacao)
    }else{
        somar(filtro, classificacao)
    }
    tabela.sort((a, b) => criterioDesempate(a, b))
}

function somar(equipe, classificacao){
    equipe.pg += classificacao.pg
    equipe.j += classificacao.j
    equipe.v += classificacao.v
    equipe.e += classificacao.e
    equipe.d += classificacao.d
    equipe.gp += classificacao.gp
    equipe.gc += classificacao.gc
    equipe.sg += classificacao.sg
    equipe.desempate += classificacao.desempate
    equipe.fase = classificacaoFases(equipe.fase, classificacao.fase)
    incluirConfrontoDireto(equipe.confrontoDireto, classificacao.confrontoDireto)
}

function incluirConfrontoDireto(array, jogos){
    jogos.forEach( jogo => {
        array.push(jogo)
    })
}

