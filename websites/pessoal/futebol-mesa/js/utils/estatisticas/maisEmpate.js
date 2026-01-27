import { pegarDados } from "../pegarDados.js";

export function maisEmpate(campeonato, condicaoGols, mostrar){
    let maior = ''
    let jogos = ''
    if(campeonato.tabelaClassificacaoGeral == undefined){
        maior = Math.max(
            ...campeonato.tabelas.map(
                tabela => tabela.e
            )
        );
        jogos = campeonato.tabelas.filter(tabela => tabela.e === maior);
    }else{
        maior = Math.max(
            ...campeonato.tabelaClassificacaoGeral.map(
                tabela => tabela.e
            )
        );
        jogos = campeonato.tabelaClassificacaoGeral.filter(tabela => tabela.e === maior);
    }
    return pegarDados(jogos, condicaoGols, campeonato.tipo != undefined ? campeonato.tipo.nome : campeonato.campeonato.tipo.nome, mostrar)
}