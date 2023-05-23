let middle = document.querySelector('.middle img')
middle.addEventListener('click', () => {
    let valoresInput = document.querySelectorAll('.amount')
    let valores = [valoresInput[0].value, valoresInput[1].value]
    valoresInput[0].value = valores[1]
    valoresInput[1].value = valores[0]    
    let valoresSelect = document.querySelectorAll('.selected')
    let selects = [valoresSelect[0].innerHTML,valoresSelect[1].innerHTML]
    valoresSelect[0].innerHTML = selects[1]
    valoresSelect[1].innerHTML = selects[0]
})

let listas = document.querySelectorAll('.dropdown ul')
let valoresSelect = document.querySelectorAll('.selected')
listas.forEach((lista,index) => {
    let colunas = lista.querySelectorAll('li')
    colunas.forEach( coluna => {
        coluna.addEventListener('click', () => {
            valoresSelect[index].innerHTML = coluna.innerHTML
        })
    })
})