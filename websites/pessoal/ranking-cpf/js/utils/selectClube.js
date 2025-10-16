import { clubes } from "../mvc/controll/clubes.js"
import { selects } from "../mvc/controll/selects.js"

export function selectClube(){    
    let div = document.getElementById('div-clube')
    div.innerHTML = ''
    let label = document.createElement('label')
    label.textContent = 'Clube'
    label.for = 'clube'
    div.appendChild(label)
    let select = document.createElement('select')
    select.id = 'clube'
    clubes.forEach( (clube, index) => {
        if(clube.pontosTotal > 0){
            let option = document.createElement('option')
            option.textContent = `${clube.nome} - ${clube.estado.sigla}`
            option.value = index
            if(index == selects.clube) option.selected = selects.clube
            select.appendChild(option)
        }
    })
    div.appendChild(select)
}