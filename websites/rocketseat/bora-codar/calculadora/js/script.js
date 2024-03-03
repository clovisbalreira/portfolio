let resultado = document.querySelector('#result span')
let calculo = document.getElementById('last-calc')
let botoes = document.querySelectorAll('button')
let calcular = []
let digito = ''

function mostrarCalculo(calcular, digito){
    calculo.innerHTML = ''
    calcular.forEach(c => {
        calculo.innerHTML += c
    })
    calculo.innerHTML += digito
}

function operacao(calcular, digito, simbolo){
    if(digito != ''){
        calcular.push(digito)
        calcular.push(simbolo)
        mostrarCalculo(calcular, '')
    }
}

function menorMaior(){
    if(digito != ''){
        digito -= digito * 2
        if(calcular.length > 0){
            resultado.innerHTML -= parseFloat(resultado.innerHTML) * 2
        }
    }
}

function deletarUltimoDigito(){
    if(digito != ''){
        digito = digito.slice(0, -1)
    }else{
        calcular.pop()
    }
}

function calcularPorcentagem(){
    calcular.push(digito)
    let contemPorcento = calcular.some(element => element.includes('%'))
    if(contemPorcento){
        const indices = [];
        for (let i = 0; i < calcular.length; i++) {
            if (calcular[i].includes('%')) {
                indices.push(i);
            }
        }
        indices.forEach( indice => {
            calcular[indice - 2] = `(${parseFloat(calcular[indice - 2])}`
            calcular[indice] = `(${parseFloat(calcular[indice]) / 100} * 100))`
        })
    }
}
function handleButtonClick(event) {
    let botao = event.currentTarget;
    let img = botao.querySelector('img');
    if (img) {
        if(img.alt == 'Plus'){
            operacao(calcular, digito, '+')
            digito = ''
        }else if(img.alt == 'Minus'){
            operacao(calcular, digito, '-')
            digito = ''
        }else if(img.alt == 'Multiplication'){
            operacao(calcular, digito, '*')
            digito = ''
        }else if(img.alt == 'Divide'){
            operacao(calcular, digito, '/')
            digito = ''
        }else if(img.alt == 'PlusMinu'){
            menorMaior()
            mostrarCalculo(calcular, digito)
        }else if(img.alt == 'Result'){
            calcularPorcentagem()
            let valorResultado = `${eval(calcular.join(''))}`
            calculo.innerHTML = valorResultado
            resultado.innerHTML = valorResultado
            calcular = []
            digito = valorResultado
        }
    } else {
        if(botao.textContent == 'C'){
            calculo.innerHTML = ''
            resultado.innerHTML = ''
            calcular = []
            digito = ''
            mostrarCalculo(calcular, digito)
        }else if(botao.textContent == 'CE'){
            deletarUltimoDigito()
            mostrarCalculo(calcular, digito)
        }else if(botao.textContent == '%'){
            console.log(digito.includes('%'))
            if(digito != '' && (!digito.includes('%')) && calcular.length > 1){
                console.log('%')
                digito += botao.textContent
                mostrarCalculo(calcular, digito)
            }
        }else{
            if(botao.textContent === '%' && digito === ''){
                console.log(botao.textContent)
            }
            digito += botao.textContent
            mostrarCalculo(calcular, digito)
        }
    }
}

botoes.forEach((botao) => {
    botao.addEventListener('click', handleButtonClick);
});