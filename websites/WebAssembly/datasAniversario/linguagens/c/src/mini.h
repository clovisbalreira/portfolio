#ifndef MINI_H
#define MINI_H

/* ========================================================================
 * Biblioteca mínima: o módulo roda sem libc.
 * Memória em duas áreas fixas (sem malloc/free):
 *   - transitória: reiniciada a cada ação do usuário;
 *   - da lista:    reiniciada a cada vez que a lista é redesenhada.
 * ===================================================================== */

typedef struct {
    const char *p;
    int n;
} Str;

#define S(literal) ((Str){ literal, (int)(sizeof(literal) - 1) })
#define SEM_STR    ((Str){ 0, 0 })

int  str_vazia(Str s);
int  str_igual(Str a, Str b);
Str  str_aparar(Str s);              /* tira espaços das pontas */
int  utf8_contar(Str s);             /* número de caracteres (não de bytes) */
int  str_para_int(Str s, int *saida); /* 1 se for um inteiro válido */

void *mem_transitoria(int bytes);
void  mem_reiniciar_transitoria(void);
void *mem_lista(int bytes);
void  mem_reiniciar_lista(void);

Str str_copiar(Str s);               /* cópia na área transitória */
Str str_copiar_lista(Str s);         /* cópia na área da lista */

/* Montagem de texto */
typedef struct {
    char *p;
    int n;
    int cap;
} Texto;

Texto texto_novo(int capacidade);
void  texto_add(Texto *t, Str s);
void  texto_int(Texto *t, int valor);
Str   texto_str(const Texto *t);

#endif
