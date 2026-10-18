// ========================================
// Persistência do banco no navegador (IndexedDB)
//
// O SQLite roda em memória; sem isto, tudo o que o usuário
// cadastra se perderia ao recarregar a página.
// Se o IndexedDB não estiver disponível (ex.: aba anônima
// em alguns navegadores), as funções falham em silêncio e o
// sistema continua funcionando — só sem persistência.
// ========================================

const NOME_BANCO = "datas-aniversario";
const NOME_STORE = "banco";
const CHAVE = "amigos.db";

function abrirIndexedDB() {

    return new Promise((resolve, reject) => {

        const requisicao = indexedDB.open(NOME_BANCO, 1);

        requisicao.onupgradeneeded = () => {
            requisicao.result.createObjectStore(NOME_STORE);
        };

        requisicao.onsuccess = () => resolve(requisicao.result);
        requisicao.onerror = () => reject(requisicao.error);
    });
}

async function executar(modo, operacao) {

    const conexao = await abrirIndexedDB();

    try {

        return await new Promise((resolve, reject) => {

            const transacao = conexao.transaction(NOME_STORE, modo);
            const requisicao = operacao(transacao.objectStore(NOME_STORE));

            transacao.oncomplete = () => resolve(requisicao.result);
            transacao.onerror = () => reject(transacao.error);
            transacao.onabort = () => reject(transacao.error);
        });

    } finally {

        conexao.close();
    }
}

export async function lerBancoSalvo() {

    try {

        const bytes = await executar(
            "readonly",
            store => store.get(CHAVE)
        );

        return bytes ? new Uint8Array(bytes) : null;

    } catch (erro) {

        console.warn("Não foi possível ler o banco salvo:", erro);

        return null;
    }
}

export async function gravarBancoSalvo(bytes) {

    try {

        await executar(
            "readwrite",
            store => store.put(bytes, CHAVE)
        );

        return true;

    } catch (erro) {

        console.warn("Não foi possível salvar o banco:", erro);

        return false;
    }
}

export async function apagarBancoSalvo() {

    try {

        await executar(
            "readwrite",
            store => store.delete(CHAVE)
        );

    } catch (erro) {

        console.warn("Não foi possível apagar o banco salvo:", erro);
    }
}
