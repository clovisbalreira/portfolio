export function filtrarCampeonatosAssociacoes(campeonatos, associacoes, variavelGlobal){
    return campeonatos.filter( campeonato =>  campeonato.associacao.nome == associacoes[variavelGlobal.associacao].nome)
}