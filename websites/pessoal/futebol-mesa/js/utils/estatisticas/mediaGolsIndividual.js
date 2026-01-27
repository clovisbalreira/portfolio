import { pegarDados } from "../pegarDados.js";

export function mediaGolsIndividual(campeonato, condicaoGols, mostrar){
    let partidas = campeonato.j
    let gols = campeonato.gp + campeonato.gc
    return pegarDados( gols / partidas, condicaoGols, '', mostrar)
}