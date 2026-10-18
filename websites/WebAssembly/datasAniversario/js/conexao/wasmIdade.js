// ========================================
// Módulo WebAssembly próprio do projeto
//
// Fonte: wasm/assembly/idade.ts (AssemblyScript)
// Binário: wasm/idade.wasm  (gerado com `npm run build` em /wasm)
// ========================================

export async function carregarWasmIdade() {

    const resposta = await fetch("./wasm/idade.wasm");

    if (!resposta.ok) {
        throw new Error(
            "Não foi possível carregar wasm/idade.wasm"
        );
    }

    const bytes = await resposta.arrayBuffer();

    const { instance } = await WebAssembly.instantiate(
        bytes,
        { env: { abort() {} } }
    );

    return instance.exports.calcularIdade;
}
