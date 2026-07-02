export class ConfederacaoNacional {
    constructor(nome, nomeOficial, imagem, filiacao){
        this.nome = nome;
        this.nomeOficial = nomeOficial;
        this.imagem = imagem;
        this.filiacao = filiacao;
        this.jogos = []
        this.campeonatos = []
        this.goleadores = []
    }
}