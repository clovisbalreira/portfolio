from pyscript import document, window
from pyodide.ffi import create_proxy

from python.amigo import Amigo
from python.banco.banco_amigos import BancoAmigos
from python.interface.mensagens import exibir_mensagem
from python.interface.resultados import exibir_resultados
from python.interface.formulario import (
    limpar_formulario,
    preencher_formulario
)
from python.interface.modal import (
    abrir_modal_exclusao,
    fechar_modal,
    confirmar_exclusao,
    cancelar_exclusao,
    escape
)

# ========================================
# Backend Python
#
# Mesma responsabilidade do backend JavaScript
# (linguagens/javascript/app.js): busca, cadastro, edição e
# exclusão. O roteador (js/backend/roteador.js) liga os botões da
# tela a estas ações quando Python é a linguagem escolhida.
# ========================================

ORDEM_PADRAO = "nome_asc"

# Quando não é None, o botão salva alterações em vez de cadastrar.
id_em_edicao = None
banco_amigos = BancoAmigos()

# Callbacks dos botões da lista atual. Cada nova renderização
# libera os anteriores, para não acumular proxies na memória.
_proxies_resultados = []


def _registrar_proxy(funcao):

    proxy = create_proxy(funcao)

    _proxies_resultados.append(proxy)

    return proxy


def _liberar_proxies():

    while _proxies_resultados:

        try:
            _proxies_resultados.pop().destroy()
        except Exception:
            pass


# ----------------------------------------
# Callbacks dos botões Editar / Excluir
# ----------------------------------------

def criar_callback_exclusao(id_amigo, nome):

    def abrir(event):

        abrir_modal_exclusao(
            nome,
            lambda: excluir(id_amigo, nome)
        )

    return _registrar_proxy(abrir)


def criar_callback_edicao(id_amigo, nome, nascimento):

    return _registrar_proxy(
        lambda event: editar(
            id_amigo,
            nome,
            str(nascimento) if nascimento else ""
        )
    )


# ----------------------------------------
# Edição
# ----------------------------------------

def editar(id_amigo, nome, nascimento):

    global id_em_edicao

    id_em_edicao = id_amigo

    preencher_formulario(
        nome,
        nascimento
    )


def cancelar_edicao(event=None):

    global id_em_edicao

    id_em_edicao = None

    limpar_formulario()

    document.querySelector("#mensagem-cadastro").replaceChildren()


# ----------------------------------------
# Cadastro, alteração e exclusão
# ----------------------------------------

def cadastrar(event=None):

    global id_em_edicao

    campo_nome = document.querySelector("#nome")
    campo_nascimento = document.querySelector("#nascimento")
    mensagem = document.querySelector("#mensagem-cadastro")

    nome = campo_nome.value.strip()
    nascimento = campo_nascimento.value

    amigo = Amigo(
        id_em_edicao,
        nome,
        nascimento
    )

    mensagem.replaceChildren()

    erro = amigo.validar()

    if erro:

        exibir_mensagem(
            mensagem,
            erro
        )

        return

    try:

        if id_em_edicao is not None:

            resultado = banco_amigos.atualizar(
                id_em_edicao,
                nome,
                nascimento
            )

        else:

            resultado = banco_amigos.inserir(
                nome,
                nascimento
            )

        if resultado["status"] == "DUPLICADO":

            exibir_mensagem(
                mensagem,
                "Essa pessoa já está cadastrada."
            )

            return

        if resultado["status"] == "ATUALIZADO":
            texto = "Alteração realizada com sucesso!"
        else:
            texto = "Cadastro realizado com sucesso!"

        # Sai do modo de edição: sem isto, o próximo cadastro
        # sobrescreveria a pessoa que acabou de ser editada.
        id_em_edicao = None

        limpar_formulario()

        exibir_mensagem(
            mensagem,
            texto
        )

        atualizar_lista()

    except Exception as erro:

        exibir_mensagem(
            mensagem,
            f"Erro ao cadastrar: {erro}"
        )


def excluir(id_amigo, nome):

    mensagem = document.querySelector("#mensagem-cadastro")

    try:

        resultado = banco_amigos.excluir(
            id_amigo
        )

        if resultado["status"] == "EXCLUIDO":

            # Se a pessoa excluída estava aberta para edição,
            # encerra a edição para não recriar nem alterar nada.
            if id_em_edicao == id_amigo:
                cancelar_edicao()

            exibir_mensagem(
                mensagem,
                f"{nome} foi excluído com sucesso!"
            )

            atualizar_lista()

    except Exception as erro:

        exibir_mensagem(
            mensagem,
            f"Erro ao excluir: {erro}"
        )


# ----------------------------------------
# Busca, filtros e ordenação
# ----------------------------------------

def executar_busca(
    busca,
    ordem=ORDEM_PADRAO,
    idade_minima="",
    idade_maxima=""
):

    _liberar_proxies()

    try:

        resultados = banco_amigos.buscar(
            busca,
            ordem,
            idade_minima,
            idade_maxima
        )

        exibir_resultados(
            resultados,
            busca,
            criar_callback_edicao,
            criar_callback_exclusao,
            bool(idade_minima or idade_maxima)
        )

    except Exception as erro:

        container = document.querySelector("#resultados")

        exibir_mensagem(
            container,
            f"Erro ao realizar a busca: {erro}"
        )


def atualizar_lista():
    """Refaz a busca respeitando busca, ordem e filtros de idade atuais."""

    executar_busca(
        document.querySelector("#busca").value.strip(),
        document.querySelector("#ordem").value or ORDEM_PADRAO,
        document.querySelector("#idade_minima").value,
        document.querySelector("#idade_maxima").value
    )


def buscar(event=None):

    document.querySelector("#mensagem-cadastro").replaceChildren()

    atualizar_lista()


def ordenar(event=None):

    buscar(event)


def listar_todos(event=None):

    document.querySelector("#busca").value = ""
    document.querySelector("#idade_minima").value = ""
    document.querySelector("#idade_maxima").value = ""

    atualizar_lista()


def limpar_filtros(event=None):

    document.querySelector("#mensagem-cadastro").replaceChildren()

    document.querySelector("#busca").value = ""
    document.querySelector("#idade_minima").value = ""
    document.querySelector("#idade_maxima").value = ""
    document.querySelector("#ordem").value = ORDEM_PADRAO

    atualizar_lista()


# ----------------------------------------
# Contrato com o roteador
# ----------------------------------------

def ativar():

    atualizar_lista()


def desativar():

    cancelar_edicao()

    fechar_modal()

    _liberar_proxies()


def _objeto_js(**campos):
    """Cria um objeto JavaScript {campo: valor, ...}."""

    objeto = window.Object.new()

    for nome, valor in campos.items():
        setattr(objeto, nome, valor)

    return objeto


def registrar_backend():

    acoes = _objeto_js(
        buscar=create_proxy(buscar),
        ordenar=create_proxy(ordenar),
        listar_todos=create_proxy(listar_todos),
        limpar_filtros=create_proxy(limpar_filtros),
        cadastrar=create_proxy(cadastrar),
        cancelar_edicao=create_proxy(cancelar_edicao),
        confirmar_exclusao=create_proxy(confirmar_exclusao),
        cancelar_exclusao=create_proxy(cancelar_exclusao),
        escape=create_proxy(escape)
    )

    backend = _objeto_js(
        nome="python",
        ativar=create_proxy(ativar),
        desativar=create_proxy(desativar),
        acoes=acoes
    )

    # A partir daqui o roteador pode ativar o Python.
    window.backends.registrar("python", backend)


registrar_backend()
