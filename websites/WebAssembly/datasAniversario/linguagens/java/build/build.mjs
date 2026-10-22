// ========================================================================
// Compila linguagens/java/src (Java) para linguagens/java/app.wasm (WebAssembly) com o TeaVM.
//
// Uso (dentro de linguagens/java/build):
//     npm install        # baixa o compilador TeaVM (em WebAssembly)
//     npm run build
//
// Requisitos: Node 22+ (WasmGC) e um JDK 17+ com `javac` no PATH.
//
// Etapas:
//   1. javac do JDK compila linguagens/java/src -> .class (aceita as anotações do TeaVM);
//   2. o backend do TeaVM transforma os .class em linguagens/java/app.wasm;
//   3. confere se o módulo importa/exporta exatamente o contrato esperado.
// ========================================================================

import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { compileJavaModule, defaults, hasStringBuiltins } from "./java-compiler-runtime.mjs";
import { jsBodyFactories } from "./java-compiler-bindings.mjs";

const aqui = path.dirname(fileURLToPath(import.meta.url));
const raizJava = path.resolve(aqui, "..");
const origem = path.join(raizJava, "src");
const destino = path.join(raizJava, "app.wasm");

const CLASSE_PRINCIPAL = "amigos.App";
const OTIMIZACAO = "release";

// Arquivos do pacote @wasm-oj/toolchain-java 0.2.0 e seus SHA-256.
const ASSETS = {
    compilador: ["java-teavm-0.13.1.compiler.wasm",
        "8c37bce1c6fceeaffeffe93e10834309b67c8b6fb58c6f8a24547afe8be67f5d"],
    classlib: ["java-teavm-0.13.1.runtime-classlib.bin",
        "0ed234b66cdde19cb29e6c2865a3636d792d3cf72f102e73a7b3fdede80b79e6"]
};

// Funções que o módulo pode importar do navegador (js/backend/wasm/host.js)
// e do WASI (js/backend/java/wasi.js).
const IMPORTS_ENV = new Set([
    "dom_por_id", "dom_criar", "dom_criar_texto", "dom_anexar", "dom_limpar", "dom_soltar",
    "dom_def_texto", "dom_def_valor", "dom_def_classe", "dom_def_atributo", "dom_def_oculto",
    "dom_def_exibicao", "dom_focar", "dom_ao_clicar", "dom_ler_valor",
    "db_buscar", "db_inserir", "db_atualizar", "db_excluir",
    "host_tamanho", "host_copiar", "host_hoje", "host_log"
]);

const IMPORTS_WASI = new Set([
    "args_sizes_get", "args_get", "environ_sizes_get", "environ_get", "clock_time_get",
    "fd_write", "fd_close", "fd_seek", "fd_fdstat_get", "fd_read", "random_get", "proc_exit"
]);

const EXPORTS_ESPERADOS = [
    "memory", "_start", "ativar", "desativar", "ao_clicar",
    "acao_buscar", "acao_ordenar", "acao_listar_todos", "acao_limpar_filtros",
    "acao_cadastrar", "acao_cancelar_edicao", "acao_confirmar_exclusao",
    "acao_cancelar_exclusao", "acao_escape"
];

function falhar(mensagem) {
    console.error(`\nERRO: ${mensagem}`);
    process.exit(1);
}

// ---------------------------------------------------------------- assets

function localizarAssets() {

    const candidatos = [
        process.env.JAVA_TOOLCHAIN_DIR,
        path.join(aqui, "node_modules", "@wasm-oj", "toolchain-java", "assets")
    ].filter(Boolean);

    for (const pasta of candidatos) {
        if (fs.existsSync(path.join(pasta, ASSETS.compilador[0]))) {
            return pasta;
        }
    }

    falhar("compilador TeaVM não encontrado. Rode `npm install` em linguagens/java/build " +
        "(ou defina JAVA_TOOLCHAIN_DIR).");
}

function lerAsset(pasta, [nome, sha256]) {

    const bytes = fs.readFileSync(path.join(pasta, nome));
    const obtido = createHash("sha256").update(bytes).digest("hex");

    if (obtido !== sha256) {
        falhar(`${nome} não confere com o SHA-256 esperado.`);
    }

    return bytes;
}

// ---------------------------------------------------------------- container

// Container de classes: repetição de [u16 tamanho do nome][nome][u32 tamanho][bytes].
function lerContainer(buf) {

    const entradas = [];
    let i = 0;

    while (i < buf.length) {

        const n = buf.readUInt16BE(i); i += 2;
        const nome = buf.toString("utf8", i, i + n); i += n;
        const t = buf.readUInt32BE(i); i += 4;

        entradas.push([nome, buf.subarray(i, i + t)]);

        i += t;
    }

    return entradas;
}

// ---------------------------------------------------------------- etapas

function extrairInterop(classlib, pasta) {

    // O javac do JDK precisa das anotações/classes org.teavm.interop (Import, Export, Address).
    for (const [nome, dados] of lerContainer(classlib)) {

        if (nome.startsWith("org/teavm/interop/") && nome.endsWith(".class")) {

            const arquivo = path.join(pasta, nome);

            fs.mkdirSync(path.dirname(arquivo), { recursive: true });
            fs.writeFileSync(arquivo, dados);
        }
    }
}

function listar(pasta, extensao) {

    const achados = [];

    for (const e of fs.readdirSync(pasta, { withFileTypes: true })) {

        const caminho = path.join(pasta, e.name);

        if (e.isDirectory()) {
            achados.push(...listar(caminho, extensao));
        } else if (e.name.endsWith(extensao)) {
            achados.push(caminho);
        }
    }

    return achados.sort();
}

function compilarComJdk(interop, saida) {

    const fontes = listar(origem, ".java");

    if (fontes.length === 0) {
        falhar(`nenhum .java em ${origem}`);
    }

    try {

        execFileSync("javac", [
            "--release", "17", "-Xlint:all", "-Werror", "-encoding", "UTF-8",
            "-cp", interop, "-d", saida, ...fontes
        ], { stdio: ["ignore", "pipe", "pipe"] });

    } catch (erro) {

        if (erro.code === "ENOENT") {
            falhar("`javac` não encontrado. Instale um JDK 17 ou superior.");
        }

        falhar(`javac falhou:\n${erro.stderr || erro.message}`);
    }

    return listar(saida, ".class").map(arquivo => [path.relative(saida, arquivo), fs.readFileSync(arquivo)]);
}

async function carregarMotor(bytesCompilador) {

    const modulo = await compileJavaModule(bytesCompilador);

    const imports = {};
    const exportacoes = {};

    const contexto = defaults(imports, exportacoes, { jsBodyFactories }, modulo, await hasStringBuiltins());

    const instancia = await WebAssembly.instantiate(modulo, imports);

    contexto.supplyExports(instancia.exports);

    for (const [nome, valor] of Object.entries(instancia.exports)) {
        if (valor instanceof WebAssembly.Global) {
            Object.defineProperty(exportacoes, nome, { get: () => valor.value });
        }
    }

    return exportacoes;
}

async function gerarWasm(motor, classlib, classes) {

    const compilador = motor.createCompiler();

    compilador.setTeaVMClasslib(new Int8Array(classlib.buffer, classlib.byteOffset, classlib.byteLength));

    const problemas = [];

    compilador.onDiagnostic(d => {
        if (d.severity === "error") {
            problemas.push(`${d.type}: ${d.message}`);
        }
    });

    for (const [nome, dados] of classes) {
        compilador.addOutputClassFile(nome, new Int8Array(dados.buffer, dados.byteOffset, dados.byteLength));
    }

    let ok;

    try {
        ok = compilador.generateWebAssembly({
            mainClass: CLASSE_PRINCIPAL, outputName: "app", optimization: OTIMIZACAO
        });
    } catch (erro) {
        falhar(`o TeaVM falhou: ${erro.message}`);
    }

    if (!ok || problemas.length > 0) {
        falhar(`o TeaVM reportou erros:\n  ${problemas.join("\n  ")}`);
    }

    const saida = compilador.getWebAssemblyOutputFile("app");

    if (!saida) {
        falhar("o TeaVM não gerou app.wasm");
    }

    return Uint8Array.from(saida);
}

async function conferirContrato(wasm) {

    const modulo = await WebAssembly.compile(wasm);

    const imports = WebAssembly.Module.imports(modulo);
    const exportados = new Set(WebAssembly.Module.exports(modulo).map(e => e.name));

    const inesperados = imports.filter(i =>
        !((i.module === "env" && IMPORTS_ENV.has(i.name))
            || (i.module === "wasi_snapshot_preview1" && IMPORTS_WASI.has(i.name))));

    if (inesperados.length > 0) {
        falhar("o módulo importa funções fora do contrato:\n  " +
            inesperados.map(i => `${i.module}.${i.name}`).join("\n  "));
    }

    const faltando = EXPORTS_ESPERADOS.filter(nome => !exportados.has(nome));

    if (faltando.length > 0) {
        falhar(`o módulo não exporta: ${faltando.join(", ")}`);
    }

    return imports.length;
}

// ---------------------------------------------------------------- principal

const pastaAssets = localizarAssets();

const bytesCompilador = lerAsset(pastaAssets, ASSETS.compilador);
const classlib = lerAsset(pastaAssets, ASSETS.classlib);

const temporaria = fs.mkdtempSync(path.join(os.tmpdir(), "java-build-"));

try {

    console.log("1/3 javac (JDK) ...");

    const interop = path.join(temporaria, "interop");
    const saida = path.join(temporaria, "classes");

    extrairInterop(classlib, interop);

    const classes = compilarComJdk(interop, saida);

    console.log(`    ${classes.length} classes`);

    console.log("2/3 TeaVM -> WebAssembly ...");

    const motor = await carregarMotor(bytesCompilador);
    const wasm = await gerarWasm(motor, classlib, classes);

    console.log("3/3 conferindo imports/exports ...");

    const quantidade = await conferirContrato(wasm);

    fs.writeFileSync(destino, wasm);

    console.log(`\nOK: ${path.relative(process.cwd(), destino) || destino} ` +
        `(${(wasm.length / 1024).toFixed(1)} KB, ${quantidade} imports)`);

} finally {

    fs.rmSync(temporaria, { recursive: true, force: true });
}
