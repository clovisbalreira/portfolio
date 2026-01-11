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

    adicionarAssociacao(nome){
        if(nome instanceof Associacao){
            this.associacoes.push(nome)
        }
    }

    adicionarSocio(associacao){
    if (!(associacao instanceof Associacao)) return

        const encontrada = this.associacoes.some(a => a.nome === associacao.nome)

        if (encontrada && associacao.status) {
            this.status = true
        } else {
            this.status = false
        }
    }

}