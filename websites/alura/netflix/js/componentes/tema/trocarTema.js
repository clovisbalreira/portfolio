import { retirarTema } from "./retirarTema.js"
import { mudarTema } from "./mudarTema.js"
import { mudarH1 } from "../utils/mudarH1.js"
import { incluirFilmesSeries } from "../telas/incluirFilmesSeries.js"
import { incluirEstilosMusicais } from "../telas/incluirEstilosMusicais.js"
import { incluirVariados } from "../telas/incluirVariados.js"

export function trocarTema(botaoClasse, tema, texto){
    let botao = document.querySelector(`.${botaoClasse}`)
    botao.addEventListener( 'click', () => {
        mudarH1(texto)
        incluirTema(botaoClasse, tema)
        escolherTelas(botaoClasse)
    })
}

function incluirTema(botaoClasse, tema){
    botaoClasse == 'button-netflix' ? retirarTema() : mudarTema(tema)
}

function escolherTelas(botaoClasse){
    if(botaoClasse == 'button-netflix'){
        incluirFilmesSeries()
    }else if(botaoClasse == 'button-spotify'){
        incluirEstilosMusicais()
    }else if(botaoClasse == 'button-variado'){
        incluirVariados()
    }
}