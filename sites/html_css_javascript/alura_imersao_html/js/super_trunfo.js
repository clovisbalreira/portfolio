var cartas1 = {
    nome:"Grêmio",
    imagem:'https://logodetimes.com/times/gremio/logo-gremio-256.png',
    atributos: {
        Mundial: 1,
        Continental: 3,
        Nacional: 2,
    },
};
var cartas2 = {
    nome:"Inter",
    imagem:'https://logodetimes.com/times/internacional/logo-internacional-256.png',
    atributos: {
        Mundial: 1,
        Continental: 2,
        Nacional: 3,
    },
};
var cartas3 = {
    nome:"Cruzeiro",
    imagem:'https://logodetimes.com/times/cruzeiro/logo-cruzeiro-256.png',
    atributos: {
        Mundial: 0,
        Continental: 2,
        Nacional: 4,
    },
};
var cartas4 = {
    nome:"Atletico",
    imagem:'https://logodetimes.com/times/atletico-mineiro/logo-atletico-mineiro-256.png',
    atributos: {
        Mundial: 0,
        Continental: 1,
        Nacional: 2,
    },
};
var cartas5 = {
    nome:"Flamengo",
    imagem:'https://logodetimes.com/times/flamengo/logo-flamengo-256.png',
    atributos: {
        Mundial: 1,
        Continental: 2,
        Nacional: 7,
    },
};
var cartas6 = {
    nome:"Fluminense",
    imagem:'https://logodetimes.com/times/fluminense/logo-fluminense-256.png',
    atributos: {
        Mundial: 0,
        Continental: 0,
        Nacional: 4,
    },
};
var cartas7 = {
    nome:"Vasco da Gama",
    imagem:'https://logodetimes.com/times/vasco-da-gama/logo-vasco-da-gama-256.png',
    atributos: {
        Mundial: 0,
        Continental: 1,
        Nacional: 4,
    },
};
var cartas8 = {
    nome:"Botafogo",
    imagem:'https://logodetimes.com/times/botafogo/logo-botafogo-256.png',
    atributos: {
        Mundial: 0,
        Continental: 0,
        Nacional: 2,
    },
};
var cartas9 = {
    nome:"São Paulo",
    imagem:'https://logodetimes.com/times/sao-paulo/logo-sao-paulo-256.png',
    atributos: {
        Mundial: 3,
        Continental: 3,
        Nacional: 6,
    },
};
var cartas10 = {
    nome:"Santos",
    imagem:'https://logodetimes.com/times/santos/logo-santos-256.png',
    atributos: {
        Mundial: 2,
        Continental: 3,
        Nacional: 8,
    },
};
var cartas11 = {
    nome:"Palmeiras",
    imagem:'https://logodetimes.com/times/palmeiras/logo-palmeiras-256.png',
    atributos: {
        Mundial: 0,
        Continental: 3,
        Nacional: 10,
    },
};
var cartas12 = {
    nome:"Corinthians",
    imagem:'https://logodetimes.com/times/corinthians/logo-corinthians-256.png',
    atributos: {
        Mundial: 2,
        Continental: 1,
        Nacional: 7,
    },
};
var cartas = [cartas1,cartas2,cartas3,cartas4,cartas5,cartas6,cartas7,cartas8,cartas9,cartas10,cartas11,cartas12];
//var cartaMaquina;
//var cartaJogador;
var baralhoJogador = []
var baralhoMaquina = []

function sortearCarta(){
    var numeroCartaMaquina = 0
    var numeroCartaJogador = 0
    var totalCartas = cartas.length
    for(var i = 0;i < totalCartas; i += 2){
        //console.log(totalCartas)
        //sorteio maquina
        numeroCartaMaquina = parseInt(Math.random() * cartas.length);
        baralhoMaquina.push(cartas[numeroCartaMaquina])
        cartaMaquina = cartas[numeroCartaMaquina];
        cartas.splice(numeroCartaMaquina,1)
        //sorteio jogador
        numeroCartaJogador = parseInt(Math.random() * cartas.length);
        cartaJogador = cartas[numeroCartaJogador];
        baralhoJogador.push(cartas[numeroCartaJogador])
        cartas.splice(numeroCartaJogador,1)
    }
    //console.log(baralhoMaquina)
    //console.log(baralhoJogador)
    /*var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    baralhoMaquina.push(cartas[numeroCartaMaquina])
    //cartaMaquina = cartas[numeroCartaMaquina];
    cartas.splice(numeroCartaMaquina,1)
    
    var numeroCartaJogador = parseInt(Math.random() * cartas.length);*/
    
    
    /*while(numeroCartaJogador == numeroCartaMaquina){
        var numeroCartaJogador = parseInt(Math.random() * cartas.length);
    };*/
    
    /*cartaJogador = cartas[numeroCartaJogador];
    baralhoJogador.push(cartas[numeroCartaJogador])*/
    
    //console.log(baralhoMaquina)
    //console.log(baralhoJogador)
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    
    exibirCarta("j","carta-jogador",baralhoJogador[0])
    //console.log(baralhoMaquina[0])
    //exibirCartaJogador();
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
    //console.log(baralhoMaquina[0])
    //exibirCartaJogador();
    apagarCarta("carta-maquina")
    document.getElementById("btnJogar").disabled = false
}
function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado()
    var divResultado = document.getElementById("resultado") 
    if (baralhoJogador[0].atributos[atributoSelecionado] > baralhoMaquina[0].atributos[atributoSelecionado] || baralhoJogador[0].atributos[atributoSelecionado] < baralhoMaquina[0].atributos[atributoSelecionado]){
        exibirCarta("m","carta-maquina",baralhoMaquina[0])
        //exibirCartaMaquina()
        if(baralhoJogador[0].atributos[atributoSelecionado] > baralhoMaquina[0].atributos[atributoSelecionado]){
            htmlResultado = "<p class='resultado-final'>Venceu</p>"
            trocarCarta(baralhoJogador,baralhoMaquina)            
        }else{
            htmlResultado = "<p class='resultado-final'>Perdeu</p>"
            trocarCarta(baralhoMaquina,baralhoJogador)
        }
    }else if(baralhoJogador[0].atributos[atributoSelecionado] ==  'undefined'){
        htmlResultado = "<p class='resultado-final'>Você precisa selecionar um atributo</p>"
    }else{
        htmlResultado = "<p class='resultado-final'>Empatou</p>"
    }
    //console.log(baralhoMaquina)
    //console.log(baralhoJogador)
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
            htmlResultado = "<p class='resultado-final'>Você ficou sem cartas. Você perdeu!!<p>"
        }else if(baralhoMaquina == 0){
            htmlResultado = "<p  class='resultado-final'>Você ficou com todas as cartas. Você venceu!!</p>"
        }
        document.getElementById("btnJogar").disabled = true
        document.getElementById("btnSortear").disabled = false
        divResultado.innerHTML = htmlResultado
    }else{
        //console.log('atualizar')
        document.getElementById("btnJogar").disabled = true;
        setTimeout(atualizarCarta, 3000);    
    }
}

function exibirCarta(quem,jogador,carta){
    var div = document.getElementById(jogador)
    div.style.backgroundImage = `url(${carta.imagem})`
    //divCartaMaquina.style.backgroundImage = "url("+"cartaMaquina.imagem"+")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    
    var tagHtml = "<div id='opcoes' class='carta-status'>"

    if(quem == 'j'){
        var opcoesTexto = ""
        for ( var atributo in carta.atributos){
            opcoesTexto += "<input type='radio' name='atributo' value='" + atributo +"'>" + atributo + " " + carta.atributos[atributo] + "<br>";
        }
        
        var nome = `<p class="carta-subtitle">${carta.nome}</p>`
        
        div.innerHTML = moldura + nome + tagHtml 
        + opcoesTexto + '</div>'
    }else{
        var opcoesTexto = ""
        for ( var atributo in carta.atributos){
            opcoesTexto += "<p type='text' name='atributo' value='" + atributo +"'>" + atributo + " " + carta.atributos[atributo] + "<br>";
        }
        
        var nome = `<p class="carta-subtitle">${carta.nome}</p>`
        
        div.innerHTML = moldura + nome + tagHtml 
        + opcoesTexto + '</div>'
    }    
}

function apagarCarta(divCarta){
    var div = document.getElementById(divCarta)
    div.style.backgroundImage = `url('')`
    //divCartaMaquina.style.backgroundImage = "url("+"cartaMaquina.imagem"+")"
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

