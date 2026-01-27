import { pegarDados } from "../pegarDados.js";

export function melhorDefesa(campeonato, condicaoGols, mostrar){
    let menor
    let gols
    let tabelasValidas
    if(campeonato.tabelaClassificacaoGeral == undefined){
        tabelasValidas = campeonato.tabelas.filter(tabela => tabela.j > 0)
        menor = Math.min(
            ...tabelasValidas.map(
                tabela => tabela.gc
            )
        );
        gols = tabelasValidas.filter(tabela => tabela.gc === menor);
    }else{
        tabelasValidas = campeonato.tabelaClassificacaoGeral.filter(tabela => tabela.j > 0)
        menor = Math.min(
            ...tabelasValidas.map(
                tabela => tabela.gc
            )
        );
        gols = tabelasValidas.filter(tabela => tabela.gc === menor);
    }
    return pegarDados(gols, condicaoGols, campeonato.tipo != undefined ? campeonato.tipo.nome : campeonato.campeonato.tipo.nome, mostrar)
}