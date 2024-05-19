class Programacao {
    constructor(radio) {
        this.radio = radio;
        this.dia = [];
    }

    adicionarDia(nome) {
        this.dia.push({
            nome: nome,
            programas : [],
            diaNumeros : []
        });
    }

    adicionarDiaNumero(diaNome, numero) {
        const diaNumeros = this.dia.find(d => d.nome === diaNome);
        if (diaNumeros) {
            diaNumeros.diaNumeros.push({
                numero: numero,
            });
        }
    }

    adicionarProgramas(diaNome, horaInicio, horaFim, nome) {
        const dia = this.dia.find(d => d.nome === diaNome);
        if (dia) {
            dia.programas.push({
                horaInicio: horaInicio,
                horaFim: horaFim,
                nome: nome,
            });
        }
    }
}