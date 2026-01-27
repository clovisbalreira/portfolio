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
       if(dados.timeCasa.golsProrrogacao == dados.timeFora.golsProrrogacao) tbody.appendChild(criarTrProrragacaoPenalti(dados, false))
    }else if(dados.diferencaGols == 0 && dados.penalti){
        tbody.appendChild(criarTrProrragacaoPenalti(dados, false))
    }
    table.appendChild(tbody)
    return table
}

function criarTrJogo(dados, table){
    let tr = document.createElement('tr')
    if(table){
        if (dados.timeCasa != undefined) {
            tr.appendChild(criarTh(dados.campeonato, 1, table ? 'nome-jogo' : 'nome-jogo-maior'))
            tr.appendChild(criarTh(formatarData(dados.data), 3, 'data-jogo'))
            tr.appendChild(criarTh(`${dados.fase.includes('-') ? dados.fase.split('-')[1].trim() : dados.fase} - ${dados.turno}`, 1, 'turno-jogo'))
            tr.appendChild(criarTh(dados.regra, 1, 'regra-jogo'))
            tr.appendChild(criarTh(dados.tipo, 1, 'tipo-jogo'))
        }
    }else{
        if (dados.timeCasa != undefined) {
            tr.appendChild(criarTd(timeTecnico(dados.timeCasa, true, dados.tipo), 1, 'time-tecnico-jogo-mandante'))
            tr.appendChild(criarTd(dados.timeCasa.gols, 1, 'placar-jogo'))
            tr.appendChild(criarTd('X', 1, 'placar-jogo'))
            tr.appendChild(criarTd(dados.timeFora.gols, 1, 'placar-jogo'))
            tr.appendChild(criarTd(timeTecnico(dados.timeFora, false, dados.tipo), 3, 'time-tecnico-jogo-visitante'))
        }
    }
    return tr
}

function criarTrProrragacaoPenalti(dados, condicao){
    let tr = document.createElement('tr')
    tr.appendChild(criarTd(condicao ? 'Prorrogação' : 'Penalti', 1, 'time-tecnico-jogo-mandante'))
    if (dados.timeCasa != undefined) {
        tr.appendChild(criarTd(condicao ? dados.timeCasa.golsProrrogacao : dados.timeCasa.golsPenalti, 1, 'placar-jogo'))
        tr.appendChild(criarTd('X', 1, 'placar-jogo'))
        tr.appendChild(criarTd(condicao ? dados.timeFora.golsProrrogacao : dados.timeFora.golsPenalti, 1, 'placar-jogo'))
        tr.appendChild(criarTd('', 3, 'time-tecnico-jogo-visitante'))
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
    if (typeof dado === 'string'){
        if(dado.includes('Mesa')) td.classList.add('mesa')
        if(dado.includes('/')) td.classList.add('data')
    } 
    if(typeof dado == 'number' || dado == 'X') td.classList.add('placar')
    td.innerHTML = dado
    if(coluna > 1) td.colSpan = coluna
    td.classList.add(classe)
    return td
}

function timeTecnico(time, casaFora, tipo){
    let texto = '<div>'
    if(casaFora && tipo == 'Externo') texto += `<img src="./img/associacoes/${time.tecnico.associacao.escudo}" alt="${time.tecnico.associacao.nome}">`
    if(casaFora && time.tecnico.time.nome != undefined) texto += `<img src="./img/times/${time.tecnico.time.escudo}" alt="${time.tecnico.time.nome}">`
    texto += `<p>${time.tecnico.participante.nome}</p>`
    if(!casaFora && time.tecnico.time.nome != undefined) texto += `<img src="./img/times/${time.tecnico.time.escudo}" alt="${time.tecnico.time.nome}">`
    if(!casaFora && tipo == 'Externo') texto += `<img src="./img/associacoes/${time.tecnico.associacao.escudo}" alt="${time.tecnico.associacao.nome}">`
    texto += '</div>'
    return texto
}