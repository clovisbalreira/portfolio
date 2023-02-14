var brasil = {clube: "Brasil",foto: "https://logodetimes.com/times/selecao-brasileira-brasil-novo-logo-2019/logo-selecao-brasileira-brasil-novo-logo-2019-256.png",pontos:0,jogos:0,vitorias:0,empates:0,derrotas:0,golspro:0,golscontra:0,saldogols:0,aproveitamento:0,desempate:0}
var argentina = {clube: "Argentina",foto: "https://logodetimes.com/times/argentina/selecao-argentina-de-futebol-256.png",pontos:0,jogos:0,vitorias:0,empates:0,derrotas:0,golspro:0,golscontra:0,saldogols:0,aproveitamento:0,desempate:0}
var uruguai = {clube: "Uruguai",foto: "https://logodetimes.com/times/uruguai/selecao-uruguaia-de-futebol-256.png",pontos:0,jogos:0,vitorias:0,empates:0,derrotas:0,golspro:0,golscontra:0,saldogols:0,aproveitamento:0,desempate:0}
var equador = {clube: "Equador",foto: "https://logodetimes.com/times/equador/selecao-equatoriana-de-futebol-256.png",pontos:0,jogos:0,vitorias:0,empates:0,derrotas:0,golspro:0,golscontra:0,saldogols:0,aproveitamento:0,desempate:0}

var jogadores = [brasil,argentina,uruguai,equador]

var jogos = []
var desempateExtra = []
var returnoTexto = true

function calcularPontos(jogador){
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos
}
/*timea.pontos = calcularPontos(timea)
timeb.pontos = calcularPontos(timeb)
timec.pontos = calcularPontos(timec)
timed.pontos = calcularPontos(timed)*/

function exibrJogadorTela(jogadores){
    var elemento = ""
    
    for(var i = 0; i < jogadores.length ; i++){
        elemento += "<tr><td><img src='"+ jogadores[i].foto+"' class='foto'></td>"
        elemento += "<td>"+jogadores[i].clube+"</td>"
        elemento += "<td>"+jogadores[i].pontos+"</td>"
        elemento += "<td>"+jogadores[i].jogos+"</td>"
        elemento += "<td>"+jogadores[i].vitorias+"</td>"
        elemento += "<td>"+jogadores[i].empates+"</td>"
        elemento += "<td>"+jogadores[i].derrotas+"</td>"
        elemento += "<td>"+jogadores[i].golspro+"</td>"
        elemento += "<td>"+jogadores[i].golscontra+"</td>"
        elemento += "<td>"+jogadores[i].saldogols+"</td>"
        elemento += "<td>"+jogadores[i].aproveitamento+"</td>"
        /*elemento += "<td>"+jogadores[i].desempate+"</td>"
        elemento += "<td><button onClick='adicionarVitoria("+i+")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate("+i+")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota("+i+")'>Derrota</button></td>"*/
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

function criarRodadaJogos(){
    var rodada
    if(jogadores.length % 2 == 0){
        var rodada = jogadores.length - 1
    }else{
        var rodada = jogadores.length
    }
    var jogosRodada = jogadores.length / 2
    for(var i = 1; i <= rodada; i++){
        var jogadoresRodada = jogadores.slice(0)
        criarJogos(jogosRodada,jogadoresRodada,i)
    }
    if(!returnoTexto){
        returno()
    }
    mostrarRodadas()
}

function criarJogos(jogosRodada,jogadoresRodada,numeroRodada){
    var totalTimes = jogadores.length
    //console.log('total' + totalTimes)
    for(var k = 1; k <= jogosRodada ; k++){
        if(totalTimes%2 == 1){
            jogadoresRodada.splice(numeroRodada-k,1)
            for(var i = 0;i<jogadoresRodada.length;i++){
                //console.log(jogadoresRodada[i])
            }
        }
        var numeroCasa = parseInt(Math.random() * jogadoresRodada.length)
        var casa = jogadoresRodada[numeroCasa].clube
        var fC = jogadoresRodada[numeroCasa].foto
        jogadoresRodada.splice(numeroCasa,1)
        
        var repetir = true
        var numeroFora = parseInt(Math.random() * jogadoresRodada.length)
        var fora = jogadoresRodada[numeroFora].clube
        var fF = jogadoresRodada[numeroFora].foto
        var resultado = ''
        do{
            for(var i = 0; i < jogos.length; i++){
                resultado += i+' '+casa+' X '+fora
                resultado += ' / '+i+' '+jogos[i].timeCasa+' X '+jogos[i].timeFora
                if((casa == jogos[i].timeCasa && fora == jogos[i].timeFora) || (casa == jogos[i].timeFora && fora == jogos[i].timeCasa) ){
                    numeroFora += 1
                    fora = jogadoresRodada[numeroFora].clube
                    resultado += ' Repetido ' + numeroFora
                    fF = jogadoresRodada[numeroFora].foto
                    i = 0                                
                }else{
                    resultado += ' liberado'
                }
                //console.log(resultado)
                resultado = ''
            }                     
            repetir = false
        }while(repetir)
        jogadoresRodada.splice(numeroFora,1)
        var confronto = {rodada:numeroRodada,jogo:k,fotoCasa:fC, timeCasa: casa, golsCasa: 0,timeFora: fora, fotoFora:fF, golsFora: 0}
        jogos.push(confronto)
        //console.log(jogos)
    }  
}

function returno(){
    var tabelaReturno = jogos.slice()
    var rodadaReturno = ''
    if(jogadores.length%2 == 0){
        rodadaReturno = jogadores.length -1 
    }else{
        rodadaReturno = jogadores.length
    }
    for(var i =0; i < tabelaReturno.length; i++){
        if(tabelaReturno[i].jogo == 1){
            rodadaReturno ++
        }
        var confrontoReturno = {
            rodada:rodadaReturno,
            jogo:tabelaReturno[i].jogo,
            fotoCasa:tabelaReturno[i].fotoFora,
            timeCasa: tabelaReturno[i].timeFora, 
            golsCasa: 0,
            timeFora: tabelaReturno[i].timeCasa, 
            fotoFora:tabelaReturno[i].fotoCasa, 
            golsFora: 0}
        jogos.push(confrontoReturno)
    }
    //console.log(tabelaReturno)
}

function mostrarRodadas(){
    elemento = ''
    ultimo = 0
    var rodadas = document.getElementById('rodadas')
    for(var i = 0; i < jogos.length; i++ ){
        if(ultimo != jogos[i].rodada){
            elemento += `<tr><td class='tituloRodada' colspan='7'>${jogos[i].rodada}º Rodada</td></tr>`
        }
        elemento += `<tr>`
        elemento += `<td><img src='${jogos[i].fotoCasa}'></td>`
        elemento += `<td>${jogos[i].timeCasa}</td>`
        elemento += `<td><input id='gc${jogos[i].rodada}${jogos[i].jogo}' type='number' min='0' onkeyup='atualizarJogos()' onclick='atualizarJogos()'></td>`
        elemento += `<td>X</td>`
        elemento += `<td><input id='gf${jogos[i].rodada}${jogos[i].jogo}' type='number' min='0' onkeyup='atualizarJogos()' onclick='atualizarJogos()'></td>`
        elemento += `<td>${jogos[i].timeFora}</td>`
        elemento += `<td><img src='${jogos[i].fotoFora}'></td>`
        elemento += `</tr>`
        
        ultimo = jogos[i].rodada
    }
    rodadas.innerHTML = elemento
}

function atualizarJogos(){
    for(var i = 0; i < jogos.length; i++){
        var golsTimeCasa = document.getElementById(`gc${jogos[i].rodada}${jogos[i].jogo}`).value
        var golsTimeFora = document.getElementById(`gf${jogos[i].rodada}${jogos[i].jogo}`).value
        jogos[i].golsCasa = golsTimeCasa
        jogos[i].golsFora = golsTimeFora
    }
        zerarPontosTabela()
        atualizarTabela()
}
function zerarPontosTabela(){
    for(var i = 0; i < jogadores.length; i++){
        jogadores[i].pontos = 0
        jogadores[i].jogos = 0
        jogadores[i].vitorias = 0
        jogadores[i].empates = 0
        jogadores[i].derrotas = 0
        jogadores[i].golspro = 0
        jogadores[i].golscontra = 0
        jogadores[i].saldogols = 0
        jogadores[i].aproveitamento = 0
    }
}

function atualizarTabela(){
    for(var i = 0; i < jogadores.length;i++){
        for(var k = 0; k < jogos.length;k++){
            //gols time casa gols pro e saldo de gols
            if(jogadores[i].clube == jogos[k].timeCasa){
                if(jogos[k].golsCasa == ''){
                    jogadores[i].golspro = jogadores[i].golspro    
                }else{
                    jogadores[i].golspro = parseInt(jogadores[i].golspro) + parseInt(jogos[k].golsCasa)
                    jogadores[i].saldogols = parseInt(jogadores[i].golspro) - parseInt(jogadores[i].golscontra) 
                    //vitorias empates e derrotas 
                    if(parseInt(jogos[k].golsCasa) > parseInt(jogos[k].golsFora)){
                        jogadores[i].vitorias ++
                    }else if(parseInt(jogos[k].golsCasa) < parseInt(jogos[k].golsFora)){
                        jogadores[i].derrotas ++
                    }else if(parseInt(jogos[k].golsCasa) == parseInt(jogos[k].golsFora) && jogos[k].golsCasa != ''){
                        jogadores[i].empates ++
                    }
                }
            }
            //gols time casa gols contra e saldo de gols
            if(jogadores[i].clube == jogos[k].timeCasa){
                if(jogos[k].golsFora == ''){
                    jogadores[i].golscontra = jogadores[i].golscontra    
                }else{
                    jogadores[i].golscontra = parseInt(jogadores[i].golscontra) + parseInt(jogos[k].golsFora)
                    jogadores[i].saldogols = parseInt(jogadores[i].golspro) - parseInt(jogadores[i].golscontra) 
                }
            }
            //gols time fora gols pro e saldo de gols
            if(jogadores[i].clube == jogos[k].timeFora){
                if(jogos[k].golsFora == ''){
                    jogadores[i].golspro = jogadores[i].golspro    
                }else{
                    jogadores[i].golspro = parseInt(jogadores[i].golspro) + parseInt(jogos[k].golsFora)
                    jogadores[i].saldogols = parseInt(jogadores[i].golspro) - parseInt(jogadores[i].golscontra) 
                    //vitorias empates e derrotas 
                    if(parseInt(jogos[k].golsCasa) < parseInt(jogos[k].golsFora)){
                        jogadores[i].vitorias ++
                    }else if(parseInt(jogos[k].golsCasa) > parseInt(jogos[k].golsFora)){
                        jogadores[i].derrotas ++
                    }else if(parseInt(jogos[k].golsCasa) == parseInt(jogos[k].golsFora) && jogos[k].golsCasa != ''){
                        jogadores[i].empates ++
                    }
                }
                
            }
            //gols time casa gols pro e saldo de gols
            if(jogadores[i].clube == jogos[k].timeFora){
                if(jogos[k].golsFora == ''){
                    jogadores[i].golscontra = jogadores[i].golscontra    
                }else{
                    jogadores[i].golscontra = parseInt(jogadores[i].golscontra) + parseInt(jogos[k].golsCasa)
                    jogadores[i].saldogols = parseInt(jogadores[i].golspro) - parseInt(jogadores[i].golscontra) 
                }
            }
        }
        //total jogos
        jogadores[i].jogos = parseInt(jogadores[i].vitorias) + parseInt(jogadores[i].empates) + parseInt(jogadores[i].derrotas) 
        //total pontos
        jogadores[i].pontos = parseInt(jogadores[i].vitorias) * 3 + parseInt(jogadores[i].empates) 
        //aproveitamento
        if(jogadores[i].jogos > 0){
            jogadores[i].aproveitamento = (jogadores[i].pontos / ( jogadores[i].jogos * 3 ) * 100).toFixed()
        }
    }
    jogadores.sort(classificacaoAtual)
    liberarJogoExtra()
    exibrJogadorTela(jogadores)
}

function classificacaoAtual(a, b) {
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
                if(a.clube == jogos[i].timeCasa && b.clube == jogos[i].timeFora){
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

function jogoExtra(){
    desempate = []
    for(var i = 0;i < jogadores.length;i++){
        for(var k = 0;k < jogadores.length;k++){
            if(jogadores[i].clube != jogadores[k].clube){
                if(parseInt(jogadores[i].pontos) == parseInt(jogadores[k].pontos) && parseInt(jogadores[i].vitorias) == parseInt(jogadores[k].vitorias)){
                    var confrontoExtra = {
                        casa: jogadores[i].clube,
                        golsCasa:'',
                        fora: jogadores[k].clube,
                        golsFora:'',
                    }
                    desempate.push(confrontoExtra)
                }
            }
        }
    }

    for(var i = 0;i < desempate.length;i++){
        for(var k = 0;k < desempate.length;k++){    
            //console.log(desempate[i].casa+' X '+desempate[i].fora)
            //console.log(desempate[k].casa+' X '+desempate[k].fora)
            if(desempate[i].casa == desempate[k].fora && desempate[i].fora == desempate[k].casa){
                //console.log('-Excluir-')
                desempate.splice(k,1)
            }
            //console.log('----------------------')
        }
        //console.log('-Fim-')
    }

    //console.log(desempate)

    desempateExtra = desempate.slice()
    mostrarJogosExtra(jogadores)
    
}

function mostrarJogosExtra(jogadores){
    var table = document.getElementById('jogoExtra')
    e = ''
    table.innerHTML = e
    for(var i = 0; i < desempateExtra.length; i++){
        if(i == 0){
            e = `<tr><td class='tituloRodada' colspan='7'>Jogo Extra</td></tr>`
        }
        e += `<tr class='borda'>`
        for(var c = 0;c < jogadores.length;c++){
            if(jogadores[c].clube == desempateExtra[i].casa){
                e += `<td><img src='${jogadores[c].foto}'></td>`
            }
        }
        e += `<td>${desempateExtra[i].casa}</td>`
        e += `<td><input id='gc${i}${desempateExtra[i].casa}${desempateExtra[i].fora}' type='number' min='0' onkeyup='atualizarJogoExtra()' onclick='atualizarJogoExtra()' value='${desempateExtra[i].golsCasa}'></td>`
        e += `<td>X</td>`
        e += `<td><input id='gf${i}${desempateExtra[i].casa}${desempateExtra[i].fora}' type='number' min='0' onkeyup='atualizarJogoExtra()' onclick='atualizarJogoExtra()'  value='${desempateExtra[i].golsFora}'></td>`
        e += `<td>${desempateExtra[i].fora}</td>`
        for(var f = 0;f < jogadores.length;f++){
            if(jogadores[f].clube == desempateExtra[i].fora){
                e += `<td><img src='${jogadores[f].foto}'></td>`
            }
        }
        e += `</tr>`
        e += `<tr class='penalti' id='ptr${desempateExtra[i].casa}${desempateExtra[i].fora}'>`
        e += `<td colspan='2'></td>`
        e += `<td><input id='pgc${i}${desempateExtra[i].casa}${desempateExtra[i].fora}' type='number' min='0' onkeyup='decisaoPenalti()' onclick='decisaoPenalti()' value='0'></td>`
        e += `<td>X</td>`
        e += `<td><input id='pgf${i}${desempateExtra[i].casa}${desempateExtra[i].fora}' type='number' min='0' onkeyup='decisaoPenalti()' onclick='decisaoPenalti()' value='0'></td>`
        e += `<td colspan='2'></td>`
        e += `</tr>`        
        e += `<tr class='vazio'><td>Vazio</td></tr>`        
    }
    table.innerHTML = e
    //console.log('desempate')
    //console.log(desempateExtra)
}

function atualizarJogoExtra(){
    //console.log('desempateExtra')
    //console.log(desempateExtra.length)
    for(var i = 0; i < desempateExtra.length; i++){
        var trPenalti = document.getElementById(`ptr${desempateExtra[i].casa}${desempateExtra[i].fora}`)
        var tdPenalti = document.querySelector('.penalti td:nth-child(2)')
        var tdPenalti1 = document.querySelector('.penalti td:nth-child(3)')
        var tdPenalti2 = document.querySelector('.penalti td:nth-child(4)')
        var extraGolsCasa = document.getElementById(`gc${i}${desempateExtra[i].casa}${desempateExtra[i].fora}`).value
        var extraGolsFora = document.getElementById(`gf${i}${desempateExtra[i].casa}${desempateExtra[i].fora}`).value
        for(var k = 0;k < jogadores.length;k++){
            if(extraGolsCasa != '' && extraGolsFora != ''){
                if(extraGolsCasa == extraGolsFora){
                    trPenalti.style.visibility = 'visible'
                    trPenalti.style.border = '1px solid white'
                    tdPenalti.style.border = '1px solid white'
                    tdPenalti1.style.border = '1px solid white'
                    tdPenalti2.style.border = '1px solid white'
                    //console.log('empate')
                    jogadores[k].desempate = 0
                }else{
                    trPenalti.style.visibility = 'hidden'
                    trPenalti.style.border = 'none'
                    tdPenalti.style.border = 'none'
                    tdPenalti1.style.border = 'none'
                    tdPenalti2.style.border = 'none'
                    if(jogadores[k].clube == desempateExtra[i].casa){
                        //console.log(jogadores[k].clube)
                        if(extraGolsCasa > extraGolsFora){
                            console.log('vence 1')
                            jogadores[k].desempate = 1
                            //console.log(jogadores[k].desempate)
                        }else if(extraGolsCasa < extraGolsFora){
                            //console.log('perde 1')
                            jogadores[k].desempate = -1
                            //console.log(jogadores[k].desempate)
                        }
                    }
                    if(jogadores[k].clube == desempateExtra[i].fora){
                        //console.log(jogadores[k].clube)
                        if(extraGolsCasa < extraGolsFora){
                            //console.log('vence 2')
                            jogadores[k].desempate = 1
                            //console.log(jogadores[k].desempate)
                        }else if(extraGolsCasa > extraGolsFora){
                            //console.log('perde 2')
                            jogadores[k].desempate = -1
                            //console.log(jogadores[k].desempate)
                        }
                    }
                    desempateExtra[i].golsCasa = extraGolsCasa
                    desempateExtra[i].golsFora = extraGolsFora
                    jogadores.sort(classificacaoAtual)
                    exibrJogadorTela(jogadores)
                }
            }else{
                jogadores[k].desempate = 0
                trPenalti.style.visibility = 'hidden'
                trPenalti.style.border = 'none'
                tdPenalti.style.border = 'none'
                tdPenalti1.style.border = 'none'
                tdPenalti2.style.border = 'none'
            }
        }
        //console.log(desempateExtra[i])
        //console.log(jogadores)
    }
}

function decisaoPenalti(){
    for(var i = 0; i < desempateExtra.length;i++){
        var tr = document.getElementById(`ptr${desempateExtra[i].casa}${desempateExtra[i].fora}`)
        var penaltiGolsCasa = document.getElementById(`pgc${i}${desempateExtra[i].casa}${desempateExtra[i].fora}`).value
        var penaltiGolsFora = document.getElementById(`pgf${i}${desempateExtra[i].casa}${desempateExtra[i].fora}`).value
        for(var k = 0;k < jogadores.length;k++){
            if(penaltiGolsCasa != '' && penaltiGolsFora != ''){
                if(penaltiGolsCasa == penaltiGolsFora){
                    jogadores[k].desempate = 0
                }else{
                    if(jogadores[k].clube == desempateExtra[i].casa){
                        if(penaltiGolsCasa > penaltiGolsFora){
                            jogadores[k].desempate = 1
                        }else if(penaltiGolsCasa < penaltiGolsFora){
                            jogadores[k].desempate = -1
                        }
                    }
                    if(jogadores[k].clube == desempateExtra[i].fora){
                        if(penaltiGolsCasa < penaltiGolsFora){
                            jogadores[k].desempate = 1
                        }else if(penaltiGolsCasa > penaltiGolsFora){
                            jogadores[k].desempate = -1
                        }
                    }
                    desempateExtra[i].golsCasa += penaltiGolsCasa
                    desempateExtra[i].golsFora += penaltiGolsFora
                    jogadores.sort(classificacaoAtual)
                    exibrJogadorTela(jogadores)
                }
            }else{
                jogadores[k].desempate = 0
            }
        }
    }
}

function adicionarJogador(){
    var jogador = document.getElementById('jogador')
    var imagem = document.getElementById('foto')
    if(jogador.value != '' && imagem.value != ''){
        var novo = {clube: jogador.value ,foto: imagem.value,pontos:0,jogos:0,vitorias:0,empates:0,derrotas:0,golspro:0,golscontra:0,saldogols:0,aproveitamento:0,desempate:0}
        jogadores.push(novo)
        exibrJogadorTela(jogadores)
        apagarErro()
    }else{
        mostrarErro('Todos os campos não foram digitados.')
    }
    for(var i = 0;i < 2;i++){
        criarNovaTabela()
    }
}
function mostrarErro(texto){
    var erro = document.getElementById('erro')
    var mensagen = texto
    erro.style.display = 'block'
    erro.innerHTML = mensagen
}
function apagarErro(){
    var erro = document.getElementById('erro')
    var mensagen = ''
    erro.style.display = 'none'
    erro.innerHTML = mensagen
}
function criarNovaTabela(){
    try{
        jogos = []
        desempateExtra = []
        criarRodadaJogos()
        apagarJogoExtra()
        apagarErro()
    }catch{
        mostrarErro('Não foi possivel criar a tabela tente novamente.')
    }
}

function zerarTabela(){
    for(var i = 0; i < jogos.length;i++){
        jogos[i].golsCasa = ''
        jogos[i].golsFora = ''
    }
    mostrarRodadas()
    zerarPontosTabela()
    exibrJogadorTela(jogadores)
    apagarJogoExtra()
    apagarErro()
}

function excluirParticipantes(){
    jogadores = []
    criarNovaTabela()
    exibrJogadorTela(jogadores)
    apagarErro()
}

function apagarJogoExtra(){
    var table = document.getElementById('jogoExtra')
    table.innerHTML = ''
}

function liberarJogoExtra(){
    var n = 0
    for(var i = 0; i < jogos.length;i++){
        if(jogos[i].golsCasa != ''){
           n ++ 
        }
        if(jogos[i].golsFora != ''){
            n ++ 
        }
    }
    console.log(n)
    if(n == jogos.length*2){
        jogoExtra()
    }else{
        apagarJogoExtra()
    }
}

function campeonatoReturno(){
    var button = document.getElementById('returno')
    if(returnoTexto){
        button.innerHTML = 'Turno'
        returnoTexto = false
        criarNovaTabela()
    }else{
        button.innerHTML = 'Turno e Returno'
        returnoTexto = true
        criarNovaTabela()
    }
    console.log(returnoTexto)
}

exibrJogadorTela(jogadores)
criarRodadaJogos()

