import { adicionarLi } from "./adicionarLi.js"

export function adicionarUl(perfil, links){
    let ul = document.createElement('ul')
    if(links){
        ul.appendChild(adicionarLi(perfil, links))
    }else{
        perfil.musicas.forEach( interprete => {
            ul.appendChild(adicionarLi(interprete, links))
        })
    }
    return ul
}