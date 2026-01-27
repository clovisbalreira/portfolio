import { adicionarJogo } from "../../utils/adicionarJogo.js"
import { criarTag } from "../../utils/tags/criarTag.js"
import { criarTabela } from "../../utils/tags/criarTabela.js"
import { totalPartidas } from "../../utils/estatisticas/totalPartidas.js"
import { totalGols } from "../../utils/estatisticas/totalGols.js"
import { mediaGols } from "../../utils/estatisticas/mediaGols.js"
import { jogoMaisNumeroGols } from "../../utils/estatisticas/jogoMaisNumeroGols.js"
import { jogoDiferencaGols } from "../../utils/estatisticas/jogoDiferencaGols.js"
import { melhorAtaque } from "../../utils/estatisticas/melhorAtaque.js"
import { piorAtaque } from "../../utils/estatisticas/piorAtaque.js"
import { melhorDefesa } from "../../utils/estatisticas/melhorDefesa.js"
import { piorDefesa } from "../../utils/estatisticas/piorDefesa.js"
import { maisVitoria } from "../../utils/estatisticas/maisVitoria.js"
import { menosVitoria } from "../../utils/estatisticas/menosVitoria.js"
import { maisEmpate } from "../../utils/estatisticas/maisEmpate.js"
import { maisDerrota } from "../../utils/estatisticas/maisDerrota.js"
import { menosDerrota } from "../../utils/estatisticas/menosDerrota.js"
import { mudarClasses } from "../../utils/mudarClasses.js"
import { mostrarDados } from "../../utils/mostrarDados.js"

export function mostrarCampeonato(campeonatos, variavelGlobal, temporadas, tipos, regras){
    let section = document.getElementById('dados-geral')
    section.innerHTML = ''
    mudarClasses(section, 'flex', 'grid')
    let sectionCampeonato = document.createElement('section')
    sectionCampeonato.id  = 'dados-campeonato'
    let campeonatoTemporadas = temporadas.filter( temporada => temporada.campeonato.nome == campeonatos[variavelGlobal.campeonato].nome && temporada.campeonato.regra.nome == regras[variavelGlobal.regra].nome && temporada.campeonato.tipo.nome == tipos[variavelGlobal.tipo].nome)
    let campeonatoEscolhido = campeonatoTemporadas[variavelGlobal.temporada]
    sectionCampeonato.appendChild(criarTag('h2', `${campeonatoEscolhido.nome} ${campeonatoEscolhido.campeonato.nome}`))
    campeonatoEscolhido.tabela.tabela.forEach( dados => {
        let sectionEtapa = document.createElement('section')
        sectionEtapa.classList.add('section-etapa')
        let sectionJogos = document.createElement('section')
        sectionJogos.classList.add('rodadas')
        sectionJogos.appendChild(criarTag('h3', dados.turno == '' ? dados.fase : `${dados.fase} - ${dados.turno}`))
        sectionJogos.appendChild(adicionarRodada(dados))
        sectionEtapa.appendChild(sectionJogos)
        if(dados.fase.includes('fase')){
            sectionEtapa.appendChild(tabelaGrupos(dados.tabela, campeonatoEscolhido.penaltiPontos, campeonatoEscolhido.campeonato.tipo.nome))
        }
        sectionCampeonato.appendChild(sectionEtapa)
    })
    sectionCampeonato.appendChild(mostrarEstatisticas(campeonatoEscolhido, campeonatoEscolhido.campeonato.tipo.nome))
    section.appendChild(sectionCampeonato)
}

function adicionarRodada(dados){
    let rodada = ''
    let div = document.createElement('div')
    div.classList.add('div-rodada')
    let divRodada = document.createElement('div')
    dados.jogos.forEach( jogo => {
        if(rodada != jogo.rodada){
            divRodada = document.createElement('div')
            divRodada.classList.add('rodada')
            divRodada.appendChild(criarTag('h4', jogo.rodada))
        } 
        let table = document.createElement('table')
        table.id = 'tabela-jogos'
        table.appendChild(adicionarJogo(jogo))
        divRodada.appendChild(table)
        div.appendChild(divRodada)
        rodada = jogo.rodada
    })
    return div
}

function tabelaGrupos(tabela, penaltiPontos, tipo){
    let section = document.createElement('section')
    section.classList.add('tabelas')
    section.appendChild(criarTabela(tabela, penaltiPontos, tipo, true))
    return section
}

function mostrarEstatisticas(campeonato, tipo){
    let section = document.createElement('section')
    section.classList.add('estatisticas-geral')
    section.classList.add('grid')
    let div = document.createElement('div')
    div.classList.add('estatisticas-geral-tabela')
    div.appendChild(criarTag('h2', 'Classificação Geral'))
    div.appendChild(criarTabela(campeonato.tabelaClassificacaoGeral, campeonato.penaltiPontos, tipo, true))
    section.appendChild(div)
    if(campeonato.campeonato.tipo.nome == 'Externo'){
        div = document.createElement('div')
        div.classList.add('estatisticas-geral-tabela-associacao')
        div.appendChild(criarTag('h2', 'Classificação Geral Associação'))
        div.appendChild(criarTabela(campeonato.tabelaGeralAssociacao, campeonato.penaltiPontos, tipo, true))
    }
    section.appendChild(div)
    let dados = [
        { titulo: 'Total de jogos', dado: totalPartidas(campeonato, false, false)},
        { titulo: 'Total de gols', dado: totalGols(campeonato, true, true, true)},
        { titulo: 'Média de gols', dado: mediaGols(campeonato, true, true)},
        { titulo: 'Tecnico com mais vitória', dado: maisVitoria(campeonato, 'v', true)},
        { titulo: 'Tecnico com menos vitória', dado: menosVitoria(campeonato, 'v', true)},
        { titulo: 'Tecnico com mais empate', dado: maisEmpate(campeonato, 'e', true)},
        { titulo: 'Tecnico com menos empate', dado: maisVitoria(campeonato, 'e', true)},
        { titulo: 'Tecnico com mais derrota', dado:  maisDerrota(campeonato, 'd', true)},
        { titulo: 'Tecnico com menos derrota', dado: menosDerrota(campeonato, 'd', true)},
        { titulo: 'Melhor ataque', dado: melhorAtaque(campeonato, 'gp', true)},
        { titulo: 'Pior ataque', dado: piorAtaque(campeonato, 'gp', true)},
        { titulo: 'Melhor defesa', dado: melhorDefesa(campeonato, 'gc', true)},
        { titulo: 'Pior defesa', dado: piorDefesa(campeonato, 'gc', true)},
        { titulo: 'Jogo com mais gols', dado: jogoMaisNumeroGols(campeonato, false, true)},
        { titulo: 'Jogo com maior diferença de gols', dado: jogoDiferencaGols(campeonato, false, true)},
    ]
    section.appendChild(mostrarDados(dados, 'Estatísticas', 'estatisticas'))
    return section
}