let paises = [
    { nome : 'Argentina', sigla : 'ARS'},
    { nome : 'Estados Unidos', sigla : 'USD'},
    { nome : 'India', sigla : 'INR'},
    { nome : 'Suiça', sigla : 'CHF'},
    { nome : 'Uruguai', sigla : 'UYU'}
]

let cotacao = []

const pegarMoeda = async(pais) => {
    const apiMoedaURL = `https://economia.awesomeapi.com.br/json/daily/${pais.sigla}-BRL`
    const res = await fetch(apiMoedaURL)
    const data = await res.json()
    return data
}

const carregarCotacoes = async () => {
    for (let pais of paises) {
        const data = await pegarMoeda(pais);
        cotacao.push({nome : pais.nome, sigla : pais.sigla, valor : data[0].ask});
    }
    imprimirSelect()
    selects()
    atualizar()
};

carregarCotacoes();