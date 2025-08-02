import { criarTh } from "../../utils/tabela/criarTh.js"
import { criarTd } from "../../utils/tabela/criarTd.js"

export function mostrarContasEssencial(contas){
    let contasExtras = [
        'Farmácia',
        'Rancho',
        'Gas',
    ]
    let contasEssencial = contas.filter(conta => { 
        if(contasExtras.includes(conta.nome)) return conta
        if((conta.valorTotal.length > 1 && (conta.nome != 'Luz' && conta.nome != 'Agua'))) {
            contasExtras.push(conta.nome)
            return conta
        }
    })
    mostrarSelectEssencial(contasExtras, contasEssencial)
    mostrarContas(contasEssencial)
    
} 

function styleTr(tr, valor, valor2, maiorValor, menorValor){
    if(valor == menorValor || valor2 == menorValor){
        tr.style.backgroundColor = 'red'
    }
    if(valor == maiorValor || valor2 == maiorValor){
        tr.style.backgroundColor = 'green'
    }
}

function mostrarContas(contasEssencial){

    let section = document.getElementById('mensais')
    section.innerHTML = ''
    let nomeAnterior = ''
    let div = ''
    let table = ''
    let maiorValor = 0
    let menorValor = Infinity
    let mediaValor = 0
        
    contasEssencial.forEach(conta => {
        if (nomeAnterior != conta.nome) {
            let valores = []
            maiorValor = 0
            menorValor = Infinity
            mediaValor = 0
            if(typeof conta.valorTotal == 'number'){
                contasEssencial.forEach(nome => {
                    if(conta.nome == nome.nome){
                        valores.push(nome.valorTotal)
                    } 
                })
                maiorValor = Math.max(...valores)
                menorValor = Math.min(...valores)
            }else{
                conta.valorTotal.forEach(valor => {
                    valores.push(valor.valor == undefined ? valor.valorAtual : valor.valor)
                })
                maiorValor = Math.max(...valores)
                menorValor = Math.min(...valores)
            }
            mediaValor = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) / valores.length;
        }
       
        if(nomeAnterior != conta.nome){
            div = document.createElement('div')
            table = document.createElement('table')
            let caption = document.createElement('caption')
            caption.innerText = `${conta.nome} - ${conta.formaPagamento.nome}`
            table.appendChild(caption)
            let thead = document.createElement('thead')
            let tr = document.createElement('tr')
            tr.appendChild(criarTh('Data'))
            tr.appendChild(criarTh('Valor'))
            thead.appendChild(tr)
            table.appendChild(thead)   
        }
        let tbody = document.createElement('tbody')
        let tr = document.createElement('tr')
        if(conta.valorTotal.length == undefined){
            tr = document.createElement('tr')
            styleTr(tr, 0, conta.valorTotal, maiorValor, menorValor)            
            tr.appendChild(criarTd(conta.dataPagamento.length == undefined ? conta.dataPagamento.toLocaleDateString('pt-BR') : conta.dataPagamento[0].vencimento.toLocaleDateString('pt-BR')))
            tr.appendChild(criarTd(conta.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })))
            tbody.appendChild(tr)
        }else{
            conta.valorTotal.forEach(valor => {
                tr = document.createElement('tr')
                styleTr(tr, valor.valor, valor.valorAtual, maiorValor, menorValor)                
                tr.appendChild(criarTd(valor.data.toLocaleDateString('pt-BR')))
                tr.appendChild(criarTd(valor.valor == undefined ? valor.valorAtual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : valor.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })))
                tbody.appendChild(tr)
            })
        }
        table.appendChild(tbody)
        if(nomeAnterior != conta.nome){
            let tfoot = document.createElement('tfoot')
            let trFoot = document.createElement('tr')
            trFoot.appendChild(criarTd('Média'))
            trFoot.appendChild(criarTd(mediaValor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })))
            tfoot.appendChild(trFoot)
            trFoot = document.createElement('tr')
            trFoot.style.backgroundColor = 'green'
            trFoot.appendChild(criarTd('Maior'))
            trFoot.appendChild(criarTd(maiorValor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })))
            tfoot.appendChild(trFoot)
            trFoot = document.createElement('tr')
            trFoot.style.backgroundColor = 'red'
            trFoot.appendChild(criarTd('Menor'))
            trFoot.appendChild(criarTd(menorValor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })))
            tfoot.appendChild(trFoot)
            table.appendChild(tfoot)
        }
        nomeAnterior = conta.nome
        div.appendChild(table)
        section.appendChild(div)
    })
}

function mostrarSelectEssencial(contasExtras, contasEssencial){
    let select = document.getElementById('select-mensaL')
    select.innerHTML = ''
    let option = document.createElement('option')
    option.innerText = 'Selecione uma conta'
    option.value = ''
    select.appendChild(option)
    contasExtras.forEach(conta => {
        option = document.createElement('option')
        option.value = conta
        option.innerText = conta
        select.appendChild(option)
    })
    select.addEventListener('change', (e) => {
        e.target.value == '' ? mostrarContas(contasEssencial) :
        mostrarContas(contasEssencial.filter(conta => conta.nome == e.target.value))
    })
}


