import { perfilVariados } from "../dates/perfilVariados.js"
import { adicionarUl } from "../utils/adicionarUl.js"

export function incluirVariados(perfis){
    let section = document.querySelector('.profiles')
    section.innerHTML = ''
    perfilVariados.forEach(perfil => {
        section.appendChild(adicionarUl(perfil, true))
    })
}