import { atualizarContasFuturas } from "../atualizarContasFuturas.js";
import { iniciar } from "./iniciar.js";

export function atualizarSelectMes(contas) {
    let mesSelect = document.getElementById('mes')
    mesSelect.addEventListener('change', () => {
        atualizarContasFuturas(contas)
        iniciar(contas)
    })
}

