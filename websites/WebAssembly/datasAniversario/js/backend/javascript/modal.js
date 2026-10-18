// Ação a executar se o usuário confirmar a exclusão.
let acaoPendente = null;

function modal() {
    return document.getElementById("modal-exclusao");
}

export function abrirModalExclusao(nome, aoConfirmar) {

    acaoPendente = aoConfirmar;

    document.getElementById("modal-mensagem").textContent =
        `Tem certeza que deseja excluir ${nome}?`;

    modal().style.display = "flex";
    modal().setAttribute("aria-hidden", "false");

    document.getElementById("botao-cancelar-exclusao").focus();
}

export function fecharModal() {

    acaoPendente = null;

    modal().style.display = "none";
    modal().setAttribute("aria-hidden", "true");
}

export function confirmarExclusao() {

    const acao = acaoPendente;

    fecharModal();

    if (acao) {
        acao();
    }
}

export function cancelarExclusao() {

    document.getElementById("mensagem-cadastro").replaceChildren();

    fecharModal();
}

export function escape() {

    if (modal().style.display === "flex") {
        cancelarExclusao();
    }
}
