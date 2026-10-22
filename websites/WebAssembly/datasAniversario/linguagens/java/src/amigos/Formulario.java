package amigos;

/** Formulário de cadastro: alterna entre "Cadastrar" e "Salvar alterações". */
final class Formulario {

    private Formulario() {
    }

    private static void definirBotao(String icone, String titulo) {

        int botao = Host.elemento("botao-cadastrar");

        Host.limpar(botao);

        int i = Host.criar("i");

        Host.definirClasse(i, icone);
        Host.anexarESoltar(botao, i);

        Host.definirAtributo(botao, "title", titulo);
        Host.definirAtributo(botao, "aria-label", titulo);
    }

    static void limpar() {

        Host.definirValor(Host.elemento("nome"), "");
        Host.definirValor(Host.elemento("nascimento"), "");

        definirBotao("fa-solid fa-plus", "Cadastrar");

        Host.definirOculto(Host.elemento("botao-cancelar-edicao"), true);
    }

    static void preencher(String nome, String nascimento) {

        int campoNome = Host.elemento("nome");

        Host.definirValor(campoNome, nome);
        Host.definirValor(Host.elemento("nascimento"), nascimento);

        definirBotao("fa-solid fa-floppy-disk", "Salvar alterações");

        Host.definirOculto(Host.elemento("botao-cancelar-edicao"), false);

        Host.focar(campoNome);
    }
}
