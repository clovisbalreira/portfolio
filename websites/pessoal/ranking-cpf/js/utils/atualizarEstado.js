import { inicio } from "./inicio.js"
import { selects } from "../mvc/controll/selects.js"

export function atualizarEstado(){
    let selectEstado = document.getElementById('estado')
    selectEstado.addEventListener('change', () => {
        selects.estado = selectEstado.value
        inicio()
    })
}