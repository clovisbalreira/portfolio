import { pegarDadosNavegador } from "../navegador/pegarDadosNavegador.js";

export function variaveisLocais(arrays, objeto){
    let arraySalvas = pegarDadosNavegador(objeto)
    let variavelPego = []
    if(arraySalvas.length > 0 ) {
        arraySalvas.forEach( array => {
            variavelPego.push(array)
        })
        return variavelPego
    }
    return arrays
}