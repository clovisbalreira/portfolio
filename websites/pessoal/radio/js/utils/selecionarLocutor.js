import { locutores } from "../mvc/control/locutores.js"
import { scroll } from "./scroll.js"
import { mostrarLocutor } from "../mvc/view/locutor.js"

export function selecionarLocutor(){
    const texto_programa = document.querySelectorAll('.nome-locutor')
    texto_programa.forEach( texto => {
        texto.addEventListener( 'click', () => {
            let selecao = locutores.find( locutor => locutor.nome == texto.textContent.replace('Com ', '') )
            mostrarLocutor(selecao)
            scroll('locutor')
        })
    })
}

