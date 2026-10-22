#include "host.h"
#include "mini.h"
#include "amigo.h"
#include "banco.h"
#include "interface.h"

/* ========================================================================
 * Backend C
 *
 * Mesma responsabilidade dos backends Python (linguagens/python/app.py) e JavaScript
 * (linguagens/javascript/app.js): busca, cadastro, edição e exclusão.
 * O roteador (js/backend/roteador.js) liga os botões da página a estas
 * ações quando C é a linguagem escolhida.
 *
 * Compilado para WebAssembly (linguagens/c/Makefile) e carregado por
 * js/backend/c/app.js.
 * ===================================================================== */

#define EXPORTAR(nome) __attribute__((export_name(nome)))

#define ORDEM_PADRAO "nome_asc"

/* Quando em_edicao é 1, o botão salva alterações em vez de cadastrar. */
static int em_edicao = 0;
static int id_em_edicao = 0;

static void atualizar_lista(void);

/* ----------------------------------------------------------------
 * Edição
 * ------------------------------------------------------------- */

static void editar(int id_amigo, Str nome, Str nascimento) {

    em_edicao = 1;
    id_em_edicao = id_amigo;

    preencher_formulario(nome, nascimento);
}

static void cancelar_edicao(void) {

    em_edicao = 0;

    limpar_formulario();
    limpar_mensagem_cadastro();
}

/* ----------------------------------------------------------------
 * Cadastro, alteração e exclusão
 * ------------------------------------------------------------- */

static void mostrar_erro(int mensagem, const char *prefixo, int n, Str erro) {

    Texto t = texto_novo(erro.n + n + 8);

    texto_add(&t, (Str){ prefixo, n });
    texto_add(&t, erro);

    exibir_mensagem(mensagem, texto_str(&t));
}

static void cadastrar(void) {

    int mensagem = EL("mensagem-cadastro");

    Str nome = str_aparar(ler_valor(EL("nome")));
    Str nascimento = ler_valor(EL("nascimento"));

    dom_limpar(mensagem);

    Str erro_validacao = amigo_validar(nome, nascimento, host_hoje());

    if (erro_validacao.p) {
        exibir_mensagem(mensagem, erro_validacao);
        return;
    }

    Str erro = SEM_STR;
    int status;

    int editando = em_edicao;

    if (editando) {
        status = banco_atualizar(id_em_edicao, nome, nascimento, &erro);
    } else {
        status = banco_inserir(nome, nascimento, &erro);
    }

    if (status == STATUS_ERRO) {
        mostrar_erro(mensagem, "Erro ao cadastrar: ", 19, erro);
        return;
    }

    if (status == STATUS_DUPLICADO) {
        exibir_mensagem(mensagem, S("Essa pessoa já está cadastrada."));
        return;
    }

    /* Sai do modo de edição: sem isto, o próximo cadastro
       sobrescreveria a pessoa que acabou de ser editada. */
    em_edicao = 0;

    limpar_formulario();

    exibir_mensagem(mensagem,
        editando ? S("Alteração realizada com sucesso!")
                 : S("Cadastro realizado com sucesso!"));

    atualizar_lista();
}

static void excluir(int id_amigo, Str nome) {

    int mensagem = EL("mensagem-cadastro");

    Str erro = SEM_STR;

    if (banco_excluir(id_amigo, &erro) == STATUS_ERRO) {
        mostrar_erro(mensagem, "Erro ao excluir: ", 17, erro);
        return;
    }

    /* Se a pessoa excluída estava aberta para edição,
       encerra a edição para não recriar nem alterar nada. */
    if (em_edicao && id_em_edicao == id_amigo) {
        cancelar_edicao();
    }

    Texto t = texto_novo(nome.n + 48);

    texto_add(&t, nome);
    texto_add(&t, S(" foi excluído com sucesso!"));

    exibir_mensagem(mensagem, texto_str(&t));

    atualizar_lista();
}

/* ----------------------------------------------------------------
 * Modal de exclusão
 * ------------------------------------------------------------- */

static void confirmar_exclusao(void) {

    int id_amigo;
    Str nome;

    if (!exclusao_pendente(&id_amigo, &nome)) {
        fechar_modal();
        return;
    }

    fechar_modal();

    excluir(id_amigo, nome);
}

static void cancelar_exclusao(void) {

    limpar_mensagem_cadastro();

    fechar_modal();
}

/* ----------------------------------------------------------------
 * Busca, filtros e ordenação
 * ------------------------------------------------------------- */

static void executar_busca(Str busca, Str ordem, Str idade_minima, Str idade_maxima) {

    ListaAmigos lista;
    Str erro = SEM_STR;

    if (banco_buscar(busca, ordem, idade_minima, idade_maxima, &lista, &erro) == STATUS_ERRO) {

        liberar_resultados();

        mostrar_erro(EL("resultados"), "Erro ao realizar a busca: ", 26, erro);

        return;
    }

    int filtro_idade = !str_vazia(idade_minima) || !str_vazia(idade_maxima);

    exibir_resultados(&lista, busca, filtro_idade);
}

/* Refaz a busca respeitando busca, ordem e filtros de idade atuais. */
static void atualizar_lista(void) {

    Str busca = str_aparar(ler_valor(EL("busca")));
    Str ordem = ler_valor(EL("ordem"));
    Str minima = ler_valor(EL("idade_minima"));
    Str maxima = ler_valor(EL("idade_maxima"));

    if (str_vazia(ordem)) {
        ordem = S(ORDEM_PADRAO);
    }

    executar_busca(busca, ordem, minima, maxima);
}

static void buscar(void) {

    limpar_mensagem_cadastro();

    atualizar_lista();
}

static void listar_todos(void) {

    dom_def_valor(EL("busca"), "", 0);
    dom_def_valor(EL("idade_minima"), "", 0);
    dom_def_valor(EL("idade_maxima"), "", 0);

    atualizar_lista();
}

static void limpar_filtros(void) {

    limpar_mensagem_cadastro();

    dom_def_valor(EL("busca"), "", 0);
    dom_def_valor(EL("idade_minima"), "", 0);
    dom_def_valor(EL("idade_maxima"), "", 0);
    dom_def_valor(EL("ordem"), ORDEM_PADRAO, (int)sizeof(ORDEM_PADRAO) - 1);

    atualizar_lista();
}

/* ----------------------------------------------------------------
 * Contrato com o roteador (veja js/backend/c/app.js)
 * Cada ação começa liberando a memória transitória da ação anterior.
 * ------------------------------------------------------------- */

#define ACAO(exportada, funcao) \
    EXPORTAR(exportada) void acao_##funcao(void) { \
        mem_reiniciar_transitoria(); \
        funcao(); \
    }

EXPORTAR("ativar") void ativar(void) {

    mem_reiniciar_transitoria();

    atualizar_lista();
}

EXPORTAR("desativar") void desativar(void) {

    mem_reiniciar_transitoria();

    cancelar_edicao();

    fechar_modal();

    liberar_resultados();
}

ACAO("acao_buscar", buscar)
ACAO("acao_listar_todos", listar_todos)
ACAO("acao_limpar_filtros", limpar_filtros)
ACAO("acao_cadastrar", cadastrar)
ACAO("acao_cancelar_edicao", cancelar_edicao)
ACAO("acao_confirmar_exclusao", confirmar_exclusao)
ACAO("acao_cancelar_exclusao", cancelar_exclusao)

/* Ordenar faz o mesmo que buscar: lê todos os campos da tela. */
EXPORTAR("acao_ordenar") void acao_ordenar(void) {

    mem_reiniciar_transitoria();

    buscar();
}

EXPORTAR("acao_escape") void acao_escape(void) {

    mem_reiniciar_transitoria();

    if (modal_aberto()) {
        cancelar_exclusao();
    }
}

/* Clique em Editar/Excluir de um item da lista. */
EXPORTAR("ao_clicar") void ao_clicar(int indice) {

    mem_reiniciar_transitoria();

    const Callback *callback = resultados_callback(indice);

    if (!callback) {
        return;
    }

    if (callback->tipo == CB_EDITAR) {
        editar(callback->id, callback->nome, callback->nascimento);
    } else {
        abrir_modal_exclusao(callback->nome, callback->id);
    }
}
