import { inicio } from "./inicio.js"
import { selects } from "../mvc/controll/selects.js"

export function atualizarClube(){
    let selectClube = document.getElementById('clube')
    selectClube.addEventListener('change', () => {
        selects.clube = selectClube.value
        inicio()
    })
}