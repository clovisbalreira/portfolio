from datetime import date

def calcular_idade(data_nascimento):

    hoje = date.today()

    ainda_nao_passou_aniversario = (
        hoje.month,
        hoje.day
    ) < (
        data_nascimento.month,
        data_nascimento.day
    )

    idade = (
        hoje.year
        - data_nascimento.year
        - (1 if ainda_nao_passou_aniversario else 0)
    )

    return idade