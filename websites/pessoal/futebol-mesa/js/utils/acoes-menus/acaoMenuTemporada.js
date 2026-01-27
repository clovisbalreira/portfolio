import { mostrarCampeonato } from "../../mvc/view/mostrarCampeonato.js"

export function acaoMenuTemporada(campeonatos, variavelGlobal, temporadas, tipos, regras){
    let menu = document.querySelectorAll('.lista-temporada')
    menu.forEach( (item, index) => {
        item.addEventListener( 'click', () => {
            let filtrarTemporada = temporadas.filter( temporada => temporada.campeonato.nome == campeonatos[variavelGlobal.campeonato].nome && temporada.campeonato.tipo.nome == campeonatos[variavelGlobal.campeonato].tipo.nome && temporada.campeonato.regra.nome == campeonatos[variavelGlobal.campeonato].regra.nome && temporada.tabelaClassificacaoGeral[0].j > 0 )
            variavelGlobal.temporada = index
            variavelGlobal.regra = regras.findIndex( regra => regra.nome == filtrarTemporada[index].campeonato.regra.nome)
            variavelGlobal.tipo = tipos.findIndex( tipo => tipo.nome == filtrarTemporada[index].campeonato.tipo.nome)
            mostrarCampeonato(campeonatos, variavelGlobal, filtrarTemporada, tipos, regras)
        })
    })
}