let span = document.createElement('span')
document.querySelector('button').addEventListener('click', () => {
    let frase = document.getElementById('texto').value 
    let numCaracteres = frase.length
    span.innerHTML = ''
    let main = document.querySelector('main')
    span.textContent = `A frase "${frase}" possui ${numCaracteres} caracteres.`
    main.appendChild(span)
})