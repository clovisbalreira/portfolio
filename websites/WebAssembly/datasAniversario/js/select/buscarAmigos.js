import { normalizar } from "../conexao/funcoesSql.js";

const ORDENS_PERMITIDAS = {
    nome_asc: "norm(nome) ASC, id ASC",
    nome_desc: "norm(nome) DESC, id DESC",
    idade_asc: "nascimento DESC, norm(nome) ASC",
    idade_desc: "nascimento ASC, norm(nome) ASC"
};

// Impede que % e _ digitados pelo usuário funcionem como curingas do LIKE.
function escaparLike(texto) {

    return texto.replace(/[\\%_]/g, "\\$&");
}

function lerIdade(valor) {

    if (valor === "" || valor === null || valor === undefined) {
        return null;
    }

    const numero = Number(valor);

    return Number.isFinite(numero) ? numero : null;
}

export function buscarAmigos(
    nome = "",
    ordem = "nome_asc",
    idadeMinima = "",
    idadeMaxima = ""
) {
    if (!window.bancoSQLite) {
        throw new Error(
            "Banco SQLite ainda não foi carregado."
        );
    }

    const orderBy =
        ORDENS_PERMITIDAS[ordem]
        || ORDENS_PERMITIDAS.nome_asc;

    // norm() remove acentos e maiúsculas (veja conexao/funcoesSql.js).
    // idade_completa() é a função WebAssembly: a idade vem de um
    // único lugar e é usada no filtro, na ordenação e na tela.
    let sql = `
        SELECT id, nome, nascimento, idade
        FROM (
            SELECT
                id,
                nome,
                nascimento,
                idade_completa(nascimento) AS idade
            FROM amigos
        )
        WHERE norm(nome) LIKE ? ESCAPE '\\'
    `;

    const parametros = [
        `%${escaparLike(normalizar(nome))}%`
    ];

    const minima = lerIdade(idadeMinima);
    const maxima = lerIdade(idadeMaxima);

    if (minima !== null) {
        sql += " AND idade >= ?";
        parametros.push(minima);
    }

    if (maxima !== null) {
        sql += " AND idade <= ?";
        parametros.push(maxima);
    }

    sql += ` ORDER BY ${orderBy}`;

    const resultado = window.bancoSQLite.exec(
        sql,
        parametros
    );

    if (resultado.length === 0) {
        return JSON.stringify([]);
    }

    const colunas = resultado[0].columns;
    const valores = resultado[0].values;

    const amigos = valores.map(linha => {
        const amigo = {};

        colunas.forEach((coluna, indice) => {
            amigo[coluna] = linha[indice];
        });

        return amigo;
    });

    return JSON.stringify(amigos);
}
