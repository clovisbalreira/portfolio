import { programas } from "../mvc/control/programas.js"
import { scroll } from "./scroll.js"
import { mostrarPrograma } from "../mvc/view/programa.js"

export function selecionarPrograma(){
    const texto_programa = document.querySelectorAll('.nome-programa')
    texto_programa.forEach( texto => {
        texto.addEventListener( 'click', () => {
            let selecao = programas.find( programa => programa.nome == texto.textContent )
            mostrarPrograma(selecao)
            scroll('programa')
        })
    })
}

