const incluirOptions = (valor, sigla) => {
    let option = document.createElement('option')
    option.setAttribute('value', sigla)
    option.innerHTML = valor
    return option
} 

const ordenar = (data) => {
    data.sort((a, b) => {
        if (a.nome < b.nome) return -1;
        if (a.nome > b.nome) return 1;
        return 0;
    });
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
            select.value != '' ? selectEstados = select.value : selectEstados = ''
            pegarCidades()
        })
    }
}

const inputEstadosCidades = (id, idInput, placeholder) => {
    const div = document.getElementById(id)
    div.innerHTML = ''
    const input = document.createElement('input')
    input.setAttribute('id', idInput)
    input.setAttribute('type', 'text')
    input.setAttribute('placeholder', placeholder)
    div.appendChild(input)
}

const mostrarSelectPaises = (data) => {
    const select = document.getElementById('paises')
    select.appendChild(incluirOptions('Selecione o pais'))
    data.sort((a, b) => a.translations.por.common.localeCompare(b.translations.por.common)).forEach( pais => {
        select.appendChild(incluirOptions(pais.translations.por.common, pais.translations.por.common))
    })
    select.addEventListener('change', () => {
        select.value == 'Brasil' ? selectPais = select.value : selectPais = ''
        pegarEstados()
    })
}

const mostrarSelectEstados = (data) => {
    selectPais == '' ? inputEstadosCidades('divEstados', 'estados', 'Digite o estado') : selectEstadosCidades(data, 'divEstados', 'estados', 'Selecione o estado')
}

const mostrarSelectCidades = (data) => {
    selectEstados == '' ? inputEstadosCidades('divCidades','cidades', 'Digite a cidade') : selectEstadosCidades(data, 'divCidades','cidades', 'Selecione a cidade')
}