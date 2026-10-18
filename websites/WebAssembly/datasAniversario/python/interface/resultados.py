from pyscript import document


def _mensagem(*partes):
    """Monta um parágrafo; cada parte é (texto, em_negrito)."""

    paragrafo = document.createElement("p")
    paragrafo.className = "mensagem"

    for texto, negrito in partes:

        if negrito:
            no = document.createElement("strong")
            no.textContent = texto
        else:
            no = document.createTextNode(texto)

        paragrafo.appendChild(no)

    return paragrafo


def _mensagem_sem_resultados(busca, filtro_idade):

    if busca and filtro_idade:
        return _mensagem(
            ("Não encontrei ninguém com ", False),
            (busca, True),
            (" no nome nessa faixa de idade.", False)
        )

    if busca:
        return _mensagem(
            ("Não encontrei ninguém com ", False),
            (busca, True),
            (" no nome.", False)
        )

    if filtro_idade:
        return _mensagem(
            ("Não encontrei ninguém nessa faixa de idade.", False)
        )

    return _mensagem(("Não existem amigos cadastrados.", False))


def _mensagem_resumo(quantidade, busca, filtro_idade):

    plural = "" if quantidade == 1 else "s"

    if busca:
        partes = [
            ("Ao todo encontrei ", False),
            (str(quantidade), True),
            (f" amigo{plural} com '", False),
            (busca, True),
            ("'", False)
        ]

        if filtro_idade:
            partes.append((" nessa faixa de idade", False))

        partes.append((".", False))

        return _mensagem(*partes)

    if filtro_idade:
        return _mensagem(
            ("Ao todo encontrei ", False),
            (str(quantidade), True),
            (f" amigo{plural} nessa faixa de idade.", False)
        )

    return _mensagem(
        (f"Ao todo existem {quantidade} "
         f"amigo{plural} cadastrado{plural}.", False)
    )


def exibir_resultados(
    resultados,
    busca,
    criar_callback_edicao,
    criar_callback_exclusao,
    filtro_idade=False
):

    container = document.querySelector("#resultados")
    container.replaceChildren()

    if not resultados:

        container.appendChild(
            _mensagem_sem_resultados(busca, filtro_idade)
        )

        return

    for amigo in resultados:

        callback_edicao = criar_callback_edicao(
            amigo.id,
            amigo.nome,
            amigo.nascimento
        )

        callback_exclusao = criar_callback_exclusao(
            amigo.id,
            amigo.nome
        )

        container.appendChild(
            criar_resultado(
                amigo,
                callback_edicao,
                callback_exclusao
            )
        )

    container.appendChild(
        _mensagem_resumo(len(resultados), busca, filtro_idade)
    )


def _criar_botao(titulo, icone, callback):

    botao = document.createElement("button")

    botao.setAttribute("title", titulo)
    botao.setAttribute("aria-label", titulo)

    icone_elemento = document.createElement("i")
    icone_elemento.className = icone

    botao.appendChild(icone_elemento)

    botao.addEventListener("click", callback)

    return botao


def criar_resultado(
    amigo,
    callback_edicao,
    callback_exclusao
):

    resultado = document.createElement("div")
    resultado.className = "resultado"

    nome_elemento = document.createElement("strong")
    nome_elemento.textContent = amigo.nome

    info_elemento = document.createElement("span")
    info_elemento.textContent = amigo.formatar_nascimento()

    resultado.appendChild(nome_elemento)
    resultado.appendChild(document.createElement("br"))
    resultado.appendChild(info_elemento)
    resultado.appendChild(document.createElement("br"))

    resultado.appendChild(
        _criar_botao("Editar", "fa-solid fa-pen", callback_edicao)
    )

    resultado.appendChild(
        _criar_botao("Excluir", "fa-solid fa-trash", callback_exclusao)
    )

    return resultado
