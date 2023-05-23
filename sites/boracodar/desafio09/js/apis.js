/* 
    url moedas : 
    https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json
    
    https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json&$select=simbolo,nomeFormatado,tipoMoeda 
    
    url cotação :
    https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='EUR'&@dataInicial='05-15-2023'&@dataFinalCotacao='05-22-2023'&$top=100&$format=json 

    https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='EUR'&@dataInicial='05-15-2023'&@dataFinalCotacao='05-22-2023'&$top=100&$format=json&$select=paridadeCompra,paridadeVenda,cotacaoCompra,cotacaoVenda,dataHoraCotacao,tipoBoletim 
*/

const pegarMoeda = async() => {
    const apiMoedaURL = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json`
    const res = await fetch(apiMoedaURL)
    const data = await res.json()
    console.log(data.value)
    return data
}

const pegarCotacao = async() => {
    const data = pegarMoeda()
}

pegarCotacao()