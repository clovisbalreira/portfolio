from pyscript import document

# Ação a executar se o usuário confirmar a exclusão.
_acao_pendente = None


def _modal():
    return document.querySelector("#modal-exclusao")


def abrir_modal_exclusao(nome, ao_confirmar):

    global _acao_pendente

    _acao_pendente = ao_confirmar

    document.querySelector("#modal-mensagem").textContent = (
        f"Tem certeza que deseja excluir {nome}?"
    )

    modal = _modal()

    modal.style.display = "flex"
    modal.setAttribute("aria-hidden", "false")

    document.querySelector("#botao-cancelar-exclusao").focus()


def fechar_modal():

    global _acao_pendente

    _acao_pendente = None

    modal = _modal()

    modal.style.display = "none"
    modal.setAttribute("aria-hidden", "true")


def confirmar_exclusao(event=None):

    acao = _acao_pendente

    fechar_modal()

    if acao:
        acao()


def cancelar_exclusao(event=None):

    document.querySelector("#mensagem-cadastro").replaceChildren()

    fechar_modal()


def escape(event=None):

    if _modal().style.display == "flex":
        cancelar_exclusao(event)
