import { Locutor } from "./Locutor.js";
import { Radio } from "./Radio.js";

export class Programa {
    constructor(nome, descricao, foto) {
        this.nome = nome;
        this.descricao = descricao;
        this.foto = foto;
        this.locutor = null;
        this.radio = null;
    }

    adicionarLocutor(locutores) {
        if (locutores instanceof Locutor) {
            this.locutor = locutores
        }
    }

    adicionarRadio(radios) {
        if (radios instanceof Radio) {
            this.radio = radios
        }
    }
}