import { TipoPagamento } from '../model/TipoPagamento.js';

export let tipoPagamento = [
    new TipoPagamento('A Vista', 1)
]

for(let i = 1; i < 37; i++){
    tipoPagamento.push(new TipoPagamento('Parcelado', i))
}