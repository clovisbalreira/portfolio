export class Pedido{
    constructor(data, radio, nome, idade, email, pais, estado, cidade){
        this.data = data;
        this.radio = radio;
        this.nome = nome;
        this.idade = idade;
        this.email = email;
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