var baralhoJogador = []
var baralhoMaquina = []
function sortear(){
    procurar()
    let interval = setInterval(() => {
        if(cartasTotal <= superHeroi.length || superHeroi.length == cartasTipo){
            document.getElementById('resultado').innerHTML = ''
            sortearCarta()
            clearInterval(interval)
        }
    }, 1000)
}
function sortearCarta(){
    baralhoJogador = []
    baralhoMaquina = []
    var numeroCartaMaquina = 0
    var numeroCartaJogador = 0
    var totalCartas = superHeroi.length
    for(var i = 0; i < totalCartas; i += 2){
        //sorteio maquina
        numeroCartaMaquina = parseInt(Math.random() * superHeroi.length);
        baralhoMaquina.push(superHeroi[numeroCartaMaquina])
        cartaMaquina = superHeroi[numeroCartaMaquina];
        superHeroi.splice(numeroCartaMaquina,1)
        //sorteio jogador
        numeroCartaJogador = parseInt(Math.random() * superHeroi.length);
        cartaJogador = superHeroi[numeroCartaJogador];
        baralhoJogador.push(superHeroi[numeroCartaJogador])
        superHeroi.splice(numeroCartaJogador,1) 
    }
    document.getElementById("btnSortear").disabled = true;
    var input = document.querySelectorAll(".radioInput")
    input.forEach( i => {
        i.disabled = true;
    })
    document.getElementById("quantidadeCartas").disabled = true
    document.getElementById("btnJogar").disabled = false;
    exibirCarta("j","carta-jogador",baralhoJogador[0])
    apagarCarta("carta-maquina")
};
function obtemAtributoSelecionado(){
    var radioAtributos = document.getElementsByName("atributo")
        for ( var i = 0; i < radioAtributos.length;i++){
        if(radioAtributos[i].checked == true){
            return radioAtributos[i].value
        }
    }
}

function atualizarCarta(){
    exibirCarta("j","carta-jogador",baralhoJogador[0])
    apagarCarta("carta-maquina")
    document.getElementById("btnJogar").disabled = false
    var divResultado = document.getElementById("resultado").innerHTML = ''
}
function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado()
    var divResultado = document.getElementById("resultado")
    var atributoJogador = Number(baralhoJogador[0].atributos[atributoSelecionado])  
    var atributoMaquina = Number(baralhoMaquina[0].atributos[atributoSelecionado]) 
    if (atributoJogador > atributoMaquina || atributoJogador < atributoMaquina){
        exibirCarta("m","carta-maquina",baralhoMaquina[0])
        if(atributoJogador > atributoMaquina){
            htmlResultado = "<p style='color: green' class='resultado-final'>Venceu</p>"
            trocarCarta(baralhoJogador,baralhoMaquina)            
        }else{
            htmlResultado = "<p style='color: red' class='resultado-final'>Perdeu</p>"
            trocarCarta(baralhoMaquina,baralhoJogador)
        }
    }else if(atributoJogador ==  'undefined'){
        htmlResultado = "<p class='resultado-final'>Você precisa selecionar um atributo</p>"
    }else{
        htmlResultado = "<p style='color: yellow' class='resultado-final'>Empatou</p>"
    }
    divResultado.innerHTML = htmlResultado
    reiniciar()
}

function trocarCarta(vencedor,perdedor){
    vencedor.push(vencedor[0])
    vencedor.push(perdedor[0])
    vencedor.splice(0,1)
    perdedor.splice(0,1)          
}

function reiniciar(){
    var divResultado = document.getElementById("resultado")
    if(baralhoJogador.length == 0 || baralhoMaquina.length == 0){
        if(baralhoJogador == 0){
            htmlResultado = "<p style='color: red' class='resultado-final'>Você ficou sem cartas. Você perdeu!!<p>"
        }else if(baralhoMaquina == 0){
            htmlResultado = "<p style='color: green' class='resultado-final'>Você ficou com todas as cartas. Você venceu!!</p>"
        }
        divResultado.innerHTML = htmlResultado
        document.getElementById("btnJogar").disabled = true
        setTimeout(() => {
            document.getElementById("btnSortear").disabled = false
            var input = document.querySelectorAll(".radioInput")
            input.forEach( i => {
                i.disabled = false;
            })
            apagarCarta("carta-jogador")
            apagarCarta("carta-maquina")
            document.getElementById("quantidadeCartas").disabled = false
        }, 5000)
    }else{
        document.getElementById("btnJogar").disabled = true;
        setTimeout(atualizarCarta, 3000);    
    }
}

function exibirCarta(quem,jogador,carta){
    var div = document.getElementById(jogador)
    div.style.backgroundImage = `url(${carta.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    
    var tagHtml = "<div id='opcoes' class='carta-status'>"

    if(quem == 'j'){
        var opcoesTexto = "<div class='carta-atributo'>"
        for ( var atributo in carta.atributos){
            opcoesTexto += "<div><input type='radio' name='atributo' value='" + atributo +"'><p>" + atributo + " " + carta.atributos[atributo] + "</p></div>";
        }
        opcoesTexto += "</div>"
        
        var nome = `<p class="carta-subtitle">${carta.nome}</p>`
        
        div.innerHTML = moldura + nome + tagHtml 
        + opcoesTexto + '</div>'
    }else{
        var opcoesTexto = "<div class='carta-atributo'>"
        for ( var atributo in carta.atributos){
            opcoesTexto += "<div><input type='radio' name='atributo' value='" + atributo +"'><p>" + atributo + " " + carta.atributos[atributo] + "</p></div>";
        }
        opcoesTexto += "</div>"
        
        var nome = `<p class="carta-subtitle">${carta.nome}</p>`
        
        div.innerHTML = moldura + nome + tagHtml 
        + opcoesTexto + '</div>'
    }    
}

function apagarCarta(divCarta){
    var div = document.getElementById(divCarta)
    div.style.backgroundImage = `url('')`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    
    var tagHtml = "<div id='opcoes' class='carta-status'>"
    
    var opcoesTexto = "<p type='text' name='atributo' value=''>";
    
    var nome = `<p class="carta-subtitle"></p>`
    
    div.innerHTML = moldura + nome + tagHtml 
    + opcoesTexto + '</div>'
    
    var divResultado = document.getElementById("resultado") 
    
    htmlResultado = "<p></p>"
    
    divResultado.innerHTML = htmlResultado
    
}