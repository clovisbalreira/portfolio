import { adicionarJogo } from "../../utils/adicionarJogo.js"
import { formatarData } from "../../utils/formatarData.js"
import { menuJogosAdversarios } from "../menus/menuJogosAdversarios.js"
import { menuJogosTemporada } from "../../utils/menus/menuJogosTemporada.js"
import { menuJogosCampeonato } from "../../utils/menus/menuJogosCampeonato.js"
import { criarTabela } from "../tags/criarTabela.js"
import { criarBotao } from "../criarBotao.js"
import { filtrosMenusJogos } from "./filtrosMenusJogos.js"
import { listas } from "../listas.js"
import { jogoMaisNumeroGols } from "../estatisticas/jogoMaisNumeroGols.js"
import { jogoDiferencaGolsPro } from "../estatisticas/jogoDiferencaGolsPro.js"
import { jogoDiferencaGolsContra } from "../estatisticas/jogoDiferencaGolsContra.js"
import { mediaGolsIndividual } from "../estatisticas/mediaGolsIndividual.js"
import { mediaGolsPro } from "../estatisticas/mediaGolsPro.js"
import { mediaGolsContra } from "../estatisticas/mediaGolsContra.js"
import { criarTag } from "../tags/criarTag.js"

export function filtrosEstatisticas(elemento, jogos, tabelas, socio, variavelGlobal, socios, campeonatos, temporadas){
    elemento.appendChild(menus(jogos, socio, variavelGlobal))
    elemento.appendChild(tabela([tabelas]))
    const resultado = { jogos: jogos }
    let dados = [
            { titulo: 'Média de gols', dado: mediaGolsIndividual(tabelas, false, true)},
            { titulo: 'Média de gols pro', dado: mediaGolsPro(tabelas, false, true)},
            { titulo: 'Média de gols contra', dado: mediaGolsContra(tabelas, false, true)},
            { titulo: 'Jogo com mais gols', dado: jogoMaisNumeroGols(resultado, false, true)},
            { titulo: 'Jogo com maior diferença de gols pro', dado: jogoDiferencaGolsPro(resultado, false, true, socio)},
            { titulo: 'Jogo com maior diferença de gols Contra', dado: jogoDiferencaGolsContra(resultado, false, true, socio)},
        ]
    elemento.appendChild(listas(dados, { tag: 'h2', nome: 'Dados'}))
    elemento.appendChild(todasPartidas(jogos))
    principal.appendChild(elemento)
    filtrosMenusJogos(jogos, socio, variavelGlobal, socios, campeonatos, temporadas)
}

function menus(jogos, socio, variavelGlobal){
    let div = document.createElement('div')
    div.classList.add('menus-filtros')
    div.appendChild(menuJogosAdversarios(jogos, socio, variavelGlobal.ativoAdversario))
    div.appendChild(menuJogosCampeonato(jogos, variavelGlobal.ativoCampeonato))
    div.appendChild(menuJogosTemporada(jogos, variavelGlobal.ativoTemporada))
    div.appendChild(criarBotao())
    return div
}

function tabela(tabelas){
    let div = document.createElement('div')
    div.classList.add('tabela-filtros')
    div.appendChild(criarTabela(tabelas, false, false))
    return div
}

function todasPartidas(totalJogos){
    let div = document.createElement('div')
    div.classList.add('todas-partidas-filtros')
    div.appendChild(criarTag('h2', 'Jogos'))
    totalJogos.forEach( jogo => {
        div.appendChild(partida(jogo))
    })
    return div
}

function partida(jogo){
    let div = document.createElement('div')
    div.classList.add('partida')
    div.appendChild(adicionarJogo('jogo-dados', [jogo.campeonato, jogo.fase, jogo.turno, jogo.rodada, formatarData(jogo.data)]))
    console.log()
    div.appendChild(adicionarJogo('jogo-normal', [jogo.mesa, variavelVazia(jogo.timeCasa.tecnico.time.nome, jogo.timeCasa.tecnico.participante.nome), jogo.timeCasa.gols,'X',jogo.timeFora.gols,variavelVazia(jogo.timeFora.tecnico.time.nome, jogo.timeFora.tecnico.participante.nome,)]))
    if(jogo.diferencaGols == 0 && jogo.prorrogacao){
        div.appendChild(adicionarJogo('jogo-prorrogacao', ['Prorrogação',jogo.timeCasa.golsProrrogacao,'X',jogo.timeFora.golsProrrogacao]))
        if(jogo.timeCasa.golsProrrogacao == jogo.timeFora.golsProrrogacao) div.appendChild(adicionarJogo('jogo-penalti', ['Penalti',jogo.timeCasa.golsPenalti, 'X', jogo.timeFora.golsPenalti]))
    }else if(jogo.diferencaGols == 0 && jogo.penalti){
        div.appendChild(adicionarJogo('jogo-penalti', ['Penalti',jogo.timeCasa.golsPenalti, 'X', jogo.timeFora.golsPenalti]))       
    }
    return div
}

function variavelVazia(variavel, tecnico){
    return variavel == '' || variavel == undefined ? tecnico : `${tecnico} ${variavel}`
}