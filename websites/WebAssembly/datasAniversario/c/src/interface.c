#include "interface.h"
#include "amigo.h"

/* ====================================================================
 * Utilidades
 * ================================================================= */

Str ler_valor(int elemento) {

    int tamanho = dom_ler_valor(elemento);

    char *buffer = mem_transitoria(tamanho + 1);

    if (!buffer) {
        return SEM_STR;
    }

    host_copiar(buffer);

    return (Str){ buffer, tamanho };
}

void def_texto(int elemento, Str texto) {
    dom_def_texto(elemento, texto.p, texto.n);
}

static void def_classe(int elemento, const char *classe, int n) {
    dom_def_classe(elemento, classe, n);
}

#define CLASSE(el, literal) def_classe((el), (literal), (int)sizeof(literal) - 1)

#define ATRIBUTO(el, nome, valor) \
    dom_def_atributo((el), (nome), (int)sizeof(nome) - 1, \
                     (valor).p, (valor).n)

/* ====================================================================
 * Mensagens
 * ================================================================= */

typedef struct {
    Str texto;
    int negrito;
} Parte;

/* Monta <p class="mensagem"> com partes normais e em negrito. */
static int criar_mensagem(const Parte *partes, int quantidade) {

    int paragrafo = dom_criar("p", 1);

    CLASSE(paragrafo, "mensagem");

    for (int i = 0; i < quantidade; i++) {

        int no;

        if (partes[i].negrito) {
            no = dom_criar("strong", 6);
            def_texto(no, partes[i].texto);
        } else {
            no = dom_criar_texto(partes[i].texto.p, partes[i].texto.n);
        }

        dom_anexar(paragrafo, no);
        dom_soltar(no);
    }

    return paragrafo;
}

void exibir_mensagem(int elemento, Str texto) {

    Parte partes[1] = { { texto, 0 } };

    int paragrafo = criar_mensagem(partes, 1);

    dom_limpar(elemento);
    dom_anexar(elemento, paragrafo);
    dom_soltar(paragrafo);
}

void limpar_mensagem_cadastro(void) {
    dom_limpar(EL("mensagem-cadastro"));
}

/* ====================================================================
 * Formulário de cadastro
 * ================================================================= */

static void definir_botao(const char *icone, int n_icone, Str titulo) {

    int botao = EL("botao-cadastrar");

    dom_limpar(botao);

    int i = dom_criar("i", 1);

    def_classe(i, icone, n_icone);
    dom_anexar(botao, i);
    dom_soltar(i);

    ATRIBUTO(botao, "title", titulo);
    ATRIBUTO(botao, "aria-label", titulo);
}

void limpar_formulario(void) {

    dom_def_valor(EL("nome"), "", 0);
    dom_def_valor(EL("nascimento"), "", 0);

    definir_botao("fa-solid fa-plus", 16, S("Cadastrar"));

    dom_def_oculto(EL("botao-cancelar-edicao"), 1);
}

void preencher_formulario(Str nome, Str nascimento) {

    int campo_nome = EL("nome");

    dom_def_valor(campo_nome, nome.p, nome.n);
    dom_def_valor(EL("nascimento"), nascimento.p, nascimento.n);

    definir_botao("fa-solid fa-floppy-disk", 23, S("Salvar alterações"));

    dom_def_oculto(EL("botao-cancelar-edicao"), 0);

    dom_focar(campo_nome);
}

/* ====================================================================
 * Modal de exclusão
 * ================================================================= */

enum { MAX_NOME_MODAL = 4096 };

static int  modal_visivel = 0;
static int  pendente = 0;
static int  pendente_id = 0;
static int  pendente_nome_n = 0;
static char pendente_nome[MAX_NOME_MODAL];

void abrir_modal_exclusao(Str nome, int id_amigo) {

    pendente = 1;
    pendente_id = id_amigo;

    pendente_nome_n = nome.n < MAX_NOME_MODAL ? nome.n : MAX_NOME_MODAL;

    for (int i = 0; i < pendente_nome_n; i++) {
        pendente_nome[i] = nome.p[i];
    }

    Texto t = texto_novo(MAX_NOME_MODAL + 64);

    texto_add(&t, S("Tem certeza que deseja excluir "));
    texto_add(&t, nome);
    texto_add(&t, S("?"));

    def_texto(EL("modal-mensagem"), texto_str(&t));

    int modal = EL("modal-exclusao");

    dom_def_exibicao(modal, "flex", 4);
    ATRIBUTO(modal, "aria-hidden", S("false"));

    modal_visivel = 1;

    dom_focar(EL("botao-cancelar-exclusao"));
}

void fechar_modal(void) {

    pendente = 0;
    modal_visivel = 0;

    int modal = EL("modal-exclusao");

    dom_def_exibicao(modal, "none", 4);
    ATRIBUTO(modal, "aria-hidden", S("true"));
}

int modal_aberto(void) {
    return modal_visivel;
}

int exclusao_pendente(int *id_amigo, Str *nome) {

    if (!pendente) {
        return 0;
    }

    *id_amigo = pendente_id;
    *nome = str_copiar((Str){ pendente_nome, pendente_nome_n });

    return 1;
}

/* ====================================================================
 * Lista de resultados
 * ================================================================= */

static Callback *callbacks = 0;
static int n_callbacks = 0;

const Callback *resultados_callback(int indice) {

    if (indice < 0 || indice >= n_callbacks) {
        return 0;
    }

    return &callbacks[indice];
}

void liberar_resultados(void) {

    callbacks = 0;
    n_callbacks = 0;

    mem_reiniciar_lista();
}

static int mensagem_sem_resultados(Str busca, int filtro_idade) {

    if (!str_vazia(busca) && filtro_idade) {
        Parte partes[] = {
            { S("Não encontrei ninguém com "), 0 },
            { busca, 1 },
            { S(" no nome nessa faixa de idade."), 0 }
        };
        return criar_mensagem(partes, 3);
    }

    if (!str_vazia(busca)) {
        Parte partes[] = {
            { S("Não encontrei ninguém com "), 0 },
            { busca, 1 },
            { S(" no nome."), 0 }
        };
        return criar_mensagem(partes, 3);
    }

    if (filtro_idade) {
        Parte partes[] = {
            { S("Não encontrei ninguém nessa faixa de idade."), 0 }
        };
        return criar_mensagem(partes, 1);
    }

    Parte partes[] = { { S("Não existem amigos cadastrados."), 0 } };

    return criar_mensagem(partes, 1);
}

static int mensagem_resumo(int quantidade, Str busca, int filtro_idade) {

    Str plural = quantidade == 1 ? S("") : S("s");

    Texto numero = texto_novo(16);
    texto_int(&numero, quantidade);

    if (!str_vazia(busca)) {

        Texto antes = texto_novo(32);
        texto_add(&antes, S(" amigo"));
        texto_add(&antes, plural);
        texto_add(&antes, S(" com '"));

        Parte partes[] = {
            { S("Ao todo encontrei "), 0 },
            { texto_str(&numero), 1 },
            { texto_str(&antes), 0 },
            { busca, 1 },
            { S("'"), 0 },
            { filtro_idade ? S(" nessa faixa de idade") : S(""), 0 },
            { S("."), 0 }
        };

        return criar_mensagem(partes, 7);
    }

    if (filtro_idade) {

        Texto depois = texto_novo(48);
        texto_add(&depois, S(" amigo"));
        texto_add(&depois, plural);
        texto_add(&depois, S(" nessa faixa de idade."));

        Parte partes[] = {
            { S("Ao todo encontrei "), 0 },
            { texto_str(&numero), 1 },
            { texto_str(&depois), 0 }
        };

        return criar_mensagem(partes, 3);
    }

    Texto t = texto_novo(96);
    texto_add(&t, S("Ao todo existem "));
    texto_add(&t, texto_str(&numero));
    texto_add(&t, S(" amigo"));
    texto_add(&t, plural);
    texto_add(&t, S(" cadastrado"));
    texto_add(&t, plural);
    texto_add(&t, S("."));

    Parte partes[] = { { texto_str(&t), 0 } };

    return criar_mensagem(partes, 1);
}

static int criar_botao(Str titulo, const char *icone, int n_icone, int callback) {

    int botao = dom_criar("button", 6);

    ATRIBUTO(botao, "title", titulo);
    ATRIBUTO(botao, "aria-label", titulo);

    int i = dom_criar("i", 1);

    def_classe(i, icone, n_icone);
    dom_anexar(botao, i);
    dom_soltar(i);

    dom_ao_clicar(botao, callback);

    return botao;
}

static void anexar_e_soltar(int pai, int filho) {

    dom_anexar(pai, filho);
    dom_soltar(filho);
}

static int criar_resultado(const Amigo *amigo, int cb_editar, int cb_excluir) {

    int resultado = dom_criar("div", 3);

    CLASSE(resultado, "resultado");

    int nome = dom_criar("strong", 6);
    def_texto(nome, amigo->nome);

    int info = dom_criar("span", 4);
    def_texto(info, amigo_formatar_nascimento(amigo));

    anexar_e_soltar(resultado, nome);
    anexar_e_soltar(resultado, dom_criar("br", 2));
    anexar_e_soltar(resultado, info);
    anexar_e_soltar(resultado, dom_criar("br", 2));

    anexar_e_soltar(resultado,
        criar_botao(S("Editar"), "fa-solid fa-pen", 15, cb_editar));

    anexar_e_soltar(resultado,
        criar_botao(S("Excluir"), "fa-solid fa-trash", 17, cb_excluir));

    return resultado;
}

void exibir_resultados(const ListaAmigos *lista, Str busca, int filtro_idade) {

    int container = EL("resultados");

    dom_limpar(container);

    /* Os callbacks da lista anterior deixam de valer. */
    liberar_resultados();

    if (lista->n == 0) {
        anexar_e_soltar(container, mensagem_sem_resultados(busca, filtro_idade));
        return;
    }

    callbacks = mem_lista((int)sizeof(Callback) * lista->n * 2);

    if (!callbacks) {
        Parte partes[] = { { S("Memória insuficiente para exibir a lista."), 0 } };
        anexar_e_soltar(container, criar_mensagem(partes, 1));
        return;
    }

    for (int i = 0; i < lista->n; i++) {

        const Amigo *amigo = &lista->itens[i];

        Callback *editar = &callbacks[n_callbacks];
        Callback *excluir = &callbacks[n_callbacks + 1];

        Str nome = str_copiar_lista(amigo->nome);
        Str nascimento = str_copiar_lista(amigo->nascimento);

        editar->tipo = CB_EDITAR;
        editar->id = amigo->id;
        editar->nome = nome;
        editar->nascimento = nascimento;

        excluir->tipo = CB_EXCLUIR;
        excluir->id = amigo->id;
        excluir->nome = nome;
        excluir->nascimento = nascimento;

        anexar_e_soltar(container,
            criar_resultado(amigo, n_callbacks, n_callbacks + 1));

        n_callbacks += 2;
    }

    anexar_e_soltar(container, mensagem_resumo(lista->n, busca, filtro_idade));
}
