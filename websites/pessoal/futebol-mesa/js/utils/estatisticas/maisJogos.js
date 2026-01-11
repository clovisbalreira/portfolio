import { pegarDados } from "../pegarDados.js";

export function maisJogos(campeonato, tecnico, condicaoGols){
    let maior = ''
    let jogos = ''
    if(campeonato.tabelaClassificacaoGeral == undefined){
        maior = Math.max(
            ...campeonato.tabelas.map(
                tabela => tabela.j
            )
        );
        jogos = campeonato.tabelas.filter(tabela => tabela.j === maior);
    }else{
        maior = Math.max(
            ...campeonato.tabelaClassificacaoGeral.map(
                tabela => tabela.j
            )
        );
        jogos = campeonato.tabelaClassificacaoGeral.filter(tabela => tabela.j === maior);
    }
    return pegarDados(jogos, tecnico, condicaoGols)
}