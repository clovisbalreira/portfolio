import { mostrarCampeonato } from "../../mvc/view/mostrarCampeonato.js"

export function acaoMenuTemporada(campeonatos, variavelGlobal, temporadas){
    let menu = document.querySelectorAll('.lista-temporada')
    menu.forEach( (item, index) => {
        item.addEventListener( 'click', () => {
            variavelGlobal.temporada = index
            mostrarCampeonato(campeonatos, variavelGlobal, temporadas)
        })
    })
}