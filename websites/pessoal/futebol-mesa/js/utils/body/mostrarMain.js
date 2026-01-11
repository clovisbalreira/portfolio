import { criarUl } from "../tags/criarUl.js"
import { criarTag } from "../tags/criarTag.js"
import { mapa } from "../mapa.js"

export function mostrarMain(socios, associacao, campeonatos, temporadas){
    let principal = document.getElementById('principal')
    principal.innerHTML = ''
    let section = document.createElement('section')
    section.id = 'main-descricao'
    descricao(section, associacao)
    section.appendChild(campeoes(socios, associacao, campeonatos, temporadas))    
    principal.appendChild(section)
}

function descricao(section, associacao){
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
    section.appendChild(criarUl(dados))
    section.appendChild(mapa(associacao))
}

function campeoes(socios, associacao, campeonatos, temporadas){
    let div = document.createElement('div')
    div.classList = 'div-scroll'
    div.appendChild(criarTag('h2', 'Campeões'))
    let filtrarTemporadas = temporadas.filter( temporada => temporada.campeonato.associacao.nome == associacao.nome)
    let filtrarCampeonatos = campeonatos.filter(campeonato => campeonato.associacao.nome === associacao.nome).map(campeonato => ({nome: campeonato.nome, total: 0}));
    let filtrarSocios = socios.map(socio => { return { nome: socio.nome, campeonatos: filtrarCampeonatos.map(c => ({ ...c })), total: 0 }; });
    filtrarTemporadas.forEach( temporada => {
        temporada.tabelaClassificacaoGeral.forEach(( tabela, index) => {
            if(index == 0){
                filtrarSocios.forEach( socio => {
                    if(tabela.tecnico.participante.nome == socio.nome){
                        socio.campeonatos.forEach( campeonato => {
                            if(campeonato.nome == temporada.campeonato.nome){
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
    div.appendChild(criarTabela(filtrarCampeonatos, campeoes))
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
    tr.appendChild(criarTh('Tecnico', false))
    tr.appendChild(criarTh('Total', false))
    campeonatos.forEach( (campeonato, index) => {
        index < 2 ? tr.appendChild(criarTh(campeonato.nome, false)) : tr.appendChild(criarTh(campeonato.nome, true))
    })
    thead.appendChild(tr)
    return thead
}

function criarTh(texto, apagar){
    let th = document.createElement('th')
    th.textContent = texto
    if(typeof texto == 'number') th.classList.add('coluna-menor-total')
    if(apagar) th.classList.add('apagar-coluna-menor')
    return th    
}

function criarTbody(campeoes){
    let tbody = document.createElement('tbody')
    campeoes.forEach( campeao => {
        let tr = document.createElement('tr')
        tr.appendChild(criarTd(campeao.nome, false))
        tr.appendChild(criarTd(campeao.total, false))
        campeao.campeonatos.forEach( (campeonato, index) => {
            index < 2 ? tr.appendChild(criarTd(campeonato.total, false)) : tr.appendChild(criarTd(campeonato.total, true))
        })
        tbody.appendChild(tr)
    })
    return tbody
}

function criarTd(texto, apagar){
    let td = document.createElement('td')
    td.textContent = texto
    if(typeof texto == 'number') td.classList.add('coluna-menor-total')
    if(apagar) td.classList.add('apagar-coluna-menor')
    return td    
}