import { ordemFases } from "../ordenar/ordemFases.js"

export function classificacaoFases(fase, novaFase){
    let faseAtual = ordemFases.indexOf(fase)
    let faseProxima = ordemFases.indexOf(novaFase)
    return faseAtual < 0 || faseAtual > faseProxima ? novaFase : fase
}