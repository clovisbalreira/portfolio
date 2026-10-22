package amigos;

/** Modelo Amigo (backend Java). */
final class Amigo {

    final int id;
    final String nome;
    final String nascimento;

    /** false quando o banco não conseguiu calcular a idade. */
    private final boolean temIdade;

    /** Vem do banco (função WebAssembly idade_completa), a única implementação do cálculo. */
    private final int idade;

    Amigo(int id, String nome, String nascimento, boolean temIdade, int idade) {
        this.id = id;
        this.nome = nome;
        this.nascimento = nascimento;
        this.temIdade = temIdade;
        this.idade = idade;
    }

    // ------------------------------------------------------------------
    // Datas
    // ------------------------------------------------------------------

    private static boolean bissexto(int ano) {
        return (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0;
    }

    private static int diasNoMes(int ano, int mes) {

        int[] dias = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

        if (mes == 2 && bissexto(ano)) {
            return 29;
        }

        return dias[mes - 1];
    }

    /** Lê `quantidade` dígitos ASCII a partir de `inicio`; -1 se algum não for dígito. */
    private static int lerDigitos(String s, int inicio, int quantidade) {

        int valor = 0;

        for (int i = inicio; i < inicio + quantidade; i++) {

            char c = s.charAt(i);

            if (c < '0' || c > '9') {
                return -1;
            }

            valor = valor * 10 + (c - '0');
        }

        return valor;
    }

    /** Devolve AAAAMMDD se "AAAA-MM-DD" for uma data que existe; senão, -1. */
    private static int dataComoNumero(String s) {

        if (s.length() != 10 || s.charAt(4) != '-' || s.charAt(7) != '-') {
            return -1;
        }

        int ano = lerDigitos(s, 0, 4);
        int mes = lerDigitos(s, 5, 2);
        int dia = lerDigitos(s, 8, 2);

        if (ano < 1 || mes < 1 || mes > 12 || dia < 1 || dia > diasNoMes(ano, mes)) {
            return -1;
        }

        return ano * 10000 + mes * 100 + dia;
    }

    // ------------------------------------------------------------------
    // Regras
    // ------------------------------------------------------------------

    /** Devolve a mensagem de erro, ou null se estiver tudo certo. */
    static String validar(String nome, String nascimento, int hojeAaaammdd) {

        String limpo = nome.strip();

        if (limpo.isEmpty()) {
            return "Informe o nome.";
        }

        if (limpo.codePointCount(0, limpo.length()) < 3) {
            return "O nome deve ter pelo menos 3 caracteres.";
        }

        if (nascimento.isEmpty()) {
            return "Informe a data de nascimento.";
        }

        int data = dataComoNumero(nascimento);

        if (data < 0) {
            return "Data de nascimento inválida.";
        }

        if (data > hojeAaaammdd) {
            return "A data de nascimento não pode ser futura.";
        }

        return null;
    }

    /** "nasceu em 12/04/1996 e tem 30 anos" (ou um aviso, se a data não servir). */
    String formatarNascimento() {

        if (nascimento.isEmpty()) {
            return "Sem data de nascimento.";
        }

        if (dataComoNumero(nascimento) < 0) {
            return "Data de nascimento inválida.";
        }

        StringBuilder texto = new StringBuilder("nasceu em ");

        texto.append(nascimento, 8, 10).append('/')
                .append(nascimento, 5, 7).append('/')
                .append(nascimento, 0, 4);

        if (temIdade) {
            texto.append(" e tem ").append(idade).append(idade == 1 ? " ano" : " anos");
        }

        return texto.toString();
    }
}
