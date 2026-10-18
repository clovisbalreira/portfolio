import { salvarBanco } from "../conexao/database.js";

export function inserirAmigo(nome, nascimento) {

    if (!window.bancoSQLite) {
        throw new Error(
            "Banco SQLite ainda não foi carregado."
        );
    }

    // Compara sem acento e sem diferenciar maiúsculas:
    // "joão" e "João" são a mesma pessoa.
    const resultado = window.bancoSQLite.exec(
        `
        SELECT id
        FROM amigos
        WHERE norm(nome) = norm(?)
        `,
        [nome]
    );

    if (
        resultado.length > 0 &&
        resultado[0].values.length > 0
    ) {
        return { status: "DUPLICADO" };
    }

    window.bancoSQLite.run(
        `
        INSERT INTO amigos (nome, nascimento)
        VALUES (?, ?)
        `,
        [nome, nascimento]
    );

    salvarBanco();

    return { status: "INSERIDO" };
}
