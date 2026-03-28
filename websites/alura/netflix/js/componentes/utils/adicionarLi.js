import { adicionarLink } from "./adicionarLink.js"

export function adicionarLi(interprete, links){
    let li = document.createElement('li')
    if(links){
        li.appendChild(adicionarLink(interprete))
    }else{
        li.textContent = `${interprete.artista} - ${interprete.musica}`
    }
    return li

}