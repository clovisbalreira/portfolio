// Monta um parágrafo; cada parte é [texto, emNegrito].
function criarMensagem(...partes) {

    const paragrafo = document.createElement("p");

    paragrafo.className = "mensagem";

    for (const [texto, negrito] of partes) {

        if (negrito) {

            const forte = document.createElement("strong");

            forte.textContent = texto;

            paragrafo.appendChild(forte);

        } else {

            paragrafo.appendChild(document.createTextNode(texto));
        }
    }

    return paragrafo;
}

function mensagemSemResultados(busca, filtroIdade) {

    if (busca && filtroIdade) {
        return criarMensagem(
            ["Não encontrei ninguém com ", false],
            [busca, true],
            [" no nome nessa faixa de idade.", false]
        );
    }

    if (busca) {
        return criarMensagem(
            ["Não encontrei ninguém com ", false],
            [busca, true],
            [" no nome.", false]
        );
    }

    if (filtroIdade) {
        return criarMensagem(
            ["Não encontrei ninguém nessa faixa de idade.", false]
        );
    }

    return criarMensagem(["Não existem amigos cadastrados.", false]);
}

function mensagemResumo(quantidade, busca, filtroIdade) {

    const plural = quantidade === 1 ? "" : "s";

    if (busca) {

        const partes = [
            ["Ao todo encontrei ", false],
            [String(quantidade), true],
            [` amigo${plural} com '`, false],
            [busca, true],
            ["'", false]
        ];

        if (filtroIdade) {
            partes.push([" nessa faixa de idade", false]);
        }

        partes.push([".", false]);

        return criarMensagem(...partes);
    }

    if (filtroIdade) {
        return criarMensagem(
            ["Ao todo encontrei ", false],
            [String(quantidade), true],
            [` amigo${plural} nessa faixa de idade.`, false]
        );
    }

    return criarMensagem(
        [`Ao todo existem ${quantidade} amigo${plural} cadastrado${plural}.`, false]
    );
}

function criarBotao(titulo, icone, callback) {

    const botao = document.createElement("button");

    botao.setAttribute("title", titulo);
    botao.setAttribute("aria-label", titulo);

    const iconeElemento = document.createElement("i");

    iconeElemento.className = icone;

    botao.appendChild(iconeElemento);

    botao.addEventListener("click", callback);

    return botao;
}

export function criarResultado(amigo, callbackEdicao, callbackExclusao) {

    const resultado = document.createElement("div");

    resultado.className = "resultado";

    const nome = document.createElement("strong");

    nome.textContent = amigo.nome;

    const info = document.createElement("span");

    info.textContent = amigo.formatarNascimento();

    resultado.appendChild(nome);
    resultado.appendChild(document.createElement("br"));
    resultado.appendChild(info);
    resultado.appendChild(document.createElement("br"));

    resultado.appendChild(
        criarBotao("Editar", "fa-solid fa-pen", callbackEdicao)
    );

    resultado.appendChild(
        criarBotao("Excluir", "fa-solid fa-trash", callbackExclusao)
    );

    return resultado;
}

export function exibirResultados(
    resultados,
    busca,
    criarCallbackEdicao,
    criarCallbackExclusao,
    filtroIdade = false
) {

    const container = document.getElementById("resultados");

    container.replaceChildren();

    if (resultados.length === 0) {

        container.appendChild(
            mensagemSemResultados(busca, filtroIdade)
        );

        return;
    }

    for (const amigo of resultados) {

        container.appendChild(
            criarResultado(
                amigo,
                criarCallbackEdicao(amigo.id, amigo.nome, amigo.nascimento),
                criarCallbackExclusao(amigo.id, amigo.nome)
            )
        );
    }

    container.appendChild(
        mensagemResumo(resultados.length, busca, filtroIdade)
    );
}
