import { pegarDados } from "../pegarDados.js";

export function piorAtaque(campeonato, tecnico, condicaoGols){
    let menor = ''
    let gols = ''
    if(campeonato.tabelaClassificacaoGeral == undefined){
        menor = Math.min(
            ...campeonato.tabelas.map(
                tabela => tabela.gp
            )
        );
        gols = campeonato.tabelas.filter(tabela => tabela.gp === menor);
    }else{
        menor = Math.min(
            ...campeonato.tabelaClassificacaoGeral.map(
                tabela => tabela.gp
            )
        );
        gols = campeonato.tabelaClassificacaoGeral.filter(tabela => tabela.gp === menor);
    }
    return pegarDados(gols, tecnico, condicaoGols)
}