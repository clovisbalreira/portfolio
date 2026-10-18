#ifndef HOST_H
#define HOST_H

/* ========================================================================
 * Contrato com o navegador (js/backend/c/host.js)
 *
 * O módulo C não tem libc nem acesso direto à página. Tudo o que ele
 * precisa do navegador vem destas funções importadas. São primitivas
 * "burras": toda decisão (validar, formatar, escolher mensagens, controlar
 * a edição e o modal) fica no C.
 *
 *  - Texto: sempre UTF-8, passado como (ponteiro, tamanho), sem '\0'.
 *  - Elementos da página: números inteiros (handles); 0 = nenhum.
 *  - Funções que devolvem texto/erro guardam o texto no navegador e
 *    devolvem o tamanho; depois o C chama host_copiar() para receber.
 * ===================================================================== */

#define HOST(nome) __attribute__((import_module("env"), import_name(nome)))

/* ---- DOM ---- */
HOST("dom_por_id")       int  dom_por_id(const char *id, int n);
HOST("dom_criar")        int  dom_criar(const char *tag, int n);
HOST("dom_criar_texto")  int  dom_criar_texto(const char *texto, int n);
HOST("dom_anexar")       void dom_anexar(int pai, int filho);
HOST("dom_limpar")       void dom_limpar(int elemento);
HOST("dom_soltar")       void dom_soltar(int elemento);
HOST("dom_def_texto")    void dom_def_texto(int elemento, const char *t, int n);
HOST("dom_def_valor")    void dom_def_valor(int elemento, const char *t, int n);
HOST("dom_def_classe")   void dom_def_classe(int elemento, const char *t, int n);
HOST("dom_def_atributo") void dom_def_atributo(int elemento,
                                               const char *nome, int nn,
                                               const char *valor, int vn);
HOST("dom_def_oculto")   void dom_def_oculto(int elemento, int oculto);
HOST("dom_def_exibicao") void dom_def_exibicao(int elemento, const char *t, int n);
HOST("dom_focar")        void dom_focar(int elemento);
HOST("dom_ao_clicar")    void dom_ao_clicar(int elemento, int callback);
HOST("dom_ler_valor")    int  dom_ler_valor(int elemento);

/* ---- Banco de dados (SQLite no navegador) ----
 * db_buscar devolve registros no formato:
 *   id US nome US nascimento US idade RS   (US = 0x1F, RS = 0x1E)
 * Retorno: tamanho do texto, ou -1 em erro (mensagem em host_copiar).
 * db_inserir/db_atualizar: 0 = ok, 1 = duplicado, -1 = erro.
 * db_excluir: 0 = ok, -1 = erro. */
HOST("db_buscar")    int db_buscar(const char *nome, int nn,
                                   const char *ordem, int on,
                                   const char *minima, int mn,
                                   const char *maxima, int xn);
HOST("db_inserir")   int db_inserir(const char *nome, int nn,
                                    const char *nasc, int dn);
HOST("db_atualizar") int db_atualizar(int id,
                                      const char *nome, int nn,
                                      const char *nasc, int dn);
HOST("db_excluir")   int db_excluir(int id);

/* ---- Utilidades ---- */
HOST("host_tamanho") int  host_tamanho(void);
HOST("host_copiar")  void host_copiar(char *destino);
HOST("host_hoje")    int  host_hoje(void);   /* data local: AAAAMMDD */

#endif
