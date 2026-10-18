#include "amigo.h"

static int bissexto(int ano) {
    return (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0;
}

static int dias_no_mes(int ano, int mes) {

    static const int dias[] = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };

    if (mes == 2 && bissexto(ano)) {
        return 29;
    }

    return dias[mes - 1];
}

/* Lê `quantidade` dígitos a partir de `inicio`; -1 se algum não for dígito. */
static int ler_digitos(Str s, int inicio, int quantidade) {

    int valor = 0;

    for (int i = inicio; i < inicio + quantidade; i++) {

        if (s.p[i] < '0' || s.p[i] > '9') {
            return -1;
        }

        valor = valor * 10 + (s.p[i] - '0');
    }

    return valor;
}

/* Confere se "AAAA-MM-DD" é uma data que existe no calendário. */
static int data_existe(Str s, int *ano, int *mes, int *dia) {

    if (s.n != 10 || s.p[4] != '-' || s.p[7] != '-') {
        return 0;
    }

    *ano = ler_digitos(s, 0, 4);
    *mes = ler_digitos(s, 5, 2);
    *dia = ler_digitos(s, 8, 2);

    if (*ano < 1 || *mes < 1 || *mes > 12 || *dia < 1) {
        return 0;
    }

    return *dia <= dias_no_mes(*ano, *mes);
}

Str amigo_validar(Str nome, Str nascimento, int hoje_aaaammdd) {

    nome = str_aparar(nome);

    if (str_vazia(nome)) {
        return S("Informe o nome.");
    }

    if (utf8_contar(nome) < 3) {
        return S("O nome deve ter pelo menos 3 caracteres.");
    }

    if (str_vazia(nascimento)) {
        return S("Informe a data de nascimento.");
    }

    int ano, mes, dia;

    if (!data_existe(nascimento, &ano, &mes, &dia)) {
        return S("Data de nascimento inválida.");
    }

    if (ano * 10000 + mes * 100 + dia > hoje_aaaammdd) {
        return S("A data de nascimento não pode ser futura.");
    }

    return SEM_STR;
}

Str amigo_formatar_nascimento(const Amigo *amigo) {

    if (str_vazia(amigo->nascimento)) {
        return S("Sem data de nascimento.");
    }

    int ano, mes, dia;

    if (!data_existe(amigo->nascimento, &ano, &mes, &dia)) {
        return S("Data de nascimento inválida.");
    }

    const char *data = amigo->nascimento.p;

    Texto t = texto_novo(96);

    texto_add(&t, S("nasceu em "));
    texto_add(&t, (Str){ data + 8, 2 });
    texto_add(&t, S("/"));
    texto_add(&t, (Str){ data + 5, 2 });
    texto_add(&t, S("/"));
    texto_add(&t, (Str){ data, 4 });

    if (amigo->tem_idade) {

        texto_add(&t, S(" e tem "));
        texto_int(&t, amigo->idade);
        texto_add(&t, amigo->idade == 1 ? S(" ano") : S(" anos"));
    }

    return texto_str(&t);
}
