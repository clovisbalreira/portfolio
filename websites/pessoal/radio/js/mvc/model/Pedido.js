class Pedido{
    constructor(radio, nome, idade, pais, estado, cidade){
        this.radio = radio;
        this.nome = nome;
        this.idade = idade;
        this.pais = pais;
        this.estado = estado;
        this.cidade = cidade;
        this.pedido = [];
    }

    adicionarPedido(musica, interprete) {
        this.pedido.push({
            musica: musica,
            interprete : interprete
        });
    }

}