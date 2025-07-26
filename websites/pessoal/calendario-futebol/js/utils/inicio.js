import { apagarTabela } from "./apagarTabela.js"
import { mostrarCalendario } from "../mvc/view/mostrarCalendario.js"
import { listaCampeonatos } from "../mvc/view/listaCampeonatos.js"
import { legendas } from "./legendas.js"
import { instrucoes } from "./instrucoes.js"
import { competicoes } from "../mvc/control/competicoes.js"
import { checkbox } from "./checkbox.js"

let radios = document.querySelectorAll('input[type="radio"]')

export function inicio(){
    radios.forEach(radio => {
        if(radio.checked){
            condicao(radio)
        }
    })
    mudar()
}

export function reset(competicao){
    mostrarCalendario(competicao)
    legendas(competicao)
    apagarTabela()
}

function mudar(){
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            condicao(radio) 
        })
    })
}

function condicao(radio){
    let competicao = competicoes.find(c => c.id == radio.value)
    reset(competicao)
    instrucoes(competicao)
    listaCampeonatos(competicao.tabela)   
    checkbox()
}
