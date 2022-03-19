var cartas1 = {
    nome:"Bulbassauro",
    imagem:'https://i.pinimg.com/736x/0f/2c/0f/0f2c0fdae0640d8b40a45f3e8a940507--job.jpg',
    atributos: {
        Ataque: 7,
        defesa: 8,
        magia: 6,
    },
};
var cartas2 = {
    nome:"Darth Vader",
    imagem:'https://tse3.mm.bing.net/th?id=OIP.LYZk7hxSzMR1VA8116oVPQHaEo&pid=Api&P=0&w=288&h=180',
    atributos: {
        Ataque: 9,
        defesa: 8,
        magia: 2
    },
};
var cartas3 = {
    nome:"Shiryu do dragão",
    imagem:'https://pm1.narvii.com/6333/c0725560b194bfe12f0ceab130b95eaa3c506be2_hq.jpg',
    atributos: {
        Ataque: 5,
        defesa: 9,
        magia: 10,
    },
};

var cartas = [cartas1,cartas2,cartas3];
var cartaMaquina;
var cartaJogador;

function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];
    
    var numeroCartaJogador = parseInt(Math.random() * cartas.length);

    
    while(numeroCartaJogador == numeroCartaMaquina){
        var numeroCartaJogador = parseInt(Math.random() * cartas.length);
    };

    cartaJogador = cartas[numeroCartaJogador];
    
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    
    exibirCartaJogador();
    apagarCartaMaquina()
};

function obtemAtributoSelecionado(){
    var radioAtributos = document.getElementsByName("atributo")
    
    for ( var i = 0; i < radioAtributos.length;i++){
        if(radioAtributos[i].checked == true){
            return radioAtributos[i].value
        }
    }
}

function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado()
    var divResultado = document.getElementById("resultado") 
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado] || cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        exibirCartaMaquina()
        reiniciar()
        if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
            htmlResultado = "<p class='resultado-final'>Venceu</p>"
        }else{
            htmlResultado = "<p class='resultado-final'>Perdeu</p>"
        }
    }else if(cartaJogador.atributos[atributoSelecionado] ==  'undefined'){
        htmlResultado = "<p class='resultado-final'>Empatou</p>"
    }else{
        htmlResultado = "<p class='resultado-final'>Você precisa selecionar um atributo</p>"
    }

    divResultado.innerHTML = htmlResultado
}

function reiniciar(){
    document.getElementById("btnJogar").disabled = true
    document.getElementById("btnSortear").disabled = false
}

function exibirCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    //divCartaJogador.style.backgroundImage = "url("+"cartaJogador.imagem"+")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    
    var tagHtml = "<div id='opcoes' class='carta-status'>"
    
    var opcoesTexto = ""
    for ( var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo +"'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
    
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    
    divCartaJogador.innerHTML = moldura + nome + tagHtml 
    + opcoesTexto + '</div>'
}

function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    //divCartaMaquina.style.backgroundImage = "url("+"cartaMaquina.imagem"+")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    
    var tagHtml = "<div id='opcoes' class='carta-status'>"
    
    var opcoesTexto = ""
    for ( var atributo in cartaMaquina.atributos){
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo +"'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>";
    }
    
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    
    divCartaMaquina.innerHTML = moldura + nome + tagHtml 
    + opcoesTexto + '</div>'
}

function apagarCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url('')`
    //divCartaMaquina.style.backgroundImage = "url("+"cartaMaquina.imagem"+")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    
    var tagHtml = "<div id='opcoes' class='carta-status'>"
    
    var opcoesTexto = "<p type='text' name='atributo' value=''>";
    
    var nome = `<p class="carta-subtitle"></p>`
    
    divCartaMaquina.innerHTML = moldura + nome + tagHtml 
    + opcoesTexto + '</div>'
    
    var divResultado = document.getElementById("resultado") 
    
    htmlResultado = "<p></p>"
    
    divResultado.innerHTML = htmlResultado
    
}

//tambem pode embaralhar ou retirar a carta do baralho para não repetir a carta
//atributo não selecionado ao jogar
//adicionar um baralho
//ganhar a carta de outro jogador
//funcao mostrarcarta com parametro 
//Animações nas cartas