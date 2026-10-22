package amigos;

import java.nio.charset.StandardCharsets;

import org.teavm.interop.Address;
import org.teavm.interop.Import;

/**
 * Contrato com o navegador (implementado em js/backend/wasm/host.js,
 * o mesmo usado pelo backend C).
 *
 * O módulo Java não enxerga a página nem o banco. Tudo o que ele precisa do
 * navegador vem destas funções importadas. São primitivas "burras": toda
 * decisão (validar, formatar, escolher mensagens, controlar edição e modal)
 * fica no Java.
 *
 * - Texto: UTF-8, passado como (endereço, tamanho).
 * - Elementos da página: números inteiros (handles); 0 = nenhum.
 * - Funções que devolvem texto/erro guardam o texto no navegador e devolvem
 *   o tamanho; depois o Java chama hostCopiar() para receber os bytes.
 *
 * As anotações @Import/@Export e a classe Address são do TeaVM, o compilador
 * que transforma este Java em WebAssembly.
 */
final class Host {

    private Host() {
    }

    /** Erro devolvido pelo navegador (ex.: falha no banco). */
    static final class ErroHost extends RuntimeException {
        private static final long serialVersionUID = 1L;

        ErroHost(String mensagem) {
            super(mensagem);
        }
    }

    // ------------------------------------------------------------------
    // Funções importadas do navegador
    // ------------------------------------------------------------------

    @Import(module = "env", name = "dom_por_id")
    private static native int domPorId(Address id, int n);

    @Import(module = "env", name = "dom_criar")
    private static native int domCriar(Address tag, int n);

    @Import(module = "env", name = "dom_criar_texto")
    private static native int domCriarTexto(Address texto, int n);

    @Import(module = "env", name = "dom_anexar")
    private static native void domAnexar(int pai, int filho);

    @Import(module = "env", name = "dom_limpar")
    private static native void domLimpar(int elemento);

    @Import(module = "env", name = "dom_soltar")
    private static native void domSoltar(int elemento);

    @Import(module = "env", name = "dom_def_texto")
    private static native void domDefTexto(int elemento, Address t, int n);

    @Import(module = "env", name = "dom_def_valor")
    private static native void domDefValor(int elemento, Address t, int n);

    @Import(module = "env", name = "dom_def_classe")
    private static native void domDefClasse(int elemento, Address t, int n);

    @Import(module = "env", name = "dom_def_atributo")
    private static native void domDefAtributo(int elemento, Address nome, int nn, Address valor, int vn);

    @Import(module = "env", name = "dom_def_oculto")
    private static native void domDefOculto(int elemento, int oculto);

    @Import(module = "env", name = "dom_def_exibicao")
    private static native void domDefExibicao(int elemento, Address t, int n);

    @Import(module = "env", name = "dom_focar")
    private static native void domFocar(int elemento);

    @Import(module = "env", name = "dom_ao_clicar")
    private static native void domAoClicar(int elemento, int callback);

    @Import(module = "env", name = "dom_ler_valor")
    private static native int domLerValor(int elemento);

    @Import(module = "env", name = "db_buscar")
    private static native int dbBuscar(Address nome, int nn, Address ordem, int on,
            Address minima, int mn, Address maxima, int xn);

    @Import(module = "env", name = "db_inserir")
    private static native int dbInserir(Address nome, int nn, Address nascimento, int dn);

    @Import(module = "env", name = "db_atualizar")
    private static native int dbAtualizar(int id, Address nome, int nn, Address nascimento, int dn);

    @Import(module = "env", name = "db_excluir")
    private static native int dbExcluir(int id);

    @Import(module = "env", name = "host_tamanho")
    private static native int hostTamanho();

    @Import(module = "env", name = "host_copiar")
    private static native void hostCopiar(Address destino);

    @Import(module = "env", name = "host_log")
    private static native void hostLog(Address texto, int n);

    /** Data local no formato AAAAMMDD. */
    @Import(module = "env", name = "host_hoje")
    static native int hoje();

    // ------------------------------------------------------------------
    // Textos entre Java e navegador
    // ------------------------------------------------------------------

    /** Recebe do navegador o texto que ele guardou (tamanho em bytes). */
    private static String receber(int tamanho) {

        byte[] bytes = new byte[tamanho];

        hostCopiar(Address.ofData(bytes));

        return new String(bytes, StandardCharsets.UTF_8);
    }

    /** Escreve no console do navegador (erros inesperados). */
    static void registrarErro(String texto) {
        byte[] b = texto.getBytes(StandardCharsets.UTF_8);
        hostLog(Address.ofData(b), b.length);
    }

    /** Texto guardado pelo navegador numa função que falhou. */
    private static ErroHost erro() {
        return new ErroHost(receber(hostTamanho()));
    }

    // ------------------------------------------------------------------
    // DOM
    // ------------------------------------------------------------------

    static int elemento(String id) {
        byte[] b = id.getBytes(StandardCharsets.UTF_8);
        return domPorId(Address.ofData(b), b.length);
    }

    static int criar(String tag) {
        byte[] b = tag.getBytes(StandardCharsets.UTF_8);
        return domCriar(Address.ofData(b), b.length);
    }

    static int criarTexto(String texto) {
        byte[] b = texto.getBytes(StandardCharsets.UTF_8);
        return domCriarTexto(Address.ofData(b), b.length);
    }

    static void anexar(int pai, int filho) {
        domAnexar(pai, filho);
    }

    /** Anexa e solta o handle do filho (o elemento continua na página). */
    static void anexarESoltar(int pai, int filho) {
        domAnexar(pai, filho);
        domSoltar(filho);
    }

    static void limpar(int elemento) {
        domLimpar(elemento);
    }

    static void soltar(int elemento) {
        domSoltar(elemento);
    }

    static void definirTexto(int elemento, String texto) {
        byte[] b = texto.getBytes(StandardCharsets.UTF_8);
        domDefTexto(elemento, Address.ofData(b), b.length);
    }

    static void definirValor(int elemento, String texto) {
        byte[] b = texto.getBytes(StandardCharsets.UTF_8);
        domDefValor(elemento, Address.ofData(b), b.length);
    }

    static void definirClasse(int elemento, String classe) {
        byte[] b = classe.getBytes(StandardCharsets.UTF_8);
        domDefClasse(elemento, Address.ofData(b), b.length);
    }

    static void definirAtributo(int elemento, String nome, String valor) {
        byte[] n = nome.getBytes(StandardCharsets.UTF_8);
        byte[] v = valor.getBytes(StandardCharsets.UTF_8);
        domDefAtributo(elemento, Address.ofData(n), n.length, Address.ofData(v), v.length);
    }

    static void definirOculto(int elemento, boolean oculto) {
        domDefOculto(elemento, oculto ? 1 : 0);
    }

    static void definirExibicao(int elemento, String exibicao) {
        byte[] b = exibicao.getBytes(StandardCharsets.UTF_8);
        domDefExibicao(elemento, Address.ofData(b), b.length);
    }

    static void focar(int elemento) {
        domFocar(elemento);
    }

    /** O clique volta ao Java pela função exportada aoClicar(callback). */
    static void aoClicar(int elemento, int callback) {
        domAoClicar(elemento, callback);
    }

    static String lerValor(int elemento) {
        return receber(domLerValor(elemento));
    }

    // ------------------------------------------------------------------
    // Banco de dados
    // ------------------------------------------------------------------

    /**
     * Registros no formato: id US nome US nascimento US idade RS
     * (US = U+001F, RS = U+001E).
     */
    static String buscar(String nome, String ordem, String minima, String maxima) {

        byte[] n = nome.getBytes(StandardCharsets.UTF_8);
        byte[] o = ordem.getBytes(StandardCharsets.UTF_8);
        byte[] mn = minima.getBytes(StandardCharsets.UTF_8);
        byte[] mx = maxima.getBytes(StandardCharsets.UTF_8);

        int tamanho = dbBuscar(Address.ofData(n), n.length, Address.ofData(o), o.length,
                Address.ofData(mn), mn.length, Address.ofData(mx), mx.length);

        if (tamanho < 0) {
            throw erro();
        }

        return receber(tamanho);
    }

    /** Devolve true se já existir alguém com esse nome (duplicado). */
    static boolean inserir(String nome, String nascimento) {

        byte[] n = nome.getBytes(StandardCharsets.UTF_8);
        byte[] d = nascimento.getBytes(StandardCharsets.UTF_8);

        int resultado = dbInserir(Address.ofData(n), n.length, Address.ofData(d), d.length);

        if (resultado < 0) {
            throw erro();
        }

        return resultado == 1;
    }

    /** Devolve true se o novo nome já pertencer a outra pessoa (duplicado). */
    static boolean atualizar(int id, String nome, String nascimento) {

        byte[] n = nome.getBytes(StandardCharsets.UTF_8);
        byte[] d = nascimento.getBytes(StandardCharsets.UTF_8);

        int resultado = dbAtualizar(id, Address.ofData(n), n.length, Address.ofData(d), d.length);

        if (resultado < 0) {
            throw erro();
        }

        return resultado == 1;
    }

    static void excluir(int id) {

        if (dbExcluir(id) < 0) {
            throw erro();
        }
    }
}
