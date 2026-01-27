export function habilitarDesabilitarSelect(condicao){
    console.log()
    let selects = document.querySelectorAll('select:not(#lista-socio)')
    let button = document.querySelector('button')
    selects.forEach( select => {
        if(select.value != ''){
            select.disabled = condicao
            button.disabled = condicao ? false : true
        }
    })
}