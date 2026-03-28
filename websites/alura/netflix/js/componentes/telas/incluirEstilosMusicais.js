import { perfilEstilosMusicais } from "../dates/perfilEstilosMusicais.js"
import { adicionarUl } from "../utils/adicionarUl.js"
import { mudarVisualisacaoLista } from "../utils/mudarVisualisacaoLista.js"

export function incluirEstilosMusicais(perfis){
    let section = document.querySelector('.profiles')
    section.innerHTML = ''
    perfilEstilosMusicais.forEach(perfil => {
        section.appendChild(adicionarUl(perfil, true))
    })
    mudarVisualisacaoLista()
}