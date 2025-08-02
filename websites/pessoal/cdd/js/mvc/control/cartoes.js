import { Cartoes } from '../model/Cartoes.js'
import { pagadores } from './pagadores.js'

export let cartoes = [
    { nome :'Dinheiro', valor : 0},
    
]

function incluirContas(contas, nome, validade, limite, anuidade, donoDoCartao, tipoConta){
    const conta = new Cartoes(nome, validade, limite, anuidade, tipoConta)
    conta.adicionarDonoCartao(donoDoCartao)
    contas.push(conta)
}

incluirContas(cartoes, 'Cartão 1', new Date('12/08/2030'), Math.floor(Math.random() * 1000) , Math.floor(Math.random() * 20), pagadores[0], 'Crédito')
incluirContas(cartoes, 'Cartão 2', new Date('09/03/2027'), Math.floor(Math.random() * 1000) , Math.floor(Math.random() * 20), pagadores[1], 'Crédito')
incluirContas(cartoes, 'Corretora', new Date('05/08/2030'), 0 , 0, pagadores[0], 'Corrente')