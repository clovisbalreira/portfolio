package amigos;

import java.util.List;

import org.teavm.interop.Export;

/**
 * Backend Java.
 *
 * Mesma responsabilidade dos backends Python (linguagens/python/app.py), JavaScript
 * (linguagens/javascript/app.js) e C (linguagens/c/src/app.c): busca, cadastro, edição e
 * exclusão. O roteador (js/backend/roteador.js) liga os botões da página às
 * funções @Export abaixo quando Java é a linguagem escolhida.
 *
 * O código é compilado para WebAssembly pelo TeaVM (veja linguagens/java/build/).
 */
public final class App {

    private static final String ORDEM_PADRAO = "nome_asc";

    /** Quando emEdicao é true, o botão salva alterações em vez de cadastrar. */
    private static boolean emEdicao = false;
    private static int idEmEdicao = 0;

    private App() {
    }

    /** O TeaVM exige um main; ele só inicializa o módulo. A página chama os @Export. */
    public static void main(String[] args) {
    }

    // ------------------------------------------------------------------
    // Edição
    // ------------------------------------------------------------------

    private static void editar(int idAmigo, String nome, String nascimento) {

        emEdicao = true;
        idEmEdicao = idAmigo;

        Formulario.preencher(nome, nascimento);
    }

    private static void cancelarEdicao() {

        emEdicao = false;

        Formulario.limpar();
        Mensagens.limparMensagemCadastro();
    }

    // ------------------------------------------------------------------
    // Cadastro, alteração e exclusão
    // ------------------------------------------------------------------

    private static void cadastrar() {

        int mensagem = Host.elemento("mensagem-cadastro");

        String nome = Host.lerValor(Host.elemento("nome")).strip();
        String nascimento = Host.lerValor(Host.elemento("nascimento"));

        Host.limpar(mensagem);

        String erroValidacao = Amigo.validar(nome, nascimento, Host.hoje());

        if (erroValidacao != null) {
            Mensagens.exibir(mensagem, erroValidacao);
            return;
        }

        boolean editando = emEdicao;
        boolean duplicado;

        try {

            duplicado = editando
                    ? BancoAmigos.atualizar(idEmEdicao, nome, nascimento)
                    : BancoAmigos.inserir(nome, nascimento);

        } catch (Host.ErroHost erro) {

            Mensagens.exibir(mensagem, "Erro ao cadastrar: " + erro.getMessage());
            return;
        }

        if (duplicado) {
            Mensagens.exibir(mensagem, "Essa pessoa já está cadastrada.");
            return;
        }

        // Sai do modo de edição: sem isto, o próximo cadastro
        // sobrescreveria a pessoa que acabou de ser editada.
        emEdicao = false;

        Formulario.limpar();

        Mensagens.exibir(mensagem, editando
                ? "Alteração realizada com sucesso!"
                : "Cadastro realizado com sucesso!");

        atualizarLista();
    }

    private static void excluir(int idAmigo, String nome) {

        int mensagem = Host.elemento("mensagem-cadastro");

        try {

            BancoAmigos.excluir(idAmigo);

        } catch (Host.ErroHost erro) {

            Mensagens.exibir(mensagem, "Erro ao excluir: " + erro.getMessage());
            return;
        }

        // Se a pessoa excluída estava aberta para edição,
        // encerra a edição para não recriar nem alterar nada.
        if (emEdicao && idEmEdicao == idAmigo) {
            cancelarEdicao();
        }

        Mensagens.exibir(mensagem, nome + " foi excluído com sucesso!");

        atualizarLista();
    }

    // ------------------------------------------------------------------
    // Modal de exclusão
    // ------------------------------------------------------------------

    private static void confirmarExclusao() {

        if (!Modal.temExclusaoPendente()) {
            Modal.fechar();
            return;
        }

        int id = Modal.idPendente();
        String nome = Modal.nomePendente();

        Modal.fechar();

        excluir(id, nome);
    }

    private static void cancelarExclusao() {

        Mensagens.limparMensagemCadastro();

        Modal.fechar();
    }

    // ------------------------------------------------------------------
    // Busca, filtros e ordenação
    // ------------------------------------------------------------------

    private static void executarBusca(String busca, String ordem, String idadeMinima, String idadeMaxima) {

        try {

            List<Amigo> lista = BancoAmigos.buscar(busca, ordem, idadeMinima, idadeMaxima);

            Resultados.exibir(lista, busca, !idadeMinima.isEmpty() || !idadeMaxima.isEmpty());

        } catch (Host.ErroHost erro) {

            Resultados.liberar();

            Mensagens.exibir(Host.elemento("resultados"), "Erro ao realizar a busca: " + erro.getMessage());
        }
    }

    /** Refaz a busca respeitando busca, ordem e filtros de idade atuais. */
    private static void atualizarLista() {

        String busca = Host.lerValor(Host.elemento("busca")).strip();
        String ordem = Host.lerValor(Host.elemento("ordem"));
        String minima = Host.lerValor(Host.elemento("idade_minima"));
        String maxima = Host.lerValor(Host.elemento("idade_maxima"));

        if (ordem.isEmpty()) {
            ordem = ORDEM_PADRAO;
        }

        executarBusca(busca, ordem, minima, maxima);
    }

    private static void buscar() {

        Mensagens.limparMensagemCadastro();

        atualizarLista();
    }

    private static void listarTodos() {

        Host.definirValor(Host.elemento("busca"), "");
        Host.definirValor(Host.elemento("idade_minima"), "");
        Host.definirValor(Host.elemento("idade_maxima"), "");

        atualizarLista();
    }

    private static void limparFiltros() {

        Mensagens.limparMensagemCadastro();

        Host.definirValor(Host.elemento("busca"), "");
        Host.definirValor(Host.elemento("idade_minima"), "");
        Host.definirValor(Host.elemento("idade_maxima"), "");
        Host.definirValor(Host.elemento("ordem"), ORDEM_PADRAO);

        atualizarLista();
    }

    // ------------------------------------------------------------------
    // Contrato com o roteador (veja js/backend/java/app.js)
    // ------------------------------------------------------------------

    /** Um erro inesperado não pode derrubar o módulo: vai ao console e à tela. */
    private static void falha(Throwable erro) {

        Host.registrarErro("Erro inesperado no backend Java: " + erro);

        Mensagens.exibir(Host.elemento("mensagem-cadastro"), "Erro inesperado: " + erro);
    }

    @Export(name = "ativar")
    public static void ativar() {

        try {
            atualizarLista();
        } catch (RuntimeException erro) {
            falha(erro);
        }
    }

    @Export(name = "desativar")
    public static void desativar() {

        try {

            cancelarEdicao();

            Modal.fechar();

            Resultados.liberar();

        } catch (RuntimeException erro) {
            falha(erro);
        }
    }

    @Export(name = "acao_buscar")
    public static void acaoBuscar() {

        try {
            buscar();
        } catch (RuntimeException erro) {
            falha(erro);
        }
    }

    /** Ordenar faz o mesmo que buscar: lê todos os campos da tela. */
    @Export(name = "acao_ordenar")
    public static void acaoOrdenar() {

        try {
            buscar();
        } catch (RuntimeException erro) {
            falha(erro);
        }
    }

    @Export(name = "acao_listar_todos")
    public static void acaoListarTodos() {

        try {
            listarTodos();
        } catch (RuntimeException erro) {
            falha(erro);
        }
    }

    @Export(name = "acao_limpar_filtros")
    public static void acaoLimparFiltros() {

        try {
            limparFiltros();
        } catch (RuntimeException erro) {
            falha(erro);
        }
    }

    @Export(name = "acao_cadastrar")
    public static void acaoCadastrar() {

        try {
            cadastrar();
        } catch (RuntimeException erro) {
            falha(erro);
        }
    }

    @Export(name = "acao_cancelar_edicao")
    public static void acaoCancelarEdicao() {

        try {
            cancelarEdicao();
        } catch (RuntimeException erro) {
            falha(erro);
        }
    }

    @Export(name = "acao_confirmar_exclusao")
    public static void acaoConfirmarExclusao() {

        try {
            confirmarExclusao();
        } catch (RuntimeException erro) {
            falha(erro);
        }
    }

    @Export(name = "acao_cancelar_exclusao")
    public static void acaoCancelarExclusao() {

        try {
            cancelarExclusao();
        } catch (RuntimeException erro) {
            falha(erro);
        }
    }

    @Export(name = "acao_escape")
    public static void acaoEscape() {

        try {

            if (Modal.aberto()) {
                cancelarExclusao();
            }

        } catch (RuntimeException erro) {
            falha(erro);
        }
    }

    /** Clique em Editar/Excluir de um item da lista. */
    @Export(name = "ao_clicar")
    public static void aoClicar(int indice) {

        try {

            Resultados.Callback callback = Resultados.callback(indice);

            if (callback == null) {
                return;
            }

            if (callback.editar) {
                editar(callback.id, callback.nome, callback.nascimento);
            } else {
                Modal.abrir(callback.nome, callback.id);
            }

        } catch (RuntimeException erro) {
            falha(erro);
        }
    }
}
