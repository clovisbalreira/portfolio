import { pegarDados } from "../pegarDados.js";

export function mediaGolsContra(campeonato, condicaoGols, mostrar){
    let partidas = campeonato.j
    let gols = campeonato.gc
    return pegarDados( gols / partidas, condicaoGols, '', mostrar)
}