import { pegarDados } from "../pegarDados.js";

export function menosVitoria(campeonato, condicaoGols, mostrar) {
    let menor
    let jogos
    let tabelasValidas
    if (campeonato.tabelaClassificacaoGeral === undefined) {
        tabelasValidas = campeonato.tabelas.filter(tabela => tabela.j > 0)
        menor = Math.min(
            ...tabelasValidas.map(tabela => tabela.v)
        )
        jogos = tabelasValidas.filter(tabela => tabela.v === menor)
    } else {
        tabelasValidas = campeonato.tabelaClassificacaoGeral.filter(tabela => tabela.j > 0)
        menor = Math.min(
            ...tabelasValidas.map(tabela => tabela.v)
        )
        jogos = tabelasValidas.filter(tabela => tabela.v === menor)
    }
    return pegarDados(jogos, condicaoGols, campeonato.tipo != undefined ? campeonato.tipo.nome : campeonato.campeonato.tipo.nome, mostrar)
}
