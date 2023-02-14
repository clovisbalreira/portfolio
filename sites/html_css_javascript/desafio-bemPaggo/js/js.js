var nomesAdesivo = document.querySelectorAll('.adesivo')
var valoresAdesivo = document.querySelectorAll('.preco')
var quantidade = document.getElementById('numero')
var observacao = document.getElementById('observacao')
var subtrair = document.getElementById('subtrair')
var soma = document.getElementById('soma')
var mostrarFooter = document.getElementById('mostrar-nota-fiscal')
var nota = document.getElementById('nota-fiscal')
var numero = 0
quantidade.value = numero

function subtrairNumero() {
    if (numero > 0) {
        numero--
        quantidade.value = numero
    }
}

function somaNumero() {
    numero++
    quantidade.value = numero
}

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

function recusarCompra(){
    resetarCampos()
    nota.style.display = 'none'
    mensagemFinal = '<strong>Compra Recusada.</strong>'
    mensagemFinal += '<p>Obrigado pela preferência.</p>'
    mostrarFooter.innerHTML = mensagemFinal
    mostrarFooter.style.backgroundColor = 'red'
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