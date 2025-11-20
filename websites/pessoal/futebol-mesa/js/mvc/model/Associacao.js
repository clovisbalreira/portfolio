import { Regra } from "./Regra.js"

export class Associacao{
    constructor(nome, fundacao, sigla, logradouro, numero, cidade, estado, pais, cep, escudo){
        this.nome = nome
        this.fundacao = fundacao
        this.sigla = sigla
        this.logradouro = logradouro
        this.numero = numero
        this.cidade = cidade
        this.estado = estado
        this.pais = pais
        this.cep = cep
        this.escudo = escudo
        this.status = false
        this.regras = []
    }

    adicionarRegra(regra){
        regra.forEach( nome => {
            if(nome instanceof Regra){
                this.regras.push(nome)
            }
        })
    }

    adicionarStatus(status){
        status.forEach( nome => {
            if(nome instanceof Regra){
                this.status.push(nome)
            }
        })
    }
}