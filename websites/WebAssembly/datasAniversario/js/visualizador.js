import {
    arquivosReais,
    exemplosCodigo,
    iconesLinguagens,
    linguagensPrism
} from "./exemplos.js";

// ========================================
// Visualizador de código do portfólio
//
// - JavaScript, Python e AssemblyScript: mostram os arquivos
//   REAIS do projeto (carregados com fetch).
// - Demais linguagens: exemplos demonstrativos.
// ========================================

export function iniciarVisualizador() {

    const visualizadorCodigo = document.getElementById("visualizador-codigo");
    const conteudoCodigo = document.getElementById("conteudo-codigo");
    const statusCodigo = document.getElementById("status-codigo");
    const nomeLinguagem = visualizadorCodigo.querySelector(".nome-linguagem");
    const etiquetaLinguagem = document.getElementById("etiqueta-linguagem");
    const iconeLinguagem = document.getElementById("icone-linguagem");
    const seletorLinguagem = document.getElementById("linguagem");
    const seletorArquivo = document.getElementById("arquivo-codigo");

    const cacheArquivos = new Map();

    // Evita que uma resposta lenta sobrescreva uma seleção mais recente.
    let versaoExibicao = 0;

    // ----------------------------------------
    // Exibição
    // ----------------------------------------

    function exibirCodigo({ titulo, codigo, status, linguagem }) {

        iconeLinguagem.className =
            `${iconesLinguagens[linguagem] || "devicon-code-plain"} colored`;

        iconeLinguagem.setAttribute("aria-hidden", "true");

        nomeLinguagem.textContent = titulo;
        etiquetaLinguagem.textContent = titulo.toUpperCase();
        statusCodigo.textContent = status;

        const linguagemPrism = linguagensPrism[linguagem] || "none";

        conteudoCodigo.className =
            linguagemPrism === "none"
                ? ""
                : `language-${linguagemPrism}`;

        conteudoCodigo.textContent = codigo;

        if (linguagemPrism !== "none" && window.Prism) {
            Prism.highlightElement(conteudoCodigo);
        }
    }

    async function lerArquivo(caminho) {

        if (cacheArquivos.has(caminho)) {
            return cacheArquivos.get(caminho);
        }

        const resposta = await fetch(`./${caminho}`);

        if (!resposta.ok) {
            throw new Error(`${resposta.status} ${resposta.statusText}`);
        }

        const texto = await resposta.text();

        cacheArquivos.set(caminho, texto);

        return texto;
    }

    async function exibirArquivoReal(linguagem, titulo, caminho) {

        const versao = ++versaoExibicao;

        exibirCodigo({
            titulo,
            linguagem,
            codigo: "Carregando...",
            status: caminho
        });

        try {

            const texto = await lerArquivo(caminho);

            if (versao !== versaoExibicao) {
                return;
            }

            exibirCodigo({
                titulo,
                linguagem,
                codigo: texto.replace(/\r\n/g, "\n"),
                status: `Código real do projeto · ${caminho}`
            });

        } catch (erro) {

            if (versao !== versaoExibicao) {
                return;
            }

            exibirCodigo({
                titulo,
                linguagem,
                codigo: `Não foi possível carregar ${caminho}.\n${erro.message}`,
                status: "Erro ao carregar"
            });
        }
    }

    function popularSeletorArquivo(arquivos) {

        seletorArquivo.replaceChildren();

        arquivos.forEach(caminho => {

            const opcao = document.createElement("option");

            opcao.value = caminho;
            opcao.textContent = caminho;

            seletorArquivo.appendChild(opcao);
        });

        seletorArquivo.hidden = false;
    }

    function atualizarVisualizador() {

        versaoExibicao++;

        const linguagem = seletorLinguagem.value;
        const titulo = seletorLinguagem.selectedOptions[0].textContent.trim();

        const arquivos = arquivosReais[linguagem];

        if (arquivos) {

            popularSeletorArquivo(arquivos);

            exibirArquivoReal(linguagem, titulo, arquivos[0]);

            return;
        }

        seletorArquivo.hidden = true;

        const exemplo = exemplosCodigo[linguagem];

        if (!exemplo) {

            exibirCodigo({
                titulo,
                linguagem,
                codigo: "Nenhum exemplo disponível para esta linguagem.",
                status: "Indisponível"
            });

            return;
        }

        exibirCodigo({
            titulo: exemplo.titulo,
            linguagem,
            codigo: exemplo.codigo,
            status: "Exemplo demonstrativo · não faz parte do sistema"
        });
    }

    seletorLinguagem.addEventListener("change", atualizarVisualizador);

    seletorArquivo.addEventListener("change", () => {

        const linguagem = seletorLinguagem.value;
        const titulo = seletorLinguagem.selectedOptions[0].textContent.trim();

        exibirArquivoReal(linguagem, titulo, seletorArquivo.value);
    });

    atualizarVisualizador();

    // ----------------------------------------
    // Copiar código com confirmação temporária
    // ----------------------------------------

    const botaoCopiarCodigo = document.getElementById("botao-copiar-codigo");

    const textoOriginalBotao = `
        <i class="fa-regular fa-copy"></i>
        Copiar código
    `;

    let temporizadorCopia;

    function mostrarResultadoCopia(html, bloquear) {

        clearTimeout(temporizadorCopia);

        botaoCopiarCodigo.innerHTML = html;
        botaoCopiarCodigo.disabled = bloquear;

        temporizadorCopia = setTimeout(() => {

            botaoCopiarCodigo.innerHTML = textoOriginalBotao;
            botaoCopiarCodigo.disabled = false;

        }, 2000);
    }

    botaoCopiarCodigo.addEventListener("click", async () => {

        try {

            await navigator.clipboard.writeText(conteudoCodigo.textContent);

            mostrarResultadoCopia(
                '<i class="fa-solid fa-check"></i> Copiado!',
                true
            );

        } catch (erro) {

            console.error("Não foi possível copiar o código:", erro);

            mostrarResultadoCopia(
                '<i class="fa-solid fa-xmark"></i> Falha ao copiar',
                false
            );
        }
    });

    // ----------------------------------------
    // Expandir e restaurar
    // ----------------------------------------

    const botaoExpandirCodigo = document.getElementById("botao-expandir-codigo");

    function definirVisualizadorExpandido(expandido) {

        visualizadorCodigo.classList.toggle("expandido", expandido);

        botaoExpandirCodigo.setAttribute("aria-pressed", String(expandido));

        botaoExpandirCodigo.title = expandido
            ? "Restaurar tamanho"
            : "Expandir visualizador";

        botaoExpandirCodigo.innerHTML = expandido
            ? '<i class="fa-solid fa-compress"></i> Restaurar'
            : '<i class="fa-solid fa-expand"></i> Expandir';
    }

    botaoExpandirCodigo.addEventListener("click", () => {

        definirVisualizadorExpandido(
            !visualizadorCodigo.classList.contains("expandido")
        );
    });

    document.addEventListener("keydown", evento => {

        if (evento.key === "Escape") {
            definirVisualizadorExpandido(false);
        }
    });

    // ----------------------------------------
    // Tema claro/escuro (salvo no navegador)
    // ----------------------------------------

    const botaoTemaCodigo = document.getElementById("botao-tema-codigo");

    function aplicarTemaCodigo(temaClaro) {

        visualizadorCodigo.classList.toggle("tema-claro", temaClaro);

        botaoTemaCodigo.setAttribute("aria-pressed", String(temaClaro));

        botaoTemaCodigo.title = temaClaro
            ? "Ativar tema escuro"
            : "Ativar tema claro";

        botaoTemaCodigo.innerHTML = temaClaro
            ? '<i class="fa-solid fa-moon"></i> Tema escuro'
            : '<i class="fa-solid fa-sun"></i> Tema claro';
    }

    function lerTemaSalvo() {

        try {
            return localStorage.getItem("tema-visualizador-codigo");
        } catch {
            return null;
        }
    }

    function salvarTema(tema) {

        try {
            localStorage.setItem("tema-visualizador-codigo", tema);
        } catch {
            // Sem armazenamento disponível: o tema só vale nesta sessão.
        }
    }

    aplicarTemaCodigo(lerTemaSalvo() === "claro");

    botaoTemaCodigo.addEventListener("click", () => {

        const temaClaro =
            !visualizadorCodigo.classList.contains("tema-claro");

        aplicarTemaCodigo(temaClaro);

        salvarTema(temaClaro ? "claro" : "escuro");
    });
}
