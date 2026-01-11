import { pegarDados } from "../pegarDados.js";

export function maisDerrota(campeonato, tecnico, condicaoGols){
    let maior = ''
    let jogos = ''
    if(campeonato.tabelaClassificacaoGeral == undefined){
        maior = Math.max(
            ...campeonato.tabelas.map(
                tabela => tabela.d
            )
        );
        jogos = campeonato.tabelas.filter(tabela => tabela.d === maior);
    }else{
        maior = Math.max(
            ...campeonato.tabelaClassificacaoGeral.map(
                tabela => tabela.d
            )
        );
        jogos = campeonato.tabelaClassificacaoGeral.filter(tabela => tabela.d === maior);
    }
    return pegarDados(jogos, tecnico, condicaoGols)
}