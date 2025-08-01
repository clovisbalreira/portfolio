export function mostrarTabelasPagamentoPagadorAcoes(idElemento, classe){
    let ids = document.querySelectorAll(idElemento)
    ids.forEach( id => {
        id.addEventListener('click', () => {
            for( let i = 0; i < ids.length; i++){
                let idModificar = document.getElementById(`${classe}-${i}`)
                if(id.getAttribute('id').includes(i)){
                    if(idModificar.style.display == 'table'){
                        idModificar.style.display = 'none'
                    }else{
                        idModificar.style.display = 'table'
                        idModificar.style.width = '100%'
                    }
                }else{
                    idModificar.style.display = 'none'
                }
            }
        })
    })
}