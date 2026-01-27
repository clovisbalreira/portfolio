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
                return jogo.timeCasa.tecnico.associacao.nome == this.value.toString() || jogo.timeFora.tecnico.associacao.nome == this.value.toString()
            })
            let tabelas = { tecnico: associacao, pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0,  ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, gpt: 0,   vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd: 0, pgpt: 0 }
            filtrarJogos.forEach( jogo => {
                if(associacao.nome == jogo.timeCasa.tecnico.associacao.nome){
                    atualizarTabela(tabelas, jogo, jogo.timeCasa.gols, jogo.timeFora.gols, jogo.timeCasa.golsProrrogacao,  jogo.timeFora.golsProrrogacao, jogo.timeCasa.golsPenalti,  jogo.timeFora.golsPenalti)
                }else{
                    atualizarTabela(tabelas, jogo, jogo.timeFora.gols, jogo.timeCasa.gols, jogo.timeFora.golsProrrogacao, jogo.timeCasa.golsProrrogacao, jogo.timeFora.golsPenalti, jogo.timeCasa.golsPenalti)
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
            let tabelas = { tecnico: associacao, pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0,  ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, gpt: 0,   vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd: 0, pgpt: 0 }
            filtrarJogos.forEach( jogo => {
                if(associacao.nome == jogo.timeCasa.tecnico.participante.status.nome){
                    atualizarTabela(tabelas, jogo, jogo.timeCasa.gols, jogo.timeFora.gols, jogo.timeCasa.golsProrrogacao, jogo.timeFora.golsProrrogacao, jogo.timeCasa.golsPenalti,  jogo.timeFora.golsPenalti)
                }else{
                    atualizarTabela(tabelas, jogo, jogo.timeFora.gols, jogo.timeCasa.gols, jogo.timeFora.golsProrrogacao, jogo.timeCasa.golsProrrogacao, jogo.timeFora.golsPenalti, jogo.timeCasa.golsPenalti)
                }
            });
            atualizarTabelaEstatisticas(filtrarJogos, tabelas, associacoes, associacao, campeonatos, temporadas, variavelGlobal, socios)
        }
    })
}

function atualizarTabela(tabelas, jogo, timeCasaGols,  timeForaGols, timeCasaProrrogacao,  timeForaProrrogacao, timeCasaPenalti,  timeForaPenalti){
    if(jogo.prorrogacao && timeCasaGols == timeForaGols){
        tabelas.vp += timeCasaProrrogacao > timeForaProrrogacao ? 1 : 0
        tabelas.ep += timeCasaProrrogacao == timeForaProrrogacao ? 1 : 0
        tabelas.dp += timeCasaProrrogacao < timeForaProrrogacao ? 1 : 0
        tabelas.pgp = tabelas.vp
        tabelas.gpp += timeCasaProrrogacao
        tabelas.gcp += timeForaProrrogacao,
        tabelas.sgp += timeCasaProrrogacao - timeForaProrrogacao
        if(timeCasaProrrogacao == timeForaProrrogacao){
            tabelas.vpt += timeCasaPenalti > timeForaPenalti ? 1 : 0
            tabelas.dpt += timeCasaPenalti < timeForaPenalti ? 1 : 0
            tabelas.gppt += timeCasaPenalti
            tabelas.gcpt += timeForaPenalti
            tabelas.sgpt += timeCasaPenalti - timeForaPenalti
            tabelas.pgpt = tabelas.vpt
        }
    }
    if(jogo.penalti  && timeCasaGols == timeForaGols){
        tabelas.vpt += timeCasaPenalti > timeForaPenalti ? 1 : 0
        tabelas.dpt += timeCasaPenalti < timeForaPenalti ? 1 : 0
        tabelas.gppt += timeCasaPenalti
        tabelas.gcpt += timeForaPenalti
        tabelas.sgpt += timeCasaPenalti - timeForaPenalti
        tabelas.pg = tabelas.vpt
    }
    tabelas.v += timeCasaGols > timeForaGols ? 1 : 0
    if(jogo.penalti && timeCasaPenalti > timeForaPenalti) tabelas.v += 1
    tabelas.d += timeCasaGols < timeForaGols ? 1 : 0
    tabelas.e += timeCasaGols == timeForaGols ? 1 : 0
    tabelas.j = tabelas.v + tabelas.e + tabelas.d
    tabelas.pg = (tabelas.v * 3) + tabelas.e
    tabelas.gp += timeCasaGols
    tabelas.gc += timeForaGols
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