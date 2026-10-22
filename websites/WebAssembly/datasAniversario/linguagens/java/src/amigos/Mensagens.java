package amigos;

/** Mensagens exibidas na página. */
final class Mensagens {

    /** Pedaço de uma mensagem, normal ou em negrito. */
    static final class Parte {
        final String texto;
        final boolean negrito;

        private Parte(String texto, boolean negrito) {
            this.texto = texto;
            this.negrito = negrito;
        }

        static Parte normal(String texto) {
            return new Parte(texto, false);
        }

        static Parte negrito(String texto) {
            return new Parte(texto, true);
        }
    }

    private Mensagens() {
    }

    /** Monta <p class="mensagem"> com partes normais e em negrito. */
    static int criar(Parte... partes) {

        int paragrafo = Host.criar("p");

        Host.definirClasse(paragrafo, "mensagem");

        for (Parte parte : partes) {

            int no;

            if (parte.negrito) {
                no = Host.criar("strong");
                Host.definirTexto(no, parte.texto);
            } else {
                no = Host.criarTexto(parte.texto);
            }

            Host.anexarESoltar(paragrafo, no);
        }

        return paragrafo;
    }

    static void exibir(int elemento, String texto) {

        int paragrafo = criar(Parte.normal(texto));

        Host.limpar(elemento);
        Host.anexarESoltar(elemento, paragrafo);
    }

    static void limparMensagemCadastro() {
        Host.limpar(Host.elemento("mensagem-cadastro"));
    }
}
