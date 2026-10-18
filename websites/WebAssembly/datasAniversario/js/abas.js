// ========================================
// Alternância entre as abas do portfólio
// ========================================

export function iniciarAbas() {

    const abaSistema = document.getElementById("aba-sistema");
    const abaCodigo = document.getElementById("aba-codigo");

    const painelSistema = document.getElementById("painel-sistema");
    const visualizadorCodigo = document.getElementById("visualizador-codigo");

    function alternarAba(abaSelecionada) {

        const sistemaAtivo = abaSelecionada === "sistema";

        painelSistema.hidden = !sistemaAtivo;
        visualizadorCodigo.hidden = sistemaAtivo;

        abaSistema.classList.toggle("ativa", sistemaAtivo);
        abaCodigo.classList.toggle("ativa", !sistemaAtivo);
    }

    abaSistema.addEventListener("click", () => {
        alternarAba("sistema");
    });

    abaCodigo.addEventListener("click", () => {
        alternarAba("codigo");
    });

    alternarAba("sistema");
}
