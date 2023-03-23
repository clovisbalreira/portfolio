let sectionForm = document.querySelector('.form')
let sectionNotaFiscal = document.querySelector('#nota-fiscal')
let quantidade = document.querySelector('.divAdesivos input')
let footer = document.querySelector('footer')
let inputs = document.querySelectorAll('.adesivo')
let p = document.getElementById('pObservacoes')

let subtrair = document.getElementById('subtrair')
subtrair.addEventListener('click', () => {
    if (quantidade.value > 1) {
        quantidade.value -- 
    }
})

let somar = document.getElementById('somar')
somar.addEventListener('click', () => {
    quantidade.value ++ 
})

function mostrarNotaFiscal(){
    let nomes = document.querySelectorAll('.nome')
    let precos = document.querySelectorAll('.preco')
    let tabelaAdesivos = []
    let total = 0
    inputs.forEach( (i, index) => {
        tabelaAdesivos.push({input: i.checked, nome: nomes[index].innerHTML, valor: precos[index].innerHTML.replace(',','.')})
    })
    let tabela = tabelaAdesivos.reduce( (r,t) => {
        if(t.input){
            r++
        }
        return r
    },0);
    if( tabela > 0){
        sectionNotaFiscal.classList.remove('desaparecer')
        sectionForm.classList.add('desaparecer')
        footer.classList.add('desaparecer')
        let tabelaNotaFiscalTbody = document.querySelector('#table-nota-fiscal tbody')
        let tabelaNotaFiscalTfoot = document.querySelector('#table-nota-fiscal tfoot')
        p.innerHTML = ''
        tabelaNotaFiscalTbody.innerHTML = ''
        tabelaNotaFiscalTfoot.innerHTML = ''
        tabelaAdesivos.forEach( tabelaAdesivo => {
            if(tabelaAdesivo.input){
                let tr = document.createElement('tr')        
                let tdProduto = document.createElement('td')
                tdProduto.innerHTML = tabelaAdesivo.nome
                tr.appendChild(tdProduto)
                let tdQuantidade = document.createElement('td')
                tdQuantidade.innerHTML = quantidade.value
                tr.appendChild(tdQuantidade)
                let tdValor = document.createElement('td')
                tdValor.innerHTML = tabelaAdesivo.valor
                tr.appendChild(tdValor)
                let tdValorTotal = document.createElement('td')
                tdValorTotal.innerHTML = (tabelaAdesivo.valor * quantidade.value).toFixed(2)
                tr.appendChild(tdValorTotal)
                tabelaNotaFiscalTbody.appendChild(tr)
                total += Number(tabelaAdesivo.valor) * Number(quantidade.value)
            }
        });
        let tr = document.createElement('tr')        
        let thTexto = document.createElement('th')
        thTexto.innerHTML = 'TOTAL'
        thTexto.setAttribute('colspan', '3')
        tr.appendChild(thTexto)
        let thTotal = document.createElement('th')
        thTotal.innerHTML = `R$ ${total.toFixed(2)}`
        tr.appendChild(thTotal)
        tabelaNotaFiscalTfoot.appendChild(tr)
        let observacao = document.querySelector('#observacao').value
        p.innerHTML = observacao
    }else{
        mensagem('Pedido Recusada.', 'Precisa escolher um adesivo.', 'yellow')
    }
}

function mensagem(strong, mensagem, cor){
    resetarCampos()
    sectionNotaFiscal.classList.add('desaparecer')
    sectionForm.classList.remove('desaparecer')
    footer.classList.remove('desaparecer')
    mensagemFinal = `<p><strong>${strong}</strong> ${mensagem}</p>`
    var mostrarFooter = document.getElementById('mostrar-nota-fiscal')
    mostrarFooter.classList.remove('desaparecer')
    mostrarFooter.innerHTML = mensagemFinal
    mostrarFooter.style.backgroundColor = cor
    mostrarFooter.style.color = 'black'
    footer.appendChild(mostrarFooter) 
    setTimeout(function() {
        mostrarFooter.classList.add('desaparecer')
        footer.appendChild(mostrarFooter) 
    }, 3000);
}

function resetarCampos(){
    observacao.value = ''
    quantidade.value = 1
    inputs.forEach( i => i.checked = false)
} 