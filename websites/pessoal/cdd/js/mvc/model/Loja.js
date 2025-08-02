import { Rede } from "./Rede.js";

export class Loja{
    constructor(nome){
        this.nome = nome,
        this.rede = null
    }

    adicionarRede(rede) {
        if (rede instanceof Rede) {
            this.rede = rede
        }
    }
}