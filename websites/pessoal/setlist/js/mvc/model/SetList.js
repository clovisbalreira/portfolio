import { Gravacao } from "./Gravacao.js"

export class SetList{
    constructor(dia){
        this.dia = dia
        this.musicas = []
    }

    adicionarCancao(cancoes){
        cancoes.forEach(cancao => {
            if (cancao instanceof Gravacao) {
                this.musicas.push([cancao]);
            }
        })
    }
}