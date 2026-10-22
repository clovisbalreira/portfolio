from pyscript import document


def _definir_botao(icone, titulo):

    botao = document.querySelector("#botao-cadastrar")

    botao.innerHTML = f'<i class="{icone}"></i>'

    botao.setAttribute("title", titulo)
    botao.setAttribute("aria-label", titulo)


def limpar_formulario():

    document.querySelector("#nome").value = ""
    document.querySelector("#nascimento").value = ""

    _definir_botao("fa-solid fa-plus", "Cadastrar")

    document.querySelector("#botao-cancelar-edicao").hidden = True


def preencher_formulario(nome, nascimento):

    campo_nome = document.querySelector("#nome")

    campo_nome.value = nome
    document.querySelector("#nascimento").value = nascimento

    _definir_botao("fa-solid fa-floppy-disk", "Salvar alterações")

    document.querySelector("#botao-cancelar-edicao").hidden = False

    campo_nome.focus()
