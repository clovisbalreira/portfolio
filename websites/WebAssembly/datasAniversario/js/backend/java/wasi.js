// ========================================
// WASI mínimo para o módulo Java
//
// O TeaVM gera um módulo WASI (wasi_snapshot_preview1). Aqui o navegador
// oferece só o necessário para ele iniciar e para System.out/System.err
// irem ao console. Não há sistema de arquivos.
//
// ATENÇÃO: como em qualquer WASI real, argv[0] (o nome do programa) é
// obrigatório. Com zero argumentos o runtime do TeaVM corrompe o próprio heap
// e o módulo quebra no primeiro ciclo do coletor de lixo.
// ========================================

const NOME_DO_PROGRAMA = "app";

const ERRNO_SUCESSO = 0;
const ERRNO_BADF = 8;
const ERRNO_NOSYS = 52;

export function criarWasi() {

    let memoria = null;

    const decodificador = new TextDecoder("utf-8");
    const argumento0 = new TextEncoder().encode(NOME_DO_PROGRAMA + "\0");

    // System.out / System.err chegam em pedaços; mostra linha a linha.
    const pendentes = { 1: "", 2: "" };

    function visao() {
        return new DataView(memoria.buffer);
    }

    function descarregar(fd, tudo) {

        const registrar = fd === 2 ? console.error : console.log;

        let texto = pendentes[fd];
        let quebra = texto.indexOf("\n");

        while (quebra >= 0) {

            registrar(texto.slice(0, quebra));

            texto = texto.slice(quebra + 1);
            quebra = texto.indexOf("\n");
        }

        if (tudo && texto) {
            registrar(texto);
            texto = "";
        }

        pendentes[fd] = texto;
    }

    const importacoes = {

        args_sizes_get(ponteiroQuantidade, ponteiroTamanho) {

            visao().setUint32(ponteiroQuantidade, 1, true);
            visao().setUint32(ponteiroTamanho, argumento0.length, true);

            return ERRNO_SUCESSO;
        },

        args_get(ponteiroArgv, ponteiroTexto) {

            visao().setUint32(ponteiroArgv, ponteiroTexto, true);

            new Uint8Array(memoria.buffer).set(argumento0, ponteiroTexto);

            return ERRNO_SUCESSO;
        },

        environ_sizes_get(ponteiroQuantidade, ponteiroTamanho) {

            visao().setUint32(ponteiroQuantidade, 0, true);
            visao().setUint32(ponteiroTamanho, 0, true);

            return ERRNO_SUCESSO;
        },

        environ_get() {
            return ERRNO_SUCESSO;
        },

        clock_time_get(id, precisao, ponteiroSaida) {

            // Relógio em nanossegundos (o mesmo para realtime e monotônico).
            const agora = BigInt(Math.round(performance.timeOrigin * 1e6))
                + BigInt(Math.round(performance.now() * 1e6));

            visao().setBigUint64(ponteiroSaida, agora, true);

            return ERRNO_SUCESSO;
        },

        fd_write(fd, ponteiroIovs, quantidade, ponteiroEscritos) {

            if (fd !== 1 && fd !== 2) {
                return ERRNO_BADF;
            }

            const v = visao();

            let total = 0;

            for (let i = 0; i < quantidade; i++) {

                const inicio = v.getUint32(ponteiroIovs + i * 8, true);
                const tamanho = v.getUint32(ponteiroIovs + i * 8 + 4, true);

                pendentes[fd] += decodificador.decode(
                    new Uint8Array(memoria.buffer, inicio, tamanho),
                    { stream: true }
                );

                total += tamanho;
            }

            v.setUint32(ponteiroEscritos, total, true);

            descarregar(fd, false);

            return ERRNO_SUCESSO;
        },

        fd_close: () => ERRNO_SUCESSO,
        fd_seek: () => ERRNO_NOSYS,
        fd_fdstat_get: () => ERRNO_BADF,
        fd_read: () => ERRNO_BADF,

        random_get(ponteiro, tamanho) {

            crypto.getRandomValues(new Uint8Array(memoria.buffer, ponteiro, tamanho));

            return ERRNO_SUCESSO;
        },

        proc_exit(codigo) {
            throw new Error(`O módulo Java encerrou (código ${codigo})`);
        }
    };

    return {

        importacoes,

        conectar(memoriaDoModulo) {
            memoria = memoriaDoModulo;
        },

        descarregar() {
            descarregar(1, true);
            descarregar(2, true);
        }
    };
}
