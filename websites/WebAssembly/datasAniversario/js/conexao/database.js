import {
    lerBancoSalvo,
    gravarBancoSalvo,
    apagarBancoSalvo
} from "./persistencia.js";

import { carregarWasmIdade } from "./wasmIdade.js";
import { registrarFuncoes } from "./funcoesSql.js";

let SQL = null;
let calcularIdadeWasm = null;

function abrirBanco(bytes) {

    const banco = new SQL.Database(bytes);

    registrarFuncoes(banco, calcularIdadeWasm);

    return banco;
}

async function baixarBancoOriginal() {

    const resposta = await fetch("./bancoDados/amigos.db");

    if (!resposta.ok) {
        throw new Error(
            "Não foi possível carregar bancoDados/amigos.db"
        );
    }

    return new Uint8Array(await resposta.arrayBuffer());
}

// Confere se o arquivo é um SQLite com a tabela esperada.
function validarBanco(banco) {

    const resultado = banco.exec(
        `SELECT COUNT(*) FROM sqlite_master
         WHERE type = 'table' AND name = 'amigos'`
    );

    if (resultado[0].values[0][0] === 0) {
        throw new Error("O arquivo não contém a tabela 'amigos'.");
    }

    banco.exec("SELECT id, nome, nascimento FROM amigos LIMIT 1");
}

export async function carregarBanco() {

    SQL = await initSqlJs({
        locateFile: arquivo =>
            `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.13.0/${arquivo}`
    });

    calcularIdadeWasm = await carregarWasmIdade();

    // 1) Tenta usar o banco salvo no navegador.
    const salvo = await lerBancoSalvo();

    if (salvo) {

        try {

            const banco = abrirBanco(salvo);

            validarBanco(banco);

            window.bancoSQLite = banco;

            console.log("Banco restaurado do navegador.");

            return;

        } catch (erro) {

            console.warn(
                "Banco salvo inválido; usando o original.",
                erro
            );

            await apagarBancoSalvo();
        }
    }

    // 2) Primeira visita (ou banco salvo corrompido): usa o original.
    window.bancoSQLite = abrirBanco(await baixarBancoOriginal());

    console.log("Banco original carregado.");
}

// Exporta os bytes do banco e recoloca as funções personalizadas
// (o export do sql.js as remove).
export function exportarBanco() {

    const bytes = window.bancoSQLite.export();

    registrarFuncoes(window.bancoSQLite, calcularIdadeWasm);

    return bytes;
}

// Chamada depois de cada INSERT/UPDATE/DELETE.
// Não bloqueia a interface: a gravação acontece em segundo plano.
export function salvarBanco() {

    try {

        return gravarBancoSalvo(exportarBanco());

    } catch (erro) {

        console.warn("Não foi possível exportar o banco:", erro);

        return Promise.resolve(false);
    }
}

// Troca o banco atual por um arquivo enviado pelo usuário.
export async function importarBanco(bytes) {

    const novo = abrirBanco(bytes);

    try {

        validarBanco(novo);

    } catch (erro) {

        novo.close();

        throw erro;
    }

    const anterior = window.bancoSQLite;

    window.bancoSQLite = novo;

    if (anterior) {
        anterior.close();
    }

    await salvarBanco();
}

export async function restaurarBancoOriginal() {

    await apagarBancoSalvo();
}
