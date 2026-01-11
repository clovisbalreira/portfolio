import { pegarDados } from "../pegarDados.js";

export function mediaGols(campeonato, tecnico, condicaoGols){
    let partidas = 0
    let gols = 0
    if(campeonato.tabelaClassificacaoGeral == undefined){
        partidas = campeonato.tabelas.reduce( (total, tabela) =>  total += tabela.j, 0)
        gols = campeonato.tabelas.reduce( (total, tabela) =>  total += tabela.gp, 0)
    }else{
        partidas = campeonato.tabelaClassificacaoGeral.reduce( (total, tabela) =>  total += tabela.j, 0)
        gols = campeonato.tabelaClassificacaoGeral.reduce( (total, tabela) =>  total += tabela.gp, 0)
    } 

    return pegarDados(gols / (partidas / 2), tecnico, condicaoGols)
}