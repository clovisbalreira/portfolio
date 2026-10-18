import { salvarBanco } from "../conexao/database.js";

export function atualizarAmigo(id, nome, nascimento) {

    if (!window.bancoSQLite) {
        throw new Error(
            "Banco SQLite ainda não foi carregado."
        );
    }

    const resultado = window.bancoSQLite.exec(
        `
        SELECT id
        FROM amigos
        WHERE norm(nome) = norm(?)
        AND id != ?
        `,
        [nome, id]
    );

    if (
        resultado.length > 0 &&
        resultado[0].values.length > 0
    ) {
        return { status: "DUPLICADO" };
    }

    window.bancoSQLite.run(
        `
        UPDATE amigos
        SET nome = ?,
            nascimento = ?
        WHERE id = ?
        `,
        [nome, nascimento, id]
    );

    salvarBanco();

    return { status: "ATUALIZADO" };
}
