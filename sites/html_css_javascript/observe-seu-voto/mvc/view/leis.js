const mostrarDadosLeis = async() => {
    const data = await pegarDadosLeis()
    mostrarLeis(data)
}

const mostrarDadosVotacao = async(lei) => {
    const data = await pegarDadosVotacao(lei)
    return data
}

const mostrarLeis = async(data) => {
    for(let i = 0; i < data.dados.length; i++){
        let lei = await mostrarDadosVotacao(data.dados[i].id)
        if(lei.dados.length > 0){
            console.log(lei)
        }
    }
}