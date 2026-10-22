package amigos;

import java.util.ArrayList;
import java.util.List;

/** Acesso ao banco pelo backend Java (via funções do navegador, veja Host). */
final class BancoAmigos {

    private static final char SEPARADOR_CAMPO = '\u001f';
    private static final char SEPARADOR_REGISTRO = '\u001e';

    private BancoAmigos() {
    }

    static List<Amigo> buscar(String nome, String ordem, String idadeMinima, String idadeMaxima) {

        String texto = Host.buscar(nome, ordem, idadeMinima, idadeMaxima);

        List<Amigo> amigos = new ArrayList<>();

        int inicio = 0;

        while (inicio < texto.length()) {

            int fim = texto.indexOf(SEPARADOR_REGISTRO, inicio);

            if (fim < 0) {
                break;
            }

            amigos.add(lerRegistro(texto.substring(inicio, fim)));

            inicio = fim + 1;
        }

        return amigos;
    }

    private static Amigo lerRegistro(String registro) {

        int a = registro.indexOf(SEPARADOR_CAMPO);
        int b = registro.indexOf(SEPARADOR_CAMPO, a + 1);
        int c = registro.indexOf(SEPARADOR_CAMPO, b + 1);

        int id = Integer.parseInt(registro.substring(0, a));
        String nome = registro.substring(a + 1, b);
        String nascimento = registro.substring(b + 1, c);
        String idade = registro.substring(c + 1);

        boolean temIdade = !idade.isEmpty();

        return new Amigo(id, nome, nascimento, temIdade, temIdade ? Integer.parseInt(idade) : 0);
    }

    /** true se já existir alguém com esse nome. */
    static boolean inserir(String nome, String nascimento) {
        return Host.inserir(nome, nascimento);
    }

    /** true se o novo nome já pertencer a outra pessoa. */
    static boolean atualizar(int id, String nome, String nascimento) {
        return Host.atualizar(id, nome, nascimento);
    }

    static void excluir(int id) {
        Host.excluir(id);
    }
}
