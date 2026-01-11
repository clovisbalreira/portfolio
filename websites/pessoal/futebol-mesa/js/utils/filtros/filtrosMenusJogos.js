import { filtrosEstatisticas } from "./filtrosEstatisticas.js"
import { mostrarSocios } from "../../mvc/view/mostrarSocios.js"

export function filtrosMenusJogos(jogos, socio, variavelGlobal, socios, campeonatos, temporadas){
    filtroMenuJogosAdversario(jogos, socio, variavelGlobal, socios, campeonatos, temporadas)
    filtroMenuJogosCampeonatos(jogos, socio, variavelGlobal, socios, campeonatos, temporadas)
    filtroMenuJogosTemporadas(jogos, socio, variavelGlobal, socios, campeonatos, temporadas)
    resetar(socios, campeonatos, temporadas, variavelGlobal)
}

function filtroMenuJogosAdversario(jogos, socio, variavelGlobal, socios, campeonatos, temporadas){
    let menu = document.getElementById('menu-jogo-Adversario')
    menu.addEventListener('change', function () {
        if(this.value != ''){
            let section = document.getElementById('todas-estatisticas')
            section.innerHTML = ''
            let filtrarJogos = jogos.filter(jogo => {
                variavelGlobal.ativoAdversario = this.value.toString()
                return jogo.timeCasa.tecnico.participante.nome == this.value || jogo.timeFora.tecnico.participante.nome == this.value
            })
            let tabelas = { tecnico: pegarTreinador(filtrarJogos, socio), pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0,  ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, gpt: 0,   vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd: 0, pgpt: 0 }
            filtrarJogos.forEach( jogo => {
                if(socio == jogo.timeCasa.tecnico.participante.nome){
                    atualizarTabela(tabelas, jogo, jogo.timeCasa.gols, jogo.timeFora.gols, jogo.timeCasa.golsProrrogacao,  jogo.timeFora.golsProrrogacao, jogo.timeCasa.golsPenalti,  jogo.timeFora.golsPenalti)
                }else{
                    atualizarTabela(tabelas, jogo, jogo.timeFora.gols, jogo.timeCasa.gols, jogo.timeFora.golsProrrogacao, jogo.timeCasa.golsProrrogacao, jogo.timeFora.golsPenalti, jogo.timeCasa.golsPenalti)
                }
            });
            filtrosEstatisticas(section, filtrarJogos, tabelas, socio, variavelGlobal, socios, campeonatos, temporadas)
        }
    })
}

function filtroMenuJogosCampeonatos(jogos, socio, variavelGlobal, socios, campeonatos, temporadas){
    let menu = document.getElementById('menu-jogo-campeonato')
    menu.addEventListener('change', function () {
        if(this.value != ''){
            let section = document.getElementById('todas-estatisticas')
            section.innerHTML = ''
            let filtrarJogos = jogos.filter(jogo => {
                variavelGlobal.ativoCampeonato = this.value.toString()
                return jogo.campeonato.includes(this.value)
            })
            let tabelas = { tecnico: pegarTreinador(filtrarJogos, socio), pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0,  ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, gpt: 0,   vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd: 0, pgpt: 0 }
            filtrarJogos.forEach( jogo => {
                if(socio == jogo.timeCasa.tecnico.participante.nome){
                    atualizarTabela(tabelas, jogo, jogo.timeCasa.gols, jogo.timeFora.gols, jogo.timeCasa.golsProrrogacao, jogo.timeFora.golsProrrogacao, jogo.timeCasa.golsPenalti,  jogo.timeFora.golsPenalti)
                }else{
                    atualizarTabela(tabelas, jogo, jogo.timeFora.gols, jogo.timeCasa.gols, jogo.timeFora.golsProrrogacao, jogo.timeCasa.golsProrrogacao, jogo.timeFora.golsPenalti, jogo.timeCasa.golsPenalti)
                }
            });
            filtrosEstatisticas(section, filtrarJogos, tabelas, socio, variavelGlobal, socios, campeonatos, temporadas)
        }
    })
}

function filtroMenuJogosTemporadas(jogos, socio, variavelGlobal, socios, campeonatos, temporadas){
    let menu = document.getElementById('menu-jogo-temporada')
    menu.addEventListener('change', function () {
        if(this.value != ''){
            let section = document.getElementById('todas-estatisticas')
            section.innerHTML = ''
            let filtrarJogos = jogos.filter(jogo => {
                variavelGlobal.ativoTemporada = this.value.toString()
                return jogo.campeonato == this.value
                } 
            )
            let tabelas = { tecnico: pegarTreinador(filtrarJogos, socio), pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0,  ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, gpt: 0,   vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd: 0, pgpt: 0 }
            filtrarJogos.forEach( jogo => {
                if(socio == jogo.timeCasa.tecnico.participante.nome){
                    atualizarTabela(tabelas, jogo, jogo.timeCasa.gols, jogo.timeFora.gols, jogo.timeCasa.golsProrrogacao,  jogo.timeFora.golsProrrogacao, jogo.timeCasa.golsPenalti,  jogo.timeFora.golsPenalti)
                }else{
                    atualizarTabela(tabelas, jogo, jogo.timeFora.gols, jogo.timeCasa.gols, jogo.timeFora.golsProrrogacao, jogo.timeCasa.golsProrrogacao, jogo.timeFora.golsPenalti, jogo.timeCasa.golsPenalti)
                }
            });
            filtrosEstatisticas(section, filtrarJogos, tabelas, socio, variavelGlobal, socios, campeonatos, temporadas)
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

function pegarTreinador(filtrarJogos, socio){
    return filtrarJogos[0].timeCasa.tecnico.participante.nome == socio ? filtrarJogos[0].timeCasa.tecnico : filtrarJogos[0].timeFora.tecnico
}

function resetar(socios, campeonatos, temporadas, variavelGlobal){
    let button = document.getElementById('btn-reset')
    button.addEventListener('click', () => {
        variavelGlobal.ativoCampeonato = ''
        variavelGlobal.ativoTemporada = ''
        variavelGlobal.ativoAdversario = ''
        mostrarSocios(socios[variavelGlobal.socio], campeonatos, temporadas, variavelGlobal, socios)
    })
}