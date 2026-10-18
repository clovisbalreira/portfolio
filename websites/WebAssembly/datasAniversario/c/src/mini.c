#include "mini.h"

enum {
    TAM_TRANSITORIA = 4 * 1024 * 1024,
    TAM_LISTA       = 2 * 1024 * 1024
};

static char area_transitoria[TAM_TRANSITORIA] __attribute__((aligned(8)));
static char area_lista[TAM_LISTA] __attribute__((aligned(8)));

static int usado_transitoria = 0;
static int usado_lista = 0;

/* ---------------------------------------------------------------- memória */

static void *reservar(char *area, int *usado, int capacidade, int bytes) {

    int alinhado = (bytes + 7) & ~7;

    if (bytes < 0 || alinhado < 0 || *usado + alinhado > capacidade) {
        return 0;
    }

    void *p = area + *usado;

    *usado += alinhado;

    return p;
}

void *mem_transitoria(int bytes) {
    return reservar(area_transitoria, &usado_transitoria, TAM_TRANSITORIA, bytes);
}

void mem_reiniciar_transitoria(void) {
    usado_transitoria = 0;
}

void *mem_lista(int bytes) {
    return reservar(area_lista, &usado_lista, TAM_LISTA, bytes);
}

void mem_reiniciar_lista(void) {
    usado_lista = 0;
}

static Str copiar_para(void *destino, Str s) {

    char *p = destino;

    if (!p) {
        return SEM_STR;
    }

    for (int i = 0; i < s.n; i++) {
        p[i] = s.p[i];
    }

    return (Str){ p, s.n };
}

Str str_copiar(Str s) {
    return copiar_para(mem_transitoria(s.n + 1), s);
}

Str str_copiar_lista(Str s) {
    return copiar_para(mem_lista(s.n + 1), s);
}

/* ---------------------------------------------------------------- strings */

int str_vazia(Str s) {
    return s.n == 0;
}

int str_igual(Str a, Str b) {

    if (a.n != b.n) {
        return 0;
    }

    for (int i = 0; i < a.n; i++) {
        if (a.p[i] != b.p[i]) {
            return 0;
        }
    }

    return 1;
}

static int eh_espaco(char c) {
    return c == ' ' || c == '\t' || c == '\n' || c == '\r'
        || c == '\v' || c == '\f';
}

Str str_aparar(Str s) {

    int inicio = 0;
    int fim = s.n;

    while (inicio < fim && eh_espaco(s.p[inicio])) {
        inicio++;
    }

    while (fim > inicio && eh_espaco(s.p[fim - 1])) {
        fim--;
    }

    return (Str){ s.p + inicio, fim - inicio };
}

int utf8_contar(Str s) {

    int caracteres = 0;

    for (int i = 0; i < s.n; i++) {
        /* bytes 10xxxxxx são continuação de um caractere */
        if (((unsigned char)s.p[i] & 0xC0) != 0x80) {
            caracteres++;
        }
    }

    return caracteres;
}

int str_para_int(Str s, int *saida) {

    if (s.n == 0 || s.n > 9) {
        return 0;
    }

    int valor = 0;

    for (int i = 0; i < s.n; i++) {

        if (s.p[i] < '0' || s.p[i] > '9') {
            return 0;
        }

        valor = valor * 10 + (s.p[i] - '0');
    }

    *saida = valor;

    return 1;
}

/* ------------------------------------------------------------------ texto */

Texto texto_novo(int capacidade) {

    Texto t = { 0, 0, 0 };

    t.p = mem_transitoria(capacidade);

    if (t.p) {
        t.cap = capacidade;
    }

    return t;
}

void texto_add(Texto *t, Str s) {

    for (int i = 0; i < s.n && t->n < t->cap; i++) {
        t->p[t->n++] = s.p[i];
    }
}

void texto_int(Texto *t, int valor) {

    char invertido[12];
    int quantidade = 0;
    unsigned int absoluto = valor < 0 ? 0u - (unsigned int)valor : (unsigned int)valor;

    do {
        invertido[quantidade++] = (char)('0' + absoluto % 10);
        absoluto /= 10;
    } while (absoluto > 0);

    if (valor < 0) {
        texto_add(t, S("-"));
    }

    while (quantidade > 0) {
        char c = invertido[--quantidade];
        texto_add(t, (Str){ &c, 1 });
    }
}

Str texto_str(const Texto *t) {
    return (Str){ t->p, t->n };
}
