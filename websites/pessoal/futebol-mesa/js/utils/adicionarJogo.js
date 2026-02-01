import { formatarData } from "./formatarData.js"

export function adicionarJogo(dados, campeonato){
    let table = document.createElement('table')
    table.id = 'tabela-jogos'
    let thead = document.createElement('thead')
    if(campeonato) thead.appendChild(criarTrJogo(dados, true, campeonato))
    table.appendChild(thead)
    let tbody = document.createElement('tbody')
    tbody.appendChild(criarTrJogo(dados, false))
    if(dados.diferencaGols == 0 && dados.prorrogacao){
        if(dados.prorrogacao != 'Penalti') tbody.appendChild(criarTrProrragacaoPenalti(dados, true))
       if(dados.timeMandante.golsProrrogacao == dados.timeVisitante.golsProrrogacao) tbody.appendChild(criarTrProrragacaoPenalti(dados, false))
    }else if(dados.diferencaGols == 0 && dados.penalti){
        tbody.appendChild(criarTrProrragacaoPenalti(dados, false))
    }
    table.appendChild(tbody)
    return table
}

function criarTrJogo(dados, table){
    let tr = document.createElement('tr')
    if(table){
        if (dados.timeMandante != undefined) {
            tr.appendChild(criarTh(dados.campeonato, 1, table ? 'nome-jogo' : 'nome-jogo-maior'))
            tr.appendChild(criarTh(formatarData(dados.data), 3, 'data-jogo'))
            tr.appendChild(criarTh(`${dados.fase.includes('-') ? dados.fase.split('-')[1].trim() : dados.fase} - ${dados.turno}`, 1, 'turno-jogo'))
            tr.appendChild(criarTh(dados.regra, 1, 'regra-jogo'))
            tr.appendChild(criarTh(dados.tipo, 1, 'tipo-jogo'))
        }
    }else{
        if (dados.timeMandante != undefined) {
            tr.appendChild(criarTd(timeTecnico(dados.timeMandante, true, dados.tipo), 1, 'time-participante-jogo-mandante'))
            tr.appendChild(criarTd(dados.timeMandante.gols, 1, 'placar-jogo'))
            tr.appendChild(criarTd('X', 1, 'placar-jogo'))
            tr.appendChild(criarTd(dados.timeVisitante.gols, 1, 'placar-jogo'))
            tr.appendChild(criarTd(timeTecnico(dados.timeVisitante, false, dados.tipo), 3, 'time-participante-jogo-visitante'))
        }
    }
    return tr
}

function criarTrProrragacaoPenalti(dados, condicao){
    let tr = document.createElement('tr')
    tr.appendChild(criarTd(condicao ? 'Prorrogação' : 'Penalti', 1, 'time-participante-jogo-mandante'))
    if (dados.timeMandante != undefined) {
        tr.appendChild(criarTd(condicao ? dados.timeMandante.golsProrrogacao : dados.timeMandante.golsPenalti, 1, 'placar-jogo'))
        tr.appendChild(criarTd('X', 1, 'placar-jogo'))
        tr.appendChild(criarTd(condicao ? dados.timeVisitante.golsProrrogacao : dados.timeVisitante.golsPenalti, 1, 'placar-jogo'))
        tr.appendChild(criarTd('', 3, 'time-participante-jogo-visitante'))
    }
    return tr
}

function criarTh(dado, coluna, classe){
    let th = document.createElement('th')
    th.innerHTML = dado
    th.classList.add(classe)   
    if(coluna > 1) th.colSpan = coluna
    return th
}

function criarTd(dado, coluna, classe){
    let td = document.createElement('td')
    td.innerHTML = dado
    if(coluna > 1) td.colSpan = coluna
    td.classList.add(classe)
    return td
}

function timeTecnico(time, casaVisitante, tipo){
    let texto = '<div>'
    if(casaVisitante && tipo == 'Externo') texto += `<img src="./img/associacoes/${time.participante.associacao.escudo}" alt="${time.participante.associacao.nome}">`
    if(casaVisitante && time.participante.time.nome != undefined) texto += `<img src="./img/times/${time.participante.time.escudo}" alt="${time.participante.time.nome}">`
    texto += `<p>${time.participante.tecnico.nome}</p>`
    if(!casaVisitante && time.participante.time.nome != undefined) texto += `<img src="./img/times/${time.participante.time.escudo}" alt="${time.participante.time.nome}">`
    if(!casaVisitante && tipo == 'Externo') texto += `<img src="./img/associacoes/${time.participante.associacao.escudo}" alt="${time.participante.associacao.nome}">`
    texto += '</div>'
    return texto
}