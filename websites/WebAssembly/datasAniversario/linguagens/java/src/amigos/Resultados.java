package amigos;

import java.util.ArrayList;
import java.util.List;

import amigos.Mensagens.Parte;

/** Lista de resultados: desenha os amigos e guarda o que cada botão faz. */
final class Resultados {

    /** O que acontece quando um botão Editar/Excluir de um item é clicado. */
    static final class Callback {
        final boolean editar;
        final int id;
        final String nome;
        final String nascimento;

        Callback(boolean editar, int id, String nome, String nascimento) {
            this.editar = editar;
            this.id = id;
            this.nome = nome;
            this.nascimento = nascimento;
        }
    }

    /** Os botões chamam App.aoClicar(indice); o índice aponta para esta lista. */
    private static List<Callback> callbacks = new ArrayList<>();

    private Resultados() {
    }

    static Callback callback(int indice) {

        if (indice < 0 || indice >= callbacks.size()) {
            return null;
        }

        return callbacks.get(indice);
    }

    static void liberar() {
        callbacks = new ArrayList<>();
    }

    // ------------------------------------------------------------------
    // Mensagens
    // ------------------------------------------------------------------

    private static int mensagemSemResultados(String busca, boolean filtroIdade) {

        if (!busca.isEmpty() && filtroIdade) {
            return Mensagens.criar(
                    Parte.normal("Não encontrei ninguém com "),
                    Parte.negrito(busca),
                    Parte.normal(" no nome nessa faixa de idade."));
        }

        if (!busca.isEmpty()) {
            return Mensagens.criar(
                    Parte.normal("Não encontrei ninguém com "),
                    Parte.negrito(busca),
                    Parte.normal(" no nome."));
        }

        if (filtroIdade) {
            return Mensagens.criar(Parte.normal("Não encontrei ninguém nessa faixa de idade."));
        }

        return Mensagens.criar(Parte.normal("Não existem amigos cadastrados."));
    }

    private static int mensagemResumo(int quantidade, String busca, boolean filtroIdade) {

        String plural = quantidade == 1 ? "" : "s";
        String numero = String.valueOf(quantidade);

        if (!busca.isEmpty()) {
            return Mensagens.criar(
                    Parte.normal("Ao todo encontrei "),
                    Parte.negrito(numero),
                    Parte.normal(" amigo" + plural + " com '"),
                    Parte.negrito(busca),
                    Parte.normal("'"),
                    Parte.normal(filtroIdade ? " nessa faixa de idade" : ""),
                    Parte.normal("."));
        }

        if (filtroIdade) {
            return Mensagens.criar(
                    Parte.normal("Ao todo encontrei "),
                    Parte.negrito(numero),
                    Parte.normal(" amigo" + plural + " nessa faixa de idade."));
        }

        return Mensagens.criar(Parte.normal(
                "Ao todo existem " + numero + " amigo" + plural + " cadastrado" + plural + "."));
    }

    // ------------------------------------------------------------------
    // Desenho
    // ------------------------------------------------------------------

    private static int criarBotao(String titulo, String icone, int callback) {

        int botao = Host.criar("button");

        Host.definirAtributo(botao, "title", titulo);
        Host.definirAtributo(botao, "aria-label", titulo);

        int i = Host.criar("i");

        Host.definirClasse(i, icone);
        Host.anexarESoltar(botao, i);

        Host.aoClicar(botao, callback);

        return botao;
    }

    private static int criarResultado(Amigo amigo, int callbackEditar, int callbackExcluir) {

        int resultado = Host.criar("div");

        Host.definirClasse(resultado, "resultado");

        int nome = Host.criar("strong");
        Host.definirTexto(nome, amigo.nome);

        int info = Host.criar("span");
        Host.definirTexto(info, amigo.formatarNascimento());

        Host.anexarESoltar(resultado, nome);
        Host.anexarESoltar(resultado, Host.criar("br"));
        Host.anexarESoltar(resultado, info);
        Host.anexarESoltar(resultado, Host.criar("br"));

        Host.anexarESoltar(resultado, criarBotao("Editar", "fa-solid fa-pen", callbackEditar));
        Host.anexarESoltar(resultado, criarBotao("Excluir", "fa-solid fa-trash", callbackExcluir));

        return resultado;
    }

    static void exibir(List<Amigo> lista, String busca, boolean filtroIdade) {

        int container = Host.elemento("resultados");

        Host.limpar(container);

        // Os callbacks da lista anterior deixam de valer.
        liberar();

        if (lista.isEmpty()) {
            Host.anexarESoltar(container, mensagemSemResultados(busca, filtroIdade));
            return;
        }

        for (Amigo amigo : lista) {

            int indice = callbacks.size();

            callbacks.add(new Callback(true, amigo.id, amigo.nome, amigo.nascimento));
            callbacks.add(new Callback(false, amigo.id, amigo.nome, amigo.nascimento));

            Host.anexarESoltar(container, criarResultado(amigo, indice, indice + 1));
        }

        Host.anexarESoltar(container, mensagemResumo(lista.size(), busca, filtroIdade));
    }
}
