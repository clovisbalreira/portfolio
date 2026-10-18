import { consultarAmigos } from "../../select/consultarAmigos.js";
import { inserirAmigo } from "../../insert/inserirAmigo.js";
import { atualizarAmigo } from "../../update/atualizarAmigo.js";
import { excluirAmigo } from "../../delete/excluirAmigo.js";

// ========================================
// Host dos backends WebAssembly (C e Java)
//
// Os módulos C (c/app.wasm) e Java (java/app.wasm) não enxergam a página nem
// o banco. Estas são as funções que eles importam (contratos em c/src/host.h
// e java/src/amigos/Host.java; o contrato é o mesmo). São primitivas: toda
// decisão (validar, formatar, mensagens, edição, modal) fica na linguagem.
// ========================================

const SEPARADOR_CAMPO = "\x1f";
const SEPARADOR_REGISTRO = "\x1e";

export function criarHost() {

    let memoria = null;
    let exportacoes = null;

    const decodificador = new TextDecoder("utf-8");
    const codificador = new TextEncoder();

    // Elementos da página que o C manipula, por número (handle).
    // 0 = nenhum. Elementos criados pelo C são soltos com dom_soltar().
    const nos = [null];
    const livres = [];
    const nosPorId = new Map();

    // Texto/erro que o C vai buscar com host_copiar().
    let pendente = new Uint8Array(0);

    // ------------------------------------
    // Memória do módulo
    // ------------------------------------

    function ler(ponteiro, tamanho) {

        return decodificador.decode(
            new Uint8Array(memoria.buffer, ponteiro, tamanho)
        );
    }

    function guardar(texto) {

        pendente = codificador.encode(texto);

        return pendente.length;
    }

    function limparSeparadores(texto) {

        return texto.replaceAll(SEPARADOR_CAMPO, " ")
            .replaceAll(SEPARADOR_REGISTRO, " ");
    }

    // ------------------------------------
    // Handles
    // ------------------------------------

    function registrarNo(no) {

        if (livres.length > 0) {

            const handle = livres.pop();

            nos[handle] = no;

            return handle;
        }

        nos.push(no);

        return nos.length - 1;
    }

    function no(handle) {

        const elemento = nos[handle];

        if (!elemento) {
            throw new Error(`Handle de elemento inválido: ${handle}`);
        }

        return elemento;
    }

    // ------------------------------------
    // Banco: erros viram -1 + mensagem guardada
    // ------------------------------------

    function protegido(operacao) {

        try {

            return operacao();

        } catch (erro) {

            guardar(erro.message);

            return -1;
        }
    }

    function registroParaTexto(amigo) {

        const nascimento = amigo.nascimento === null || amigo.nascimento === undefined
            ? ""
            : String(amigo.nascimento);

        const idade = amigo.idade === null || amigo.idade === undefined
            ? ""
            : String(amigo.idade);

        return [
            amigo.id,
            limparSeparadores(String(amigo.nome)),
            limparSeparadores(nascimento),
            idade
        ].join(SEPARADOR_CAMPO) + SEPARADOR_REGISTRO;
    }

    // ------------------------------------
    // Importações do módulo C
    // ------------------------------------

    const importacoes = {

        // ---- DOM ----

        dom_por_id(ponteiro, tamanho) {

            const id = ler(ponteiro, tamanho);

            if (!nosPorId.has(id)) {

                const elemento = document.getElementById(id);

                if (!elemento) {
                    throw new Error(`Elemento #${id} não existe na página`);
                }

                nosPorId.set(id, registrarNo(elemento));
            }

            return nosPorId.get(id);
        },

        dom_criar(ponteiro, tamanho) {
            return registrarNo(document.createElement(ler(ponteiro, tamanho)));
        },

        dom_criar_texto(ponteiro, tamanho) {
            return registrarNo(document.createTextNode(ler(ponteiro, tamanho)));
        },

        dom_anexar(pai, filho) {
            no(pai).appendChild(no(filho));
        },

        dom_limpar(handle) {
            no(handle).replaceChildren();
        },

        dom_soltar(handle) {

            // Só os elementos criados pelo C são soltos; os da página
            // (por id) ficam guardados.
            if (handle > 0 && nos[handle] && !nosPorId.has(nos[handle].id)) {
                nos[handle] = null;
                livres.push(handle);
            }
        },

        dom_def_texto(handle, ponteiro, tamanho) {
            no(handle).textContent = ler(ponteiro, tamanho);
        },

        dom_def_valor(handle, ponteiro, tamanho) {
            no(handle).value = ler(ponteiro, tamanho);
        },

        dom_def_classe(handle, ponteiro, tamanho) {
            no(handle).className = ler(ponteiro, tamanho);
        },

        dom_def_atributo(handle, np, nn, vp, vn) {
            no(handle).setAttribute(ler(np, nn), ler(vp, vn));
        },

        dom_def_oculto(handle, oculto) {
            no(handle).hidden = oculto !== 0;
        },

        dom_def_exibicao(handle, ponteiro, tamanho) {
            no(handle).style.display = ler(ponteiro, tamanho);
        },

        dom_focar(handle) {
            no(handle).focus();
        },

        dom_ao_clicar(handle, callback) {

            no(handle).addEventListener("click", () => {

                try {
                    exportacoes.ao_clicar(callback);
                } catch (erro) {
                    console.error("Erro no backend C (ao_clicar):", erro);
                }
            });
        },

        dom_ler_valor(handle) {
            return guardar(String(no(handle).value ?? ""));
        },

        // ---- Banco ----

        db_buscar(np, nn, op, on, mnp, mnn, mxp, mxn) {

            return protegido(() => guardar(
                consultarAmigos(
                    ler(np, nn),
                    ler(op, on),
                    ler(mnp, mnn),
                    ler(mxp, mxn)
                ).map(registroParaTexto).join("")
            ));
        },

        db_inserir(np, nn, dp, dn) {

            return protegido(() =>
                inserirAmigo(ler(np, nn), ler(dp, dn)).status === "DUPLICADO"
                    ? 1
                    : 0
            );
        },

        db_atualizar(id, np, nn, dp, dn) {

            return protegido(() =>
                atualizarAmigo(id, ler(np, nn), ler(dp, dn)).status === "DUPLICADO"
                    ? 1
                    : 0
            );
        },

        db_excluir(id) {

            return protegido(() => {

                excluirAmigo(id);

                return 0;
            });
        },

        // ---- Utilidades ----

        host_tamanho() {
            return pendente.length;
        },

        host_copiar(destino) {
            new Uint8Array(memoria.buffer).set(pendente, destino);
        },

        // Erros inesperados do módulo (usado pelo backend Java).
        host_log(ponteiro, tamanho) {
            console.error(ler(ponteiro, tamanho));
        },

        // Data local no formato AAAAMMDD.
        host_hoje() {

            const hoje = new Date();

            return hoje.getFullYear() * 10000
                + (hoje.getMonth() + 1) * 100
                + hoje.getDate();
        }
    };

    return {

        importacoes,

        // Para diagnóstico/testes: tamanho da tabela de elementos.
        diagnostico: () => ({ nos: nos.length, livres: livres.length }),

        // Chamado depois de instanciar o módulo.
        conectar(exportacoesDoModulo) {

            exportacoes = exportacoesDoModulo;
            memoria = exportacoesDoModulo.memory;
        }
    };
}
