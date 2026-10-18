from datetime import date


class Amigo:

    def __init__(self, id, nome, nascimento, idade=None):
        self.id = id
        self.nome = nome
        self.nascimento = nascimento

        # A idade vem do banco (função WebAssembly idade_completa),
        # a única implementação do cálculo no sistema.
        self._idade = idade

    def idade(self):
        return self._idade

    def formatar_nascimento(self):

        if not self.nascimento:
            return "Sem data de nascimento."

        try:
            data = date.fromisoformat(
                str(self.nascimento)
            )

        except ValueError:
            return "Data de nascimento inválida."

        texto = f"nasceu em {data.strftime('%d/%m/%Y')}"

        idade = self.idade()

        if idade is not None:
            unidade = "ano" if idade == 1 else "anos"
            texto += f" e tem {idade} {unidade}"

        return texto

    def __str__(self):
        return (
            f"{self.id} - "
            f"{self.nome} - "
            f"{self.nascimento}"
        )

    def validar(self):

        if not self.nome or not self.nome.strip():
            return "Informe o nome."

        if len(self.nome.strip()) < 3:
            return "O nome deve ter pelo menos 3 caracteres."

        if not self.nascimento:
            return "Informe a data de nascimento."

        try:

            data_nascimento = date.fromisoformat(
                str(self.nascimento)
            )

            if data_nascimento > date.today():
                return "A data de nascimento não pode ser futura."

        except ValueError:

            return "Data de nascimento inválida."

        return None
