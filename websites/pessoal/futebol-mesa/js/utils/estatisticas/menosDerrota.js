import { pegarDados } from "../pegarDados.js";

export function menosDerrota(campeonato, tecnico, condicaoGols){
    let menor = ''
    let jogos = ''
    if(campeonato.tabelaClassificacaoGeral == undefined){
        menor = Math.min(
            ...campeonato.tabelas.map(
                tabela => tabela.d
            )
        );
        jogos = campeonato.tabelas.filter(tabela => tabela.d === menor);
    }else{
        menor = Math.min(
            ...campeonato.tabelaClassificacaoGeral.map(
                tabela => tabela.d
            )
        );
        jogos = campeonato.tabelaClassificacaoGeral.filter(tabela => tabela.d === menor);
    }
    return pegarDados(jogos, tecnico, condicaoGols)
}