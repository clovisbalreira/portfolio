export function filtrarSociosAssociacoes(socios, associacoes, variavelGlobal){
    return socios.filter( socio => {
        let filtro = false
        socio.associacoes.forEach( associacao => {
            if(associacao.nome == associacoes[variavelGlobal.associacao].nome) filtro = true
        })
        return filtro
    })
}