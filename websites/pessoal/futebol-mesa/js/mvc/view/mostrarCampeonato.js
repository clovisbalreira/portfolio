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

export function mostrarCampeonato(campeonatos, variavelGlobal, temporadas){
    let section = document.getElementById('dados-geral')
    section.innerHTML = ''
    mudarClasses(section, 'flex', 'grid')
    let sectionCampeonato = document.createElement('section')
    sectionCampeonato.id  = 'dados-campeonato'
    let campeonatoTemporadas = temporadas.filter( temporada => campeonatos[variavelGlobal.campeonato].nome == temporada.campeonato.nome)
    let campeonatoEscolhido = campeonatoTemporadas[variavelGlobal.temporada]
    sectionCampeonato.appendChild(criarTag('h2', `${campeonatoEscolhido.nome} ${campeonatoEscolhido.campeonato.nome}`))
    campeonatoEscolhido.tabela.tabela.forEach( dados => {
        let sectionEtapa = document.createElement('section')
        sectionEtapa.classList.add('section-etapa')
        let sectionJogos = document.createElement('section')
        sectionJogos.classList.add('rodadas')
        sectionJogos.appendChild(criarTag('h3', `${dados.fase} - ${dados.turno}`))
        sectionJogos.appendChild(adicionarRodada(dados))
        sectionEtapa.appendChild(sectionJogos)
        if(dados.fase.includes('fase')){
            sectionEtapa.appendChild(tabelaGrupos(dados.tabela, campeonatoEscolhido.penaltiPontos))
        }
        sectionCampeonato.appendChild(sectionEtapa)
    })
    sectionCampeonato.appendChild(mostrarEstatisticas(campeonatoEscolhido))
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
        let divJogo = document.createElement('div')
        divJogo.classList.add('jogo')
        divJogo.appendChild(adicionarJogo('jogo-normal', [jogo.mesa, timeTecnico(jogo.timeCasa.tecnico.time.nome, jogo.timeCasa.tecnico.participante.nome, true),jogo.timeCasa.gols,'X',jogo.timeFora.gols,timeTecnico(jogo.timeFora.tecnico.time.nome, jogo.timeFora.tecnico.participante.nome, false)]))
        if(jogo.diferencaGols == 0 && jogo.prorrogacao){
            divJogo.appendChild(adicionarJogo('jogo-prorrogacao', ['Prorrogação',jogo.timeCasa.golsProrrogacao,'X',jogo.timeFora.golsProrrogacao]))
            if(jogo.timeCasa.golsProrrogacao == jogo.timeFora.golsProrrogacao) divJogo.appendChild(adicionarJogo('jogo-penalti', ['Penalti',jogo.timeCasa.golsPenalti, 'X', jogo.timeFora.golsPenalti]))
        }else if(jogo.diferencaGols == 0 && jogo.penalti){
            divJogo.appendChild(adicionarJogo('jogo-penalti', ['Penalti',jogo.timeCasa.golsPenalti, 'X', jogo.timeFora.golsPenalti]))
            
        }
        divRodada.appendChild(divJogo)
        div.appendChild(divRodada)
        rodada = jogo.rodada
    })
    return div
}

function tabelaGrupos(tabela, penaltiPontos){
    let section = document.createElement('section')
    section.classList.add('tabelas')
    section.appendChild(criarTabela(tabela, penaltiPontos, true))
    return section
}

function mostrarEstatisticas(campeonato){
    let section = document.createElement('section')
    section.classList.add('estatisticas-geral')
    section.classList.add('grid')
    let dados = [
        { titulo: 'Total de jogos', dado: totalPartidas(campeonato, false, false)},
        { titulo: 'Total de gols', dado: totalGols(campeonato, false, true)},
        { titulo: 'Média de gols', dado: mediaGols(campeonato, false, true)},
        { titulo: 'Tecnico com mais vitória', dado: maisVitoria(campeonato, false, 'v')},
        { titulo: 'Tecnico com menos vitória', dado: menosVitoria(campeonato, false, 'v')},
        { titulo: 'Tecnico com mais empate', dado: maisEmpate(campeonato, false, 'e')},
        { titulo: 'Tecnico com menos empate', dado: maisVitoria(campeonato, false, 'e')},
        { titulo: 'Tecnico com mais derrota', dado:  maisDerrota(campeonato, false, 'd')},
        { titulo: 'Tecnico com menos derrota', dado: menosDerrota(campeonato, false, 'd')},
        { titulo: 'Melhor ataque', dado: melhorAtaque(campeonato, true, 'gp')},
        { titulo: 'Pior ataque', dado: piorAtaque(campeonato, false, 'gp')},
        { titulo: 'Melhor defesa', dado: melhorDefesa(campeonato, true, 'gc')},
        { titulo: 'Pior defesa', dado: piorDefesa(campeonato, false, 'gc')},
        { titulo: 'Jogo com mais gols', dado: jogoMaisNumeroGols(campeonato, true, false)},
        { titulo: 'Jogo com maior diferença de gols', dado: jogoDiferencaGols(campeonato, true, false)},
    ]
    section.appendChild(mostrarDados(dados, 'Estatísticas', 'estatisticas'))
    let podio = [
        { titulo: 'Campeão', dado: `${campeonato.tabelaClassificacaoGeral[0].tecnico.time.nome} - ${campeonato.tabelaClassificacaoGeral[0].tecnico.participante.nome}`},
        { titulo: 'Vice-Campeão', dado: `${campeonato.tabelaClassificacaoGeral[1].tecnico.time.nome} - ${campeonato.tabelaClassificacaoGeral[1].tecnico.participante.nome}`},
        { titulo: '3º Lugar', dado: `${campeonato.tabelaClassificacaoGeral[2].tecnico.time.nome} - ${campeonato.tabelaClassificacaoGeral[2].tecnico.participante.nome}`},
    ]
    section.appendChild(mostrarDados(podio, 'Pódio', 'podio'))
    section.appendChild(criarTabela(campeonato.tabelaClassificacaoGeral, campeonato.penaltiPontos, true))
    return section
}

function timeTecnico(time, tecnico, jogo){
    return time == undefined ? tecnico : jogo ? `${time} ${tecnico}` :  `${tecnico} ${time}`
}