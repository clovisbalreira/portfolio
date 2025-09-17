import { TiposConta } from "../model/TiposConta.js";
import { tiposPagamento } from "./tiposPagamento.js";

export let tipoContas = [
    new TiposConta('Receita Fixa', tiposPagamento[0]),
    new TiposConta('Receitas Variáveis não tributadas', tiposPagamento[0]),
    new TiposConta('Boleto pessoas', tiposPagamento[2]),
    new TiposConta('Habitação', tiposPagamento[1]),
    new TiposConta('Dividas', tiposPagamento[1]),
    new TiposConta('Saúde', tiposPagamento[1]),
    new TiposConta('Transporte', tiposPagamento[1]),
    new TiposConta('Despesas pessoais', tiposPagamento[1]),
    new TiposConta('Educação', tiposPagamento[1]),
    new TiposConta('Lazer', tiposPagamento[1]),
    new TiposConta('Outros', tiposPagamento[1]),
]