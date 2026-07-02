import { criarElemento } from "./criarElemento.js"
import { criarImg } from "./criarImg.js"

export function criarTabela(jogos, textoCaption = ''){
    let table = document.createElement('table')
    table.appendChild(criarElemento('caption', textoCaption == '' ? `Grupo ${jogos.grupo}` : textoCaption))
    table.appendChild(criarThead(textoCaption))    
    table.appendChild(criarTBody(jogos, textoCaption))    
    return table
}

function criarThead(textoCaption){
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    let cabecalhos =  textoCaption == 'Goleadores' ? ['Col.','Jogador', 'Gols'] : ['Col.','Pais','PG','J','V','E','D','GP','GC','SG']
    cabecalhos.forEach( nome => {
        tr.appendChild(criarElemento('th', nome))    
    })
    thead.appendChild(tr)   
    return thead 
}

function criarTBody(array, textoCaption){
    let tbody = document.createElement('tbody')
    if(textoCaption == ''){
        array.participantes.forEach( (participante, index) => {
            let tr = document.createElement('tr')
            tr.appendChild(criarElemento('th', `${index + 1} º`))
            tr.appendChild(textoImagem(participante))
            tr.appendChild(criarElemento('td', `${participante.pg}`))
            tr.appendChild(criarElemento('td', `${participante.j}`))
            tr.appendChild(criarElemento('td', `${participante.v}`))
            tr.appendChild(criarElemento('td', `${participante.e}`))
            tr.appendChild(criarElemento('td', `${participante.d}`))
            tr.appendChild(criarElemento('td', `${participante.gp}`))
            tr.appendChild(criarElemento('td', `${participante.gc}`))
            tr.appendChild(criarElemento('td', `${participante.sg}`))       
            tbody.appendChild(tr)   
        })
    }else if(textoCaption == 'Melhores Terceiros'){
        array.forEach( (participante, index) => {
            let tr = document.createElement('tr')
            tr.appendChild(criarElemento('th', `${index + 1} º ${participante.grupo}`))
            tr.appendChild(textoImagem(participante.equipe))
            tr.appendChild(criarElemento('td', `${participante.equipe.pg}`))
            tr.appendChild(criarElemento('td', `${participante.equipe.j}`))
            tr.appendChild(criarElemento('td', `${participante.equipe.v}`))
            tr.appendChild(criarElemento('td', `${participante.equipe.e}`))
            tr.appendChild(criarElemento('td', `${participante.equipe.d}`))
            tr.appendChild(criarElemento('td', `${participante.equipe.gp}`))
            tr.appendChild(criarElemento('td', `${participante.equipe.gc}`))
            tr.appendChild(criarElemento('td', `${participante.equipe.sg}`))       
            tbody.appendChild(tr)   
        })
    }else if(textoCaption == 'Classificação Geral'){
        array.classificacaoGeral.forEach( (participante, index) => {
            let tr = document.createElement('tr')
            tr.appendChild(criarElemento('th', `${index + 1} º`))
            tr.appendChild(textoImagem(participante))
            tr.appendChild(criarElemento('td', `${participante.pg}`))
            tr.appendChild(criarElemento('td', `${participante.j}`))
            tr.appendChild(criarElemento('td', `${participante.v}`))
            tr.appendChild(criarElemento('td', `${participante.e}`))
            tr.appendChild(criarElemento('td', `${participante.d}`))
            tr.appendChild(criarElemento('td', `${participante.gp}`))
            tr.appendChild(criarElemento('td', `${participante.gc}`))
            tr.appendChild(criarElemento('td', `${participante.sg}`))       
            tbody.appendChild(tr)   
        })
    }else if(textoCaption == 'Goleadores'){
        let total = array.participantes.length - 1
        array.goleadores.forEach( (goleador, index) => {
            if(index < total){
                let tr = document.createElement('tr')
                tr.appendChild(criarElemento('th', `${index + 1} º`))
                tr.appendChild(textoImagem(goleador, textoCaption))
                tr.appendChild(criarElemento('td', goleador.gol))
                tbody.appendChild(tr)   
            }
        })
    }else{
        array.classificacaoFederacao.forEach( (participante, index) => {
            let tr = document.createElement('tr')
            tr.appendChild(criarElemento('th', `${index + 1} º`))
            tr.appendChild(textoImagem(participante, textoCaption))
            tr.appendChild(criarElemento('td', `${participante.pg}`))
            tr.appendChild(criarElemento('td', `${participante.j}`))
            tr.appendChild(criarElemento('td', `${participante.v}`))
            tr.appendChild(criarElemento('td', `${participante.e}`))
            tr.appendChild(criarElemento('td', `${participante.d}`))
            tr.appendChild(criarElemento('td', `${participante.gp}`))
            tr.appendChild(criarElemento('td', `${participante.gc}`))
            tr.appendChild(criarElemento('td', `${participante.sg}`))       
            tbody.appendChild(tr)   
        })
    }
    return tbody 
}

function textoImagem(participante, condicao){
    let td = document.createElement('td')
    td.classList.add('tabela-texto-imagem')
    let nome = condicao == 'Goleadores' ? participante.nome : participante.pais.pais.nome
    td.appendChild(criarImg(condicao == 'Goleadores' ? participante.pais.pais.pais.imagem : participante.pais.pais.imagem, nome))
    td.appendChild(criarElemento('p', nome))
    return td
}