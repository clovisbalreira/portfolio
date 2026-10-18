import { salvarBanco } from "../conexao/database.js";

export function excluirAmigo(id) {

    if (!window.bancoSQLite) {
        throw new Error(
            "Banco SQLite ainda não foi carregado."
        );
    }

    window.bancoSQLite.run(
        `
        DELETE FROM amigos
        WHERE id = ?
        `,
        [id]
    );

    salvarBanco();

    return { status: "EXCLUIDO" };
}
