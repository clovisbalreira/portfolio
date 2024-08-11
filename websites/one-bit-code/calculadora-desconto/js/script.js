let span = document.createElement('span')

document.querySelector('button').addEventListener('click', () => {
    let valor = document.getElementById('valor').value
    let desconto = document.getElementById('desconto').value
    let main = document.querySelector('main')
    span.innerHTML = ''
    span.innerHTML = `<p>Valor Total: ${valor}</p><p>Valor do desconto: ${(desconto / 100) * valor}</p><p>Valor con desconto: ${valor - ((desconto / 100) * valor)}</p>`
    main.appendChild(span)
})