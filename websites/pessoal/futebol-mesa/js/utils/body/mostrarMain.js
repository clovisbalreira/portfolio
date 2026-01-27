import { criarUl } from "../tags/criarUl.js"
import { criarTag } from "../tags/criarTag.js"
import { mapa } from "../mapa.js"
import { associacoes } from "../../mvc/controll/associacoes.js"
import { filtroEstatisticasAssociacao } from "../filtros/filtroEstatisticasAssociacao.js"
import { filtrosMenusAssociacoes } from "../filtros/filtrosMenuAssociacoes.js"

export function mostrarMain(socios, associacao, campeonatos, temporadas, variavelGlobal){
    let section = document.getElementById('principal')
    section.innerHTML = ''
    section.appendChild(descricao(socios, associacao, campeonatos, temporadas))
    let associacaoUnico = associacoes[variavelGlobal.associacao]
    let filtrarAssociacao = associacaoUnico
    let totalJogos = []
    filtrarAssociacao.jogos.forEach( jogo => {
        totalJogos.push(jogo)
    })
    if(totalJogos.length > 0){
        let tabelas = { tecnico: '', pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0,  ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, gpt: 0,   vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, pgpt: 0 }
        filtrarAssociacao.tabelas.forEach( tabela => {
            tabelas.tecnico = tabela.tabela.associacao
            tabelas.pg += tabela.tabela.pg
            tabelas.j += tabela.tabela.j
            tabelas.v += tabela.tabela.v
            tabelas.e += tabela.tabela.e
            tabelas.d += tabela.tabela.d
            tabelas.gp += tabela.tabela.gp
            tabelas.gc += tabela.tabela.gc
            tabelas.sg += tabela.tabela.sg
            tabelas.pgp += tabela.tabela.pgp
            tabelas.vp += tabela.tabela.vp
            tabelas.ep += tabela.tabela.ep
            tabelas.dp += tabela.tabela.dp
            tabelas.gpp += tabela.tabela.gpp
            tabelas.gcp += tabela.tabela.gcp
            tabelas.sgp += tabela.tabela.sgp
            tabelas.gpt += tabela.tabela.gpt
            tabelas.vpt += tabela.tabela.vpt
            tabelas.dpt += tabela.tabela.dpt
            tabelas.gppt += tabela.tabela.gppt
            tabelas.gcpt += tabela.tabela.gcpt
            tabelas.sgpt += tabela.tabela.sgpt
            tabelas.pgpt += tabela.tabela.pgpt
        })
        let sectionEstatistica = document.createElement('section')
        sectionEstatistica.id = 'section-estatistica-associacao'
        sectionEstatistica.appendChild(filtroEstatisticasAssociacao(totalJogos, tabelas, associacao, variavelGlobal))
        section.appendChild(sectionEstatistica)
        filtrosMenusAssociacoes(totalJogos, associacoes, associacao, campeonatos, temporadas, variavelGlobal, socios)
    }
}

function descricao(socios, associacao, campeonatos, temporadas){
    let div = document.createElement('div')
    div.id = 'main-descricao'
    let dados = [
        { titulo: 'Nome', dado: associacao.nome},
        { titulo: 'Sigla', dado: associacao.sigla},
        { titulo: 'Fundação', dado: associacao.fundacao},
        { titulo: 'Logradouro', dado: associacao.logradouro},
        { titulo: 'Número', dado: associacao.numero},
        { titulo: 'Cidade', dado: associacao.cidade},
        { titulo: 'Estado', dado: associacao.estado},
        { titulo: 'Pais', dado: associacao.pais},
        { titulo: 'Cep', dado: associacao.cep},
        { titulo: 'Regras', dado: associacao.regras},
        { titulo: 'Associação', dado: associacao.status}
    ]
    div.appendChild(criarUl(dados))
    div.appendChild(mapa(associacao))
    let filtrarTemporadas = temporadas.filter( temporada => temporada.campeonato.associacao.nome == associacao.nome)
    if(filtrarTemporadas.length > 0) div.appendChild(campeoes(socios, associacao, campeonatos, filtrarTemporadas))
    return div
}

function campeoes(socios, associacao, campeonatos, filtrarTemporadas){
    let div = document.createElement('div')
    div.appendChild(criarTag('h2', 'Campeões'))
    let divScroll = document.createElement('div')
    divScroll.classList = 'div-scroll'
    let filtrarCampeonatos = campeonatos.filter(campeonato => campeonato.associacao.nome === associacao.nome).map(campeonato => ({nome: campeonato.nome, regra: campeonato.regra.nome, total: 0}));
    let filtrarSocios = socios.map(socio => { return { nome: socio.nome, campeonatos: filtrarCampeonatos.map(c => ({ ...c })), total: 0 }; });
    filtrarTemporadas.forEach( temporada => {
        temporada.tabelaClassificacaoGeral.forEach(( tabela, index) => {
            if(index == 0){
                filtrarSocios.forEach( socio => {
                    if(tabela.tecnico.participante.nome == socio.nome){
                        socio.campeonatos.forEach( campeonato => {
                            if(campeonato.nome == temporada.campeonato.nome && temporada.campeonato.regra.nome == campeonato.regra){
                                campeonato.total += 1
                                socio.total += 1
                            }
                        })
                    }
                })
            }
        })
    })
    let campeoes = filtrarSocios.filter( socio => {
        return socio.total > 0
    })
    campeoes.sort((a, b) => {
        if (a.total !== b.total) { return b.total - a.total;}
        for (const [index] of a.campeonatos.entries()) {
            const diff = b.campeonatos[index].total - a.campeonatos[index].total;
            if (diff !== 0) return diff;
        }
        return 0;
    });
    divScroll.appendChild(criarTabela(filtrarCampeonatos, campeoes))
    div.appendChild(divScroll)
    return div
}

function criarTabela(campeonatos, campeoes){
    let table = document.createElement('table')
    table.appendChild(criarThead(campeonatos))
    table.appendChild(criarTbody(campeoes))
    return table
}

function criarThead(campeonatos){
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    tr.appendChild(criarTh('Tecnico', true))
    tr.appendChild(criarTh('Total', true))
    campeonatos.forEach( campeonato => {
        tr.appendChild(criarTh(campeonato.nome, false))
    })
    thead.appendChild(tr)
    return thead
}

function criarTh(texto, apagar){
    let th = document.createElement('th')
    th.textContent = texto
    if(typeof texto == 'number') th.classList.add('coluna-menor-total')
    if(apagar) th.classList.add('coluna-fixa')
    return th    
}

function criarTbody(campeoes){
    let tbody = document.createElement('tbody')
    campeoes.forEach( campeao => {
        let tr = document.createElement('tr')
        tr.appendChild(criarTd(campeao.nome, true))
        tr.appendChild(criarTd(campeao.total, true))
        campeao.campeonatos.forEach( campeonato => {
            tr.appendChild(criarTd(campeonato.total, false))
        })
        tbody.appendChild(tr)
    })
    return tbody
}

function criarTd(texto, apagar){
    let td = document.createElement('td')
    td.textContent = texto
    if(typeof texto == 'number') td.classList.add('coluna-menor-total')
    if(apagar) td.classList.add('coluna-fixa')
    return td    
}