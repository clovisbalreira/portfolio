import { pegarDados } from "../pegarDados.js";

export function mediaGolsPro(campeonato, tecnico, condicaoGols){
    let partidas = campeonato.j
    let gols = campeonato.gp
    return pegarDados( gols / partidas , tecnico, condicaoGols)
}