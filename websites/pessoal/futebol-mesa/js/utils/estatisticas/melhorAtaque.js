import { pegarDados } from "../pegarDados.js";

export function melhorAtaque(campeonato, tecnico, condicaoGols){
    let maior = ''
    let gols = ''
    if(campeonato.tabelaClassificacaoGeral == undefined){
        maior = Math.max(
            ...campeonato.tabelas.map(
                tabela => tabela.gp
            )
        );
        gols = campeonato.tabelas.filter(tabela => tabela.gp === maior);
    }else{
        maior = Math.max(
            ...campeonato.tabelaClassificacaoGeral.map(
                tabela => tabela.gp
            )
        );
        gols = campeonato.tabelaClassificacaoGeral.filter(tabela => tabela.gp === maior);
    }
    return pegarDados(gols, tecnico, condicaoGols)
}