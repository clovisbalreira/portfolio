import { adicionarJogo } from "../../utils/adicionarJogo.js"
import { menuJogosAdversarios } from "../menus/menuJogosAdversarios.js"
import { menuJogosTemporada } from "../../utils/menus/menuJogosTemporada.js"
import { menuJogosCampeonato } from "../../utils/menus/menuJogosCampeonato.js"
import { menuJogosAssociacao } from "../menus/menuJogosAssociacao.js"
import { menuJogosRegra } from "../menus/menuJogosRegra.js"
import { criarTabela } from "../tags/criarTabela.js"
import { criarBotao } from "../criarBotao.js"
import { jogoMaisNumeroGols } from "../estatisticas/jogoMaisNumeroGols.js"
import { jogoDiferencaGolsPro } from "../estatisticas/jogoDiferencaGolsPro.js"
import { jogoDiferencaGolsContra } from "../estatisticas/jogoDiferencaGolsContra.js"
import { mediaGolsIndividual } from "../estatisticas/mediaGolsIndividual.js"
import { mediaGolsPro } from "../estatisticas/mediaGolsPro.js"
import { mediaGolsContra } from "../estatisticas/mediaGolsContra.js"
import { criarTag } from "../tags/criarTag.js"

export function filtrosEstatisticas(jogos, tabelas, socio, variavelGlobal){
    let section = document.createElement('section')
    section.innerHTML = ''
    section.id = 'todas-estatisticas'
    section.appendChild(menus(jogos, socio, variavelGlobal))
    section.appendChild(tabela([tabelas]))
    section.appendChild(criarTabelaDados(tabelas, jogos, socio))
    section.appendChild(todasPartidas(jogos))
    return section
}

function criarTabelaDados(tabelas, jogos, socio){
    const resultado = { jogos: jogos } 
    let dados = [
        { titulo: 'Média de gols', dado: mediaGolsIndividual(tabelas, true, false)},
        { titulo: 'Média de gols pro', dado: mediaGolsPro(tabelas, true, false)},
        { titulo: 'Média de gols contra', dado: mediaGolsContra(tabelas, true, false)},
        { titulo: 'Jogo com mais gols', dado: jogoMaisNumeroGols(resultado, true, false)},
        { titulo: 'Jogo com maior diferença de gols pro', dado: jogoDiferencaGolsPro(resultado, true, socio, false)},
        { titulo: 'Jogo com maior diferença de gols Contra', dado: jogoDiferencaGolsContra(resultado, true, socio, false)},
    ]
    let div = document.createElement('div')
    div.classList.add('tabela-dados')
    let table = document.createElement('table')
    let caption = document.createElement('caption')
    caption.textContent = 'Dados'
    table.appendChild(caption)
    let tbody = document.createElement('tbody')
    dados.forEach( dado => {
        if(dado.dado != null ? dado.dado : 'N/A'){
            let tr = document.createElement('tr')
            tr.appendChild(criarTh(dado.titulo))
            tr.appendChild(criarTd(dado.dado))
            tbody.appendChild(tr)
        }
    })
    table.appendChild(tbody)
    div.appendChild(table)
    return div
}

function criarTh(texto){
    let th = document.createElement('th')
    th.textContent = texto
    return th
}

function criarTd(texto){
    let td = document.createElement('td')
    td.innerHTML = texto
    return td
}

function menus(jogos, socio, variavelGlobal){
    let div = document.createElement('div')
    div.classList.add('menus-filtros')
    div.appendChild(criarTag('h2', 'Menus'))
    div.appendChild(menuJogosAdversarios(jogos, socio, variavelGlobal.ativoAdversario))
    div.appendChild(menuJogosCampeonato(jogos, variavelGlobal.ativoCampeonato))
    div.appendChild(menuJogosTemporada(jogos, variavelGlobal.ativoTemporada))
    div.appendChild(menuJogosAssociacao(jogos, '', variavelGlobal.ativoAssociacao, false))
    div.appendChild(menuJogosRegra(jogos, variavelGlobal.ativoRegra, false))
    div.appendChild(criarBotao())
    return div
}

function tabela(tabelas){
    let div = document.createElement('div')
    div.classList.add('tabela-filtros')
    div.appendChild(criarTag('h2', 'Tabela'))
    div.appendChild(criarTabela(tabelas, false, false))
    return div
}

function todasPartidas(totalJogos){
    let div = document.createElement('div')
    div.classList.add('todas-partidas-filtros')
    div.appendChild(criarTag('h2', 'Jogos'))
    totalJogos.forEach( jogo => {
        div.appendChild(adicionarJogo(jogo, true))
    })
    return div
}