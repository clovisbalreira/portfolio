import { criarRankingEstados } from "../../utils/criarRankingEstados.js"
import { selects } from "../controll/selects.js"

export function mostrarRankingCampeonatoEstados(){
    let section = document.getElementById('ranking')
    let table = document.createElement('table')
    table.appendChild(criarThead())
    table.appendChild(criarTbody(criarRankingEstados()))
    section.appendChild(table)
}

function criarThead(){
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    let th = document.createElement('th')
    th.textContent = 'Posição'
    tr.appendChild(th)
    th = document.createElement('th')
    th.textContent = 'Clube'
    tr.appendChild(th)
    th = document.createElement('th')
    th.textContent = 'Pontos'
    tr.appendChild(th)
    thead.appendChild(tr)
    return thead
}

function criarTbody(ranking){
    let tbody = document.createElement('tbody')
    ranking.forEach( (estado, index) => {
        if(index < selects.top){
            let tr = document.createElement('tr')
            let td = document.createElement('td')
            td.textContent = `${index + 1}º`
            tr.appendChild(td)
            td = document.createElement('td')
            td.textContent = `${estado.nome} - ${estado.sigla}`
            tr.appendChild(td)
            td = document.createElement('td')
            td.textContent = estado.pontosTotal
            tr.appendChild(td)
            tbody.appendChild(tr)
        }
    })
    return tbody
}