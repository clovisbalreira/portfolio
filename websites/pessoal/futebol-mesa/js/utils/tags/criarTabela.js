import { criarTag } from "./criarTag.js"

export function criarTabela(campeonatos, penaltiPontos, time){
    if(campeonatos[0].tecnico != undefined){
        let table = document.createElement('table')
        table.appendChild(criarThead(penaltiPontos, time))
        table.appendChild(criarTbody(campeonatos, penaltiPontos, time))
        return table
    }else{
        let div = document.createElement('div')
        campeonatos.forEach( campeonato => {
            div.appendChild(criarTag('h3', campeonato.grupo))
            let divGrupo = document.createElement('div')
            let table = document.createElement('table')
            table.appendChild(criarThead(penaltiPontos, time))
            table.appendChild(criarTbody(campeonato.clubes, penaltiPontos, time))
            div.appendChild(table)
            div.appendChild(divGrupo)
        })
        return div
    }
}

function criarThead(penaltiPontos, time){
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    let tituloTabela = ['Tecnico', 'PG', 'J', 'V', 'E', 'D', 'GP', 'GC', 'SG']
    if(penaltiPontos){
        tituloTabela = ['Tecnico', 'PG', 'J', 'V', 'E', 'D', 'GP', 'GC', 'SG', 'VPT', 'DPT', 'GPPT', 'GCPT',  'SGPT']
    }
    if(time) tituloTabela.unshift('Time')
    tituloTabela.forEach( titulo => {
        let th = document.createElement('th')
        if(titulo != 'Time' && titulo != 'Tecnico') th.classList.add('coluna-menor')
        if(titulo == 'E' || titulo == 'D' || titulo == 'GC' || titulo == 'SG') th.classList.add('apagar-coluna-menor')
        if(titulo == 'VPT' || titulo == 'DPT' || titulo == 'GPPT' || titulo == 'GCPT' || titulo == 'SGPT') th.classList.add('apagar-coluna-menor-penalti')
        th.textContent = titulo
        tr.appendChild(th)
    })
    thead.appendChild(tr)
    return thead
}

function criarTbody(campeonato, penaltiPontos, time){
    let tbody = document.createElement('tbody')
    campeonato.forEach( tabela => {
        let tr = document.createElement('tr')
        if(time) tr.appendChild(criarTd(tabela.tecnico.time.nome, false))
        tr.appendChild(criarTd(tabela.tecnico.participante.nome, false))
        tr.appendChild(criarTd(tabela.pg, false))
        tr.appendChild(criarTd(tabela.j, false))
        tr.appendChild(criarTd(tabela.v, false))
        tr.appendChild(criarTd(tabela.e, true))
        tr.appendChild(criarTd(tabela.d, true))
        tr.appendChild(criarTd(tabela.gp, false))
        tr.appendChild(criarTd(tabela.gc, true))
        tr.appendChild(criarTd(tabela.sg, true))
        if(penaltiPontos){
            tr.appendChild(criarTd(tabela.vpt, 'penalti'))
            tr.appendChild(criarTd(tabela.dpt, 'penalti'))
            tr.appendChild(criarTd(tabela.gppt, 'penalti'))
            tr.appendChild(criarTd(tabela.gcpt, 'penalti'))
            tr.appendChild(criarTd(tabela.sgpt, 'penalti'))
            tbody.appendChild(tr)
        }
        tbody.appendChild(tr)
    })
    return tbody
}

function criarTd(texto, apagar){
    let td = document.createElement('td')
    td.textContent = texto
    if(typeof texto == 'number') td.classList.add('coluna-menor')
    if(apagar == 'penalti') td.classList.add('apagar-coluna-menor-penalti')
    else if(apagar) td.classList.add('apagar-coluna-menor')
    return td    
}