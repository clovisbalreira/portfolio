import { criarTag } from "../tags/criarTag.js"
import { criarImagem } from "../tags/criarImagem.js"
import { mostrarMain } from "./mostrarMain.js"

export function mostrarHeader(associacoes, variavelGlobal, socios, associacaoMain, campeonatos, temporadas){
    let associacao = associacoes[variavelGlobal.associacao]
    let div = document.getElementById('header-associacao')
    div.innerHTML = ''
    div.appendChild(criarImagem('./img/', associacao.escudo, associacao.nome))
    div.appendChild(mostrarDescricao(associacao))
    div.appendChild(criarImagem('./img/', associacao.escudo, associacao.nome))
    acaoImagem(socios, associacaoMain, campeonatos, temporadas)
}

function mostrarDescricao(associacao){
    let div = document.createElement('div')
    div.appendChild(criarTag('h1', associacao.nome))
    div.appendChild(criarTag('p', associacao.sigla))
    return div
}

function acaoImagem(socios, associacaoMain, campeonatos, temporadas){
    let imagens = document.querySelectorAll('#header-associacao img')
    imagens.forEach( imagem => {
        imagem.addEventListener('click', () => {
            mostrarMain(socios, associacaoMain, campeonatos, temporadas)
        })
    })
}