import { criarTag } from "./criarTag.js"

export function criarTabela(campeonatos, penaltiPontos, tipo , time){
    if(campeonatos[0].tecnico != undefined){
        let table = document.createElement('table')
        table.appendChild(criarThead(campeonatos, penaltiPontos))
        table.appendChild(criarTbody(campeonatos, penaltiPontos, tipo, time))
        return table
    }else{
        let div = document.createElement('div')
        campeonatos.forEach( campeonato => {
            div.appendChild(criarTag('h3', campeonato.grupo))
            let divGrupo = document.createElement('div')
            let table = document.createElement('table')
            table.appendChild(criarThead(campeonatos, penaltiPontos))
            table.appendChild(criarTbody(campeonato.clubes, penaltiPontos, tipo, time))
            div.appendChild(table)
            div.appendChild(divGrupo)
        })
        return div
    }
}

function criarThead(campeonatos, penaltiPontos){
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    let tituloTabela = [campeonatos[0].tecnico.nome == undefined ? 'Tecnico' : 'Associação', 'PG', 'J', 'V', 'E', 'D', 'GP', 'GC', 'SG']
    if(penaltiPontos){
        tituloTabela = [campeonatos[0].tecnico.nome == undefined ? 'Tecnico' : 'Associação', 'PG', 'J', 'V', 'E', 'D', 'GP', 'GC', 'SG', 'VPT', 'DPT', 'GPPT', 'GCPT',  'SGPT']
    }
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

function criarTbody(campeonato, penaltiPontos, tipo, time){
    let tbody = document.createElement('tbody')
    campeonato.forEach( tabela => {
        let tr = document.createElement('tr')
        tr.appendChild(criarTd(imagemTexto(tabela.tecnico, tipo, time)))
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

function criarTd(conteudo, apagar){
    let td = document.createElement('td')
    if (conteudo instanceof HTMLElement) {
        td.appendChild(conteudo)
    } else {
        td.innerHTML = conteudo
    }
    if(typeof conteudo == 'number') td.classList.add('coluna-menor')
    if(apagar == 'penalti') td.classList.add('apagar-coluna-menor-penalti')
    else if(apagar) td.classList.add('apagar-coluna-menor')
    return td    
}

function imagemTexto(associacao, tipo, time) {
    const div = document.createElement('div')
    
    if (tipo === 'Externo' && (associacao?.associacao || associacao?.nome)) {
        div.appendChild(
            colocarImagem(
                associacao.associacao == undefined ? associacao.escudo : associacao.associacao.escudo,
                associacao.participante == undefined ? associacao?.nome ?? '' : associacao?.participante?.nome ?? '',
                'associacoes'
            )
        )
    }

    if (time === true && associacao?.time?.nome) {
        div.appendChild(
            colocarImagem(
                associacao.time.escudo,
                associacao.time.nome,
                'times'
            )
        )
    }

    const p = document.createElement('p')
    p.textContent = associacao.participante == undefined ? associacao?.sigla ?? '' : associacao?.participante?.nome ?? ''
    div.appendChild(p)

    return div
}


function colocarImagem(imagem, alt, pasta){
    let img = document.createElement('img')
    img.src = `./img/${pasta}/${imagem}`
    img.alt = alt
    return img
}