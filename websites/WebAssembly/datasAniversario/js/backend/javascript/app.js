import { Amigo } from "./amigo.js";
import { bancoAmigos } from "./bancoAmigos.js";
import { exibirMensagem } from "./mensagens.js";
import { exibirResultados } from "./resultados.js";
import { limparFormulario, preencherFormulario } from "./formulario.js";

import {
    abrirModalExclusao,
    fecharModal,
    confirmarExclusao,
    cancelarExclusao,
    escape
} from "./modal.js";

// ========================================
// Backend JavaScript
//
// Mesma responsabilidade do backend Python (python/app.py):
// busca, cadastro, edição e exclusão. O roteador
// (js/backend/roteador.js) liga os botões da tela a estas ações
// quando JavaScript é a linguagem escolhida.
// ========================================

const ORDEM_PADRAO = "nome_asc";

// Quando não é null, o botão salva alterações em vez de cadastrar.
let idEmEdicao = null;

function elemento(seletor) {
    return document.querySelector(seletor);
}

// ----------------------------------------
// Callbacks dos botões Editar / Excluir
// ----------------------------------------

function criarCallbackExclusao(idAmigo, nome) {

    return () => abrirModalExclusao(
        nome,
        () => excluir(idAmigo, nome)
    );
}

function criarCallbackEdicao(idAmigo, nome, nascimento) {

    return () => editar(
        idAmigo,
        nome,
        nascimento ? String(nascimento) : ""
    );
}

// ----------------------------------------
// Edição
// ----------------------------------------

function editar(idAmigo, nome, nascimento) {

    idEmEdicao = idAmigo;

    preencherFormulario(nome, nascimento);
}

function cancelarEdicao() {

    idEmEdicao = null;

    limparFormulario();

    elemento("#mensagem-cadastro").replaceChildren();
}

// ----------------------------------------
// Cadastro, alteração e exclusão
// ----------------------------------------

function cadastrar() {

    const nome = elemento("#nome").value.trim();
    const nascimento = elemento("#nascimento").value;
    const mensagem = elemento("#mensagem-cadastro");

    const amigo = new Amigo(idEmEdicao, nome, nascimento);

    mensagem.replaceChildren();

    const erro = amigo.validar();

    if (erro) {

        exibirMensagem(mensagem, erro);

        return;
    }

    try {

        const emEdicao = idEmEdicao !== null;

        const resultado = emEdicao
            ? bancoAmigos.atualizar(idEmEdicao, nome, nascimento)
            : bancoAmigos.inserir(nome, nascimento);

        if (resultado.status === "DUPLICADO") {

            exibirMensagem(mensagem, "Essa pessoa já está cadastrada.");

            return;
        }

        // Sai do modo de edição: sem isto, o próximo cadastro
        // sobrescreveria a pessoa que acabou de ser editada.
        idEmEdicao = null;

        limparFormulario();

        exibirMensagem(
            mensagem,
            emEdicao
                ? "Alteração realizada com sucesso!"
                : "Cadastro realizado com sucesso!"
        );

        atualizarLista();

    } catch (erro) {

        exibirMensagem(mensagem, `Erro ao cadastrar: ${erro.message}`);
    }
}

function excluir(idAmigo, nome) {

    const mensagem = elemento("#mensagem-cadastro");

    try {

        const resultado = bancoAmigos.excluir(idAmigo);

        if (resultado.status === "EXCLUIDO") {

            // Se a pessoa excluída estava aberta para edição,
            // encerra a edição para não recriar nem alterar nada.
            if (idEmEdicao === idAmigo) {
                cancelarEdicao();
            }

            exibirMensagem(mensagem, `${nome} foi excluído com sucesso!`);

            atualizarLista();
        }

    } catch (erro) {

        exibirMensagem(mensagem, `Erro ao excluir: ${erro.message}`);
    }
}

// ----------------------------------------
// Busca, filtros e ordenação
// ----------------------------------------

function executarBusca(
    busca,
    ordem = ORDEM_PADRAO,
    idadeMinima = "",
    idadeMaxima = ""
) {

    try {

        const resultados = bancoAmigos.buscar(
            busca,
            ordem,
            idadeMinima,
            idadeMaxima
        );

        exibirResultados(
            resultados,
            busca,
            criarCallbackEdicao,
            criarCallbackExclusao,
            Boolean(idadeMinima || idadeMaxima)
        );

    } catch (erro) {

        exibirMensagem(
            elemento("#resultados"),
            `Erro ao realizar a busca: ${erro.message}`
        );
    }
}

// Refaz a busca respeitando busca, ordem e filtros de idade atuais.
function atualizarLista() {

    executarBusca(
        elemento("#busca").value.trim(),
        elemento("#ordem").value || ORDEM_PADRAO,
        elemento("#idade_minima").value,
        elemento("#idade_maxima").value
    );
}

function buscar() {

    elemento("#mensagem-cadastro").replaceChildren();

    atualizarLista();
}

function listarTodos() {

    elemento("#busca").value = "";
    elemento("#idade_minima").value = "";
    elemento("#idade_maxima").value = "";

    atualizarLista();
}

function limparFiltros() {

    elemento("#mensagem-cadastro").replaceChildren();

    elemento("#busca").value = "";
    elemento("#idade_minima").value = "";
    elemento("#idade_maxima").value = "";
    elemento("#ordem").value = ORDEM_PADRAO;

    atualizarLista();
}

// ----------------------------------------
// Contrato com o roteador
// ----------------------------------------

export const backendJavaScript = {

    nome: "javascript",

    ativar() {
        atualizarLista();
    },

    desativar() {

        cancelarEdicao();

        fecharModal();
    },

    acoes: {
        buscar,
        ordenar: buscar,
        listar_todos: listarTodos,
        limpar_filtros: limparFiltros,
        cadastrar,
        cancelar_edicao: cancelarEdicao,
        confirmar_exclusao: confirmarExclusao,
        cancelar_exclusao: cancelarExclusao,
        escape
    }
};
