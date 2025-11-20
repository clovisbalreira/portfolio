import { Regra } from "./Regra.js"
import { Associacao } from "./Associacao.js"

export class Socio{
        constructor(nome, foto, nascimento){
        this.nome = nome
        this.foto = foto
        this.nascimento = nascimento
        this.associacoes = []
        this.regras = []
    }

    adicionarRegra(nome){
        if(nome instanceof Regra){
            this.regras.push(nome)
        }
    }

    adicionarAssociacao(nome){
        if(nome instanceof Associacao){
            this.associacoes.push(nome)
        }
    }
}