import { pegarDados } from "../pegarDados.js"

export function totalPartidas(campeonato, tecnico, condicaoGols, mostrar){
    let partidas = 0
    if(campeonato.tabelaClassificacaoGeral == undefined) partidas = campeonato.tabelas.reduce( (total, tabela) =>  total += tabela.j, 0)
    else partidas = campeonato.tabelaClassificacaoGeral.reduce( (total, tabela) =>  total += tabela.j, 0)
    return pegarDados(partidas / 2, tecnico, '', condicaoGols, mostrar)
}