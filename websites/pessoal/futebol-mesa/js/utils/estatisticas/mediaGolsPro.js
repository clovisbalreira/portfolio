import { pegarDados } from "../pegarDados.js";

export function mediaGolsPro(campeonato, condicaoGols, mostrar){
    let partidas = campeonato.j
    let gols = campeonato.gp
    return pegarDados( gols / partidas, condicaoGols, '', mostrar)
}