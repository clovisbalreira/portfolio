import { pegarDados } from "../pegarDados.js";

export function jogoMaisNumeroGols(campeonato, condicaoGols, mostrar){
    const maior = Math.max(
        ...campeonato.jogos.map(
            jogo => jogo.totalGols
        )
    );
    const jogos = campeonato.jogos
    .filter(jogo => jogo.totalGols === maior);
    return pegarDados(jogos, condicaoGols, mostrar, mostrar)
}