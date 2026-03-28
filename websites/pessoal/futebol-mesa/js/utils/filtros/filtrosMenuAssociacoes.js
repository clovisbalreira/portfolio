import { filtroEstatisticasAssociacao } from "./filtroEstatisticasAssociacao.js"
import { habilitarDesabilitarSelect } from "../habilitarDesabilitarSelect.js"
import { mostrarMain } from "../body/mostrarMain.js"

export function filtrosMenusAssociacoes(jogos, associacoes, associacao, campeonatos, temporadas, variavelGlobal, socios){
    filtroMenuJogosAssociacoes(jogos, associacao, associacoes, variavelGlobal, campeonatos, temporadas, socios)
    filtroMenuJogosRegras(jogos, associacao, associacoes, variavelGlobal, campeonatos, temporadas, socios)
    resetar(campeonatos, temporadas, variavelGlobal, associacao, socios)
    habilitarDesabilitarSelect(true)
}

function filtroMenuJogosAssociacoes(jogos, associacao, associacoes, variavelGlobal, campeonatos, temporadas, socios){
    let menu = document.getElementById('menu-principal-associacao')
    menu.addEventListener('change', function () {
        if(this.value != ''){
            let filtrarJogos = jogos.filter(jogo => {
                variavelGlobal.ativoAssociacao = this.value.toString()
                return jogo.equipeMandante.participante.associacao.nome == this.value.toString() || jogo.equipeVisitante.participante.associacao.nome == this.value.toString()
            })
            let tabelas = { participante: associacao, pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0,  ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, gpt: 0,   vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd: 0, pgpt: 0 }
            filtrarJogos.forEach( jogo => {
                if(associacao.nome == jogo.equipeMandante.participante.associacao.nome){
                    atualizarTabela(tabelas, jogo, jogo.equipeMandante.gols, jogo.equipeVisitante.gols, jogo.equipeMandante.golsProrrogacao,  jogo.equipeVisitante.golsProrrogacao, jogo.equipeMandante.golsPenalti,  jogo.equipeVisitante.golsPenalti)
                }else{
                    atualizarTabela(tabelas, jogo, jogo.equipeVisitante.gols, jogo.equipeMandante.gols, jogo.equipeVisitante.golsProrrogacao, jogo.equipeMandante.golsProrrogacao, jogo.equipeVisitante.golsPenalti, jogo.equipeMandante.golsPenalti)
                }
            });
            atualizarTabelaEstatisticas(filtrarJogos, tabelas, associacoes, associacao, campeonatos, temporadas, variavelGlobal, socios)
        }
    })
}

function filtroMenuJogosRegras(jogos, associacao, associacoes, variavelGlobal, campeonatos, temporadas, socios){
    let menu = document.getElementById('menu-principal-regra')
    menu.addEventListener('change', function () {
        if(this.value != ''){
            let campeonatoRegra = temporadas.filter( temporada => {
                variavelGlobal.ativoRegra = this.value.toString()
                return temporada.campeonato.tipo.nome == 'Externo' && temporada.campeonato.regra.nome == this.value.toString()
            })
            let filtrarJogos = []
            jogos.forEach(jogo => {
                campeonatoRegra.forEach( campeonato => {
                    if(`${campeonato.nome} - ${campeonato.campeonato.nome}` == jogo.campeonato && campeonato.campeonato.regra.nome == this.value.toString()){
                        filtrarJogos.push(jogo)                        
                    }
                })
            })
            let tabelas = { participante: associacao, pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0,  ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, gpt: 0,   vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd: 0, pgpt: 0 }
            filtrarJogos.forEach( jogo => {
                if(associacao.nome == jogo.equipeMandante.participante.tecnico.status.nome){
                    atualizarTabela(tabelas, jogo, jogo.equipeMandante.gols, jogo.equipeVisitante.gols, jogo.equipeMandante.golsProrrogacao, jogo.equipeVisitante.golsProrrogacao, jogo.equipeMandante.golsPenalti,  jogo.equipeVisitante.golsPenalti)
                }else{
                    atualizarTabela(tabelas, jogo, jogo.equipeVisitante.gols, jogo.equipeMandante.gols, jogo.equipeVisitante.golsProrrogacao, jogo.equipeMandante.golsProrrogacao, jogo.equipeVisitante.golsPenalti, jogo.equipeMandante.golsPenalti)
                }
            });
            atualizarTabelaEstatisticas(filtrarJogos, tabelas, associacoes, associacao, campeonatos, temporadas, variavelGlobal, socios)
        }
    })
}

function atualizarTabela(tabelas, jogo, equipeMandanteGols,  equipeVisitandeGols, equipeMandanteGolsProrrogacao,  equipeVisitandeGolsProrrogacao, equipeMandanteGolsPenalti,  equipeVisitandeGolsPenalti){
    if(jogo.prorrogacao && equipeMandanteGols == equipeVisitandeGols){
        tabelas.vp += equipeMandanteGolsProrrogacao > equipeVisitandeGolsProrrogacao ? 1 : 0
        tabelas.ep += equipeMandanteGolsProrrogacao == equipeVisitandeGolsProrrogacao ? 1 : 0
        tabelas.dp += equipeMandanteGolsProrrogacao < equipeVisitandeGolsProrrogacao ? 1 : 0
        tabelas.pgp = tabelas.vp
        tabelas.gpp += equipeMandanteGolsProrrogacao
        tabelas.gcp += equipeVisitandeGolsProrrogacao,
        tabelas.sgp += equipeMandanteGolsProrrogacao - equipeVisitandeGolsProrrogacao
        if(equipeMandanteGolsProrrogacao == equipeVisitandeGolsProrrogacao){
            tabelas.vpt += equipeMandanteGolsPenalti > equipeVisitandeGolsPenalti ? 1 : 0
            tabelas.dpt += equipeMandanteGolsPenalti < equipeVisitandeGolsPenalti ? 1 : 0
            tabelas.gppt += equipeMandanteGolsPenalti
            tabelas.gcpt += equipeVisitandeGolsPenalti
            tabelas.sgpt += equipeMandanteGolsPenalti - equipeVisitandeGolsPenalti
            tabelas.pgpt = tabelas.vpt
        }
    }
    if(jogo.penalti  && equipeMandanteGols == equipeVisitandeGols){
        tabelas.vpt += equipeMandanteGolsPenalti > equipeVisitandeGolsPenalti ? 1 : 0
        tabelas.dpt += equipeMandanteGolsPenalti < equipeVisitandeGolsPenalti ? 1 : 0
        tabelas.gppt += equipeMandanteGolsPenalti
        tabelas.gcpt += equipeVisitandeGolsPenalti
        tabelas.sgpt += equipeMandanteGolsPenalti - equipeVisitandeGolsPenalti
        tabelas.pg = tabelas.vpt
    }
    tabelas.v += equipeMandanteGols > equipeVisitandeGols ? 1 : 0
    if(jogo.penalti && equipeMandanteGolsPenalti > equipeVisitandeGolsPenalti) tabelas.v += 1
    tabelas.d += equipeMandanteGols < equipeVisitandeGols ? 1 : 0
    tabelas.e += equipeMandanteGols == equipeVisitandeGols ? 1 : 0
    tabelas.j = tabelas.v + tabelas.e + tabelas.d
    tabelas.pg = (tabelas.v * 3) + tabelas.e
    tabelas.gp += equipeMandanteGols
    tabelas.gc += equipeVisitandeGols
    tabelas.sg = tabelas.gp - tabelas.gc
}

function atualizarTabelaEstatisticas(filtrarJogos, tabelas, associacoes, associacao, campeonatos, temporadas, variavelGlobal, socios){
    let section = document.getElementById('section-estatistica-associacao')
    section.innerHTML = ''
    section.appendChild(filtroEstatisticasAssociacao(filtrarJogos, tabelas, associacao, variavelGlobal))
    filtrosMenusAssociacoes(filtrarJogos, associacoes, associacao, campeonatos, temporadas, variavelGlobal, socios)
}

function resetar(campeonatos, temporadas, variavelGlobal, associacao, socios){
    let button = document.getElementById('btn-reset')
    button.addEventListener('click', () => {
        variavelGlobal.ativoAssociacao = ""
        variavelGlobal.ativoRegra = ""
        mostrarMain(socios, associacao, campeonatos, temporadas, variavelGlobal)
        habilitarDesabilitarSelect(false)
    })
}