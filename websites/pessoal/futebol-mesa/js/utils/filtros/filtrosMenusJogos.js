import { filtrosEstatisticas } from "./filtrosEstatisticas.js"
import { mostrarSocios } from "../../mvc/view/mostrarSocios.js"
import { habilitarDesabilitarSelect } from "../habilitarDesabilitarSelect.js"

export function filtrosMenusJogos(jogos, socio, variavelGlobal, socios, campeonatos, temporadas, tipos, regras, associacoes){
    filtroMenuJogosAdversario(jogos, socio, variavelGlobal, socios, campeonatos, temporadas)
    filtroMenuJogosCampeonatos(jogos, socio, variavelGlobal, socios, campeonatos, temporadas)
    filtroMenuJogosTemporadas(jogos, socio, variavelGlobal, socios, campeonatos, temporadas)
    filtroMenuJogosAssociacoes(jogos, socio, variavelGlobal, campeonatos, temporadas, socios, associacoes)
    filtroMenuJogosRegras(jogos, socio, variavelGlobal, campeonatos, temporadas, socios)
    resetar(socios, campeonatos, temporadas, variavelGlobal, tipos, regras)
    habilitarDesabilitarSelect(true)
}

function filtroMenuJogosAdversario(jogos, socio, variavelGlobal, socios, campeonatos, temporadas){
    let menu = document.getElementById('menu-jogo-adversario')
    menu.addEventListener('change', function () {
        if(this.value != ''){
            let filtrarJogos = jogos.filter(jogo => {
                variavelGlobal.ativoAdversario = this.value.toString()
                return jogo.equipeMandante.participante.tecnico.nome == this.value || jogo.equipeVisitante.participante.tecnico.nome == this.value
            })
            let tabelas = { participante: pegarTreinador(filtrarJogos, socio), pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0,  ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, gpt: 0,   vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd: 0, pgpt: 0 }
            filtrarJogos.forEach( jogo => {
                if(socio == jogo.equipeMandante.participante.tecnico.nome){
                    atualizarTabela(tabelas, jogo, jogo.equipeMandante.gols, jogo.equipeVisitante.gols, jogo.equipeMandante.golsProrrogacao,  jogo.equipeVisitante.golsProrrogacao, jogo.equipeMandante.golsPenalti,  jogo.equipeVisitante.golsPenalti)
                }else{
                    atualizarTabela(tabelas, jogo, jogo.equipeVisitante.gols, jogo.equipeMandante.gols, jogo.equipeVisitante.golsProrrogacao, jogo.equipeMandante.golsProrrogacao, jogo.equipeVisitante.golsPenalti, jogo.equipeMandante.golsPenalti)
                }
            });
            atualizarTabelaEstatisticas(filtrarJogos, tabelas, socio, variavelGlobal, socios, campeonatos, temporadas)
        }
    })
}

function filtroMenuJogosCampeonatos(jogos, socio, variavelGlobal, socios, campeonatos, temporadas){
    let menu = document.getElementById('menu-jogo-campeonato')
    menu.addEventListener('change', function () {
        if(this.value != ''){
            let filtrarJogos = jogos.filter(jogo => {
                variavelGlobal.ativoCampeonato = this.value.toString()
                return jogo.campeonato.includes(this.value)
            })
            let tabelas = { participante: pegarTreinador(filtrarJogos, socio), pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0,  ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, gpt: 0,   vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd: 0, pgpt: 0 }
            filtrarJogos.forEach( jogo => {
                if(socio == jogo.equipeMandante.participante.tecnico.nome){
                    atualizarTabela(tabelas, jogo, jogo.equipeMandante.gols, jogo.equipeVisitante.gols, jogo.equipeMandante.golsProrrogacao, jogo.equipeVisitante.golsProrrogacao, jogo.equipeMandante.golsPenalti,  jogo.equipeVisitante.golsPenalti)
                }else{
                    atualizarTabela(tabelas, jogo, jogo.equipeVisitante.gols, jogo.equipeMandante.gols, jogo.equipeVisitante.golsProrrogacao, jogo.equipeMandante.golsProrrogacao, jogo.equipeVisitante.golsPenalti, jogo.equipeMandante.golsPenalti)
                }
            });
            atualizarTabelaEstatisticas(filtrarJogos, tabelas, socio, variavelGlobal, socios, campeonatos, temporadas)
        }
    })
}

function filtroMenuJogosTemporadas(jogos, socio, variavelGlobal, socios, campeonatos, temporadas){
    let menu = document.getElementById('menu-jogo-temporada')
    menu.addEventListener('change', function () {
        if(this.value != ''){
            let filtrarJogos = jogos.filter(jogo => {
                variavelGlobal.ativoTemporada = this.value.toString()
                return jogo.campeonato == this.value
                } 
            )
            let tabelas = { participante: pegarTreinador(filtrarJogos, socio), pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0,  ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, gpt: 0,   vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd: 0, pgpt: 0 }
            filtrarJogos.forEach( jogo => {
                if(socio == jogo.equipeMandante.participante.tecnico.nome){
                    atualizarTabela(tabelas, jogo, jogo.equipeMandante.gols, jogo.equipeVisitante.gols, jogo.equipeMandante.golsProrrogacao,  jogo.equipeVisitante.golsProrrogacao, jogo.equipeMandante.golsPenalti,  jogo.equipeVisitante.golsPenalti)
                }else{
                    atualizarTabela(tabelas, jogo, jogo.equipeVisitante.gols, jogo.equipeMandante.gols, jogo.equipeVisitante.golsProrrogacao, jogo.equipeMandante.golsProrrogacao, jogo.equipeVisitante.golsPenalti, jogo.equipeMandante.golsPenalti)
                }
            });
            atualizarTabelaEstatisticas(filtrarJogos, tabelas, socio, variavelGlobal, socios, campeonatos, temporadas)
        }
    })
}

function filtroMenuJogosAssociacoes(jogos, socio, variavelGlobal, campeonatos, temporadas, socios){
    let menu = document.getElementById('menu-jogo-associacao')
    menu.addEventListener('change', function () {
        if(this.value != ''){
            let filtrarJogos = jogos.filter(jogo => {
                variavelGlobal.ativoAssociacao = this.value.toString()
                return jogo.equipeMandante.participante.tecnico.status.nome == this.value.toString() || jogo.equipeVisitante.participante.tecnico.status.nome == this.value.toString()
            })
            let tabelas = { participante: {participante: socios[variavelGlobal.socio], equipe: ''}, pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0,  ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, gpt: 0,   vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd: 0, pgpt: 0 }
            filtrarJogos.forEach( jogo => {
                if(socio == jogo.equipeMandante.participante.tecnico.nome){
                    atualizarTabela(tabelas, jogo, jogo.equipeMandante.gols, jogo.equipeVisitante.gols, jogo.equipeMandante.golsProrrogacao,  jogo.equipeVisitante.golsProrrogacao, jogo.equipeMandante.golsPenalti,  jogo.equipeVisitante.golsPenalti)
                }else{
                    atualizarTabela(tabelas, jogo, jogo.equipeVisitante.gols, jogo.equipeMandante.gols, jogo.equipeVisitante.golsProrrogacao, jogo.equipeMandante.golsProrrogacao, jogo.equipeVisitante.golsPenalti, jogo.equipeMandante.golsPenalti)
                }
            });
            atualizarTabelaEstatisticas(filtrarJogos, tabelas, socio, variavelGlobal, socios, campeonatos, temporadas)
        }
    })
}

function filtroMenuJogosRegras(jogos, socio, variavelGlobal, campeonatos, temporadas, socios){
    let menu = document.getElementById('menu-jogo-regra')
    menu.addEventListener('change', function () {
        if(this.value != ''){
            let campeonatoRegra = temporadas.filter( temporada => {
                variavelGlobal.ativoRegra = this.value.toString()
                return temporada.campeonato.regra.nome == this.value.toString()
            })
            let filtrarJogos = []
            jogos.forEach(jogo => {
                campeonatoRegra.forEach( campeonato => {
                    if(`${campeonato.nome} - ${campeonato.campeonato.nome}` == jogo.campeonato && campeonato.campeonato.regra.nome == this.value.toString()){
                        filtrarJogos.push(jogo)                        
                    }
                })
            })
            let tabelas = { participante: {participante: socios[variavelGlobal.socio], equipe: ''}, pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0,  ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, gpt: 0,   vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd: 0, pgpt: 0 }
            filtrarJogos.forEach( jogo => {
                if(socio == jogo.equipeMandante.participante.tecnico.nome){
                    atualizarTabela(tabelas, jogo, jogo.equipeMandante.gols, jogo.equipeVisitante.gols, jogo.equipeMandante.golsProrrogacao, jogo.equipeVisitante.golsProrrogacao, jogo.equipeMandante.golsPenalti,  jogo.equipeVisitante.golsPenalti)
                }else{
                    atualizarTabela(tabelas, jogo, jogo.equipeVisitante.gols, jogo.equipeMandante.gols, jogo.equipeVisitante.golsProrrogacao, jogo.equipeMandante.golsProrrogacao, jogo.equipeVisitante.golsPenalti, jogo.equipeMandante.golsPenalti)
                }
            });
            atualizarTabelaEstatisticas(filtrarJogos, tabelas, socio, variavelGlobal, socios, campeonatos, temporadas)
        }
    })
}

function atualizarTabela(tabelas, jogo, equipeMandanteGols,  equipeVisitandeGols, equipeMandanteGolsProrrogacao,  equipeVisitanteGolsProrrogacao, equipeMandanteGolsPenalti,  equipeVisitanteGolsPenalti){
    if(jogo.prorrogacao && equipeMandanteGols == equipeVisitandeGols){
        tabelas.vp += equipeMandanteGolsProrrogacao > equipeVisitanteGolsProrrogacao ? 1 : 0
        tabelas.ep += equipeMandanteGolsProrrogacao == equipeVisitanteGolsProrrogacao ? 1 : 0
        tabelas.dp += equipeMandanteGolsProrrogacao < equipeVisitanteGolsProrrogacao ? 1 : 0
        tabelas.pgp = tabelas.vp
        tabelas.gpp += equipeMandanteGolsProrrogacao
        tabelas.gcp += equipeVisitanteGolsProrrogacao,
        tabelas.sgp += equipeMandanteGolsProrrogacao - equipeVisitanteGolsProrrogacao
        if(equipeMandanteGolsProrrogacao == equipeVisitanteGolsProrrogacao){
            tabelas.vpt += equipeMandanteGolsPenalti > equipeVisitanteGolsPenalti ? 1 : 0
            tabelas.dpt += equipeMandanteGolsPenalti < equipeVisitanteGolsPenalti ? 1 : 0
            tabelas.gppt += equipeMandanteGolsPenalti
            tabelas.gcpt += equipeVisitanteGolsPenalti
            tabelas.sgpt += equipeMandanteGolsPenalti - equipeVisitanteGolsPenalti
            tabelas.pgpt = tabelas.vpt
        }
    }
    if(jogo.penalti  && equipeMandanteGols == equipeVisitandeGols){
        tabelas.vpt += equipeMandanteGolsPenalti > equipeVisitanteGolsPenalti ? 1 : 0
        tabelas.dpt += equipeMandanteGolsPenalti < equipeVisitanteGolsPenalti ? 1 : 0
        tabelas.gppt += equipeMandanteGolsPenalti
        tabelas.gcpt += equipeVisitanteGolsPenalti
        tabelas.sgpt += equipeMandanteGolsPenalti - equipeVisitanteGolsPenalti
        tabelas.pg = tabelas.vpt
    }
    tabelas.v += equipeMandanteGols > equipeVisitandeGols ? 1 : 0
    if(jogo.penalti && equipeMandanteGolsPenalti > equipeVisitanteGolsPenalti) tabelas.v += 1
    tabelas.d += equipeMandanteGols < equipeVisitandeGols ? 1 : 0
    tabelas.e += equipeMandanteGols == equipeVisitandeGols ? 1 : 0
    tabelas.j = tabelas.v + tabelas.e + tabelas.d
    tabelas.pg = (tabelas.v * 3) + tabelas.e
    tabelas.gp += equipeMandanteGols
    tabelas.gc += equipeVisitandeGols
    tabelas.sg = tabelas.gp - tabelas.gc
}

function pegarTreinador(filtrarJogos, socio){
    return filtrarJogos[0].equipeMandante.participante.tecnico.nome == socio ? filtrarJogos[0].equipeMandante.participante : filtrarJogos[0].equipeVisitante.participante
}

function atualizarTabelaEstatisticas(filtrarJogos, tabelas, socio, variavelGlobal, socios, campeonatos, temporadas){
    let section = document.getElementById('todas-estatisticas')
    section.innerHTML = ''
    section.appendChild(filtrosEstatisticas(filtrarJogos, tabelas, socio, variavelGlobal, socios, campeonatos, temporadas))
    filtrosMenusJogos(filtrarJogos, socio, variavelGlobal, socios, campeonatos, temporadas)
}

function resetar(socios, campeonatos, temporadas, variavelGlobal, tipos, regras){
    let button = document.getElementById('btn-reset')
    button.addEventListener('click', () => {
        variavelGlobal.ativoCampeonato = ''
        variavelGlobal.ativoTemporada = ''
        variavelGlobal.ativoAdversario = ''
        variavelGlobal.ativoAssociacao = ''
        variavelGlobal.ativoRegra = ''
        mostrarSocios(socios[variavelGlobal.socio], campeonatos, temporadas, variavelGlobal, socios, tipos, regras)
    })
}