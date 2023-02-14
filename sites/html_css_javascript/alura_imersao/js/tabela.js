var listaJogadores = [
{nome: 'Paulo',imagem : `&#x1F9${parseInt(Math.random() * 90)}`,vitoria: 0,empate: 0, derrota: 0, pontos: 0},
{nome: 'Rafa',imagem : `&#x1F9${parseInt(Math.random() * 90)}`,vitoria: 0,empate: 0,derrota: 0,pontos: 0},
{nome: 'Gui',imagem : `&#x1F9${parseInt(Math.random() * 90)}`,vitoria: 0,empate: 0,derrota: 0,pontos: 0},
{nome: 'Renata',imagem : `&#x1F9${parseInt(Math.random() * 90)}`,vitoria: 0,empate: 0,derrota: 0,pontos: 0}
]
function zerarPlacar(){
    listaJogadores.forEach( jogador => {
        jogador.vitoria = 0
        jogador.empate = 0
        jogador.derrota = 0
        jogador.pontos = 0
    })
    exibirNaTela()
}
function exibirNaTela(){
    var elementoTabela = document.getElementById('tabelaJogadores')
    elementoTabela.innerHTML = ''
    listaJogadores.map(function(jogador, indice, array ){
        elementoTabela.innerHTML += `
        <tr>
        <td>${jogador.nome}</td>
        <td>${jogador.imagem}</td>
        <td>${jogador.vitoria}</td>
        <td>${jogador.empate}</td>
        <td>${jogador.derrota}</td>
        <td>${jogador.pontos}</td>
        <td><button onClick="adicionarVitoria(listaJogadores[${indice}], listaJogadores)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(listaJogadores[${indice}], listaJogadores)">Empate</button></td>
        <td><button onClick="adicionarDerrota(listaJogadores[${indice}], ${indice}, listaJogadores)">Derrota</button></td>
        </tr>
        `
    },this)
}

exibirNaTela()

function adicionarVitoria(jogador, array){
    jogador.vitoria++
    jogador.pontos = jogador.pontos + 3
    array.forEach(element => {
        if(element.nome != jogador.nome){
            element.derrota++
        }
    });
    exibirNaTela()
}

function adicionarEmpate(jogador, array){
    jogador.empate++
    jogador.pontos++
    array.forEach(element => {
        if(element.nome != jogador.nome){
            element.empate++
            element.pontos++
        }
    });
    exibirNaTela()
}
function adicionarDerrota(jogador,indice, array){
    jogador.derrota++
    var numeroJogadorGanhador 
    do{
        numeroJogadorGanhador = parseInt(Math.random() * array.length)
    }while(indice == numeroJogadorGanhador)
    console.log(indice + ' - ' + numeroJogadorGanhador) 
    var ganhadorNome = array[numeroJogadorGanhador].nome
    i = 0
    array.forEach(element => {        
        if(element.nome != jogador.nome && element.nome != ganhadorNome){
            element.derrota++
        }
        if(element.nome == ganhadorNome){
            element.vitoria++
            element.pontos = element.pontos + 3
        }
        i ++
    });
    exibirNaTela()
}

function adicionarJogador(){
    var jogadorNome = document.getElementById('novoJogador').value
    var erro = document.getElementById('error')
    if(jogadorNome != ''){
        var contem = true
        listaJogadores.forEach(jogador => {
            if(jogador.nome == jogadorNome){
                contem = false
            }
        })
        if(contem){
            listaJogadores.push({nome: jogadorNome,imagem : `&#x1F9${parseInt(Math.random() * 90)}`,vitoria: 0,empate: 0, derrota: 0, pontos: 0})
            console.log(jogadorNome)
            exibirNaTela()
            erro.innerHTML = ''
        }else{
            erro.innerHTML = 'Já existe esse jogador'
        }
    }else{
        erro.innerHTML = 'Erro no cadastro'
    }
    document.getElementById('novoJogador').value = ''
}
