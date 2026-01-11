import { criarLabelSelect } from "../criarLabelSelect.js";

export function menuJogosTemporada(totalJogos, variavelGlobal){
    let div = document.createElement('div')
    const filtrar = [
        ...new Set(
            totalJogos.map(jogo => jogo.campeonato)
        )
    ]
    criarLabelSelect(div, 'Temporada', 'menu-jogo-temporada', filtrar, '', 'Selecione a temporada', '', variavelGlobal)
    return div
}