import json

from pyscript import window

from python.amigo import Amigo


class BancoAmigos:
    """Acesso ao banco pela ponte JSON (js/backend/pontePython.js)."""

    def buscar(
        self,
        nome="",
        ordem="nome_asc",
        idade_minima="",
        idade_maxima=""
    ):
        dados = window.buscarAmigos(
            nome,
            ordem,
            idade_minima,
            idade_maxima
        )

        resultados = json.loads(dados)

        amigos = []

        for registro in resultados:
            amigo = Amigo(
                registro["id"],
                registro["nome"],
                registro["nascimento"],
                registro.get("idade")
            )

            amigos.append(amigo)

        return amigos

    def inserir(self, nome, nascimento):

        dados = window.inserirAmigo(
            nome,
            nascimento
        )

        return json.loads(dados)

    def atualizar(self, id_amigo, nome, nascimento):

        dados = window.atualizarAmigo(
            id_amigo,
            nome,
            nascimento
        )

        return json.loads(dados)

    def excluir(self, id_amigo):

        dados = window.excluirAmigo(
            id_amigo
        )

        return json.loads(dados)
