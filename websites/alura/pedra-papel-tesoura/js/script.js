let jogos = [
    {nome: 'Pedra, Papel e Tesoura', emoji: '👊🖐️✌️'},
    {nome: 'Pedra, Papel, Tesoura, Lagarto e Spoke', emoji: '👊🖐️✌️🤚🖖'}
]

let pedraPapelTesoura = [
    { nome: 'Pedra', emoji: '👊'},
    { nome: 'Papel', emoji: '🖐️'},
    { nome: 'Tesoura', emoji: '✌️'},
]

let pedraPapelTesouraSpokeLagarto = [
    { nome: 'Pedra', emoji: '👊'},
    { nome: 'Papel', emoji: '🖐️'},
    { nome: 'Tesoura', emoji: '✌️'},
    { nome: 'Lagarto', emoji: '🤚'},
    { nome: 'Spoke', emoji: '🖖'},
]

function verificarIdade(){
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value
    if(idade >= 18 ){
        mostrarJogo(jogos, true, nome, 'Escolha seu Jogo')
    }else{
        let p = document.querySelector('p')
        p.textContent = `${nome} tem ${idade} anos é menor de idade não podera jogar esse jogo.`
    }
}

function crirTag(tagNome, texto, id){
    let tag = document.createElement(tagNome)
    tag.textContent = texto
    tag.id = id
    return tag
}

function mostrarJogo(array, condicao, nome, p){
    let div = document.querySelector('.content')
    div.innerHTML = ''
    div.appendChild(crirTag('h2', 'Pra ganhar é preciso arriscar!', ''))
    div.appendChild(crirTag('p', p, ''))
    div.appendChild(crirTag('div', '', 'emojis'))
    div.appendChild(crirTag('div', '', 'resposta'))
    colocarEmojis(array, condicao, nome)
}

function escolherEmoji(array, condicao, nome){
    let emojis = document.querySelectorAll('.emoji')
    emojis.forEach((emoji, index) => {
        emoji.addEventListener('click', () => {
            condicao ? mostrarJogo(index == 0 ? pedraPapelTesoura : pedraPapelTesouraSpokeLagarto, false, nome, 'PEDRA, PAPEL ou TESOURA?') :
            jogar(index, array, nome)
            
        })
    })
}

function colocarEmojis(array, condicao, nome){
    let emojis = document.getElementById('emojis')
    array.forEach( dado => {
        let div = document.createElement('div')
        div.classList.add('emoji')
        let emoji = document.createElement('p')
        emoji.textContent = dado.emoji
        div.appendChild(emoji)
        let texto = document.createElement('p')
        texto.textContent = dado.nome
        div.appendChild(texto)
        emojis.appendChild(div, nome)
    })
    escolherEmoji(array, condicao, nome)
}

function jogar(escolhaJogador, array, nome){
    let resposta = document.getElementById('resposta')
    resposta.innerHTML = ''
    let escolhaComputador = Math.floor(Math.random() * array.length)
    console.log(`${escolhaJogador} - ${escolhaComputador}`)
    let p = document.createElement('p')
    p.textContent = `${nome} escolheu ${array[escolhaJogador].nome.toLowerCase()} (${array[escolhaJogador].emoji}) o computador escolheu ${array[escolhaComputador].nome.toLowerCase()} (${array[escolhaComputador].emoji}):`
    if( escolhaJogador == escolhaComputador) resposta = mostrarResultado(resposta, p, `Empate!`, 'yellow', nome)
    else{
        if( escolhaJogador == 0) condicaoPedra(escolhaJogador, escolhaComputador, resposta, p, array, nome)
        else if( escolhaJogador == 1) condicaoPapel(escolhaJogador, escolhaComputador, resposta, p, array, nome)
        else if( escolhaJogador == 2) condicaoTesoura(escolhaJogador, escolhaComputador, resposta, p, array, nome)
        else if( escolhaJogador == 3) condicaoLagarto(escolhaJogador, escolhaComputador, resposta, p, array, nome)
        else if( escolhaJogador == 4) condicaoSpoke(escolhaJogador, escolhaComputador, resposta, p, array, nome)
    }
}

function condicaoPedra(escolhaJogador, escolhaComputador, resposta, p, array, nome){
    //papel
    if(escolhaComputador == 1) {
        resposta = mostrarResultado(resposta, p, `Computador venceu, o ${array[escolhaComputador].nome.toLowerCase()} (${array[escolhaComputador].emoji}) enrola a ${array[escolhaJogador].nome.toLowerCase()} (${array[escolhaJogador].emoji}) !`, 'red', nome)}
    //tesoura
    else if(escolhaComputador == 2) resposta = mostrarResultado(resposta, p, `${nome} venceu, a ${array[escolhaJogador].nome.toLowerCase()} (${array[escolhaJogador].emoji}) quebra a ${array[escolhaComputador].nome.toLowerCase()} (${array[escolhaComputador].emoji}) `, 'green', nome)
    //lagarto
    else if(escolhaComputador == 3) resposta = mostrarResultado(resposta, p, `${nome} venceu, a ${array[escolhaJogador].nome.toLowerCase()} (${array[escolhaJogador].emoji}) esmaga o ${array[escolhaComputador].nome.toLowerCase()} (${array[escolhaComputador].emoji})` , 'green', nome)
    //spoke
    else if(escolhaComputador == 4) resposta = mostrarResultado(resposta, p, `Computador venceu, o ${array[escolhaComputador].nome.toLowerCase()} (${array[escolhaComputador].emoji}) vaporiza a ${array[escolhaJogador].nome.toLowerCase()} (${array[escolhaJogador].emoji}) !`, 'red', nome)
    return resposta
}

function condicaoPapel(escolhaJogador, escolhaComputador, resposta, p, array, nome){ 
    //pedra
    if(escolhaComputador == 0) resposta = mostrarResultado(resposta, p, `${nome} venceu, o ${array[escolhaJogador].nome.toLowerCase()} (${array[escolhaJogador].emoji}) enrola a ${array[escolhaComputador].nome.toLowerCase()} (${array[escolhaComputador].emoji}) !`, 'green', nome)
    //tesoura
    else if(escolhaComputador == 2) resposta = mostrarResultado(resposta, p, `Computador venceu, a ${array[escolhaComputador].nome.toLowerCase()} (${array[escolhaComputador].emoji}) corta o ${array[escolhaJogador].nome.toLowerCase()} (${array[escolhaJogador].emoji}) !`, 'red', nome)
    //lagarto
    else if(escolhaComputador == 3) resposta = mostrarResultado(resposta, p, `Computador venceu, o ${array[escolhaComputador].nome.toLowerCase()} (${array[escolhaComputador].emoji}) come o ${array[escolhaJogador].nome.toLowerCase()} (${array[escolhaJogador].emoji}) !`, 'red', nome)
    //spoke
    else if(escolhaComputador == 4) resposta = mostrarResultado(resposta, p, `${nome} venceu, o ${array[escolhaJogador].nome.toLowerCase()} (${array[escolhaJogador].emoji}) refuta o ${array[escolhaComputador].nome.toLowerCase()} (${array[escolhaComputador].emoji}) !`, 'green', nome)
    return resposta
}

function condicaoTesoura(escolhaJogador, escolhaComputador, resposta, p, array, nome){ 
    //pedra
    if(escolhaComputador == 0) resposta = mostrarResultado(resposta, p, `Computador venceu, a ${array[escolhaComputador].nome.toLowerCase()} (${array[escolhaComputador].emoji}) quebra a ${array[escolhaJogador].nome.toLowerCase()} (${array[escolhaJogador].emoji}) !`, 'red', nome)
    //papel
    else if(escolhaComputador == 1) resposta = mostrarResultado(resposta, p, `${nome} venceu, a ${array[escolhaJogador].nome.toLowerCase()} (${array[escolhaJogador].emoji}) corta o ${array[escolhaComputador].nome.toLowerCase()} (${array[escolhaComputador].emoji}) !`, 'green', nome)
    //lagarto
    else if(escolhaComputador == 3) resposta = mostrarResultado(resposta, p, `${nome} venceu, a ${array[escolhaJogador].nome.toLowerCase()} (${array[escolhaJogador].emoji}) decapita o ${array[escolhaComputador].nome.toLowerCase()} (${array[escolhaComputador].emoji}) !`, 'green', nome)
    //spoke
    else if(escolhaComputador == 4) resposta = mostrarResultado(resposta, p, `Computador venceu, o ${array[escolhaComputador].nome.toLowerCase()} (${array[escolhaComputador].emoji}) destroi a ${array[escolhaJogador].nome.toLowerCase()} (${array[escolhaJogador].emoji}) !`, 'red', nome)
    return resposta
}

function condicaoLagarto(escolhaJogador, escolhaComputador, resposta, p, array, nome){ 
    //pedra
    if(escolhaComputador == 0) resposta = mostrarResultado(resposta, p, `Computador venceu, a ${array[escolhaComputador].nome.toLowerCase()} (${array[escolhaComputador].emoji}) esmaga a ${array[escolhaJogador].nome.toLowerCase()} (${array[escolhaJogador].emoji}) !`, 'red', nome)
    //papel
    else if(escolhaComputador == 1) resposta = mostrarResultado(resposta, p, `${nome} venceu, a ${array[escolhaJogador].nome.toLowerCase()} (${array[escolhaJogador].emoji}) come o ${array[escolhaComputador].nome.toLowerCase()} (${array[escolhaComputador].emoji}) !`, 'green', nome)
    //tesoura
    else if(escolhaComputador == 2) resposta = mostrarResultado(resposta, p, `Computador venceu, a ${array[escolhaComputador].nome.toLowerCase()} (${array[escolhaComputador].emoji}) decapita o ${array[escolhaJogador].nome.toLowerCase()} (${array[escolhaJogador].emoji}) !`, 'red', nome)
    //spoke
    else if(escolhaComputador == 4) resposta = mostrarResultado(resposta, p, `${nome} venceu, o ${array[escolhaJogador].nome.toLowerCase()} (${array[escolhaJogador].emoji}) envenena o ${array[escolhaComputador].nome.toLowerCase()} (${array[escolhaComputador].emoji}) !`, 'green', nome)
    return resposta
}

function condicaoSpoke(escolhaJogador, escolhaComputador, resposta, p, array, nome){ 
    //pedra
    if(escolhaComputador == 0) resposta = mostrarResultado(resposta, p, `${nome} venceu, o ${array[escolhaJogador].nome.toLowerCase()} (${array[escolhaJogador].emoji}) vaporiza a ${array[escolhaComputador].nome.toLowerCase()} (${array[escolhaComputador].emoji}) !`, 'green', nome)
    //papel
    if(escolhaComputador == 1) resposta = mostrarResultado(resposta, p, `Computador venceu, o ${array[escolhaComputador].nome.toLowerCase()} (${array[escolhaComputador].emoji}) refuta o ${array[escolhaJogador].nome.toLowerCase()} (${array[escolhaJogador].emoji}) !`, 'red', nome)
    //tesoura
    if(escolhaComputador == 2) resposta = mostrarResultado(resposta, p, `${nome} venceu, o ${array[escolhaJogador].nome.toLowerCase()} (${array[escolhaJogador].emoji}) destroi a ${array[escolhaComputador].nome.toLowerCase()} (${array[escolhaComputador].emoji}) !`, 'green', nome)
    //lagarto
    if(escolhaComputador == 3) resposta = mostrarResultado(resposta, p, `Computador venceu, o ${array[escolhaComputador].nome.toLowerCase()} (${array[escolhaComputador].emoji}) envenena o ${array[escolhaJogador].nome.toLowerCase()} (${array[escolhaJogador].emoji}) !`, 'red', nome)
    return resposta
}

function mostrarResultado(resposta, p, texto, cor, nome){
    p.textContent += texto
    p.style.color = cor
    resposta.appendChild(p)
    let button = document.createElement('button')
    button.textContent = 'Menu Jogo'
    button.onclick = () => mostrarJogo(jogos, true, nome, 'Escolha seu Jogo')
    resposta.appendChild(button)
    return resposta
}