var cartas1 = {
    nome:"Bulbassauro",
    imagem:'https://static.wikia.nocookie.net/pocketmonster/images/a/ab/Bulbassauro.png/revision/latest?cb=20160908232122&path-prefix=pt-br',
    atributos: {
        Ataque: 7,
        defesa: 8,
        magia: 6,
    },
};
var cartas2 = {
    nome:"Darth Vader",
    imagem:'https://disneyplusbrasil.com.br/wp-content/uploads/2021/06/Darth-Vader-serie-Disney-Plus-1024x576.jpg',
    vatributos: {
        Ataque: 9,
        defesa: 8,
        magia: 2
    },
};
var cartas3 = {
    nome:"Shiryu do dragão",
    imagem:'https://static.wikia.nocookie.net/saintseya/images/9/9e/Shiryu_3_255.png/revision/latest?cb=20151229134313&path-prefix=pt',
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

    console.log(cartaJogador);
    exibirCartaJogador();
};

function exibirOpcoes(){
    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = ""

    for ( var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='"+atributo+"'>" + atributo
    }
    opcoes.innerHTML = opcoesTexto
}

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
    elementoResultado = document.getElementById("resultado")
    var valorCartJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
    if (valorCartJogador > valorCartaMaquina){
        elementoResultado.innerHTML = "Você venceu"
    }else if(valorCartJogador < valorCartaMaquina){
        elementoResultado.innerHTML = "Você perdeu"
    }else{
        elementoResultado.innerHTML = "empatou"
    }
    console.log(valorCartaMaquina)
}

function exibirCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    //divCartaJogador.style.backgroundImage = "url("+"cartaJogador.imagem"+")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHtml = "<div id='opcoes' class='carta-status'>"
    
    var opcoesTexto = ""
    for ( var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='"+atributo+"'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHtml +
    + opcoesTexto + "</div>"

}
