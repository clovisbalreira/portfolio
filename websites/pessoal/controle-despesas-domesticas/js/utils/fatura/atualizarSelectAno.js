import { atualizarContasFuturas } from "../atualizarContasFuturas.js"
import { iniciar } from "./iniciar.js"

export function atualizarSelectAno(contas) {
    let anoSelect = document.getElementById('ano')
    anoSelect.addEventListener('change', () => {
        atualizarContasFuturas(contas)
        iniciar(contas)
    })
}