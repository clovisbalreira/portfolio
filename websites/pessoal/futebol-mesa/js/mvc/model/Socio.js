import { Regra } from "./Regra.js"
import { Associacao } from "./Associacao.js"

export class Socio{
        constructor(nome, foto, nascimento){
        this.nome = nome
        this.foto = foto
        this.nascimento = nascimento
        this.associacoes = []
        this.regras = []
        this.status = false
    }

    adicionarRegra(nome){
        if(nome instanceof Regra){
            this.regras.push(nome)
        }
    }

    adicionarAssociacao(associacao){
        if(associacao instanceof Associacao){
            this.associacoes.push(associacao)
        }
    }

    adicionarSocio(associacao){
        if(associacao == false) this.status = associacao
        else if(associacao instanceof Associacao) this.status = associacao
    }

}