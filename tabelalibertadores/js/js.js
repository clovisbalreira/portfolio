comeco()

function comeco(){
    atualizarTabela()
    mostrarGrupos()
    mostrarRodadas()
    //quartasDeFinal()
    mostrarQuartas()
    //semiFinal()
    mostrarSemi()
    //final()
    mostrarFinal()
    classificacaoTotal()
    classificacaoAssociacao()
    classificacaoEstatisticas('Estatisticas por Tecnico','cabecalhoIndividualTecnicos','corpoIndividualTecnicos','TabelaIndividualTecnico',jogadoresTotal)
    classificacaoEstatisticas('Estatisticas por Associações','cabecalhoIndividualAssociacao','corpoIndividualAssociacao','TabelaIndividualAssociacao',associacoes)
    estatisticas()
}

function mostrarGrupos(){
    for(var i = 0; i < grupo.length;i++){
        var g = jogadores.filter((jogador) => {
            return jogador.grupo == grupo[i]
        })
        exibrJogadorTela(g,grupo[i])
    }
}
function exibrJogadorTela(jogadores,grupo){
    titulo(grupo)
    cabecalho(grupo)
    var elemento = ""
    var n = 0;
    jogadores.forEach(jogador => {
        elemento += "<tr><td>"+(++n)+"º</td>"
        elemento += "<td><img src='"+ jogador.foto+"' class='foto'></td>"
        elemento += "<td>"+jogador.tecnico+"</td>"
        elemento += "<td>"+jogador.pontos+"</td>"
        elemento += "<td>"+jogador.jogos+"</td>"
        elemento += "<td>"+jogador.vitorias+"</td>"
        elemento += "<td>"+jogador.empates+"</td>"
        elemento += "<td>"+jogador.derrotas+"</td>"
        elemento += "<td>"+jogador.golspro+"</td>"
        elemento += "<td>"+jogador.golscontra+"</td>"
        elemento += "<td>"+jogador.saldogols+"</td>"
        elemento += "<td>"+jogador.aproveitamento+"</td>"
        elemento += "</tr>"
    });    
   
    var corpoGrupo = document.getElementById(`corpoGrupo${grupo}`);
    corpoGrupo.innerHTML = elemento;
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

function mostrarRodadas(){
    elemento = ''
    ultimo = 0
    var rodadas = document.getElementById('jogos')
    for(var i = 0; i < jogos.length; i ++){
        if(jogos[i].fase == 'grupo'){
            if(ultimo != jogos[i].rodada){
            elemento += `<table><caption class='tituloRodada' >${jogos[i].rodada}º Rodada</caption>`
            }
            elemento += `<tr>`
            elemento += `<td>${jogos[i].mesa}</td>`
            elemento += `<td>${jogos[i].hora}</td>`
            elemento += `<td><img style='width:30px' src='${jogos[i].fotoCasa}'></td>`
            elemento += `<td>${jogos[i].timeCasa}</td>`
            elemento += `<td><input style='display:none' id='gc${jogos[i].rodada}${jogos[i].jogo}' type='number' min='0' onkeyup='resultadoJogos(this)' onclick='resultadoJogos(this)'></td>`
            elemento += `<td>${jogos[i].golsCasa}</td>`
            elemento += `<td>X</td>`
            elemento += `<td>${jogos[i].golsFora}</td>`
            elemento += `<td><input style='display:none'id='gf${jogos[i].rodada}${jogos[i].jogo}' type='number' min='0' onkeyup='resultadoJogos(this)' onclick='resultadoJogos(this)'></td>`
            elemento += `<td>${jogos[i].timeFora}</td>`
            elemento += `<td><img style='width:30px' src='${jogos[i].fotoFora}'></td>`
            ultimo = jogos[i].rodada
            if(ultimo != jogos[i].rodada){
                elemento += `</table>`
            }
        }
    }
    rodadas.innerHTML = elemento
}

function mostrarQuartas(){
    for(var i = 0; i < jogos.length; i ++){
        if(jogos[i].fase == 'Quartas de Final' && (jogos[i].rodada == 5 || jogos[i].rodada == 7)){
            eliminatorias('quartasSulAmericanaEsquerda',jogos[i])
        }else if(jogos[i].fase == 'Quartas de Final' && (jogos[i].rodada ==  6 || jogos[i].rodada == 8)){
            eliminatorias('quartasSulAmericanaDireita',jogos[i])
        }else if(jogos[i].fase == 'Quartas de Final' && (jogos[i].rodada == 1 || jogos[i].rodada == 3)){
            eliminatorias('quartasLibertadoresEsquerda',jogos[i])
        }else if(jogos[i].fase == 'Quartas de Final' && (jogos[i].rodada ==  2 || jogos[i].rodada == 4)){
            eliminatorias('quartasLibertadoresDireita',jogos[i])
        }
    }
}

function mostrarSemi(){
    for(var i = 0; i < jogos.length; i ++){
        if((jogos[i].fase == 'Semi Final' && jogos[i].rodada == 5) || (jogos[i].fase == 'Semi Final' && jogos[i].rodada == 7)){
            eliminatorias('semiSulAmericanaEsquerda',jogos[i])
        }else if((jogos[i].fase == 'Semi Final' && jogos[i].rodada == 6) || (jogos[i].fase == 'Semi Final' && jogos[i].rodada == 8)){
            eliminatorias('semiSulAmericanaDireita',jogos[i])
        }else if((jogos[i].fase == 'Semi Final' && jogos[i].rodada ==  1) || (jogos[i].fase == 'Semi Final' && jogos[i].rodada == 3)){
            eliminatorias('semiLibertadoresEsquerda',jogos[i])
        }else if((jogos[i].fase == 'Semi Final' && jogos[i].rodada == 2) || (jogos[i].fase == 'Semi Final' && jogos[i].rodada == 4)){
            eliminatorias('semiLibertadoresDireita',jogos[i])
        }
    }
}
function mostrarFinal(){
    for(var i = 0; i < jogos.length; i ++){
        if((jogos[i].fase == 'Final' && jogos[i].rodada == 5) || (jogos[i].fase == '3ª Lugar' && jogos[i].rodada == 6) || (jogos[i].fase == '5ª Lugar' && jogos[i].rodada == 7) || (jogos[i].fase == '7ª Lugar' && jogos[i].rodada == 8)){
            eliminatorias('finalSulAmericana',jogos[i])
        }else if((jogos[i].fase == 'Final' && jogos[i].rodada == 1) || (jogos[i].fase == '3ª Lugar' && jogos[i].rodada == 2) || (jogos[i].fase == '5ª Lugar' && jogos[i].rodada == 3) || (jogos[i].fase == '7ª Lugar' && jogos[i].rodada == 4)){
            eliminatorias('finalLibertadores',jogos[i])
        }
    }
}

function eliminatorias(id, jogo){
    div = document.getElementById(id)
    largura = window.innerWidth
    if((jogo.rodada == 1 && (jogo.fase == 'Quartas de Final' || jogo.fase == 'Final')) || 
        (jogo.rodada == 5 && (jogo.fase == 'Final' || jogo.fase == 'Quartas de Final')) || 
        ((jogo.rodada == 1 || jogo.rodada == 5) && jogo.fase == 'Semi Final' && largura > 700) || 
        (jogo.rodada == 5 && jogo.fase == 'Quartas de Final') || 
        (jogo.rodada == 2 && jogo.fase == 'Semi Final') || 
        (jogo.rodada == 6 && jogo.fase == 'Semi Final') || 
        (jogo.rodada == 2 && jogo.fase == 'Quartas de Final' && largura > 700) || 
        (jogo.rodada == 6 && jogo.fase == 'Quartas de Final' && largura > 700)){
        h2 = document.createElement('h2')
        h2.textContent = jogo.fase
        div.appendChild(h2)
    }
    h3 = document.createElement('h3')
    h3.textContent = `Jogo ${jogo.rodada}º`
    h4 = document.createElement('h3')
    h4.textContent = `Mesa ${jogo.mesa} | Horário ${jogo.hora}`
    if((jogo.rodada == 3 && jogo.fase == 'Semi Final') || (jogo.rodada == 4 && jogo.fase == 'Semi Final') || (jogo.rodada == 7 && jogo.fase == 'Semi Final') || (jogo.rodada == 8 && jogo.fase == 'Semi Final')){
        h3.setAttribute('class','perdedorSemi')
    }
    if(((jogo.rodada == 1 || jogo.rodada == 5) && jogo.fase == 'Final')){
        h3.setAttribute('class','Final1')
    }
    if(((jogo.rodada == 2 || jogo.rodada == 6) && jogo.fase == '3ª Lugar')){
        h3.setAttribute('class','Final2')
    }
    if(((jogo.rodada == 3 || jogo.rodada == 7) && jogo.fase == '5ª Lugar')){
        h3.setAttribute('class','Final3')
    }
    if(((jogo.rodada == 4 || jogo.rodada == 8) && jogo.fase == '7ª Lugar')){
        h3.setAttribute('class','Final4')
    }
    div.appendChild(h3)
    div.appendChild(h4)
    if((jogo.fase == 'Final') || (jogo.fase == '3ª Lugar') || (jogo.fase == '5ª Lugar') || (jogo.fase == '7ª Lugar') || (jogo.fase == 'Semi Final' && jogo.rodada == 3) || (jogo.fase == 'Semi Final' && jogo.rodada == 4) || (jogo.fase == 'Semi Final' && jogo.rodada == 7) || (jogo.fase == 'Semi Final' && jogo.rodada == 8)){
        divFinal = document.createElement('div')
    }
    divCasa = document.createElement('div')
    labelCasa = document.createElement('label')
    labelCasa.textContent = jogo.timeCasa
    labelCasa.setAttribute('id',`tc${jogo.jogo}`)
    divCasa.appendChild(labelCasa)
    inputCasa = document.createElement('span')
    inputCasa.setAttribute('id',`gc${jogo.jogo}`)
    inputCasa.innerHTML = jogo.golsCasa
    divCasa.appendChild(inputCasa)
    if((jogo.fase == 'Final') || (jogo.fase == '3ª Lugar') || (jogo.fase == '5ª Lugar') || (jogo.fase == '7ª Lugar')){
        divFinal.appendChild(divCasa)
    }else{
        div.appendChild(divCasa)  
    }
    
    divFora = document.createElement('div')
    labelFora = document.createElement('label')
    labelFora.textContent = jogo.timeFora
    labelFora.setAttribute('id',`tf${jogo.jogo}`)
    inputFora = document.createElement('span')
    inputFora.innerHTML = jogo.golsFora
    inputFora.setAttribute('id',`gf${jogo.jogo}`)
    if((jogo.fase == 'Final') || (jogo.fase == '3ª Lugar') || (jogo.fase == '5ª Lugar') || (jogo.fase == '7ª Lugar')){
        divFora.appendChild(inputFora)
        divFora.appendChild(labelFora)
        divFinal.appendChild(divFora)
        div.appendChild(divFinal)
    }else{
        divFora.appendChild(labelFora)
        divFora.appendChild(inputFora)
        div.appendChild(divFora)
    }
}

function resultadoJogos(obj){
    input = obj.parentNode.previousSibling.previousSibling.innerHTML 
    if(input == 'X'){
        timeCasa = obj.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML
        timeFora = obj.parentNode.nextSibling.innerHTML
        golsCasa = obj.parentNode.previousSibling.previousSibling.previousSibling.innerHTML
        golsFora = obj.value
        td = obj.parentNode.previousSibling.textContent = golsFora    
    }else{
        timeCasa = obj.parentNode.previousSibling.innerHTML
        timeFora = obj.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML    
        golsCasa = obj.value
        golsFora = obj.parentNode.nextSibling.nextSibling.nextSibling.innerHTML
        td = obj.parentNode.nextSibling.textContent = golsCasa     
    }
    atualizarJogos(timeCasa,golsCasa,golsFora,timeFora)
}

function atualizarJogos(timeCasa,golsCasa,golsFora,timeFora){
    for(var i = 0; i < jogos.length; i++){
        if(jogos[i].timeCasa == timeCasa && jogos[i].timeFora == timeFora){
            jogos[i].golsCasa = golsCasa
            jogos[i].golsFora = golsFora
            break
        }
    }
    zerarTabela()
    atualizarTabela()
    apagarEliminatoria('quartasSulAmericanaEsquerda')
    apagarEliminatoria('quartasSulAmericanaDireita')
    apagarEliminatoria('quartasLibertadoresEsquerda')
    apagarEliminatoria('quartasLibertadoresDireita')
    quartasDeFinal()
    mostrarQuartas()
    apagarEliminatoria('semiSulAmericanaEsquerda')
    apagarEliminatoria('semiLibertadoresEsquerda')
    apagarEliminatoria('semiLibertadoresDireita')
    apagarEliminatoria('semiSulAmericanaDireita')
    mostrarSemi()
    apagarEliminatoria('finalLibertadores')
    apagarEliminatoria('finalSulAmericana')
    mostrarFinal()
}

function apagarEliminatoria(id){
    var div = document.getElementById(id)
    div.innerHTML = ''
    
}

function quartasDeFinal(){
    var clas = []
    grupo.forEach(g => {
        classificados(g,clas)
    })
    //console.log(clas)
    var c = 0
    for( var j = 48; j < 56; j++){
        jogos[j].timeCasa = clas[c] 
        jogos[j].timeFora = clas[c+8]     
        c +=2
        if(j == 51){
            c = 1
        }
    }
}

function classificados(g,clas){
    c = 0 
    for(var i = 0; i < jogadores.length; i++){
        if(jogadores[i].grupo == g){
            clas.push(jogadores[i].tecnico)    
            c++      
        }
        if(c == 2){
            break
        }
    }
}

function semiFinal(){
    clas = []
    for(var i = 49; i < 57;i++){
        classificacaoSemi(i,clas)
    }
    //console.log(clas)
    jogos[56].timeCasa = clas[8] 
    jogos[56].timeFora = clas[12] 
    jogos[57].timeCasa = clas[10] 
    jogos[57].timeFora = clas[14] 
    jogos[58].timeCasa = clas[9] 
    jogos[58].timeFora = clas[13] 
    jogos[59].timeCasa = clas[11] 
    jogos[59].timeFora = clas[15] 
    jogos[60].timeCasa = clas[0] 
    jogos[60].timeFora = clas[4] 
    jogos[61].timeCasa = clas[2] 
    jogos[61].timeFora = clas[6] 
    jogos[62].timeCasa = clas[1] 
    jogos[62].timeFora = clas[5] 
    jogos[63].timeCasa = clas[3] 
    jogos[63].timeFora = clas[7] 
}

function classificacaoSemi(i,clas){
    tc = document.getElementById(`tc${i}`).innerHTML
    tf = document.getElementById(`tf${i}`).innerHTML
    gc = document.getElementById(`gc${i}`).innerHTML
    gf = document.getElementById(`gf${i}`).innerHTML
    if(gc > gf){
        clas.push(tc)
        clas.push(tf)
    }else if(gc < gf){
        clas.push(tf)
        clas.push(tc)
    }
}
 
function final(){
    clas = []
    for(var i = 57; i < 65;i++){
        classificacaoSemi(i,clas)
    }
    jogos[64].timeCasa = clas[0] 
    jogos[64].timeFora = clas[2] 
    jogos[65].timeCasa = clas[1] 
    jogos[65].timeFora = clas[3] 
    jogos[66].timeCasa = clas[4] 
    jogos[66].timeFora = clas[6] 
    jogos[67].timeCasa = clas[5] 
    jogos[67].timeFora = clas[7] 
    jogos[68].timeCasa = clas[8] 
    jogos[68].timeFora = clas[10] 
    jogos[69].timeCasa = clas[9] 
    jogos[69].timeFora = clas[11] 
    jogos[70].timeCasa = clas[12] 
    jogos[70].timeFora = clas[14] 
    jogos[71].timeCasa = clas[13] 
    jogos[71].timeFora = clas[15] 
}

function zerarTabela(){
    jogadores.forEach(jogador => {
        jogador.vitorias = 0
        jogador.empates = 0
        jogador.derrotas = 0
        jogador.golspro = 0
        jogador.golscontra = 0
    })
}

function atualizarTabela(){
    jogos.forEach(jogo => {
        jogadores.forEach(jogador =>{
            if(jogo.timeCasa == jogador.tecnico){
                somarTabela(jogador,jogo.golsCasa,jogo.golsFora)
            }else if(jogo.timeFora == jogador.tecnico){
                somarTabela(jogador,jogo.golsFora,jogo.golsCasa)
            }    
        })
    })   
    jogadores.sort(criterios)
    atualizarClassificacao()
    mostrarGrupos()
}    

function somarTabela(jogador,gp,gc){
    jogador.golspro = parseInt(jogador.golspro) + parseInt(gp)
    jogador.golscontra = parseInt(jogador.golscontra) + parseInt(gc)
    jogador.saldogols = parseInt(jogador.golspro) - parseInt(jogador.golscontra)
    if(parseInt(gp) > parseInt(gc)){
        jogador.vitorias = parseInt(jogador.vitorias) + 1
    }else if(parseInt(gp) < parseInt(gc)){
        jogador.derrotas = parseInt(jogador.derrotas) + 1
    }else if(parseInt(gp) != '' && parseInt(gc) != ''){
        jogador.empates = parseInt(jogador.empates) + 1
    }else if(parseInt(gp) ==  0 && parseInt(gc) == 0){
        jogador.empates = parseInt(jogador.empates) + 1
    }
    jogador.jogos = parseInt(jogador.vitorias) + parseInt(jogador.empates) + parseInt(jogador.derrotas)
    jogador.pontos = parseInt(jogador.vitorias) * 3 + parseInt(jogador.empates)
    if(parseInt(jogador.jogos) != 0){
        jogador.aproveitamento = (parseInt(jogador.pontos) / (parseInt(jogador.jogos) * 3 ) * 100).toFixed(2)
    }
}

function atualizarClassificacao(){
    jogadores.forEach(casa => {
        jogadores.forEach(fora => {
            criterios(casa,fora)
        })
    })
}

function criterios(a, b) {
    //pontos
    if(parseInt(a.pontos) > parseInt(b.pontos)){
        return - 1
    }else if(parseInt(a.pontos) < parseInt(b.pontos)){
        return 1
    }else{
        //vitorias
        if(parseInt(a.vitorias) > parseInt(b.vitorias)){
            return - 1
        }else if(parseInt(a.vitorias) < parseInt(b.vitorias)){
            return 1
        }else{
            //confronto direto
            //console.log(jogos)
            for(var i = 0; i < jogos.length;i++){
                if(a.tecnico == jogos[i].timeCasa && b.tecnico == jogos[i].timeFora){
                    if(parseInt(jogos[i].golsCasa) > parseInt(jogos[i].golsFora)){
                        return - 1                 
                    }else if(parseInt(jogos[i].golsCasa) < parseInt(jogos[i].golsFora)){
                        return 1
                    }
                }else{
                    //desempate
                    if(parseInt(a.desempate) > parseInt(b.desempate)){
                        return - 1
                    }else if(parseInt(a.desempate) < parseInt(b.desempate)){
                        return 1
                    }
                }
            }         
        }    
    }
}

function tituloEstatisticas(nome,cabecalhos,corpo,tabela){
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
    elemento += `<caption>${nome}</caption>`
    elemento += `<thead id="${cabecalhos}">`
    elemento += `</thead>`
    elemento += `<tbody id="${corpo}">`
    elemento += `</tbody>`
    var titulo = document.getElementById(`${tabela}`);
    titulo.innerHTML = elemento
}
function cabecalhoEstatisticas(id){
    var elemento = ""
    elemento += "<tr><th scope='col'>Pos</th>"
    if(id == 'cabecalhoClassificacaoTecnico'){
        elemento += `<th scope='col' colspan='2'>Participante</th>`
    }
    elemento += `<th scope='col' colspan='2'>Associação</th>`
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
    var cabecalho = document.getElementById(id);
    cabecalho.innerHTML = elemento
}

function tabelaEstatisticas(array,id){
    var elemento = ""
    var n = 0;
    array.forEach(dado => {
        elemento += "<tr><td>"+(++n)+"º</td>"
        if(id == 'corpoClassificacaoTecnico'){
            elemento += "<td><img src='"+ dado.foto+"' class='foto'></td>"
            elemento += "<td>"+dado.tecnico+"</td>"
            elemento += "<td><img src='"+ dado.imagem+"' class='foto'></td>"
            elemento += "<td>"+dado.associacao+"</td>"
        }else if(id == 'corpoclassificaçãoAssociacao'){
            elemento += "<td><img src='"+ dado.foto+"' class='foto'></td>"
            elemento += "<td>"+dado.nome+"</td>"
        }
        elemento += "<td>"+dado.pontos+"</td>"
        elemento += "<td>"+dado.jogos+"</td>"
        elemento += "<td>"+dado.vitorias+"</td>"
        elemento += "<td>"+dado.empates+"</td>"
        elemento += "<td>"+dado.derrotas+"</td>"
        elemento += "<td>"+dado.golspro+"</td>"
        elemento += "<td>"+dado.golscontra+"</td>"
        elemento += "<td>"+dado.saldogols+"</td>"
        elemento += "<td>"+dado.aproveitamento+"</td>"
        elemento += "</tr>"
    });    
    var corpoGrupo = document.getElementById(id);
    corpoGrupo.innerHTML = elemento;
}
function classificacaoTotal(){
    tituloEstatisticas('Classificação Geral','cabecalhoClassificacaoTecnico','corpoClassificacaoTecnico','TabelaClassificacaoTecnico')
    cabecalhoEstatisticas(`cabecalhoClassificacaoTecnico`)
    tabelaEstatisticas(jogadores,`corpoClassificacaoTecnico`)   
}

function classificacaoAssociacao(){
    tituloEstatisticas('Classificação Associação','cabecalhoclassificaçãoAssociacao','corpoclassificaçãoAssociacao','TabelaclassificaçãoAssociacao')
    cabecalhoEstatisticas(`cabecalhoclassificaçãoAssociacao`)  
    associacoes.forEach(associado =>{
        jogadoresTotal.forEach(jogador => {
            if(associado.nome == jogador.associacao){
                associado.vitorias += jogador.vitorias
                associado.empates += jogador.empates
                associado.derrotas += jogador.derrotas
                associado.golspro += jogador.golspro
                associado.golscontra += jogador.golscontra
            }
        })
        associado.jogos = associado.vitorias + associado.empates + associado.derrotas
        associado.saldogols = associado.golspro - associado.golscontra
        associado.pontos = associado.vitorias * 3 + associado.empates
        associado.aproveitamento = (associado.pontos / ( associado.jogos * 3) * 100).toFixed(2)
    })
    associacoes.sort(criterios)
    tabelaEstatisticas(associacoes,`corpoclassificaçãoAssociacao`)   
}
function cabecalhoEstatisticasIndividual(id){
    var elemento = ""
    elemento += "<tr><th scope='col'>Melhor</th>"
    if( id == 'cabecalhoIndividualTecnicos'){
        elemento += "<th colspan='2' scope='col'>Tecnico</th>"
    }
    elemento += "<th colspan='2' scope='col'>Associação</th>"
    elemento += "<th scope='col'>Quantidade</th>"
    var cabecalho = document.getElementById(id);
    cabecalho.innerHTML = elemento
}
function melhorAtaque(a,b){
    return (a.golspro < b.golspro) ? 1 : ((b.golspro < a.golspro) ? -1 : 0)
}
function melhorDefesa(a,b){
    return (a.golscontra > b.golscontra) ? 1 : ((b.golscontra > a.golscontra) ? -1 : 0)
}
function melhorPontos(a,b){
    return (a.pontos < b.pontos) ? 1 : ((b.pontos < a.pontos) ? -1 : 0)
}
function melhorVitorias(a,b){
    return (a.vitorias < b.vitorias) ? 1 : ((b.vitorias < a.vitorias) ? -1 : 0)
}
function melhorEmpates(a,b){
    return (a.empates < b.empates) ? 1 : ((b.empates < a.empates) ? -1 : 0)
}
function melhorDerrotas(a,b){
    return (a.derrotas > b.derrotas) ? 1 : ((b.derrotas > a.derrotas) ? -1 : 0)
}
function melhorAproveitamento(a,b){
    return (a.aproveitamento > b.aproveitamento) ? 1 : ((b.aproveitamento > a.aproveitamento) ? -1 : 0)
}
function corpoEstatisticasIndividual(id, array){
    var elemento = ""
    var ataque = array.sort(melhorAtaque)
    elemento += mostrarIndividual('Ataque', id, ataque)
    var defesa = array.sort(melhorDefesa)
    elemento += mostrarIndividual('Defesa', id, defesa)
    var pontos = array.sort(melhorPontos)
    elemento += mostrarIndividual('Pontos', id, pontos)
    var vitorias = array.sort(melhorVitorias)
    elemento += mostrarIndividual('Vitorias', id, vitorias)
    var empates = array.sort(melhorEmpates)
    elemento += mostrarIndividual('Empates', id, empates)
    var derrotas = array.sort(melhorDerrotas)
    elemento += mostrarIndividual('Derrotas', id, derrotas)
    var aproveitamento = array.sort(melhorAproveitamento)
    elemento += mostrarIndividual('Aproveitamento', id, aproveitamento)
    var corpoGrupo = document.getElementById(id);
    corpoGrupo.innerHTML = elemento;
}
function mostrarIndividual(melhor, id, array){
    var tag = ''
    var total = 0
    var titulo = melhor
    if(melhor == 'Ataque'){
        total = array[0].golspro
    }else if(melhor == 'Defesa'){
        total = array[0].golscontra
    }else if(melhor == 'Pontos'){
        total = array[0].pontos
    }else if(melhor == 'Vitorias'){
        total = array[0].vitorias
    }else if(melhor == 'Empates'){
        total = array[0].empates
    }else if(melhor == 'Derrotas'){
        total = array[0].derrotas
    }else if(melhor == 'Aproveitamento'){
        if(array[1].aproveitamento == 100.00){
            total = 100.00
        }else{
            var c = array.length - 1
            total = array[c].aproveitamento
        }
    }
    array.forEach( elemento => {
        if((melhor == 'Ataque' && total == elemento.golspro) || (melhor == 'Defesa' && total == elemento.golscontra) || (melhor == 'Pontos' && total == elemento.pontos) || (melhor == 'Vitorias' && total == elemento.vitorias) || (melhor == 'Empates' && total == elemento.empates) || (melhor == 'Derrotas' && total == elemento.derrotas) || (melhor == 'Aproveitamento' && total == elemento.aproveitamento)){
            tag += `<tr>`
            tag += `<td>${titulo}</td>`
            if(id == 'corpoIndividualTecnicos'){
                tag += `<td><img class='foto' src='${elemento.foto}'</td>`
                tag += `<td>${elemento.tecnico}</td>`
                tag += `<td><img class='foto' src='${elemento.imagem}'</td>`
                tag += `<td>${elemento.associacao}</td>`
            }else if(id == 'corpoIndividualAssociacao'){
                tag += `<td><img class='foto' src='${elemento.foto}'</td>`
                tag += `<td>${elemento.nome}</td>`
            }
            if(melhor == 'Ataque'){
                tag += `<td>${elemento.golspro} ${elemento.golspro == 0 ? 'Gol' : 'Gols'}</td>`
            }else if(melhor == 'Defesa'){
                tag += `<td>${elemento.golscontra} ${elemento.golscontra == 0 ? 'Gol' : 'Gols'}</td>`
            }else if(melhor == 'Pontos'){
                tag += `<td>${elemento.pontos} P</td>`
            }else if(melhor == 'Vitorias'){
                tag += `<td>${elemento.vitorias} V</td>`
            }else if(melhor == 'Empates'){
                tag += `<td>${elemento.empates} E</td>`
            }else if(melhor == 'Derrotas'){
                tag += `<td>${elemento.derrotas} D</td>`
            }else if(melhor == 'Aproveitamento'){
                tag += `<td>${elemento.aproveitamento} %</td>`
            }
            tag += `</tr>`
            titulo = ''
        }
    })
    return tag
}
function classificacaoEstatisticas(titulo,cabecalho,corpo,tabela,array){
    tituloEstatisticas(titulo,cabecalho,corpo,tabela)
    cabecalhoEstatisticasIndividual(cabecalho)
    corpoEstatisticasIndividual(corpo,array)
}

function estatisticas(){
    tituloEstatisticas('Estatisticas do Torneio','cabecalhoIndividualEstatisticas','corpoIndividualEstatisticas','TabelaIndividualEstatisticas')
    var elemento = ""
    elemento += "<tr><th colspan='7' scope='col'>Estatisticas</th>"
    var cabecalho = document.getElementById('cabecalhoIndividualEstatisticas');
    cabecalho.innerHTML = elemento
    var total = jogadores.reduce((total, jogador) => {
        return {
            empates: total.empates + jogador.empates,
            gols: total.gols + jogador.golspro,
            jogos: total.jogos + jogador.jogos / 2,
            media :  total.gols / total.jogos
        }
    }, { empates: 0, gols: 0, jogos: 0, media : 0})
    var tag = ''
    tag += `<tr>`
    tag += `<td colspan='5'>Total de Gols</td>`
    tag += `<td colspan='2'>${total.gols}</td>`
    tag += `<tr>`
    tag += `<td colspan='5'>Total de Jogos</td>`
    tag += `<td colspan='2'>${total.jogos}</td>`
    tag += `<tr>`
    tag += `<td colspan='5'>Média de Gols</td>`
    tag += `<td colspan='2'>${total.media.toFixed(2)}</td>`
    tag += `<tr>`
    tag += `<td colspan='5'>Total de empates</td>`
    tag += `<td colspan='2'>${total.empates}</td>`
    var diferenca = jogos.sort(diferencaGols)
    tag += estatisticasJogos('Jogo Com Mais Diferença de Gols',diferenca)
    var maisGol = jogos.sort(maisGols)
    tag += estatisticasJogos('Jogo Com Mais Gols',maisGol)
    var cabecalho = document.getElementById('corpoIndividualEstatisticas');
    cabecalho.innerHTML = tag           
}

function maisGols(a,b){
    var totalA = a.golsCasa + a.golsFora
    var totalB = b.golsCasa + b.golsFora
    return (totalA < totalB  ? 1 : (totalB < totalA) ? -1 : 0)
}

function diferencaGols(a,b){
    var totalA = Math.abs(a.golsCasa - a.golsFora)
    var totalB = Math.abs(b.golsFora - b.golsCasa)
    return (totalA < totalB) ? 1 : ((totalB < totalA) ? -1 : 0)
}

function estatisticasJogos(titulo,jogos){
    tag = ''
    total = 0 
    if(titulo == 'Jogo Com Mais Gols'){
        total = jogos[0].golsCasa + jogos[0].golsFora
    }else if(titulo == 'Jogo Com Mais Diferença de Gols'){
        total = Math.abs(jogos[0].golsCasa - jogos[0].golsFora)
    }
    tag += `<tr>`
    tag += `<td class='tituloEstatistica' colspan='7'>${titulo}</td>`
    jogos.forEach( jogo => {
        if((titulo == 'Jogo Com Mais Gols' && (jogo.golsCasa + jogo.golsFora) == total) || (titulo == 'Jogo Com Mais Diferença de Gols' && (jogo.golsCasa - jogo.golsFora) == total)){
            tag += `<tr>`
            tag += `<td><img class='foto' src='${jogo.fotoCasa}'></td>`
            tag += `<td>${jogo.timeCasa}</td>`
            tag += `<td>${jogo.golsCasa}</td>`
            tag += `<td>X</td>`
            tag += `<td>${jogo.golsFora}</td>`
            tag += `<td>${jogo.timeFora}</td>`
            tag += `<td><img class='foto' src='${jogo.fotoFora}'></td>`
            }
        }
    )
    return tag
}

document.querySelector('#jogos').addEventListener('wheel' , event => {
    if(event.deltaY > 0){
        console.log('up')
        event.target.scrollBy(300,0)
    }else{
        console.log('down')
        event.target.scrollBy(-300,0)
    }
})