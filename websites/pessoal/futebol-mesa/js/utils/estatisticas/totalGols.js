import { pegarDados } from "../pegarDados.js";

export function totalGols(campeonato, tecnico, condicaoGols, mostrar){
    let gols = 0
    if(campeonato.tabelaClassificacaoGeral == undefined) gols = campeonato.tabelas.reduce( (total, tabela) =>  total += tabela.gp, 0)
    else gols = campeonato.tabelaClassificacaoGeral.reduce( (total, tabela) =>  total += tabela.gp, 0)
    return pegarDados(gols, tecnico, condicaoGols, mostrar)
}