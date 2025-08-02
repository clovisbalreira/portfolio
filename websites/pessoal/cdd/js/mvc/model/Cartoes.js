import { Pagadores } from "./Pagadores.js";

export class Cartoes {
    constructor(nome, validade, limite, anuidade, tipoConta){
        this.nome = nome;
        this.validade = this.formatandoData(validade);
        this.limite = limite;
        this.anuidade = anuidade;
        this.fatura = 0;
        this.credito = this.limite;
        this.tipoConta = tipoConta
        this.donoCartao = null;
    }

    formatandoData(data){
        let formatada = data.toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        });
        return formatada
    }

    adicionarDonoCartao(pagadores) {
        if (pagadores instanceof Pagadores) {
            this.donoCartao = pagadores
        }
    }

    adicionarCredito(credito){
        this.credito += credito
    }

    diminuirCredito(credito){
        this.credito -= credito
    }

    aumentarFatura(fatura){
        this.fatura += fatura
    }

    adicionarAnuidade(){
        return this.anuidade
    }
}

