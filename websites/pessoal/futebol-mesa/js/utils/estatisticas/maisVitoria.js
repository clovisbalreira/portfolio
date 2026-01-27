import { pegarDados } from "../pegarDados.js";

export function maisVitoria(campeonato, condicaoGols, mostrar){
    let maior = ''
    let jogos = ''
    if(campeonato.tabelaClassificacaoGeral == undefined){
        maior = Math.max(
            ...campeonato.tabelas.map(
                tabela => tabela.v
            )
        );
        jogos = campeonato.tabelas.filter(tabela => tabela.v === maior);
    }else{
        maior = Math.max(
            ...campeonato.tabelaClassificacaoGeral.map(
                tabela => tabela.v
            )
        );
        jogos = campeonato.tabelaClassificacaoGeral.filter(tabela => tabela.v === maior);
    }
    return pegarDados(jogos, condicaoGols, campeonato.tipo != undefined ? campeonato.tipo.nome : campeonato.campeonato.tipo.nome, mostrar)
}