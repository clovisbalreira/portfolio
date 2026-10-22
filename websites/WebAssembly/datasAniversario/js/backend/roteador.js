// ========================================
// Roteador de backends
//
// A tela (HTML) é uma só. Quem executa o sistema é o backend
// escolhido no seletor de linguagem:
//
//   python      -> linguagens/python/app.py              (PyScript)
//   javascript  -> linguagens/javascript/                (este navegador)
//   c           -> linguagens/c/src/    -> app.wasm      (C compilado para WebAssembly)
//   java        -> linguagens/java/src/ -> app.wasm      (Java compilado pelo TeaVM)
//   php         -> linguagens/php/                       (php-wasm, baixado sob demanda)
//
// Cada backend se registra aqui com este formato:
//
//   {
//     ativar():    desenha a lista e assume a tela
//     desativar(): encerra edição/modal e solta a tela
//     acoes: {
//       buscar, ordenar, listar_todos, limpar_filtros,
//       cadastrar, cancelar_edicao,
//       confirmar_exclusao, cancelar_exclusao, escape
//     }
//   }
//
// Os botões da página têm data-acao="..." (ou data-acao-change);
// o roteador os liga uma única vez e repassa a ação ao backend ativo.
// ========================================

export const NOMES_BACKENDS = {
    python: "Python",
    javascript: "JavaScript",
    c: "C",
    java: "Java",
    php: "PHP"
};

const backends = {};

let ativo = null;           // backend que está executando o sistema
let desejado = "python";    // backend escolhido no seletor
let bancoPronto = false;
let aviso = "";

// Backends que não conseguiram carregar: nome -> motivo.
const falhas = {};

// Backends pesados, carregados só quando escolhidos: nome -> função assíncrona
// que devolve o backend.
const carregadores = {};
const carregando = new Set();

function elemento(id) {
    return document.getElementById(id);
}

// ----------------------------------------
// Indicador "Backend em uso"
// ----------------------------------------

function nomeDe(backend) {
    return NOMES_BACKENDS[backend] || backend;
}

function criarLinha(texto, destaque) {

    const linha = document.createElement("span");

    linha.className = "linha-backend";

    if (destaque) {

        linha.append(texto);

        const forte = document.createElement("strong");

        forte.textContent = destaque;

        linha.append(forte);

    } else {

        linha.textContent = texto;
    }

    return linha;
}

function textoEspera(backend) {

    if (falhas[backend]) {
        return `Não foi possível carregar o backend ${nomeDe(backend)}: ${falhas[backend]}.`;
    }

    return `Carregando o backend ${nomeDe(backend)}...`;
}

function atualizarIndicador() {

    const indicador = elemento("backend-ativo");

    if (!indicador) {
        return;
    }

    const linhas = [];

    if (!bancoPronto) {

        linhas.push(criarLinha("Carregando o banco de dados..."));

    } else if (ativo) {

        linhas.push(criarLinha("Backend em uso: ", nomeDe(ativo)));

        if (ativo !== desejado) {
            linhas.push(criarLinha(textoEspera(desejado) +
                ` Enquanto isso, o sistema segue em ${nomeDe(ativo)}.`
            ));
        }

    } else {

        linhas.push(criarLinha(textoEspera(desejado)));
    }

    if (aviso) {

        const linhaAviso = criarLinha(aviso);

        linhaAviso.classList.add("aviso-backend");

        linhas.push(linhaAviso);
    }

    indicador.replaceChildren(...linhas);
}

// ----------------------------------------
// Troca de backend
// ----------------------------------------

function iniciarCarregamentoSeNecessario() {

    const nome = desejado;
    const carregar = carregadores[nome];

    if (!carregar || backends[nome] || carregando.has(nome) || falhas[nome]) {
        return;
    }

    carregando.add(nome);

    Promise.resolve()
        .then(carregar)
        .then(backend => registrar(nome, backend))
        .catch(erro => {

            console.error(`Erro ao carregar o backend ${nome}:`, erro);

            // O usuário pode tentar de novo escolhendo a linguagem outra vez.
            carregando.delete(nome);

            registrarFalha(nome, erro.message);
        });
}

function tentarAtivar() {

    iniciarCarregamentoSeNecessario();

    if (bancoPronto && ativo !== desejado && backends[desejado]) {

        if (ativo) {

            try {
                backends[ativo].desativar();
            } catch (erro) {
                console.error(`Erro ao desativar ${ativo}:`, erro);
            }
        }

        ativo = desejado;

        try {
            backends[ativo].ativar();
        } catch (erro) {
            console.error(`Erro ao ativar ${ativo}:`, erro);
        }
    }

    atualizarIndicador();
}

export function registrar(nome, backend) {

    backends[nome] = backend;

    tentarAtivar();
}

// Para backends carregados de forma assíncrona que falharam (ex.: C, Java).
export function registrarFalha(nome, motivo) {

    falhas[nome] = motivo;

    atualizarIndicador();
}

// Para backends pesados: o carregamento só começa quando a linguagem é escolhida.
export function registrarSobDemanda(nome, carregar) {

    carregadores[nome] = carregar;

    tentarAtivar();
}

export function bancoFicouPronto() {

    bancoPronto = true;

    tentarAtivar();
}

function avisoSemBackend(linguagem) {

    const opcao = elemento("linguagem")
        ?.querySelector(`option[value="${linguagem}"]`);

    const nome = opcao ? opcao.textContent.trim() : linguagem;

    const atual = nomeDe(ativo || desejado);

    if (linguagem === "assemblyscript") {
        return (
            "AssemblyScript é o módulo WebAssembly que calcula a idade " +
            `nos dois backends, e não um backend completo. ` +
            `O sistema segue em ${atual}.`
        );
    }

    return (
        `${nome} ainda não tem backend neste projeto ` +
        `(é só um exemplo demonstrativo). O sistema segue em ${atual}.`
    );
}

export function escolherLinguagem(linguagem) {

    if (NOMES_BACKENDS[linguagem]) {

        desejado = linguagem;
        aviso = "";

        // Nova escolha depois de uma falha: tenta carregar de novo.
        if (falhas[linguagem] && !backends[linguagem]) {
            delete falhas[linguagem];
        }

        tentarAtivar();

        return;
    }

    aviso = avisoSemBackend(linguagem);

    atualizarIndicador();
}

export function backendAtivo() {
    return ativo;
}

// ----------------------------------------
// Ações da tela -> backend ativo
// ----------------------------------------

export function executar(acao, evento) {

    const backend = backends[ativo];

    if (!backend || !backend.acoes[acao]) {
        return;
    }

    try {

        backend.acoes[acao](evento);

    } catch (erro) {

        console.error(`Erro na ação "${acao}" (${ativo}):`, erro);
    }
}

export function iniciarRoteador() {

    document.querySelectorAll("[data-acao]").forEach(botao => {

        botao.addEventListener("click", evento => {
            executar(botao.dataset.acao, evento);
        });
    });

    document.querySelectorAll("[data-acao-change]").forEach(campo => {

        campo.addEventListener("change", evento => {
            executar(campo.dataset.acaoChange, evento);
        });
    });

    document.addEventListener("keydown", evento => {

        if (evento.key === "Escape") {
            executar("escape", evento);
        }
    });

    const seletor = elemento("linguagem");

    seletor.addEventListener("change", () => {
        escolherLinguagem(seletor.value);
    });

    escolherLinguagem(seletor.value);
}
