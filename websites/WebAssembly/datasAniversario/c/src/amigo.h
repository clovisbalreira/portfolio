#ifndef AMIGO_H
#define AMIGO_H

#include "mini.h"

typedef struct {
    int id;
    Str nome;
    Str nascimento;
    int tem_idade;   /* 0 quando o banco não conseguiu calcular a idade */
    int idade;       /* vem do banco (WebAssembly idade_completa) */
} Amigo;

/* Devolve a mensagem de erro, ou SEM_STR se estiver tudo certo. */
Str amigo_validar(Str nome, Str nascimento, int hoje_aaaammdd);

/* "nasceu em 12/04/1996 e tem 30 anos" (ou aviso, se a data não servir). */
Str amigo_formatar_nascimento(const Amigo *amigo);

#endif
