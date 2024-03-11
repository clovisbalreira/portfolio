const pegarMoeda = async() => {
    const apiMoedaURL = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json`
    const res = await fetch(apiMoedaURL)
    const data = await res.json()
    return data
}

const pegarCotacao = async(datas) => {
    let hoje = new Date()
    let agora = hoje
    let semanaAnterior = new Date(hoje.getTime() - 7 * 24 * 60 * 60 * 1000)
    const apiCotacaoURL = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='${datas}'&@dataInicial='${adicionarZero(semanaAnterior.getMonth() + 1)}-${adicionarZero(semanaAnterior.getDate())}-${semanaAnterior.getFullYear()}'&@dataFinalCotacao='${adicionarZero(agora.getMonth() + 1)}-${adicionarZero(hoje.getDate())}-${hoje.getFullYear()}'&$top=100&$format=json`
    const res = await fetch(apiCotacaoURL)
    const data = await res.json()
    return data
}

const contacaoMoeda = async (simbolo,soma) => {
    const moeda = await pegarMoeda()
    let cotacao = []
    for(let i = 0; i < moeda.value.length; i++){
        cotacao.push(await pegarCotacao(moeda.value[i].simbolo))
    }
    mostrarCotacao(moeda,cotacao,simbolo,soma)
}