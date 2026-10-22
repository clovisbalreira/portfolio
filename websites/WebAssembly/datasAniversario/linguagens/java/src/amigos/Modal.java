package amigos;

/** Modal de confirmação de exclusão. */
final class Modal {

    private static boolean visivel = false;

    private static boolean pendente = false;
    private static int pendenteId = 0;
    private static String pendenteNome = "";

    private Modal() {
    }

    static void abrir(String nome, int idAmigo) {

        pendente = true;
        pendenteId = idAmigo;
        pendenteNome = nome;

        Host.definirTexto(Host.elemento("modal-mensagem"),
                "Tem certeza que deseja excluir " + nome + "?");

        int modal = Host.elemento("modal-exclusao");

        Host.definirExibicao(modal, "flex");
        Host.definirAtributo(modal, "aria-hidden", "false");

        visivel = true;

        Host.focar(Host.elemento("botao-cancelar-exclusao"));
    }

    static void fechar() {

        pendente = false;
        visivel = false;

        int modal = Host.elemento("modal-exclusao");

        Host.definirExibicao(modal, "none");
        Host.definirAtributo(modal, "aria-hidden", "true");
    }

    static boolean aberto() {
        return visivel;
    }

    static boolean temExclusaoPendente() {
        return pendente;
    }

    static int idPendente() {
        return pendenteId;
    }

    static String nomePendente() {
        return pendenteNome;
    }
}
