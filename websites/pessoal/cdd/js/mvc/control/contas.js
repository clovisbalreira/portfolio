import { Contas } from '../model/Contas.js'
import { pagadores } from './pagadores.js'
import { tipoPagamento } from './tipoPagamento.js'
import { cartoes } from './cartoes.js'
import { acoes } from './acoes.js'
import { criarAleatorioMensal } from '../../utils/criarAleatorioMensal.js'

export let contas = []

export function incluirContas(contas, nomeConta, validade, valorTotal, modo, forma, tipoPagamento, formaPagamento, pagadoresConta, acao){   
    let nome = acao != null ? acao.nome : nomeConta
    let dataValidade = typeof valorTotal == 'object' ? valorTotal[valorTotal.length - 1].data : acao != null ? acao.ativo[acao.ativo.length - 1].data : validade
    let total = acao != null ? acao.ativo : valorTotal
    const conta = new Contas(nome, dataValidade , total, modo, forma)
    conta.adicionarPagador(pagadoresConta)
    conta.adicionarformaPagamento(formaPagamento)
    conta.adicionarTipoPagamento(tipoPagamento)
    if(acao != null) conta.adicionarAcao(acao)
    contas.push(conta)
} 

function contasMensaisVariaveis(contas, nomeConta, valorTotal, modo, forma, tipoPagamento, formaPagamento, pagadoresConta){
    valorTotal.forEach((item) => {
        incluirContas(contas, nomeConta, item.data, item.valor, modo, forma, tipoPagamento, formaPagamento, pagadoresConta)
    })
}

function incluirContasAcoes(contas, nomeConta, validade, valorTotal, modo, forma, tipoPagamento, formaPagamento, pagadoresConta, acoes){
    acoes.forEach((acao) => {
        incluirContas(contas, nomeConta, validade, valorTotal, modo, forma, tipoPagamento, formaPagamento, pagadoresConta, acao)
    })
}


// Agua
incluirContas(contas, 'Agua', new Date(), criarAleatorioMensal(), 'Debito', 'Unico', tipoPagamento[0], cartoes[0],  [pagadores[1], pagadores[2]])

// Luz
incluirContas(contas, 'Luz', new Date(), criarAleatorioMensal(), 'Debito', 'Unico', tipoPagamento[0], cartoes[0],  [pagadores[1]])


// Gas
incluirContas(contas, 'Gas', new Date(), [ 
    { data : new Date('05/20/2025'), valor: Math.floor(Math.random() * 150), }
], 'Debito', 'Unico', tipoPagamento[0], cartoes[0],  [pagadores[1]])

// Farmacia
contasMensaisVariaveis(contas, 'Farmácia', [
    { data : new Date('01/10/2025'), valor: Math.floor(Math.random() * 400)},
    { data : new Date('02/03/2025'), valor: Math.floor(Math.random() * 400)},
    { data : new Date('03/03/2025'), valor: Math.floor(Math.random() * 400)},
    { data : new Date('04/14/2025'), valor: Math.floor(Math.random() * 400)},
    { data : new Date('05/06/2025'), valor: Math.floor(Math.random() * 400)},
    { data : new Date('06/06/2025'), valor: Math.floor(Math.random() * 400)},
    { data : new Date('07/01/2025'), valor: Math.floor(Math.random() * 400)},
    { data : new Date('07/01/2025'), valor: Math.floor(Math.random() * 400)},
], 'Debito', 'Unico', tipoPagamento[3], cartoes[1],  [pagadores[0]])

// Rancho
contasMensaisVariaveis(contas, 'Rancho', [ 
    { data : new Date('02/28/2025'), valor: Math.floor(Math.random() * 400)}, 
    { data : new Date('03/10/2025'), valor: Math.floor(Math.random() * 400)}, 
    { data : new Date('03/11/2025'), valor: Math.floor(Math.random() * 400)}, 
    { data : new Date('03/15/2025'), valor: Math.floor(Math.random() * 400)}, 
    { data : new Date('04/14/2025'), valor: Math.floor(Math.random() * 400)}, 
    { data : new Date('04/15/2025'), valor: Math.floor(Math.random() * 400)}, 
], 'Debito', 'Unico', tipoPagamento[0], cartoes[2],  [pagadores[1]])

// Telefone 
incluirContas(contas, 'Telefone', new Date('01/05/2025'), Math.floor(Math.random() * 150), 'Debito', 'Mensal', tipoPagamento[0], cartoes[0],  [pagadores[1]])
incluirContas(contas, 'Telefone - Pessoa 1 - Pessoa 2', new Date('01/05/2025'), Math.floor(Math.random() * 200), 'Debito', 'Mensal', tipoPagamento[0], cartoes[0],  [pagadores[0], pagadores[1]])

// tv a Capo
incluirContas(contas, 'TV a Capo', new Date('01/10/2025'), Math.floor(Math.random() * 300), 'Debito', 'Mensal', tipoPagamento[0], cartoes[0],  [pagadores[1]])

// Colegio 
incluirContas(contas, 'Colegio', new Date('01/01/2025'), 3120, 'Debito', 'Unico', tipoPagamento[12], cartoes[0],  [pagadores[0]])

// Cartão 1
incluirContas(contas, 'Plano de Saude', new Date('01/30/2025'), Math.floor(Math.random() * 400), 'Debito', 'Mensal', tipoPagamento[0], cartoes[1],  [pagadores[0]])
// Pessoa 1
incluirContas(contas, 'Fogão', new Date(), Math.floor(Math.random() * 1000), 'Debito', 'Unico', tipoPagamento[4], cartoes[1],  [pagadores[0]])

// Cartão 2
// Fixo

incluirContas(contas, 'Emprestimo', new Date('10/11/2023'), Math.floor(Math.random() * 100000), 'Debito', 'Unico', tipoPagamento[36], cartoes[2],  [pagadores[2]])

// Corretora
incluirContas(contas, 'Conta corrente', new Date('05/01/2025'),[
    { data : new Date(), valor: Math.floor(Math.random() * 10) },
] , 'Crédito', 'Unico', tipoPagamento[0], cartoes[3], [pagadores[0]])

// Ações
incluirContasAcoes(contas, 'Ação', new Date(), 0, 'Crédito', 'Unico', tipoPagamento[0], cartoes[3],  [pagadores[0]], acoes)
