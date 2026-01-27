import { pegarDados } from "../pegarDados.js";

export function menosEmpate(campeonato, condicaoGols, mostrar){
    let menor
    let jogos
    let tabelasValidas
    if(campeonato.tabelaClassificacaoGeral == undefined){
        tabelasValidas = campeonato.tabelas.filter(tabela => tabela.j > 0)
        menor = Math.min(
            ...tabelasValidas.map(
                tabela => tabela.e
            )
        );
        jogos = tabelasValidas.filter(tabela => tabela.e === menor);
    }else{
        tabelasValidas = campeonato.tabelaClassificacaoGeral.filter(tabela => tabela.j > 0)
        menor = Math.min(
            ...tabelasValidas.map(
                tabela => tabela.e
            )
        );
        jogos = tabelasValidas.filter(tabela => tabela.e === menor);
    }
    return pegarDados(jogos, condicaoGols, campeonato.tipo.nome, mostrar)
}