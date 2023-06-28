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

const pegarDadosEstadosDeputados = async(estados) => {
    const apiEstadosURL = `https://dadosabertos.camara.leg.br/api/v2/deputados?siglaUf=${estados}&ordem=ASC&ordenarPor=nome`
    const res = await fetch(apiEstadosURL)
    const data = await res.json()
    return data
}

const pegarDadosPartidosDeputados = async(partido) => {
    const apiDeputadosPartidosURL = `https://dadosabertos.camara.leg.br/api/v2/deputados?siglaPartido=${partido.replace('#','')}&ordem=ASC&ordenarPor=nome`
    const res = await fetch(apiDeputadosPartidosURL)
    const data = await res.json()
    return data
}

const pegarDadosEstadoPartidosDeputados = async(estado, partido) => {
    const apiEstadoPartidosDeputadosURL = `https://dadosabertos.camara.leg.br/api/v2/deputados?siglaUf=${estado.toUpperCase()}&siglaPartido=${partido}&ordem=ASC&ordenarPor=nome`
    const res = await fetch(apiEstadoPartidosDeputadosURL)
    const data = await res.json()
    return data
}

const pegarDadosLeis = async() => {
    const apiLeisURL = `https://dadosabertos.camara.leg.br/api/v2/votacoes?ordem=DESC&ordenarPor=dataHoraRegistro`
    const res = await fetch(apiLeisURL)
    const data = await res.json()
    return data
}

const pegarDadosEmenta = async(codigo) => {
    const apiLeisURL = `https://dadosabertos.camara.leg.br/api/v2/proposicoes/${codigo}`
    const res = await fetch(apiLeisURL)
    const data = await res.json()
    return data
}

const pegarDadosVotacao = async(codigo) => {
    const apiLeisURL = `https://dadosabertos.camara.leg.br/api/v2/votacoes/${codigo}/votos`
    const res = await fetch(apiLeisURL)
    const data = await res.json()
    return data
}

