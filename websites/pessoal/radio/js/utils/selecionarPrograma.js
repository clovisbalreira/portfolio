import { programas } from "../mvc/control/programas.js"
import { mostrarPrograma } from "../mvc/view/programa.js"

export function selecionarPrograma(){
    document.getElementById('programa').style.display = 'flex'
    const texto_programa = document.querySelectorAll('.nome-programa')
    texto_programa.forEach( texto => {
        texto.addEventListener( 'click', () => {
            let selecao = programas.find( programa => programa.nome == texto.textContent )
            mostrarPrograma(selecao)
        })
    })
}

