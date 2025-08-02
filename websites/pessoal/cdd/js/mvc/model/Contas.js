import { Pagadores } from "./Pagadores.js";
import { TipoPagamento } from "./TipoPagamento.js";
import { Cartoes } from "./Cartoes.js"
import { Acoes } from "./Acoes.js";

export class Contas {
    constructor(nome, dataPagamento, valor, modo, forma) {
        this.pagadores = []; 
        this.nome = nome;
        this.valorTotal = valor;
        this.valor = valor;
        this.modo = modo;
        this.forma = forma;
        this.acao = null;
        this.tipoPagamento = null;
        this.formaPagamento = null;
        this.dataPagamento = this.adicionarParcelas(dataPagamento,0);
    }
    
    adicionarPagador(pagadores) {
        pagadores.forEach(nome => {
            if (nome instanceof Pagadores) {
                this.pagadores.push(nome);
            }
        });
        this.valor = typeof this.valorTotal == 'number' ? this.valorTotal : this.valorTotal[this.valorTotal.length - 1].valor / this.pagadores.length;
    }

    adicionarTipoPagamento(tipoPagamento) {
        if (tipoPagamento instanceof TipoPagamento) { 
            this.tipoPagamento = tipoPagamento;
            if (this.pagadores.length > 0) {
                this.valor = typeof this.valorTotal == 'number' ? this.valorTotal / ( tipoPagamento.vezes * this.pagadores.length) : this.valorTotal[this.valorTotal.length - 1].valor / ( tipoPagamento.vezes * this.pagadores.length);
            }
            this.dataPagamento = this.adicionarParcelas(this.dataPagamento, tipoPagamento.vezes)
        }
    }

    adicionarformaPagamento(formaPagamento) {
        if(formaPagamento == undefined){
            return
        }else if(formaPagamento.nome == 'Dinheiro'){
            this.formaPagamento = formaPagamento;
        }else{
            if (formaPagamento instanceof Cartoes) { 
                this.formaPagamento = formaPagamento;
            }
        }
    }

    adicionarParcelas(vencimento, vezes){
        if(vezes < 2){
            return new Date(vencimento)
        }else{
            let data = []
            data.push({valor: this.valor, vencimento : vencimento})
            for(let i = 1; i < vezes; i++){
                vencimento = this.somarData(new Date(vencimento))
                data.push({valor: this.valor, vencimento : new Date(vencimento)})
            }
            return data
        }  
    }
    
    adicionarAcao(acao) {
        if(acao != null){
            if (acao instanceof Acoes) {
                this.acao = acao;
            }
        }
        this.valor = this.acao.ativo[this.acao.ativo.length - 1].valorAtual
    }
    
    somarData(data){
        return new Date(data.setMonth(data.getMonth() + 1))
    }
}