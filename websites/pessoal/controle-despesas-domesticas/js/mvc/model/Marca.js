import { Fornecedor } from "./Fornecedor.js"

export class Marca{
    constructor(nome){
        this.nome = nome,
        this.fornecedor = null
    }

    adicionarFornecedor(nome){
        if(nome instanceof Fornecedor){
            this.fornecedor = nome
        }
    }
}