import { criarTag } from "./criarTag.js"
import { formatarData } from "../formatarData.js"

export function criarUl(dados){
    let ul = document.createElement('ul')
    ul.classList.add('ul-lista')
    dados.forEach( dado => {
        if(dado.dado != ''){
            let li = document.createElement('li')
            li.appendChild(criarTag('p', dado.titulo))
            li.appendChild(criarTag('p', classificarTexto(dado.dado)))
            ul.appendChild(li)
        }
    })
    return ul
}

function classificarTexto(dado){
    if(typeof dado == 'string'){
        return dado
    }else if(typeof dado == 'boolean'){
        return dado == true ? 'Ativa' : 'Desativada'
    }else if(typeof dado == 'object'){
        if(dado.length == undefined) {
            return formatarData(dado)
        }else{
            let regras = ''
            dado.forEach( (d, index) => {
                regras += `${d.nome}` 
                if(index < dado.length - 1) regras += ` - ` 
            })
            return regras
        } 
    }
}

