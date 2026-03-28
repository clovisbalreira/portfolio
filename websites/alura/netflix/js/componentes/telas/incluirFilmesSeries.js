import { trocarTemas } from "../../acoes/trocarTemas.js"
import { perfilSeriesFilmes } from "../dates/perfilSeriesFilmes.js"
import { adicionarUl } from "../utils/adicionarUl.js"

export function incluirFilmesSeries(){
    trocarTemas()
    let section = document.querySelector('.profiles')
    section.innerHTML = ''
    perfilSeriesFilmes.forEach(perfil => {
        section.appendChild(adicionarUl(perfil, true))
    })
}