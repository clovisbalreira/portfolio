#include "banco.h"
#include "host.h"

#define SEP_CAMPO     0x1F
#define SEP_REGISTRO  0x1E

/* Recebe do navegador o texto guardado por uma função que falhou. */
static Str ler_texto_do_host(void) {

    int tamanho = host_tamanho();

    char *buffer = mem_transitoria(tamanho + 1);

    if (!buffer) {
        return S("Memória insuficiente.");
    }

    host_copiar(buffer);

    return (Str){ buffer, tamanho };
}

static int contar_registros(const char *texto, int tamanho) {

    int quantidade = 0;

    for (int i = 0; i < tamanho; i++) {
        if (texto[i] == SEP_REGISTRO) {
            quantidade++;
        }
    }

    return quantidade;
}

/* Corta o próximo campo (até SEP_CAMPO ou o fim do registro). */
static Str proximo_campo(const char **cursor, const char *fim) {

    const char *inicio = *cursor;
    const char *p = inicio;

    while (p < fim && *p != SEP_CAMPO) {
        p++;
    }

    *cursor = (p < fim) ? p + 1 : p;

    return (Str){ inicio, (int)(p - inicio) };
}

int banco_buscar(Str nome, Str ordem, Str idade_minima, Str idade_maxima,
                 ListaAmigos *saida, Str *erro) {

    saida->itens = 0;
    saida->n = 0;

    int tamanho = db_buscar(nome.p, nome.n,
                            ordem.p, ordem.n,
                            idade_minima.p, idade_minima.n,
                            idade_maxima.p, idade_maxima.n);

    if (tamanho < 0) {
        *erro = ler_texto_do_host();
        return STATUS_ERRO;
    }

    char *texto = mem_transitoria(tamanho + 1);

    if (!texto) {
        *erro = S("Memória insuficiente.");
        return STATUS_ERRO;
    }

    host_copiar(texto);

    int quantidade = contar_registros(texto, tamanho);

    Amigo *itens = mem_transitoria((int)sizeof(Amigo) * (quantidade + 1));

    if (!itens) {
        *erro = S("Memória insuficiente.");
        return STATUS_ERRO;
    }

    const char *cursor = texto;
    const char *fim_texto = texto + tamanho;

    for (int i = 0; i < quantidade; i++) {

        const char *fim_registro = cursor;

        while (*fim_registro != SEP_REGISTRO) {
            fim_registro++;
        }

        Str campo_id = proximo_campo(&cursor, fim_registro);
        Str campo_nome = proximo_campo(&cursor, fim_registro);
        Str campo_nascimento = proximo_campo(&cursor, fim_registro);
        Str campo_idade = proximo_campo(&cursor, fim_registro);

        Amigo *amigo = &itens[i];

        amigo->id = 0;
        str_para_int(campo_id, &amigo->id);
        amigo->nome = campo_nome;
        amigo->nascimento = campo_nascimento;
        amigo->idade = 0;
        amigo->tem_idade = str_para_int(campo_idade, &amigo->idade);

        cursor = fim_registro + 1;

        if (cursor > fim_texto) {
            break;
        }
    }

    saida->itens = itens;
    saida->n = quantidade;

    return STATUS_OK;
}

int banco_inserir(Str nome, Str nascimento, Str *erro) {

    int resultado = db_inserir(nome.p, nome.n, nascimento.p, nascimento.n);

    if (resultado < 0) {
        *erro = ler_texto_do_host();
        return STATUS_ERRO;
    }

    return resultado == 1 ? STATUS_DUPLICADO : STATUS_OK;
}

int banco_atualizar(int id, Str nome, Str nascimento, Str *erro) {

    int resultado = db_atualizar(id, nome.p, nome.n, nascimento.p, nascimento.n);

    if (resultado < 0) {
        *erro = ler_texto_do_host();
        return STATUS_ERRO;
    }

    return resultado == 1 ? STATUS_DUPLICADO : STATUS_OK;
}

int banco_excluir(int id, Str *erro) {

    if (db_excluir(id) < 0) {
        *erro = ler_texto_do_host();
        return STATUS_ERRO;
    }

    return STATUS_OK;
}
