const pegarDadosDeputados = async() => {
    const apiDeputadosURL = `https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome`
    const res = await fetch(apiDeputadosURL)
    const data = await res.json()
    return data
}

const pegarDadosPartidos = async() => {
    const apiPartidosURL = `https://dadosabertos.camara.leg.br/api/v2/partidos?itens=21&ordem=ASC&ordenarPor=sigla`
    const res = await fetch(apiPartidosURL)
    const data = await res.json()
    return data
}

const pegarDadosPartidosDeputados = async(partido) => {
    const apiDeputadosPartidosURL = `https://dadosabertos.camara.leg.br/api/v2/deputados?siglaPartido=${partido.replace('#','')}&ordem=ASC&ordenarPor=nome`
    const res = await fetch(apiDeputadosPartidosURL)
    const data = await res.json()
    return data
}

const pegarDadosDeputadosEstadoPartidos = async(estado, partido) => {
    const apiEstadoPartidosDeputadosURL = `https://dadosabertos.camara.leg.br/api/v2/deputados?siglaUf=${estado.replace('#','').toUpperCase()}&siglaPartido=${partido}&ordem=ASC&ordenarPor=nome`
    const res = await fetch(apiEstadoPartidosDeputadosURL)
    const data = await res.json()
    return data
}
