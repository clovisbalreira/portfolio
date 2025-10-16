import { clubes } from "../controll/clubes.js"
import { campeonatos } from "../controll/campeonatos.js"
import { selects } from "../controll/selects.js"

export function mostrarRankingClubes(){
    let section = document.getElementById('section-clube')
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
        clubes[selects.clube].pontos.forEach( clube => {
            if(ano - i == clube.ano){
                let tr = document.createElement('tr')
                let td = document.createElement('td')
                td.textContent = clube.ano
                tr.appendChild(td)
                td = document.createElement('td')
                td.textContent = clube.campeonato
                tr.appendChild(td)
                td = document.createElement('td')
                td.textContent = !isNaN(parseInt(clube.colocacao)) && !clube.colocacao.includes('ª')
                ? `${clube.colocacao}º`
                : clube.colocacao;
                tr.appendChild(td)
                td = document.createElement('td')
                td.textContent = clube.pontos
                tr.appendChild(td)
                tbody.appendChild(tr)
            }
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
    th.colSpan = 4
    tr.appendChild(th)
    tfoot.appendChild(tr)
    campeonatos.forEach( campeonato => {
        colocacaoCampeonato.forEach( clube => {
            if(campeonato.nome == clube.campeonato){
                tr = document.createElement('tr')
                let td = document.createElement('td')
                td.textContent = clube.campeonato
                td.colSpan = 3
                tr.appendChild(td)
                td = document.createElement('td')
                td.textContent = `${media(clube.colocacao)}º`
                td.colSpan = 1
                tr.appendChild(td)
                tfoot.appendChild(tr)
            }
        })
    })
    tr = document.createElement('tr')
    th = document.createElement('th')
    th.textContent = 'Total Pontos'
    th.colSpan = 3
    tr.appendChild(th)
    th = document.createElement('th')
    th.textContent = clubes[selects.clube].pontosTotal
    th.colSpan = 1
    tr.appendChild(th)
    tfoot.appendChild(tr)
    return tfoot
}

function arrayColocacao(){
    let colocacaoCampeonato = []
    let campeonato = []
    clubes[selects.clube].pontos.forEach( clube => {
        if(!campeonato.includes(clube.campeonato)){
            campeonato.push(clube.campeonato)
            colocacaoCampeonato.push({campeonato: clube.campeonato, colocacao: [colocacoes(clube.colocacao)]})
        }else{
            colocacaoCampeonato.forEach( col => {
                if(col.campeonato == clube.campeonato) col.colocacao.push(colocacoes(clube.colocacao))
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
    }else if(colocacao == '4ª fase'){
        return 32
    }else if(colocacao == '3ª fase'){
        return 52
    }else if(colocacao == '1ª fase' || colocacao == '2ª fase'){
        return 92
    }else{
        return parseInt(colocacao)
    }
}

function media(numeros){
    const soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);
    return Math.floor(soma / numeros.length);
}