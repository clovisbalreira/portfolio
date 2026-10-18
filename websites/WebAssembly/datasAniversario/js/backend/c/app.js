import { criarHost } from "../wasm/host.js";

// ========================================
// Backend C
//
// Carrega c/app.wasm (código-fonte em c/src/, compilado com c/Makefile)
// e o apresenta ao roteador no mesmo formato dos outros backends.
// ========================================

export async function carregarBackendC() {

    const resposta = await fetch("./c/app.wasm");

    if (!resposta.ok) {
        throw new Error("Não foi possível carregar c/app.wasm");
    }

    const bytes = await resposta.arrayBuffer();

    const host = criarHost();

    const { instance } = await WebAssembly.instantiate(
        bytes,
        { env: host.importacoes }
    );

    host.conectar(instance.exports);

    const c = instance.exports;

    return {

        nome: "c",

        // Fora do contrato do roteador; usado só em diagnóstico/testes.
        diagnostico: host.diagnostico,

        ativar: () => c.ativar(),
        desativar: () => c.desativar(),

        acoes: {
            buscar: () => c.acao_buscar(),
            ordenar: () => c.acao_ordenar(),
            listar_todos: () => c.acao_listar_todos(),
            limpar_filtros: () => c.acao_limpar_filtros(),
            cadastrar: () => c.acao_cadastrar(),
            cancelar_edicao: () => c.acao_cancelar_edicao(),
            confirmar_exclusao: () => c.acao_confirmar_exclusao(),
            cancelar_exclusao: () => c.acao_cancelar_exclusao(),
            escape: () => c.acao_escape()
        }
    };
}
