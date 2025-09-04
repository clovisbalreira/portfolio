export class Parada {
    constructor(radio, titulo) {
        this.radio = radio;
        this.titulo = titulo;
        this.musicas = [];
    }

    adicionarMusica(nome, interprete) {
        this.musicas.push({
            nome: nome,
            interprete: interprete
        });
    }
}