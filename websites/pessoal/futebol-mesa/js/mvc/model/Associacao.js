import { Regra } from "./Regra.js"

export class Associacao{
    constructor(nome, fundacao, sigla, logradouro, numero, bairro, cidade, estado, pais, cep, escudo, corPrimary, corSecundary, corHover){
        this.nome = nome
        this.fundacao = fundacao
        this.sigla = sigla
        this.logradouro = logradouro
        this.numero = numero
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
        this.pais = pais
        this.cep = cep
        this.escudo = escudo
        this.corPrimary = corPrimary
        this.corSecundary = corSecundary
        this.corHover = corHover
        this.status = true
        this.regras = []
    }

    adicionarRegra(regra){
        regra.forEach( nome => {
            if(nome instanceof Regra){
                this.regras.push(nome)
            }
        })
    }

    desativar(){
        this.status = false
    }
}