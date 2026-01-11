import { pegarDados } from "../pegarDados.js";

export function melhorDefesa(campeonato, tecnico, condicaoGols){
    let menor = ''
    let gols = ''
    if(campeonato.tabelaClassificacaoGeral == undefined){
        menor = Math.min(
            ...campeonato.tabelas.map(
                tabela => tabela.gc
            )
        );
        gols = campeonato.tabelas.filter(tabela => tabela.gc === menor);
    }else{
        menor = Math.min(
            ...campeonato.tabelaClassificacaoGeral.map(
                tabela => tabela.gc
            )
        );
        gols = campeonato.tabelaClassificacaoGeral.filter(tabela => tabela.gc === menor);
    }
    return pegarDados(gols, tecnico, condicaoGols)
}