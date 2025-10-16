export class Clube {
    constructor(nome, estado) {
        this.nome = nome;
        this.estado = estado;
        this.pontos = []
        this.pontosTotal = 0
    }
    adicionarTotal(){
        let pontos = 0
        this.pontos.forEach( ponto => {
            pontos += ponto.pontos
        })
        return this.pontosTotal = pontos
    }
}