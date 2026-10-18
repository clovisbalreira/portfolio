import { consultarAmigos } from "../select/consultarAmigos.js";
import { inserirAmigo } from "../insert/inserirAmigo.js";
import { atualizarAmigo } from "../update/atualizarAmigo.js";
import { excluirAmigo } from "../delete/excluirAmigo.js";

// ========================================
// Ponte para o backend em Python
//
// O Python (PyScript) chama estas funções por `window` e recebe
// texto JSON. O backend em JavaScript NÃO passa por aqui: ele usa
// as funções de select/insert/update/delete diretamente.
// ========================================

export const ponte = {

    buscarAmigos: (...argumentos) =>
        JSON.stringify(consultarAmigos(...argumentos)),

    inserirAmigo: (...argumentos) =>
        JSON.stringify(inserirAmigo(...argumentos)),

    atualizarAmigo: (...argumentos) =>
        JSON.stringify(atualizarAmigo(...argumentos)),

    excluirAmigo: (...argumentos) =>
        JSON.stringify(excluirAmigo(...argumentos))
};

export function exporPontePython() {

    Object.assign(window, ponte);
}
