let sectionForm = document.querySelector('.form')
let sectionNotaFiscal = document.querySelector('#nota-fiscal')
let quantidade = document.querySelector('.divAdesivos input')
let footer = document.querySelector('footer')

let subtrair = document.getElementById('subtrair')
subtrair.addEventListener('click', () => {
    console.log(quantidade.value)
    if (quantidade.value > 1) {
        quantidade.value -- 
    }
})

let somar = document.getElementById('somar')
somar.addEventListener('click', () => {
    quantidade.value ++ 
})
mostrarNotaFiscal()
function mostrarNotaFiscal(){
    let inputs = document.querySelectorAll('.adesivo')
    let nomes = document.querySelectorAll('.nome')
    let precos = document.querySelectorAll('.preco')
    let tabelaAdesivos = []
    let total = 0
    inputs.forEach( (i, index) => {
        tabelaAdesivos.push({input: i.checked, nome: nomes[index].innerHTML, valor: precos[index].innerHTML.replace(',','.')})
    })
    sectionNotaFiscal.classList.remove('desaparecer')
    sectionForm.classList.add('desaparecer')
    footer.classList.add('desaparecer')
    let tabelaNotaFiscalTbody = document.querySelector('#table-nota-fiscal tbody')
    let tabelaNotaFiscalTfoot = document.querySelector('#table-nota-fiscal tfoot')
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
    let p = document.querySelector('p')
    p.innerHTML = observacao
    sectionNotaFiscal.appendChild(p)
}

function recusarCompra(){
    //resetarCampos()
    sectionNotaFiscal.classList.add('desaparecer')
    sectionForm.classList.remove('desaparecer')
    footer.classList.remove('desaparecer')
    /* nota.style.display = 'none'
    mensagemFinal = '<strong>Compra Recusada.</strong>'
    mensagemFinal += '<p>Obrigado pela preferência.</p>'
    mostrarFooter.innerHTML = mensagemFinal
    mostrarFooter.style.backgroundColor = 'red' */
}

function confirmarCompra(){
    resetarCampos()
    nota.style.display = 'none'
    mensagemFinal = '<strong>Compra confirma com sucesso.</strong>'
    mensagemFinal += '<p>Obrigado pela preferência.</p>'
    mostrarFooter.innerHTML = mensagemFinal
    mostrarFooter.style.backgroundColor = 'green'
}

function resetarCampos(){
    console.log('ola')
    for(var i = 0; i < nomesAdesivo.length; i++){
        nomesAdesivo[i].checked = false
    }
    quantidade.value = 0
    observacao.value = ''
} 
/* var nomesAdesivo = document.querySelectorAll('.adesivo')
var valoresAdesivo = document.querySelectorAll('.preco')
var quantidade = document.getElementById('numero')
var observacao = document.getElementById('observacao')
var subtrair = document.getElementById('subtrair')
var soma = document.getElementById('soma')
var mostrarFooter = document.getElementById('mostrar-nota-fiscal')
var nota = document.getElementById('nota-fiscal')
var numero = 0
quantidade.value = numero


function nomeAdesivo() {
    nome = []
    for (var i = 0; i < nomesAdesivo.length; i++) {
        if (nomesAdesivo[i].checked) {
            nome.push(nomesAdesivo[i].value)
        }
    }
    return nome
}

function valorAdesivo() {
    valor = []
    for (var i = 0; i < valoresAdesivo.length; i++) {
        if (valoresAdesivo[i] != '') {
            valor.push(valoresAdesivo[i].value)
        }
    }
    return valor
}
function mostrarNotaFiscal() {
    mensagemAdesivos = tabelaNotaFiscal()
    resetarCampos()
}

function tabelaNotaFiscal() {
    nome = nomeAdesivo()
    valor = valorAdesivo()
    if (nome.length > 0 && quantidade.value != 0) {
        somaVariaveis = corpoTabela(nome, valor)
        rodapeTabela(somaVariaveis)
        rodapeObservacao()    
    } else {
        mensagemInvalida()
    }
}


function corpoTabela(nome, valor) {
    nota.style.display = 'block'
    var corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = ''
    var somaQuantidade = 0
    var somaValor = 0
    for (var i = 0; i < nome.length; i++) {
        var tr = document.createElement('tr')
        var tdNome = document.createElement('td')
        tdNome.textContent = nome[i]
        var tdQuantidade = document.createElement('td')
        tdQuantidade.textContent = quantidade.value
        var tdValor = document.createElement('td')
        tdValor.textContent = 'R$: ' + valor[i]
        var tdTotal = document.createElement('td')
        tdTotal.textContent = 'R$: ' + (quantidade.value * valor[i]).toFixed(2)
        tr.appendChild(tdNome)
        tr.appendChild(tdQuantidade)
        tr.appendChild(tdValor)
        tr.appendChild(tdTotal)
        corpoTabela.appendChild(tr)
        somaQuantidade += parseInt(quantidade.value)
        somaValor += parseFloat(quantidade.value * valor[i])
    }
    return [somaQuantidade, somaValor]
}

function rodapeTabela(somaVariaveis){
    var footerTabela = document.querySelector('tfoot')
    footerTabela.innerHTML = ''
    var tr = document.createElement('tr')
    var th = document.createElement('th')
    th.textContent = 'Total'
    var tdTotalQuantidade = document.createElement('th')
    tdTotalQuantidade.textContent = somaVariaveis[0]
    var tdTotalValor = document.createElement('th')
    tdTotalValor.setAttribute('colspan', '2')
    tdTotalValor.setAttribute('scope', 'row')
    tdTotalValor.textContent = 'R$: ' + somaVariaveis[1].toFixed(2)
    tr.appendChild(th)
    tr.appendChild(tdTotalQuantidade)
    tr.appendChild(tdTotalValor)
    footerTabela.appendChild(tr)
}

function rodapeObservacao(){
    var footerTabela = document.querySelector('tfoot')
    var tr = document.createElement('tr')
    var tdObservacoes = document.createElement('td')
    tdObservacoes.textContent = observacao.value
    tdObservacoes.setAttribute('colspan', '4')
    tr.appendChild(tdObservacoes)
    footerTabela.appendChild(tr)

}
function mensagemInvalida() {
    mensagemFinal = '<strong>Compra invalida.</strong><p>Os adesivos ou quantidade não foram marcados.</p>'
    mostrarFooter.innerHTML = mensagemFinal
    mostrarFooter.style.backgroundColor = 'red'
}


*/