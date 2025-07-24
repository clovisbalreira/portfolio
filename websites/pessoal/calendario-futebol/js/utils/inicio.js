import { apagarTabela } from "./apagarTabela.js"
import { mostrarCalendario } from "../mvc/view/mostrarCalendario.js"
import { listaCampeonatos } from "../mvc/view/listaCampeonatos.js"
import { campeonatos, campeonatosMotificado, campeonatos2026 } from "../mvc/control/campeonato.js"

let radios = document.querySelectorAll('input[type="radio"]')

export function inicio(){
    radios.forEach(radio => {
        if(radio.checked)(
            condicao(radio, campeonatos, campeonatosMotificado, campeonatos2026)
        )
    })
    mudar()
}

function mudar(){
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            condicao(radio, campeonatos, campeonatosMotificado, campeonatos2026)
        })
    })
}

function condicao(radio, campeonatos, campeonatosMotificado, campeonatos2026){
    let array = [campeonatos, campeonatosMotificado, campeonatos2026]
    mostrarCalendario(array[parseInt(radio.value)] , parseInt(radio.value) > 2 ? '06' : '01', parseInt(radio.value) < 2 ? 2025 : 2026)
    listaCampeonatos(array[parseInt(radio.value)])
    apagarTabela()
}