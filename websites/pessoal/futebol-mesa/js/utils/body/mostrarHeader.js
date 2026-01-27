import { criarTag } from "../tags/criarTag.js"
import { criarImagem } from "../tags/criarImagem.js"
import { inicio } from "../inicio.js"

export function mostrarHeader(associacoes, variavelGlobal, socios, campeonatos, temporadas, tipos, regras){
    let associacao = associacoes[variavelGlobal.associacao]
    let div = document.getElementById('header-associacao')
    div.innerHTML = ''
    div.appendChild(criarImagem('./img/associacoes/', associacao.escudo, associacao.nome))
    div.appendChild(mostrarDescricao(associacao))
    div.appendChild(criarImagem('./img/associacoes/', associacao.escudo, associacao.nome))
    acaoImagem(associacoes, socios, campeonatos, temporadas, variavelGlobal, tipos, regras)
}

function mostrarDescricao(associacao){
    let div = document.createElement('div')
    div.appendChild(criarTag('h1', associacao.nome))
    div.appendChild(criarTag('p', associacao.sigla))
    return div
}

function acaoImagem(associacoes, socios, campeonatos, temporadas, variavelGlobal, tipos, regras){
    let imagens = document.querySelectorAll('#header-associacao img')
    imagens.forEach( imagem => {
        imagem.addEventListener('click', () => {
            variavelGlobal.socio = 0
            variavelGlobal.campeonato = 0
            inicio(socios, campeonatos, associacoes, temporadas, variavelGlobal, tipos, regras)
        })
    })
}