import { carregarBanco } from "./conexao/database.js";

import {
    iniciarRoteador,
    registrar,
    registrarFalha,
    bancoFicouPronto
} from "./backend/roteador.js";

import { backendJavaScript } from "./backend/javascript/app.js";
import { carregarBackendC } from "./backend/c/app.js";
import { carregarBackendJava } from "./backend/java/app.js";
import { exporPontePython } from "./backend/pontePython.js";

import { iniciarAbas } from "./abas.js";
import { iniciarVisualizador } from "./visualizador.js";
import { iniciarBackup } from "./backup.js";

// ========================================
// Backends
//
// O sistema pode rodar em Python, JavaScript, C ou Java, conforme a
// linguagem escolhida no seletor (veja backend/roteador.js).
// ========================================

// O Python (PyScript) chama a ponte por `window` e se registra sozinho
// com window.backends.registrar("python", ...) quando terminar de carregar.
exporPontePython();

window.backends = { registrar };

registrar("javascript", backendJavaScript);

// C e Java são módulos WebAssembly pequenos: carregam logo e se registram
// quando estiverem prontos (o roteador só ativa o que for escolhido).
function registrarAssincrono(nome, carregar) {

    carregar()
        .then(backend => registrar(nome, backend))
        .catch(erro => {

            console.error(`Erro ao carregar o backend ${nome}:`, erro);

            registrarFalha(nome, erro.message);
        });
}

registrarAssincrono("c", carregarBackendC);
registrarAssincrono("java", carregarBackendJava);

// ========================================
// Interface do portfólio
// (iniciada antes do banco: não depende dele)
// ========================================

iniciarRoteador();
iniciarAbas();
iniciarVisualizador();
iniciarBackup();

// ========================================
// Banco de dados
// ========================================

window.addEventListener("load", async () => {

    try {

        await carregarBanco();

        bancoFicouPronto();

    } catch (erro) {

        console.error("ERRO AO CARREGAR BANCO:", erro);

        const resultados = document.getElementById("resultados");

        const aviso = document.createElement("p");

        aviso.className = "mensagem";
        aviso.textContent =
            `Não foi possível carregar o banco de dados: ${erro.message}`;

        resultados.replaceChildren(aviso);
    }
});
