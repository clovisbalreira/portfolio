import { menuTemporadas } from "../menus/menuTemporadas.js"
import { mostrarDados } from "../mostrarDados.js"
import { criarTabela } from "../tags/criarTabela.js"
import { criarTag } from "../tags/criarTag.js"
import { acaoMenuTemporada } from "../acoes-menus/acaoMenuTemporada.js"
import { totalPartidas } from "../estatisticas/totalPartidas.js"
import { totalGols } from "../estatisticas/totalGols.js"
import { mediaGols } from "../estatisticas/mediaGols.js"
import { jogoMaisNumeroGols } from "../estatisticas/jogoMaisNumeroGols.js"
import { jogoDiferencaGols } from "../estatisticas/jogoDiferencaGols.js"
import { melhorAtaque } from "../estatisticas/melhorAtaque.js"
import { piorAtaque } from "../estatisticas/piorAtaque.js"
import { melhorDefesa } from "../estatisticas/melhorDefesa.js"
import { piorDefesa } from "../estatisticas/piorDefesa.js"
import { maisJogos } from "../estatisticas/maisJogos.js"
import { maisVitoria } from "../estatisticas/maisVitoria.js"
import { menosVitoria } from "../estatisticas/menosVitoria.js"
import { maisEmpate } from "../estatisticas/maisEmpate.js"
import { menosEmpate } from "../estatisticas/menosEmpate.js"
import { maisDerrota } from "../estatisticas/maisDerrota.js"
import { menosDerrota } from "../estatisticas/menosDerrota.js"
import { mudarClasses } from "../mudarClasses.js"

export function mostrarDadosGerais(campeonato, variavelGlobal, temporadas, tipos, regras){
    let principal = document.getElementById('principal')
    principal.innerHTML = ''
    let section = document.createElement('section')
    section.id = 'dados-gerais'
    let filtrarTemporadas = temporadas.filter( temporada => {
        return temporada.campeonato.nome == campeonato[variavelGlobal.campeonato].nome && temporada.campeonato.regra.nome == regras[variavelGlobal.regra].nome && temporada.campeonato.tipo.nome == tipos[variavelGlobal.tipo].nome
    })
    section.appendChild(menuTemporadas(filtrarTemporadas))
    section.appendChild(dadosGerais(campeonato[variavelGlobal.campeonato], filtrarTemporadas))
    principal.appendChild(section)
    acaoMenuTemporada(campeonato, variavelGlobal, temporadas, tipos, regras)
}

function dadosGerais(campeonato, filtrarTemporadas){
    let section = document.createElement('section')
    section.id = 'dados-geral'
    mudarClasses(section, 'grid', 'flex')
    let dados = [
        { titulo: 'Nome', dado: campeonato.nome},
        { titulo: 'Regra', dado: campeonato.regra.nome},
        { titulo: 'Tipo', dado: campeonato.tipo.nome},    
    ]
    if(campeonato.jogos.length != 0){
        dados.push({ titulo: 'Total de jogos', dado: totalPartidas(campeonato, false, false, false)})
        dados.push({ titulo: 'Total de gols', dado: totalGols(campeonato, true, false, false)})
        dados.push({ titulo: 'Média de gols', dado: mediaGols(campeonato, true, false)})
        dados.push({ titulo: 'Tecnico com mais jogos', dado: maisJogos(campeonato, 'j', false)})
        dados.push({ titulo: 'Tecnico com mais vitória', dado: maisVitoria(campeonato, 'v', false)})
        dados.push({ titulo: 'Tecnico com menos vitória', dado: menosVitoria(campeonato, 'v', false)})
        dados.push({ titulo: 'Tecnico com mais empate', dado: maisEmpate(campeonato, 'e', false)})
        dados.push({ titulo: 'Tecnico com menos empate', dado: menosEmpate(campeonato, 'e', false)})
        dados.push({ titulo: 'Tecnico com mais derrota', dado:  maisDerrota(campeonato, 'd', false)})
        dados.push({ titulo: 'Tecnico com menos derrota', dado: menosDerrota(campeonato, 'd', false)})
        dados.push({ titulo: 'Melhor ataque', dado: melhorAtaque(campeonato, 'gp', false)})
        dados.push({ titulo: 'Pior ataque', dado: piorAtaque(campeonato, 'gp', false)})
        dados.push({ titulo: 'Melhor defesa', dado: melhorDefesa(campeonato, 'gc', false)})
        dados.push({ titulo: 'Pior defesa', dado: piorDefesa(campeonato, 'gc', false)})
        dados.push({ titulo: 'Jogo com mais gols', dado: jogoMaisNumeroGols(campeonato, true, false)})
        dados.push({ titulo: 'Jogo com maior diferença de gols', dado: jogoDiferencaGols(campeonato, true, false)})
    }
    section.appendChild(mostrarDados(dados, 'Dados', 'dados', true))
    section.appendChild(campeoesRanking(filtrarTemporadas))

    if(campeonato.tabelas[0].j != 0){
        let div = document.createElement('div')
        div.classList.add(campeonato.tipo.nome == 'Externo' ? 'estatisticas-geral-tabela' : 'tela-inteira')
        div.appendChild(criarTag('h2', 'Classificação Geral'))
        div.appendChild(criarTabela(campeonato.tabelas.filter( tabela => tabela.j > 0), false, campeonato.tipo.nome, false))
        section.appendChild(div)
        if(campeonato.tipo.nome == 'Externo'){
            div = document.createElement('div')
            div.appendChild(criarTag('h2', 'Classificação Geral Associação'))
            div.classList.add('estatisticas-geral-tabela-associacao')
            div.appendChild(criarTabela(campeonato.tabelaAssociacao.filter( tabela => tabela.j > 0), false, campeonato.tipo.nome, false))
            section.appendChild(div)
        }
    } 
    return section
}

function campeoesRanking(filtrarTemporadas){
    let div = document.createElement('div')
    div.id = "campeoes-ranking"
    const campeoes = filtrarTemporadas.map(temporada => ({
        titulo: `${temporada.nome} ${temporada.campeonato.nome}`,
        dado: temporada.tabelaClassificacaoGeral[0].tecnico.participante.nome
    }));
    div.appendChild(mostrarDados(campeoes, 'Campeões', 'campeoes'))
    const ranking = Object.values(
        campeoes.reduce((acc, { dado }) => {
            acc[dado] = acc[dado] || { titulo: dado, dado: 0 }
            acc[dado].dado++
            return acc
        }, {})
    ).sort((a, b) => b.dado - a.dado)
    div.appendChild(mostrarDados(ranking, 'Ranking', 'ranking'))

    return div
}