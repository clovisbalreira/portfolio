let middle = document.querySelector('.middle img')
middle.addEventListener('click', () => {
    let valoresSimbolo = document.querySelectorAll('p')
    let simbolo = [valoresSimbolo[0].innerHTML, valoresSimbolo[1].innerHTML]
    valoresSimbolo[0].innerHTML = simbolo[1]
    valoresSimbolo[1].innerHTML = simbolo[0]    

    let valoresInput = document.querySelectorAll('.amount')
    let valores = [valoresInput[0].value, valoresInput[1].value]
    valoresInput[0].value = valores[1]
    valoresInput[1].value = valores[0]    

    let valoresSelect = document.querySelectorAll('.selected')
    let selects = [valoresSelect[0].innerHTML,valoresSelect[1].innerHTML]
    valoresSelect[0].innerHTML = selects[1]
    valoresSelect[1].innerHTML = selects[0]
})

function trocarMoeda(){
    let listas = document.querySelectorAll('.dropdown ul')
    let valoresSelect = document.querySelectorAll('.selected')
    let simbolo = [valoresSelect[0].innerHTML.slice(0,3),valoresSelect[1].innerHTML.slice(0,3)]
    listas.forEach((lista,index) => {
        let colunas = lista.querySelectorAll('li')
        colunas.forEach( coluna => {
            coluna.addEventListener('click', () => {
                valoresSelect[index].innerHTML = coluna.innerHTML
                console.log(valoresSelect[index].innerHTML)
                if(simbolo[1] != valoresSelect[index].innerHTML.slice(0,3)){
                    console.log('ok')
                    simbolo[1] = valoresSelect[index].innerHTML.slice(0,3)
                }else{
                    console.log('ok1')
                    simbolo[0] = valoresSelect[index].innerHTML.slice(0,3)
                }
                contacaoMoeda(simbolo,1)
                console.log(simbolo)
            })
        })
    })
}

function adicionarZero(variavel){
    if(variavel < 10){
        return '0' + variavel       
    }else{
        return variavel
    }
}