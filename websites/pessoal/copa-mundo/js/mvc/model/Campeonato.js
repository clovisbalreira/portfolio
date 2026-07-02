export class Campeonato {
    constructor(nome, federacao) {
        this.nome = nome
        this.federacao = federacao
        this.jogos = []
        this.classificacao = []
        this.classificacaoFederacao = []
        this.goleadores = []
    } 
}