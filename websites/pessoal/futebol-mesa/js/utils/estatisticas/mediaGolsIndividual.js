import { pegarDados } from "../pegarDados.js";

export function mediaGolsIndividual(campeonato, tecnico, condicaoGols){
    let partidas = campeonato.j
    let gols = campeonato.gp + campeonato.gc
    return pegarDados( gols / partidas , tecnico, condicaoGols)
}