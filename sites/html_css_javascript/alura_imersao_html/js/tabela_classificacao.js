var timea = {clube: "Time A",pontos:0,jogos:0,vitorias:0,empates:0,derrotas:0,golspro:0,golscontra:0,saldogols:0,aproveitamento:0}
var timeb = {clube: "Time B",pontos:0,jogos:0,vitorias:0,empates:0,derrotas:0,golspro:0,golscontra:0,saldogols:0,aproveitamento:0}
var timec = {clube: "Time C",pontos:0,jogos:0,vitorias:0,empates:0,derrotas:0,golspro:0,golscontra:0,saldogols:0,aproveitamento:0}
var timed = {clube: "Time D",pontos:0,jogos:0,vitorias:0,empates:0,derrotas:0,golspro:0,golscontra:0,saldogols:0,aproveitamento:0}

function calcularPontos(jogador){
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos
}

timea.pontos = calcularPontos(timea)
timeb.pontos = calcularPontos(timeb)
timec.pontos = calcularPontos(timec)
timed.pontos = calcularPontos(timed)

jogadores = [timea,timeb,timec,timed]

function exibrJogadorTela(jogadores){
    var elemento = ""
    
    for(var i = 0; i < jogadores.length ; i++){
        elemento += "<tr><td>"+jogadores[i].clube+"</td>"
        elemento += "<td>"+jogadores[i].pontos+"</td>"
        elemento += "<td>"+jogadores[i].jogos+"</td>"
        elemento += "<td>"+jogadores[i].vitorias+"</td>"
        elemento += "<td>"+jogadores[i].empates+"</td>"
        elemento += "<td>"+jogadores[i].derrotas+"</td>"
        elemento += "<td>"+jogadores[i].golspro+"</td>"
        elemento += "<td>"+jogadores[i].golscontra+"</td>"
        elemento += "<td>"+jogadores[i].saldogols+"</td>"
        elemento += "<td>"+jogadores[i].aproveitamento+"</td>"
        elemento += "<td><button onClick='adicionarVitoria("+i+")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate("+i+")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota("+i+")'>Derrota</button></td>"
        elemento += "</tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calcularPontos(jogador)
    exibrJogadorTela(jogadores)
}

function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calcularPontos(jogador)
    exibrJogadorTela(jogadores)
}

function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    exibrJogadorTela(jogadores)
}

function rodada(n){
    var rodadas = document.getElementById('rodadas')
    var table = document.createElement('table');
    var caption = document.createElement('caption')
    var thead = document.createElement('thead')
    var tr = document.createElement('tr')
    var th = document.createElement('th')

    caption.textContent = 'Rodada' + n + 'º'
    th.textContent = 'time'

    tr.appendChild(th)
    thead.appendChild(tr)
    caption.appendChild(thead)
    table.appendChild(caption)
    rodadas.appendChild(table)
    


}

rodada(1)
rodada(2)
rodada(3)
exibrJogadorTela(jogadores)

// validar lista de jogos
// classificação
// imagen do jogador
// zerar tudo
// adicionar jogador