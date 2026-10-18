import { consultarAmigos } from "../../select/consultarAmigos.js";
import { inserirAmigo } from "../../insert/inserirAmigo.js";
import { atualizarAmigo } from "../../update/atualizarAmigo.js";
import { excluirAmigo } from "../../delete/excluirAmigo.js";

import { Amigo } from "./amigo.js";

// Acesso ao banco pelo backend JavaScript: chama as funções de
// select/insert/update/delete diretamente (sem a ponte JSON do Python).
export const bancoAmigos = {

    buscar(
        nome = "",
        ordem = "nome_asc",
        idadeMinima = "",
        idadeMaxima = ""
    ) {
        return consultarAmigos(
            nome,
            ordem,
            idadeMinima,
            idadeMaxima
        ).map(registro => new Amigo(
            registro.id,
            registro.nome,
            registro.nascimento,
            registro.idade
        ));
    },

    inserir(nome, nascimento) {
        return inserirAmigo(nome, nascimento);
    },

    atualizar(idAmigo, nome, nascimento) {
        return atualizarAmigo(idAmigo, nome, nascimento);
    },

    excluir(idAmigo) {
        return excluirAmigo(idAmigo);
    }
};
