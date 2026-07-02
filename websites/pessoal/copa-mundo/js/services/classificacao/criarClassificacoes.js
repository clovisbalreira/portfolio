import { criarTabela } from "../criarTabela.js"

export function criarClassificacoes(campeonato, participantes){
    participantes.forEach( participante => {
        campeonato.classificacaoGeral.push(participante)
        incluirClassificacaoGeralCampeonato(campeonato.campeonato, participante)
        incluirClassificacaoFederacaoPais(campeonato, participante, participante.pais.filiacao)
        incluirClassificacaoFederacaoPais(campeonato, participante, participante.pais)
    })
}

function incluirClassificacaoGeralCampeonato(campeonato, participante){
        let filtro = campeonato.classificacao.find( classificacao => classificacao.pais.pais.nomeOficial == participante.pais.pais.nomeOficial)
        if(filtro == undefined){
            campeonato.classificacao.push(participante)
        }else{
            console.log(filtro)
        }
}

function incluirClassificacaoFederacaoPais(campeonato, participanteEquipe, participante){
    let filtro = participante.campeonatos.find( cam => {
        return cam.nome.nome == campeonato.campeonato.nome})
    filtro != undefined ? filtro.classificacao.push(participanteEquipe) : participante.campeonatos.push({nome: campeonato.campeonato, classificacao: [participanteEquipe]})
}

function somarPontuacao(equipe, participante){
    equipe.pg += participante.pg
    equipe.j += participante.j
    equipe.v += participante.v
    equipe.e += participante.e
    equipe.d += participante.d
    equipe.gp += participante.gp
    equipe.gc += participante.gc
    equipe.sg += participante.sg
    equipe.confrontoDireto.push(participante.confrontoDireto)
    equipe.desempate += participante.desempate
    equipe.fase == participante.fase
}