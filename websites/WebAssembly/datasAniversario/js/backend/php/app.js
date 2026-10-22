// ========================================
// Backend PHP
//
// O PHP roda no navegador compilado para WebAssembly (projeto php-wasm, com a
// ponte Vrzno que deixa o PHP chamar JavaScript e usar o DOM, como o PyScript
// faz com o Python). O código-fonte do backend está em linguagens/php/ e é copiado para o
// sistema de arquivos virtual do PHP antes de rodar.
//
// O runtime tem cerca de 12 MB, então só é baixado quando o PHP é escolhido
// (veja main.js e backend/roteador.js).
// ========================================

const VERSAO_PHP = "8.3";

// Versão fixa do php-wasm (jsDelivr). Para hospedar por conta própria, copie
// os arquivos do pacote npm `php-wasm` e aponte esta constante para eles.
const URL_RUNTIME = "https://cdn.jsdelivr.net/npm/php-wasm@0.2.0/PhpWeb.mjs";

// Arquivos de linguagens/php/ que vão para o PHP, em ordem de dependência.
export const ARQUIVOS_PHP = [
    "interface/dom.php",
    "amigo.php",
    "banco_amigos.php",
    "interface/mensagens.php",
    "interface/formulario.php",
    "interface/modal.php",
    "interface/resultados.php",
    "app.php"
];

const RAIZ_VIRTUAL = "/app";

async function criarPhpWeb() {

    const { PhpWeb } = await import(URL_RUNTIME);

    return new PhpWeb({ version: VERSAO_PHP });
}

async function garantirPasta(php, caminho) {

    try {
        await php.mkdir(caminho);
    } catch {
        // já existe
    }
}

// `criarPhp` existe para os testes poderem usar o runtime do Node.
export async function carregarBackendPhp({ criarPhp = criarPhpWeb } = {}) {

    const php = await criarPhp();

    await php.binary;

    php.addEventListener("output", evento => console.log(String(evento.detail).trimEnd()));
    php.addEventListener("error", evento => console.error(String(evento.detail).trimEnd()));

    await garantirPasta(php, RAIZ_VIRTUAL);
    await garantirPasta(php, `${RAIZ_VIRTUAL}/interface`);

    for (const arquivo of ARQUIVOS_PHP) {

        const resposta = await fetch(`./linguagens/php/${arquivo}`);

        if (!resposta.ok) {
            throw new Error(`Não foi possível carregar linguagens/php/${arquivo}`);
        }

        await php.writeFile(`${RAIZ_VIRTUAL}/${arquivo}`, await resposta.text());
    }

    await php.run(`<?php require '${RAIZ_VIRTUAL}/app.php';`);

    // app.php deixa o backend pronto em window.backendPhp.
    const backend = window.backendPhp;

    delete window.backendPhp;

    if (!backend) {
        throw new Error("O PHP não registrou o backend (veja o console)");
    }

    return backend;
}
