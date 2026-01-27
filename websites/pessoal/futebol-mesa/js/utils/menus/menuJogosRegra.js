import { criarLabelSelect } from "../criarLabelSelect.js";

export function menuJogosRegra(totalJogos, variavelGlobal, condicao){
    let div = document.createElement('div')
    const filtrar = [
        ...new Set(
            totalJogos.flatMap(jogo => [
            jogo.regra,
            jogo.regra
            ])
        )
    ];
    criarLabelSelect(div, 'Regra', condicao ? 'menu-principal-regra' : 'menu-jogo-regra', filtrar, '', 'Selecione a regra', '', variavelGlobal)
    return div
}