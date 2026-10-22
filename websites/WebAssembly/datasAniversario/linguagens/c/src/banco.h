#ifndef BANCO_H
#define BANCO_H

#include "mini.h"
#include "amigo.h"

#define STATUS_OK         0
#define STATUS_DUPLICADO  1
#define STATUS_ERRO      (-1)

typedef struct {
    Amigo *itens;
    int n;
} ListaAmigos;

/* Todas devolvem STATUS_*; em STATUS_ERRO, `erro` traz a mensagem. */
int banco_buscar(Str nome, Str ordem, Str idade_minima, Str idade_maxima,
                 ListaAmigos *saida, Str *erro);
int banco_inserir(Str nome, Str nascimento, Str *erro);
int banco_atualizar(int id, Str nome, Str nascimento, Str *erro);
int banco_excluir(int id, Str *erro);

#endif
