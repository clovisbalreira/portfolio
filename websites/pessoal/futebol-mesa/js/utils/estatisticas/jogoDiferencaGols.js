import { pegarDados } from "../pegarDados.js";

export function jogoDiferencaGols(campeonato, tecnico, condicaoGols){
    const maior= Math.max(
        ...campeonato.jogos.map(
            jogo => jogo.diferencaGols
        )
    );
    const jogos = campeonato.jogos
    .filter(jogo => jogo.diferencaGols === maior);
    return pegarDados(jogos, tecnico, condicaoGols)
}


