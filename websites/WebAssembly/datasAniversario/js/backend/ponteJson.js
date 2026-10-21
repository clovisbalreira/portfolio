import { consultarAmigos } from "../select/consultarAmigos.js";
import { inserirAmigo } from "../insert/inserirAmigo.js";
import { atualizarAmigo } from "../update/atualizarAmigo.js";
import { excluirAmigo } from "../delete/excluirAmigo.js";

// ========================================
// Ponte JSON para os backends dinâmicos (Python e PHP)
//
// O Python (PyScript) e o PHP (php-wasm) chamam estas funções por `window`
// e recebem texto JSON. Os backends JavaScript, C e Java NÃO passam por aqui:
// o JavaScript usa select/insert/update/delete diretamente e C/Java usam o
// host em js/backend/wasm/host.js.
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

export function exporPonteJson() {

    Object.assign(window, ponte);
}
