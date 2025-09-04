import { Dados } from "./Dados.js"
import { Programa } from "./programa.js"

export class Programacao {
    constructor() {
        this.dia = [];
        this.radio = null;
    }

    adicionarDia(nome) {
        this.dia.push({
            nome: nome,
            programas : []
        });
    }

    adicionarProgramas(diaNome, horaInicio, horaFim, programa) {
        const dia = this.dia.find(d => d.nome === diaNome);
        if (dia) {
            dia.programas.push({
                horaInicio: horaInicio,
                horaFim: horaFim,
                programa: programa,
            });
        }
    }

    adicionarRadio(radios) {
        if (radios instanceof Dados) {
            this.radio = radios
        }
    }

    adicionarPrograma(programa) {
        if (programa instanceof Programa) {
            return programa
        }
    }
}