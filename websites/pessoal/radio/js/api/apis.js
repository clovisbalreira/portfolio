const pegarPaises = () => {
    fetch('https://restcountries.com/v3.1/all').then(res => res.json()).then(data => mostrarSelectPaises(data))
}

const pegarEstados = () => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/').then(res => res.json()).then(data => mostrarSelectEstados(data))
    inputEstadosCidades('divCidades','cidades', 'Digite a cidade')
}

const pegarCidades = () => {
    if(selectEstados == ''){
        mostrarSelectCidades('')
    }else{
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectEstados}/municipios`).then(res => res.json()).then(data => mostrarSelectCidades(data))
    }
}