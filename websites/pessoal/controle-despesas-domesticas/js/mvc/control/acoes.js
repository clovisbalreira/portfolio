import { Acoes } from "../model/Acoes.js"
export let acoes = [
    new Acoes('Ação 1', 'ACA3', [
        { data: new Date('05/01/2025'), valorAtual: 116.56, valorInvestido : 102.54, quantidade: 8},
        { data: new Date('06/01/2025'), valorAtual: 125.64, valorInvestido : 117.09, quantidade: 9},
        { data: new Date('07/01/2025'), valorAtual: 123.30, valorInvestido : 117.09, quantidade: 9},
    ], 'ri.aca.com.br', new Date('05/08/2025')),
    new Acoes('Ação 2', 'ACE3', [ 
        { data: new Date('05/01/2025'), valorAtual: 26.79, valorInvestido : 25.96, quantidade: 3 },
        { data: new Date('06/01/2025'), valorAtual: 30.00, valorInvestido : 25.96, quantidade: 3 },
        { data: new Date('07/01/2025'), valorAtual: 35.97, valorInvestido : 35.97, quantidade: 4 },
    ], 'ri.ace.com.br', new Date('05/01/2025')),
]