import { mostrarDadosGerais } from "../body/mostrarDadosGerais.js" 
import { acaoMenuTemporada } from "./acaoMenuTemporada.js"

export function acaoMenuCampeonato(campeonatos, variavelGlobal, temporadas){
    let menu = document.querySelectorAll('.lista-campeonato')
    menu.forEach( (item, index) => {
        item.addEventListener( 'click', () => {
            variavelGlobal.campeonato = index
            mostrarDadosGerais(campeonatos, variavelGlobal, temporadas)
            acaoMenuTemporada(campeonatos, variavelGlobal, temporadas)
        })
    })
}

