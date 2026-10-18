function definirBotao(icone, titulo) {

    const botao = document.getElementById("botao-cadastrar");

    botao.innerHTML = `<i class="${icone}"></i>`;

    botao.setAttribute("title", titulo);
    botao.setAttribute("aria-label", titulo);
}

export function limparFormulario() {

    document.getElementById("nome").value = "";
    document.getElementById("nascimento").value = "";

    definirBotao("fa-solid fa-plus", "Cadastrar");

    document.getElementById("botao-cancelar-edicao").hidden = true;
}

export function preencherFormulario(nome, nascimento) {

    const campoNome = document.getElementById("nome");

    campoNome.value = nome;
    document.getElementById("nascimento").value = nascimento;

    definirBotao("fa-solid fa-floppy-disk", "Salvar alterações");

    document.getElementById("botao-cancelar-edicao").hidden = false;

    campoNome.focus();
}
