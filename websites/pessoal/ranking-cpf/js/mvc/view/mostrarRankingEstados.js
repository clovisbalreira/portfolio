import { estados } from "../controll/estados.js"
import { selects } from "../controll/selects.js"
import { campeonatos } from "../controll/campeonatos.js"

export function mostrarRankingEstados(){
    let section = document.getElementById('section-estado')
    section.innerHTML = ''
    let table = document.createElement('table')
    table.appendChild(criarThead())
    table.appendChild(criarTbody())
    table.appendChild(criarTfoot())
    section.appendChild(table)
}

function criarThead(){
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    let th = document.createElement('th')
    th.textContent = 'Ano'
    tr.appendChild(th)
    th = document.createElement('th')
    th.textContent = 'Campeonato'
    tr.appendChild(th)
    th = document.createElement('th')
    th.textContent = 'Clube'
    tr.appendChild(th)
    th = document.createElement('th')
    th.textContent = 'Colocação'
    tr.appendChild(th)
    th = document.createElement('th')
    th.textContent = 'Pontos'
    tr.appendChild(th)
    thead.appendChild(tr)
    return thead
}

function criarTbody(){
    let tbody = document.createElement('tbody')
    let ano = selects.ano
    for(let i = 1; i < 6; i++){
        campeonatos.forEach( campeonato => {
            campeonato.ranking.forEach( ranking => {
                estados[selects.estado].pontos.forEach( estado => {
                    if(ano - i == estado.ano && campeonato.nome == estado.campeonato && ranking.colocacao == estado.colocacao){
                        let tr = document.createElement('tr')
                        let td = document.createElement('td')
                        td.textContent = estado.ano
                        tr.appendChild(td)
                        td = document.createElement('td')
                        td.textContent = estado.campeonato
                        tr.appendChild(td)
                        td = document.createElement('td')
                        td.textContent = estado.clube
                        tr.appendChild(td)
                        td = document.createElement('td')
                        td.textContent = !isNaN(parseInt(estado.colocacao)) && !estado.colocacao.includes('ª') ? `${estado.colocacao}º` : estado.colocacao;
                        tr.appendChild(td)
                        td = document.createElement('td')
                        td.textContent = estado.pontos
                        tr.appendChild(td)
                        tbody.appendChild(tr)
                    }
                })
            })
        })
    }
    return tbody
}

function criarTfoot(){
    let colocacaoCampeonato = arrayColocacao()
    let tfoot = document.createElement('tfoot')
    let tr = document.createElement('tr')
    let th = document.createElement('th')
    th.textContent = 'Média'
    th.colSpan = 5
    tr.appendChild(th)
    tfoot.appendChild(tr)
    campeonatos.forEach( campeonato => {
        colocacaoCampeonato.forEach( estado => {
            if(campeonato.nome == estado.campeonato){
                tr = document.createElement('tr')
                let td = document.createElement('td')
                td.textContent = estado.campeonato
                td.colSpan = 4
                tr.appendChild(td)
                td = document.createElement('td')
                td.textContent = `${media(estado.colocacao)}º`
                td.colSpan = 1
                tr.appendChild(td)
                tfoot.appendChild(tr)
            }
        })
    })
    tr = document.createElement('tr')
    th = document.createElement('th')
    th.textContent = 'Total Pontos'
    th.colSpan = 4
    tr.appendChild(th)
    th = document.createElement('th')
    th.textContent = estados[selects.estado].pontosTotal
    th.colSpan = 1
    tr.appendChild(th)
    tfoot.appendChild(tr)
    return tfoot
}

function arrayColocacao(){
    let colocacaoCampeonato = []
    let campeonato = []
    estados[selects.estado].pontos.forEach( estado => {
        if(!campeonato.includes(estado.campeonato)){
            campeonato.push(estado.campeonato)
            colocacaoCampeonato.push({campeonato: estado.campeonato, colocacao: [colocacoes(estado.colocacao)]})
        }else{
            colocacaoCampeonato.forEach( col => {
                if(col.campeonato == estado.campeonato) col.colocacao.push(colocacoes(estado.colocacao))
            })
        } 
    })
    return colocacaoCampeonato
}

function colocacoes(colocacao){
    if(colocacao == 'Campeão'){
        return 1
    }else if(colocacao == 'Vice'){
        return 2
    }else if(colocacao == 'Semifinal'){
        return 4
    }else if(colocacao == 'Quartas'){
        return 8
    }else if(colocacao == 'Oitavas'){
        return 16
    }else if(colocacao == '3ª fase'){
        return 32
    }else if(colocacao == '2ª fase'){
        return 52
    }else if(colocacao == '1ª fase' || colocacao == 'Playoff'){
        return 92
    }else{
        return parseInt(colocacao)
    }
}

function media(numeros){
    const soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);
    return Math.floor(soma / numeros.length);
}