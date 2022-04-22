function exibrJogadorTela(jogadores,grupo){
    titulo(grupo)
    cabecalho(grupo)
    var elemento = ""
    
    for(var i = 0; i < jogadores.length ; i++){
        elemento += "<tr><td>"+(i+1)+"º</td>"
        elemento += "<td><img src='"+ jogadores[i].foto+"' class='foto'></td>"
        elemento += "<td>"+jogadores[i].tecnico+"</td>"
        elemento += "<td>"+jogadores[i].pontos+"</td>"
        elemento += "<td>"+jogadores[i].jogos+"</td>"
        elemento += "<td>"+jogadores[i].vitorias+"</td>"
        elemento += "<td>"+jogadores[i].empates+"</td>"
        elemento += "<td>"+jogadores[i].derrotas+"</td>"
        elemento += "<td>"+jogadores[i].golspro+"</td>"
        elemento += "<td>"+jogadores[i].golscontra+"</td>"
        elemento += "<td>"+jogadores[i].saldogols+"</td>"
        elemento += "<td>"+jogadores[i].aproveitamento+"</td>"
        elemento += "</tr>"
    }
    var corpoGrupo = document.getElementById(`corpoGrupo${grupo}`);
    corpoGrupo.innerHTML = elemento;
}

function cabecalho(grupo){
    var elemento = ""
    elemento += "<tr><th scope='col'>Pos</th>"
    elemento += "<th scope='col' colspan='2'>Participante</th>"
    elemento += "<th scope='col'>Pg</th>"
    elemento += "<th scope='col'>J</th>"
    elemento += "<th scope='col'>V</th>"
    elemento += "<th scope='col'>E</th>"
    elemento += "<th scope='col'>D</th>"
    elemento += "<th scope='col'>GP</th>"
    elemento += "<th scope='col'>GC</th>"
    elemento += "<th scope='col'>SG</th>"
    elemento += "<th scope='col'>%</th>"
    elemento += "<th scope='col' hidden>D</th></tr>"
    var cabecalhoGrupo = document.getElementById(`cabecalhoGrupo${grupo}`);
    cabecalhoGrupo.innerHTML = elemento
}

function titulo(grupo){
    var elemento = ""
    elemento += `<colgroup>`
    elemento += `<col class="c-1">`
    elemento += `<col class="c-2" span="2">`
    elemento += `<col class="c-1">`
    elemento += `<col class="c-1">`
    elemento += `<col class="c-1">`
    elemento += `<col class="c-1">`
    elemento += `<col class="c-1">`
    elemento += `<col class="c-1">`
    elemento += `<col class="c-1">` 
    elemento += `<col class="c-1">`
    elemento += `<col class="c-1">`
    elemento += `</colgroup>`
    elemento += `<caption>Grupo ${grupo}</caption>`
    elemento += `<thead id="cabecalhoGrupo${grupo}">`
    elemento += `</thead>`
    elemento += `<tbody id="corpoGrupo${grupo}">`
    elemento += `</tbody>`
    var titulo = document.getElementById(`TabelaGrupo${grupo}`);
    titulo.innerHTML = elemento
}
exibrJogadorTela(grupoA,'A')
exibrJogadorTela(grupoB,'B')
exibrJogadorTela(grupoC,'C')
exibrJogadorTela(grupoD,'D')
exibrJogadorTela(grupoE,'E')
exibrJogadorTela(grupoF,'F')
exibrJogadorTela(grupoG,'G')
exibrJogadorTela(grupoH,'H')

function mostrarRodadas(){
    elemento = ''
    ultimo = 0
    var rodadas = document.getElementById('jogos')
    for(var i = 0; i < jogos.length; i = i + 2 ){
        if(ultimo != jogos[i].rodada){
            elemento += `<table><caption class='tituloRodada' >${jogos[i].rodada}º Rodada</caption>`
        }
        elemento += `<tr>`
        elemento += `<td><img src='${jogos[i].fotoCasa}'></td>`
        elemento += `<td>${jogos[i].timeCasa}</td>`
        elemento += `<td><input id='gc${jogos[i].rodada}${jogos[i].jogo}' type='number' min='0' onkeyup='atualizarJogos()' onclick='atualizarJogos()'></td>`
        elemento += `<td>X</td>`
        elemento += `<td><input id='gf${jogos[i].rodada}${jogos[i].jogo}' type='number' min='0' onkeyup='atualizarJogos()' onclick='atualizarJogos()'></td>`
        elemento += `<td>${jogos[i].timeFora}</td>`
        elemento += `<td><img src='${jogos[i].fotoFora}'></td>`

        elemento += `<td><img src='${jogos[i+1].fotoCasa}'></td>`
        elemento += `<td>${jogos[i+1].timeCasa}</td>`
        elemento += `<td><input id='gc${jogos[i+1].rodada}${jogos[i+1].jogo}' type='number' min='0' onkeyup='atualizarJogos()' onclick='atualizarJogos()'></td>`
        elemento += `<td>X</td>`
        elemento += `<td><input id='gf${jogos[i+1].rodada}${jogos[i+1].jogo}' type='number' min='0' onkeyup='atualizarJogos()' onclick='atualizarJogos()'></td>`
        elemento += `<td>${jogos[i+1].timeFora}</td>`
        elemento += `<td><img src='${jogos[i+1].fotoFora}'></td>`
        elemento += `</tr>`
        ultimo = jogos[i].rodada
        console.log(ultimo + ' ' + jogos[i].rodada )
        if(ultimo != jogos[i].rodada){
            elemento += `</table>`
        }
    }
    rodadas.innerHTML = elemento
}

mostrarRodadas()