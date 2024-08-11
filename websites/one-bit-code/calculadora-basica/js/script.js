let span = document.createElement('span')

document.querySelector('button').addEventListener('click', () => {
    let numero1 = parseFloat(document.getElementById('numero1').value)
    let numero2 = parseFloat(document.getElementById('numero2').value)
    let main = document.querySelector('main')
    span.innerHTML = ''
    span.innerHTML = `<p>Resultado da soma: ${(numero1 + numero2).toFixed(2)}</p><p>Resultado da subtração: ${(numero1 - numero2).toFixed(2)}</p><p>Resultado da multiplicação: ${(numero1 * numero2).toFixed(2)}</p><p>Resultado da divisão: ${(numero1 / numero2).toFixed(2)}</p>`
    main.appendChild(span)
})