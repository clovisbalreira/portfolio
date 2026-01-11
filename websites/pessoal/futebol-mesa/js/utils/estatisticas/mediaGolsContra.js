import { pegarDados } from "../pegarDados.js";

export function mediaGolsContra(campeonato, tecnico, condicaoGols){
    let partidas = campeonato.j
    let gols = campeonato.gc
    return pegarDados( gols / partidas , tecnico, condicaoGols)
}