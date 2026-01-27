import { pegarDados } from "../pegarDados.js";

export function piorDefesa(campeonato, condicaoGols, mostrar){
    let maior = ''
    let gols = ''
    if(campeonato.tabelaClassificacaoGeral == undefined){
        maior = Math.max(
            ...campeonato.tabelas.map(
                tabela => tabela.gc
            )
        );
        gols = campeonato.tabelas.filter(tabela => tabela.gc === maior);
    }else{
        maior = Math.max(
            ...campeonato.tabelaClassificacaoGeral.map(
                tabela => tabela.gc
            )
        );
        gols = campeonato.tabelaClassificacaoGeral.filter(tabela => tabela.gc === maior);
    }
    return pegarDados(gols, condicaoGols, campeonato.tipo != undefined ? campeonato.tipo.nome : campeonato.campeonato.tipo.nome, mostrar)
}