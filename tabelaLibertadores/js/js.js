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
            elemento += `<td><img src='${jogos[i].fotoCasa}'></td>`
            elemento += `<td>${jogos[i].timeCasa}</td>`
            elemento += `<td><input style='display:none' id='gc${jogos[i].rodada}${jogos[i].jogo}' type='number' min='0' onkeyup='resultadoJogos(this)' onclick='resultadoJogos(this)'></td>`
            elemento += `<td>${jogos[i].golsCasa}</td>`
            elemento += `<td>X</td>`
            elemento += `<td>${jogos[i].golsFora}</td>`
            elemento += `<td><input style='display:none'id='gf${jogos[i].rodada}${jogos[i].jogo}' type='number' min='0' onkeyup='resultadoJogos(this)' onclick='resultadoJogos(this)'></td>`
            elemento += `<td>${jogos[i].timeFora}</td>`
            elemento += `<td><img src='${jogos[i].fotoFora}'></td>`
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
    console.log(largura)
    if((jogo.rodada == 1 && (jogo.fase == 'Quartas de Final' || jogo.fase == 'Final')) || 
        (jogo.rodada == 5 && (jogo.fase == 'Final' || jogo.fase == 'Quartas de Final')) || 
        (jogo.rodada == 5 && jogo.fase == 'Semi Final' && largura > 700) || 
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
    //console.log(clas)
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