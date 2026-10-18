import {
    exportarBanco,
    importarBanco,
    restaurarBancoOriginal
} from "./conexao/database.js";

// ========================================
// Exportar, importar e restaurar os dados
// ========================================

export function iniciarBackup() {

    const botaoExportar = document.getElementById("botao-exportar-banco");
    const botaoRestaurar = document.getElementById("botao-restaurar-banco");
    const campoImportar = document.getElementById("arquivo-importar");
    const mensagem = document.getElementById("mensagem-backup");

    function avisar(texto) {

        const paragrafo = document.createElement("p");

        paragrafo.className = "mensagem";
        paragrafo.textContent = texto;

        mensagem.replaceChildren(paragrafo);
    }

    botaoExportar.addEventListener("click", () => {

        if (!window.bancoSQLite) {
            avisar("O banco ainda está carregando.");
            return;
        }

        const bytes = exportarBanco();

        const link = document.createElement("a");

        link.href = URL.createObjectURL(
            new Blob([bytes], { type: "application/x-sqlite3" })
        );

        link.download = "amigos.db";

        link.click();

        URL.revokeObjectURL(link.href);

        avisar("Arquivo amigos.db exportado.");
    });

    campoImportar.addEventListener("change", async () => {

        const arquivo = campoImportar.files[0];

        campoImportar.value = "";

        if (!arquivo) {
            return;
        }

        if (!confirm(
            "Importar substitui TODOS os amigos atuais pelos do arquivo. Continuar?"
        )) {
            return;
        }

        try {

            const bytes = new Uint8Array(await arquivo.arrayBuffer());

            await importarBanco(bytes);

            location.reload();

        } catch (erro) {

            avisar(`Não foi possível importar: ${erro.message}`);
        }
    });

    botaoRestaurar.addEventListener("click", async () => {

        if (!confirm(
            "Isso apaga os dados salvos neste navegador e volta ao banco original. Continuar?"
        )) {
            return;
        }

        await restaurarBancoOriginal();

        location.reload();
    });
}
