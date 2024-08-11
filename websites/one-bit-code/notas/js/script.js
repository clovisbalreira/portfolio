let totalNotas = 0
let quantidadeNotas = 0
let span = document.createElement('span')

function criarInput(){
    let section = document.querySelector('section')
    const input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('placeholder', 'Digite a nota')
    section.appendChild(input)
}

criarInput()

document.getElementById('adicionar').addEventListener('click', () => {
    if(quantidadeNotas === 0){
        span.textContent = `Nenhuma nota foi inserida.`
    }else{
        criarInput()
    }
})

document.getElementById('calcular').addEventListener('click', () => {
    let frase = document.getElementById('texto').value 
    let main = document.querySelector('main')
    let numCaracteres = frase.length
    span.innerHTML = ''
    span.textContent = `A frase "${frase}" possui ${numCaracteres} caracteres.`
    console.log(main)
    main.appendChild(span)
})

