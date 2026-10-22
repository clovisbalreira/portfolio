import { criarHost } from "../wasm/host.js";
import { criarWasi } from "./wasi.js";

// ========================================
// Backend Java
//
// Carrega linguagens/java/app.wasm (código-fonte em linguagens/java/src/, compilado com o TeaVM
// por linguagens/java/build/) e o apresenta ao roteador no mesmo formato dos outros
// backends.
// ========================================

export async function carregarBackendJava() {

    const resposta = await fetch("./linguagens/java/app.wasm");

    if (!resposta.ok) {
        throw new Error("Não foi possível carregar linguagens/java/app.wasm");
    }

    const bytes = await resposta.arrayBuffer();

    const host = criarHost();
    const wasi = criarWasi();

    const { instance } = await WebAssembly.instantiate(
        bytes,
        {
            env: host.importacoes,
            wasi_snapshot_preview1: wasi.importacoes
        }
    );

    host.conectar(instance.exports);
    wasi.conectar(instance.exports.memory);

    // Inicia o runtime Java (executa main). Depois disso, as funções
    // exportadas podem ser chamadas quantas vezes forem necessárias.
    instance.exports._start();

    const java = instance.exports;

    return {

        nome: "java",

        // Fora do contrato do roteador; usado só em diagnóstico/testes.
        diagnostico: host.diagnostico,

        ativar: () => java.ativar(),
        desativar: () => java.desativar(),

        acoes: {
            buscar: () => java.acao_buscar(),
            ordenar: () => java.acao_ordenar(),
            listar_todos: () => java.acao_listar_todos(),
            limpar_filtros: () => java.acao_limpar_filtros(),
            cadastrar: () => java.acao_cadastrar(),
            cancelar_edicao: () => java.acao_cancelar_edicao(),
            confirmar_exclusao: () => java.acao_confirmar_exclusao(),
            cancelar_exclusao: () => java.acao_cancelar_exclusao(),
            escape: () => java.acao_escape()
        }
    };
}
