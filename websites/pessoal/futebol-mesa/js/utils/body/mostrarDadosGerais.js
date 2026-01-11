import { menuTemporadas } from "../menus/menuTemporadas.js"
import { mostrarDados } from "../mostrarDados.js"
import { criarTabela } from "../tags/criarTabela.js"
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
import { maisDerrota } from "../estatisticas/maisDerrota.js"
import { menosDerrota } from "../estatisticas/menosDerrota.js"
import { mudarClasses } from "../mudarClasses.js"

export function mostrarDadosGerais(campeonato, variavelGlobal, temporadas){
    let principal = document.getElementById('principal')
    principal.innerHTML = ''
    let section = document.createElement('section')
    section.id = 'dados-gerais'
    let filtrarTemporadas = temporadas.filter( temporada => {
        return temporada.campeonato.nome == campeonato[variavelGlobal.campeonato].nome
    })
    section.appendChild(menuTemporadas(filtrarTemporadas))
    section.appendChild(dadosGerais(campeonato[variavelGlobal.campeonato], filtrarTemporadas))
    principal.appendChild(section)
    acaoMenuTemporada(campeonato, variavelGlobal, temporadas)
}

function dadosGerais(campeonato, filtrarTemporadas){
    let section = document.createElement('section')
    section.id = 'dados-geral'
    mudarClasses(section, 'grid', 'flex')
    let dados = [
        { titulo: 'Nome', dado: campeonato.nome},
        { titulo: 'Regra', dado: campeonato.regra.nome},
        { titulo: 'Tipo', dado: campeonato.tipo.nome},
        { titulo: 'Total de jogos', dado: totalPartidas(campeonato, false, false)},
        { titulo: 'Total de gols', dado: totalGols(campeonato, false, 'true')},
        { titulo: 'Média de gols', dado: mediaGols(campeonato, false, true)},
        { titulo: 'Tecnico com mais jogos', dado: maisJogos(campeonato, false, 'j')},
        { titulo: 'Tecnico com mais vitória', dado: maisVitoria(campeonato, false, 'v')},
        { titulo: 'Tecnico com menos vitória', dado: menosVitoria(campeonato, false, 'v')},
        { titulo: 'Tecnico com mais empate', dado: maisEmpate(campeonato, false, 'e')},
        { titulo: 'Tecnico com menos empate', dado: maisVitoria(campeonato, false, 'e')},
        { titulo: 'Tecnico com mais derrota', dado:  maisDerrota(campeonato, false, 'd')},
        { titulo: 'Tecnico com menos derrota', dado: menosDerrota(campeonato, false, 'd')},
        { titulo: 'Melhor ataque', dado: melhorAtaque(campeonato, false, 'gp')},
        { titulo: 'Pior ataque', dado: piorAtaque(campeonato, false, 'gp')},
        { titulo: 'Melhor defesa', dado: melhorDefesa(campeonato, false, 'gc')},
        { titulo: 'Pior defesa', dado: piorDefesa(campeonato, false, 'gc')},
        { titulo: 'Jogo com mais gols', dado: jogoMaisNumeroGols(campeonato, false, true)},
        { titulo: 'Jogo com maior diferença de gols', dado: jogoDiferencaGols(campeonato, false, true)},
    ]
    section.appendChild(mostrarDados(dados, 'Dados', 'dados'))
    const campeoes = filtrarTemporadas.map(temporada => ({
        titulo: `${temporada.nome} ${temporada.campeonato.nome}`,
        dado: temporada.tabelaClassificacaoGeral[0].tecnico.participante.nome
    }));
    section.appendChild(mostrarDados(campeoes, 'Campeões', 'campeoes'))
    section.appendChild(criarTabela(campeonato.tabelas, false, false))
    return section
}