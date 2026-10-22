#ifndef INTERFACE_H
#define INTERFACE_H

#include "host.h"
#include "mini.h"
#include "banco.h"

/* Elemento da página pelo id (literal). O navegador guarda o handle. */
#define EL(id) dom_por_id((id), (int)sizeof(id) - 1)

/* Os botões Editar/Excluir da lista chamam ao_clicar(indice). */
typedef enum { CB_EDITAR, CB_EXCLUIR } TipoCallback;

typedef struct {
    TipoCallback tipo;
    int id;
    Str nome;
    Str nascimento;
} Callback;

Str  ler_valor(int elemento);
void def_texto(int elemento, Str texto);

/* mensagens */
void exibir_mensagem(int elemento, Str texto);
void limpar_mensagem_cadastro(void);

/* formulário de cadastro */
void limpar_formulario(void);
void preencher_formulario(Str nome, Str nascimento);

/* modal de exclusão */
void abrir_modal_exclusao(Str nome, int id_amigo);
void fechar_modal(void);
int  modal_aberto(void);
int  exclusao_pendente(int *id_amigo, Str *nome);   /* 1 se houver */

/* lista de resultados */
void exibir_resultados(const ListaAmigos *lista, Str busca, int filtro_idade);
const Callback *resultados_callback(int indice);
void liberar_resultados(void);

#endif
