import { pegarDados } from "../pegarDados.js";

export function menosEmpate(campeonato, tecnico, condicaoGols){
    let menor = ''
    let jogos = ''
    if(campeonato.tabelaClassificacaoGeral == undefined){
        menor = Math.min(
            ...campeonato.tabelas.map(
                tabela => tabela.e
            )
        );
        jogos = campeonato.tabelas.filter(tabela => tabela.e === menor);
    }else{
        menor = Math.min(
            ...campeonato.tabelaClassificacaoGeral.map(
                tabela => tabela.e
            )
        );
        jogos = campeonato.tabelaClassificacaoGeral.filter(tabela => tabela.e === menor);
    }
    return pegarDados(jogos, tecnico, condicaoGols)
}