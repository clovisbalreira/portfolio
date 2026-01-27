import { mostrarDadosGerais } from "../body/mostrarDadosGerais.js" 
import { acaoMenuTemporada } from "./acaoMenuTemporada.js"

export function acaoMenuCampeonato(campeonatos, variavelGlobal, temporadas, tipos, regras){
    let menu = document.querySelectorAll('.lista-campeonato')
    menu.forEach( item => {
        item.addEventListener( 'click', () => {
            let summary = item.closest('details').querySelector('summary').innerText
            const texto = item.textContent
            const resultado = texto.split(' (')[0];
            let index = campeonatos.findIndex( campeonato => campeonato.nome == resultado && campeonato.regra.nome == summary)
            variavelGlobal.campeonato = index
            variavelGlobal.temporada = 0
            variavelGlobal.regra = regras.findIndex( regra => regra.nome == campeonatos[index].regra.nome)
            variavelGlobal.tipo = tipos.findIndex( tipo => tipo.nome == campeonatos[index].tipo.nome)
            mostrarDadosGerais(campeonatos, variavelGlobal, temporadas, tipos, regras)
            acaoMenuTemporada(campeonatos, variavelGlobal, temporadas, tipos, regras)
        })
    })
}

