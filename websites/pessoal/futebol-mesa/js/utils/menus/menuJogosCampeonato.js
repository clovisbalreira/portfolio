import { criarLabelSelect } from "../criarLabelSelect.js";

export function menuJogosCampeonato(totalJogos, variavelGlobal){
    let div = document.createElement('div')
    const filtrar = [
        ...new Set(
            totalJogos.map(jogo => jogo.campeonato.split(" - ")[1])
        )
    ]
    criarLabelSelect(div, 'Campeonato', 'menu-jogo-campeonato', filtrar, '', 'Selecione a campeonato', '', variavelGlobal)
    return div
}