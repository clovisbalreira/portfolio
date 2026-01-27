import { criarTag } from "../tags/criarTag.js"
import { menuJogosAssociacao } from "../menus/menuJogosAssociacao.js"
import { menuJogosRegra } from "../menus/menuJogosRegra.js"
import { adicionarJogo } from "../adicionarJogo.js"
import { mediaGolsIndividual } from "../estatisticas/mediaGolsIndividual.js"
import { mediaGolsPro } from "../estatisticas/mediaGolsPro.js"
import { mediaGolsContra } from "../estatisticas/mediaGolsContra.js"
import { jogoMaisNumeroGols } from "../estatisticas/jogoMaisNumeroGols.js"
import { jogoDiferencaGolsPro } from "../estatisticas/jogoDiferencaGolsPro.js"
import { jogoDiferencaGolsContra } from "../estatisticas/jogoDiferencaGolsContra.js"
import { criarBotao } from "../criarBotao.js"

export function filtroEstatisticasAssociacao(totalJogos, tabelas, associacao, variavelGlobal){
    let section = document.createElement('section')
    section.id = 'apertura-todas-estatisticas'
    section.appendChild(criarMenu(totalJogos, associacao, variavelGlobal))
    section.appendChild(criarTable(tabelas))
    section.appendChild(criarTabelaDados(tabelas, associacao, totalJogos))
    section.appendChild(todasPartidas(totalJogos))
    return section
}

function criarMenu(totalJogos, associacao, variavelGlobal){
    let div = document.createElement('div')
    div.classList.add('menu-principal-estatisticas')
    div.appendChild(criarTag('h2', 'Menus'))
    div.appendChild(menuJogosAssociacao(totalJogos, associacao.nome, variavelGlobal.ativoAssociacao, true))
    div.appendChild(menuJogosRegra(totalJogos, variavelGlobal.ativoRegra, true))
    div.appendChild(criarBotao())
    return div
}

function criarTable(tabelas){
    let div = document.createElement('div')
    div.classList.add('tabela-filtros')
    div.appendChild(criarTag('h2', 'Tabela'))
    div.appendChild(criarTabelaAssociacao(tabelas))
    return div
}

function criarTabelaAssociacao(tabelas){
    let table = document.createElement('table')
    let tituloTabela = ['Associação', 'PG', 'J', 'V', 'E', 'D', 'GP', 'GC', 'SG']
    table.appendChild(criarTheadAssociacao(tituloTabela))
    table.appendChild(criarTbodyAssociacao(tabelas))
    return table
}

function criarTheadAssociacao(tituloTabela){
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    tituloTabela.forEach( titulo => {
        tr.appendChild(criarTh(titulo, false))
    })
    thead.appendChild(tr)
    return thead
}

function criarTh(texto, apagar){
    let th = document.createElement('th')
    th.innerHTML = texto
    if(typeof texto == 'number') th.classList.add('coluna-menor-total')
    if(texto == 'E' || texto == 'D' || texto == 'GC' || texto == 'SG') th.classList.add('apagar-coluna-menor')
    if(apagar) th.classList.add('coluna-fixa')
    return th    
}

function criarTbodyAssociacao(tabela){
    let tbody = document.createElement('tbody')
    let tr = document.createElement('tr')   
    tr.appendChild(criarTd(imagemTexto(tabela.tecnico), false, false))
    tr.appendChild(criarTd(tabela.pg, false, false))
    tr.appendChild(criarTd(tabela.j, false, false))
    tr.appendChild(criarTd(tabela.v, false, false))
    tr.appendChild(criarTd(tabela.e, true, false))
    tr.appendChild(criarTd(tabela.d, true, false))
    tr.appendChild(criarTd(tabela.gp, false, false))
    tr.appendChild(criarTd(tabela.gc, true, false))
    tr.appendChild(criarTd(tabela.sg, true, false))
    tbody.appendChild(tr)
    return tbody
}

function criarTd(conteudo, diminuir, apagar){
    let td = document.createElement('td')
    if (conteudo instanceof HTMLElement) {
        td.appendChild(conteudo)
    } else {
        td.innerHTML = conteudo
    }
    if(typeof conteudo == 'number') td.classList.add('coluna-menor-total')
    if(diminuir) td.classList.add('apagar-coluna-menor')
    if(apagar) td.classList.add('coluna-fixa')
    return td    
}

function imagemTexto(associacao){
    let div = document.createElement('div')
    let img = document.createElement('img')
    img.src = `./img/associacoes/${associacao.escudo}`
    img.alt = associacao.nome
    div.appendChild(img)
    let p = document.createElement('p')
    p.textContent = associacao.sigla
    div.appendChild(p)
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

function criarTabelaDados(tabelas, associacao, jogos){
    const resultado = { jogos: jogos }     
    let dados = [
        { titulo: 'Média de gols', dado: mediaGolsIndividual(tabelas, true, false)},
        { titulo: 'Média de gols pro', dado: mediaGolsPro(tabelas, true, false)},
        { titulo: 'Média de gols contra', dado: mediaGolsContra(tabelas, true, false)},
        { titulo: 'Jogo com mais gols', dado: jogoMaisNumeroGols(resultado, true, false)},
        { titulo: 'Jogo com maior diferença de gols pro', dado: jogoDiferencaGolsPro(resultado, true, associacao.nome, false)},
        { titulo: 'Jogo com maior diferença de gols Contra', dado: jogoDiferencaGolsContra(resultado, true, associacao.nome, false)},
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