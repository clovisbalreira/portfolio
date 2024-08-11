let span = document.createElement('span')
document.querySelector('button').addEventListener('click', () => {
    span.innerHTML = ''
    let numero = document.getElementById('numero').value
    let fatorial = 1
    let main = document.querySelector('main')
    for( let i = 1; i <= numero; i++){
        fatorial *= i
    }
    span.textContent = `O fatorial de ${numero} é ${fatorial}`
    main.appendChild(span)
})