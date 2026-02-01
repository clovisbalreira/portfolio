import { pegarDados } from "../pegarDados.js";

export function jogoMaisNumeroGols(campeonato, condicaoGols, mostrar){
    const maior = Math.max(
        ...campeonato.jogos.map(
            jogo => jogo.totalGols
        )
    );
    const jogos = campeonato.jogos
    .filter(jogo => jogo.totalGols === maior);
    return pegarDados(jogos, condicaoGols, campeonato.jogos == undefined ? campeonato.campeonato == undefined ? campeonato.tipo.nome : campeonato.campeonato.tipo.nome : campeonato.jogos[0].tipo, mostrar)
}