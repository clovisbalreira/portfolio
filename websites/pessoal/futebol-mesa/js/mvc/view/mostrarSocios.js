import { criarImagem } from "../../utils/tags/criarImagem.js"
import { criarTag } from "../../utils/tags/criarTag.js"
import { criarTabela } from "../../utils/tags/criarTabela.js"
import { filtrosEstatisticas } from "../../utils/filtros/filtrosEstatisticas.js"
import { listas } from "../../utils/listas.js"
import { criarUl } from "../../utils/tags/criarUl.js"
import { filtrosMenusJogos } from "../../utils/filtros/filtrosMenusJogos.js"


export function mostrarSocios(socio, campeonatos, temporadas, variavelGlobal, socios, tipos, regras, associacoes){
    let section = document.getElementById('principal')
    section.innerHTML = ''
    section.appendChild(apresentacao(socio))
    section.appendChild(dadosTitulos(socio, campeonatos, temporadas))
    section.appendChild(colocacaoAssociados(socio, temporadas, campeonatos, tipos, regras))    
    let socioNome = socio.nome
    let totalJogos = []
    let tabelas = { tecnico: '', pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0,  ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, gpt: 0,   vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd: 0, pgpt: 0 }
    campeonatos.forEach(campeonato => {
        campeonato.tabelas.forEach( tabela => {
            if(tabela.tecnico.participante.nome == socioNome) {
                tabelas.tecnico = tabela.tecnico
                tabelas.pg += tabela.pg
                tabelas.j += tabela.j
                tabelas.v += tabela.v
                tabelas.e += tabela.e
                tabelas.d += tabela.d
                tabelas.gp += tabela.gp
                tabelas.gc += tabela.gc
                tabelas.sg += tabela.sg
                tabelas.pgp += tabela.pgp
                tabelas.vp += tabela.vp
                tabelas.ep += tabela.ep
                tabelas.dp += tabela.dp
                tabelas.gpp += tabela.gpp
                tabelas.gcp += tabela.gcp
                tabelas.sgp += tabela.sgp
                tabelas.gpt += tabela.gpt
                tabelas.vpt += tabela.vpt
                tabelas.dpt += tabela.dpt
                tabelas.gppt += tabela.gppt
                tabelas.gcpt += tabela.gcpt
                tabelas.sgpt += tabela.sgpt
                tabelas.cd += tabela.cd
                tabelas.pgpt += tabela.pgpt
            }
        })
        campeonato.jogos.forEach( jogo => {
            if(jogo.timeCasa.tecnico.participante.nome == socioNome || jogo.timeFora.tecnico.participante.nome == socioNome){
                totalJogos.push(jogo)
            } 
        })
    })
    if(tabelas.j > 0){
        section.appendChild(filtrosEstatisticas(totalJogos, tabelas, socioNome, variavelGlobal))
        filtrosMenusJogos(totalJogos, socioNome, variavelGlobal, socios, campeonatos, temporadas, tipos, regras, associacoes)
    }
}

function apresentacao(socio){
    let div = document.createElement('div')
    div.classList.add('div-apresentacao')
    if(socio.foto != '') div.appendChild(criarImagem('', socio.foto, socio.nome))
    div.appendChild(criarTag('h2', socio.nome))
    return div
}

function dadosTitulos(socio, campeonatos, temporadas){
    let section = document.createElement('section')
    section.id = 'dados-titulos'
    dados(section, socio)
    titulo(section, socio, temporadas, campeonatos)
    return section
}

function dados(section, socio){
    let dados = [
        { titulo: 'Nome', dado: socio.nome},
        { titulo: 'Data de nascimento', dado: socio.nascimento},
        { titulo: 'Regras', dado: socio.regras},
        { titulo: 'Associado', dado: socio.status.nome == undefined ? 'Sem associação' : socio.status.nome},
    ]
    section.appendChild(listas(dados, { tag: 'h3', nome: 'Dados'}))
}

function titulo(section, socio, temporadas, campeonatos){
    const titulosAssociado = [];
    const titulosNaoAssociado = [];
    temporadas.forEach(temporada => {
        const campeonato = campeonatos.find(c => c.nome === temporada.campeonato.nome );
        if (!campeonato) return;
        const pertenceAssociacao = socio.associacoes.some(a => a.nome === campeonato.associacao.nome);
        if (!pertenceAssociacao) return;
        const foiCampeao = temporada.tabelaClassificacaoGeral.some((tabela, index) => index === 0 && tabela.tecnico.participante.nome === socio.nome );
        if (!foiCampeao) return;
        const titulo = { titulo: `${temporada.nome} ${temporada.campeonato.nome}`, regra : temporada.campeonato.regra.nome, tipo : temporada.campeonato.tipo.nome, dado: 'Campeão' };
        if (campeonato.associacao.nome === socio.status.nome) titulosAssociado.push(titulo)
        else titulosNaoAssociado.push(titulo);
    });
    section.appendChild(sectionDiv(titulosAssociado, titulosNaoAssociado))
}

function sectionDiv(titulosAssociado, titulosNaoAssociado){
    let section = document.createElement('div')
    section.id = 'section-titulo'
    section.appendChild(criarTag('h2', `Titulos ( ${titulosAssociado.length + titulosNaoAssociado.length} )`))
    section.appendChild(titulos(titulosAssociado, titulosNaoAssociado, 'div-titulo'))
    return section
}

function titulos(associado, naoAssociado, classe){
    let tituloAssociado = associado.length
    let tituloNaoAssociado = naoAssociado.length
    let div = document.createElement('div')
    div.classList.add(classe)
    if(associado.length != 0) div.appendChild(criarTabelaAssociacao(`Associados ( ${tituloAssociado} )`, associado))
    if(naoAssociado.length != 0) div.appendChild(criarTabelaAssociacao(`Não associados ( ${tituloNaoAssociado} )`, naoAssociado))
    return div
}

function criarTabelaAssociacao(titulo, titulos){
    let table = document.createElement('table')
    let caption = document.createElement('caption')
    caption.textContent = titulo
    table.appendChild(caption)
    let tbody = document.createElement('tbody')
    titulos.forEach( titulo => {
        let tr = document.createElement('tr')
        tr.appendChild(criarTd(titulo.titulo))
        tr.appendChild(criarTd(titulo.regra))
        tr.appendChild(criarTd(titulo.tipo))
        tr.appendChild(criarTd(titulo.dado))
        tbody.appendChild(tr)
    })
    table.appendChild(tbody)
    return table
}

function criarTd(texto){
    let td = document.createElement('td')
    td.textContent = texto
    return td
}

function colocacaoAssociados(socio, temporadas, campeonatos){
    let section = document.createElement('section')
    section.id = 'section-colocacao'
    const colocacaoAssociado = [];
    const colocacaoNaoAssociado = [];
    temporadas.forEach( temporada => {
        temporada.tabelaClassificacaoGeral.forEach( (tabela, index) => {
            if(tabela.tecnico.participante.nome == socio.nome){
                const registro = {campeonato: temporada.campeonato.nome, titulo: `${temporada.nome} ${temporada.campeonato.nome}`,dado: textoColocacoes(index), regra: temporada.campeonato.regra.nome, tipo: temporada.campeonato.tipo.nome}
                if(socio.status.nome == temporada.campeonato.associacao.nome) colocacaoAssociado.push(registro)
                else colocacaoNaoAssociado.push(registro)
            }
        })
    })
    section.appendChild(criarTag('h2', `Participações ( ${colocacaoAssociado.length + colocacaoNaoAssociado.length} )`))
    section.appendChild(Colocacao(colocacaoAssociado, colocacaoNaoAssociado, 'div-colocacao', campeonatos, socio.nome))
    return section
}

function textoColocacoes(index){
    let colocacao = ''
    if(index == 0) colocacao = 'Campeão'
    if(index == 1) colocacao = 'Vice-campeão'
    if(index > 1) colocacao = `${index + 1}º Lugar`
    return colocacao
}

function Colocacao(associados, naoAssociados, classe, campeonatos, socio){
    let tituloAssociado = associados.length
    let tituloNaoAssociado = naoAssociados.length
    let div = document.createElement('div')
    div.classList.add(classe)
    div.appendChild(colocacoesCampeonato(associados, campeonatos, tituloAssociado, true, socio))
    div.appendChild(colocacoesCampeonato(naoAssociados, campeonatos, tituloNaoAssociado, false, socio))
    return div
}

function colocacoesCampeonato(associados, campeonatos, titulo, condicao, socio){
    let contem = ''
    let contemAssociacao = false
    let div = document.createElement('div')
    div.classList.add('div-associacoes')
    let divCampeoesTabela = document.createElement('div')
    divCampeoesTabela.classList.add('div-campeoes-tabela')
    divCampeoesTabela.appendChild(criarTag('h3',`${condicao ? `Associado ( ${titulo} )` : `Não Associado ( ${titulo} )`}`));
    campeonatos.forEach( campeonato => {
        contem = true
        let filtrarCampeonato = associados.filter( associado => {
            return associado.campeonato == campeonato.nome && associado.regra == campeonato.regra.nome && associado.tipo == campeonato.tipo.nome
    }) 
        if(filtrarCampeonato.length > 0){
            divCampeoesTabela.appendChild(tabelaColocacao(campeonato, socio, filtrarCampeonato));
            div.appendChild(divCampeoesTabela)  
            contemAssociacao = true
        }else{
            contem = false
        }
    })
    if(!contem && !contemAssociacao){
        divCampeoesTabela.appendChild(tabelaColocacaoVazio());
        div.appendChild(divCampeoesTabela)  
    }
    return div
}

function tabelaColocacao(campeonato, socio, filtrarCampeonato){
    let div = document.createElement('div')
    div.classList.add('div-tabela-colocacao')
    let filtrarTabela = campeonato.tabelas.filter( tabela => tabela.tecnico.participante.nome == socio)
    div.appendChild(criarTag('h4', `${campeonato.nome} ( ${filtrarCampeonato.length} )`))
    if(filtrarTabela.length > 0){
        if(filtrarTabela[0].j > 0) div.appendChild(criarTabela(filtrarTabela, '', ''))
    } 
    div.appendChild(criarUl(filtrarCampeonato))
    return div
}

function tabelaColocacaoVazio(){
    let div = document.createElement('div')
    div.classList.add('div-tabela-colocacao')
    div.appendChild(criarTag('h4', 'Não contém dados.'))
    return div
}