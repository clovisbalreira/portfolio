let span = document.createElement('span')

document.querySelector('button').addEventListener('click', () => {
    let ladoA = parseFloat(document.getElementById('ladoa').value)
    let ladoB = parseFloat(document.getElementById('ladob').value)
    let ladoC = parseFloat(document.getElementById('ladoc').value)
    const perimetro = ladoA + ladoB + ladoC
    const sp = perimetro / 2
    const area = Math.sqrt(sp * (sp - ladoA) * (sp - ladoB) * (sp - ladoC))
    let main = document.querySelector('main')
    span.innerHTML = ""
    span.innerHTML = `<p>Perimetro do triangulo: ${perimetro}</p><p>Área do Triângulo: ${area.toFixed(2)}</p>`
    main.appendChild(span)
})