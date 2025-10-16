import { estados } from "../mvc/controll/estados.js"
import { selects } from "../mvc/controll/selects.js"

export function selectEstado(){    
    let div = document.getElementById('div-estado')
    div.innerHTML = ''
    let label = document.createElement('label')
    label.textContent = 'Estado'
    label.for = 'estado'
    div.appendChild(label)
    let select = document.createElement('select')
    select.id = 'estado'
    estados.forEach( (estado, index) => {
        let option = document.createElement('option')
        option.textContent = `${estado.nome} - ${estado.sigla}`
        option.value = index
        if(index == selects.estado) option.selected = selects.estado
        select.appendChild(option)
    })
    div.appendChild(select)
}