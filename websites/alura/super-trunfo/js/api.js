var superHeroi = []
var numeroRondomico = []
var numeroCartas = 731
var cartasTipo = 0
var cartasTotal = document.querySelector('#quantidadeCartas').value * 2
var quantidadeBoolean = false
if(Number(cartasTotal) < 1){
    cartasTotal = 2
}else if(Number(cartasTotal) > numeroCartas / 2){
    cartasTotal = numeroCartas
} 
var baralho = document.getElementsByName("baralho")
var baralhoSelecionado = verCartaSelecionada(baralho)
function procurar(){
    criarVariaveis()
    numeroRondomico = rondomico()
    quantidadeTipo()
}    
function criarVariaveis(){
    superHeroi = []
    numeroRondomico = []
    numeroCartas = 731
    cartasTipo = 0
    cartasTotal = document.querySelector('#quantidadeCartas').value * 2
    quantidadeBoolean = false
    if(Number(cartasTotal) < 1){
        cartasTotal = 2
    }else if(Number(cartasTotal) > numeroCartas / 2){
        cartasTotal = numeroCartas
    } 
    baralho = document.getElementsByName("baralho")
    baralhoSelecionado = verCartaSelecionada(baralho)    
}
function quantidadeTipo(){
    var contar = 0
    numeroRondomico.forEach( n => {
        fetch('https://www.superheroapi.com/api.php/4783719588308405/' + n ).then(response => response.json()).then(data => {
            if(baralhoSelecionado == data.biography.publisher){
                retornoCartasTipo()
            }else if(baralhoSelecionado == 'todas'){
                retornoCartasTipoMenos()
            }
            contar++
            if(contar == numeroCartas){
                todasCartas()
            }
        }).catch(error => console.log(error))
    })
}
function retornoCartasTipo(){
    return cartasTipo++
}
function retornoCartasTipoMenos(){
    return cartasTipo = -1
}
function todasCartas(){
    numeroRondomico.forEach( n => {
        fetch('https://www.superheroapi.com/api.php/4783719588308405/' + n ).then(response => response.json()).then(data => {
            if(cartasTotal != superHeroi.length){
                if(baralhoSelecionado == data.biography.publisher){
                    pegarDados(data) 
                }else if(baralhoSelecionado == 'todas'){
                    pegarDados(data) 
                }
            }
        }).catch(error => console.log(error))
    })
}
function pegarDados(dados){
    superHeroi.push({
        nome: dados.name,
        imagem: dados.image.url  == 'null' ? '' : dados.image.url ,
        atributos: {
            Durabilidade: dados.powerstats.durability == 'null' ? parseInt(Math.random() * 100) : dados.powerstats.durability ,
            Poder: dados.powerstats.power == 'null' ? parseInt(Math.random() * 100) : dados.powerstats.power,
            Velocidade: dados.powerstats.speed == 'null' ? parseInt(Math.random() * 100) : dados.powerstats.speed,
            Combate: dados.powerstats.combat == 'null' ? parseInt(Math.random() * 100) : dados.powerstats.combat,
            Inteligencia: dados.powerstats.intelligence == 'null' ? parseInt(Math.random() * 100) : dados.powerstats.intelligence, 
            Força: dados.powerstats.strength == 'null' ? parseInt(Math.random() * 100) : dados.powerstats.strength, 
        },
    })
}

function verCartaSelecionada(baralho){
    for ( var i = 0; i < baralho.length;i++){
        if(baralho[i].checked == true){
            return baralho[i].value
        }
    }
}

function rondomico(){
    for(var i = 1; i < numeroCartas + 1; i++){
        numeroRondomico.push(i)
    }
    return numeroRondomico.sort(() => Math.random() - 0.5)
}