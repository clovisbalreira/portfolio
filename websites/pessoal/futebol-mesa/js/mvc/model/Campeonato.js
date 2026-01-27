export class Campeonato{
    constructor(nome, tipo, regra, associacao){
        this.nome = nome
        this.tipo = tipo
        this.regra = regra
        this.associacao = associacao
        this.jogos = []
        this.tabelas = []
        this.tabelaAssociacao = []
    }
}