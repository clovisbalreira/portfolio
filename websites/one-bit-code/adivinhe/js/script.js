let span = document.createElement('span')
document.querySelector('button').addEventListener('click', () => {
    let numero = document.getElementById('numero').value 
    span.innerHTML = ''
    let main = document.querySelector('main')
    for(let i = 1; i <= 10; i++){
        span.innerHTML = `<p>${numero}" X ${i} = ${numero * 1}</p>`
    }
    main.appendChild(span)
})