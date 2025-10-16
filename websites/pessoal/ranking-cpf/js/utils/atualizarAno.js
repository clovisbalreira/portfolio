import { inicio } from "./inicio.js"
import { selects } from "../mvc/controll/selects.js"

export function atualizarAno(){
    let selectAno = document.getElementById('ano')
    selectAno.addEventListener('change', () => {
        selects.ano = selectAno.value
        selects.clube = 0
        selects.estado = 0
        inicio()
    })
}