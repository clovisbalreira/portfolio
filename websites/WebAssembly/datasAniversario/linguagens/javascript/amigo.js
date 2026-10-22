// ========================================
// Modelo Amigo (backend JavaScript)
// ========================================

// Confere se "AAAA-MM-DD" é uma data que existe no calendário.
export function dataExiste(texto) {

    const partes = /^(\d{4})-(\d{2})-(\d{2})$/.exec(texto);

    if (!partes) {
        return false;
    }

    const [ano, mes, dia] = partes.slice(1).map(Number);

    if (ano < 1) {
        return false;
    }

    // Date "corrige" datas impossíveis (30/02 vira 02/03);
    // comparar os componentes detecta isso.
    const data = new Date(0);

    data.setUTCFullYear(ano, mes - 1, dia);

    return (
        data.getUTCFullYear() === ano &&
        data.getUTCMonth() === mes - 1 &&
        data.getUTCDate() === dia
    );
}

function dataLocalISO(data) {

    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");

    return `${data.getFullYear()}-${mes}-${dia}`;
}

export class Amigo {

    constructor(id, nome, nascimento, idade = null) {

        this.id = id;
        this.nome = nome;
        this.nascimento = nascimento;

        // A idade vem do banco (função WebAssembly idade_completa),
        // a única implementação do cálculo no sistema.
        this._idade = idade;
    }

    idade() {
        return this._idade;
    }

    formatarNascimento() {

        if (!this.nascimento) {
            return "Sem data de nascimento.";
        }

        const texto = String(this.nascimento);

        if (!dataExiste(texto)) {
            return "Data de nascimento inválida.";
        }

        const [ano, mes, dia] = texto.split("-");

        let descricao = `nasceu em ${dia}/${mes}/${ano}`;

        const idade = this.idade();

        if (idade !== null && idade !== undefined) {

            const unidade = idade === 1 ? "ano" : "anos";

            descricao += ` e tem ${idade} ${unidade}`;
        }

        return descricao;
    }

    toString() {
        return `${this.id} - ${this.nome} - ${this.nascimento}`;
    }

    // Devolve a mensagem de erro, ou null se estiver tudo certo.
    validar(hoje = new Date()) {

        const nome = (this.nome || "").trim();

        if (!nome) {
            return "Informe o nome.";
        }

        if (nome.length < 3) {
            return "O nome deve ter pelo menos 3 caracteres.";
        }

        if (!this.nascimento) {
            return "Informe a data de nascimento.";
        }

        const nascimento = String(this.nascimento);

        if (!dataExiste(nascimento)) {
            return "Data de nascimento inválida.";
        }

        if (nascimento > dataLocalISO(hoje)) {
            return "A data de nascimento não pode ser futura.";
        }

        return null;
    }
}
