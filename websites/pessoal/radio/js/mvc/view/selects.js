import { pegarEstados, pegarCidades } from '../../api/apis.js'
import { variavelGlobal } from '../control/global.js'

const incluirOptions = (valor, sigla) => {
    let option = document.createElement('option')
    option.setAttribute('value', sigla)
    option.innerHTML = valor
    return option
} 

const selectEstadosCidades = (data, id, idInput, placeholder) => {
    const div = document.getElementById(id)
    div.innerHTML = ''
    const select = document.createElement('select')
    select.setAttribute('id', idInput)
    select.appendChild(incluirOptions(placeholder))
    data.sort((a, b) => a.nome.localeCompare(b.nome)).forEach( valor => {
        let sigla = idInput == 'estados' ? valor.sigla : valor.nome
        select.appendChild(incluirOptions(valor.nome, sigla))
    })
    div.appendChild(select)
    if(idInput == 'estados'){
        select.addEventListener('change', () => {
            select.value != '' ? variavelGlobal.selectEstados = select.value : variavelGlobal.selectEstados = ''
            pegarCidades()
        })
    }
}

export const inputEstadosCidades = (id, idInput, placeholder) => {
    const div = document.getElementById(id)
    div.innerHTML = ''
    const input = document.createElement('input')
    input.value = ''
    input.setAttribute('id', idInput)
    input.setAttribute('type', 'text')
    input.setAttribute('placeholder', placeholder)
    div.appendChild(input)
}

export const mostrarSelectPaises = (data) => {
    const select = document.getElementById('paises')
    select.appendChild(incluirOptions('Selecione o pais'))
    data.sort((a, b) => a.name.common.localeCompare(b.name.common)).forEach( pais => {
        select.appendChild(incluirOptions(pais.name.common, pais.name.common))
    })
    select.addEventListener('change', () => {
        select.value == 'Brazil' ? variavelGlobal.selectPais = select.value : variavelGlobal.selectPais = ''
        pegarEstados()
    })
}

export const mostrarSelectEstados = (data) => {
    variavelGlobal.selectPais == '' ? inputEstadosCidades('divEstados', 'estados', 'Digite o estado') : selectEstadosCidades(data, 'divEstados', 'estados', 'Selecione o estado')
}

export const mostrarSelectCidades = (data) => {
    variavelGlobal.selectEstados == '' ? inputEstadosCidades('divCidades','cidades', 'Digite a cidade') : selectEstadosCidades(data, 'divCidades','cidades', 'Selecione a cidade')
}