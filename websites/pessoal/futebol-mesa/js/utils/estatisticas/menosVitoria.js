import { pegarDados } from "../pegarDados.js";

export function menosVitoria(campeonato, tecnico, condicaoGols){
    let menor = ''
    let jogos = ''
    if(campeonato.tabelaClassificacaoGeral == undefined){
        menor = Math.min(
            ...campeonato.tabelas.map(
                tabela => tabela.v
            )
        );
        jogos = campeonato.tabelas.filter(tabela => tabela.v === menor);
    }else{
        menor = Math.min(
            ...campeonato.tabelaClassificacaoGeral.map(
                tabela => tabela.v
            )
        );
        jogos = campeonato.tabelaClassificacaoGeral.filter(tabela => tabela.v === menor);
    }
    return pegarDados(jogos, tecnico, condicaoGols)
}