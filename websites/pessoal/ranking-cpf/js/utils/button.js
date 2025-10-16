import { selects } from "../mvc/controll/selects.js"
import { inicio } from "./inicio.js"
import { clubes } from "../mvc/controll/clubes.js"

export function button(classe){
    let button = document.getElementById(classe)
    let valor = 10
    let clubesPontos = clubes.reduce( (total, clube) => {
        return clube.pontosTotal > 0 ? total += 1 : total
    }, 0)
    button.addEventListener('click', () => {
        let p = document.getElementById('valor')
        let soma = classe == 'somar' ? parseInt(p.textContent) + valor : parseInt(p.textContent) - valor
        selects.top = soma < valor ? valor : soma > clubesPontos + 10 ? parseInt(p.textContent) : soma
        p.textContent = selects.top
        inicio()
    })
}