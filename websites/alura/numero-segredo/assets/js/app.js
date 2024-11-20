let numeroMaximo = 0
let numeroSegredo = 0
let chute
let tentativas = 1
let inputMaximo = document.getElementById('input-maximo')
let inputPalpite = document.getElementById('input-palpite')
let buttonMaximo = document.getElementById('button-maximo')
let buttonPalpite = document.getElementById('button-palpite')

function criadoResultado(mensagem, final){
    let div = document.getElementById('resultado')
    div.innerHTML = ''
    let h1 = document.createElement('h1')
    h1.innerHTML = final == true ? 'Você <span class="container__texto-azul">acertou!</span>' : ''
    div.appendChild(h1)
    let h2 = document.createElement('h2')
    h2.textContent = mensagem
    div.appendChild(h2)
}

document.getElementById('button-palpite').addEventListener( 'click', () => {
    chute = inputPalpite.value
    if(chute == numeroSegredo){
        criadoResultado(`Você descobriu o número secreto! ${numeroSegredo} com ${tentativas} tentativa${tentativas == 1 ? '' : 's'}.`, true)
        inputMaximo.disabled = false
        inputPalpite.disabled = true
        buttonMaximo.disabled = false
        buttonPalpite.disabled = true
        tentativas = 1
    }else{
        tentativas ++
        if(chute > numeroSegredo){
            criadoResultado(`O número segredo e menor que ${chute}`, false)
        }else{
            criadoResultado(`O número segredo e maior que ${chute}`, false)
        }
    }
})

document.getElementById('button-maximo').addEventListener( 'click', () => {
    numeroMaximo = inputMaximo.value
    numeroSegredo = parseInt(Math.random() * numeroMaximo + 1 )
    inputPalpite.placeholder = `Escolha o entre número entre 1 a ${numeroMaximo}`
    inputMaximo.disabled = true
    inputPalpite.disabled = false
    buttonMaximo.disabled = true
    buttonPalpite.disabled = false
})
