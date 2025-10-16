import { campeoes } from "../mvc/controll/campeoes.js"
import { selects } from "../mvc/controll/selects.js"
import { inputSomar } from "./inputSomar.js"

export function selectAno(){    
    let div = document.getElementById('div-ano')
    div.innerHTML = ''
    let divSelect = document.createElement('div')
    let label = document.createElement('label')
    label.textContent = 'Ano'
    label.for = 'ano'
    divSelect.appendChild(label)
    let select = document.createElement('select')
    select.id = 'ano'
    valoresAnos().forEach( ano => {
        let option = document.createElement('option')
        option.textContent = ano.ano
        option.value = ano.ano
        if(ano.atual) option.selected = true
        select.appendChild(option)
    })
    divSelect.appendChild(select)
    div.appendChild(divSelect)
    div.appendChild(inputSomar())
}

function valoresAnos(){
    let anos = []
    let anoAnterior = 0
    let incluir = true
    campeoes.forEach( (campeao, index) => {
            if(parseInt(campeao.ano) < parseInt(anoAnterior)) incluir = false
            if(incluir && index > 4) anos.push({ano: campeao.ano, atual: campeao.ano == selects.ano})
            anoAnterior = campeao.ano
        }
    )
    anos.push({ano: anoAnterior + 1, atual: anoAnterior + 1 == selects.ano})
    return anos.sort((a ,b) => b.ano - a.ano)
}