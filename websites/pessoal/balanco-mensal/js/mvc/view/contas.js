import { Conta } from "../model/Conta.js"
 
export function mostrarFatura(tipoContas, contas){
    let data = new Date()
    let soma = {
        credito: somarContas(contas, 'Crédito'), 
        futuro: somarContas(contas, 'Futuro'),
        debito: somarContas(contas, 'Debito'), 
    }
    let despesas = []
    const titulos = ['MESES DO ANO ', '%', `${nomeMes(data.getMonth())}-${mostrarZero(data.getDate())}`, 'No tempo', '']
    let section = document.getElementById('ativo-passivo')
    section.innerHTML = ''
    section.appendChild(cabecalhoPrincipal(titulos))
    tipoContas.forEach( (tipo, index) => {
        let contaFiltro = contas.filter( conta => conta.tipoConta.nome == tipo.nome )
        let valorTotal = contaFiltro.reduce((total, conta) => { return total += conta.valor}, 0)
        let table = document.createElement('table')
        table.appendChild(headTabela(titulos, tipo))
        table.appendChild(bodyTabela(contas, tipo, despesas, soma, tipoContas, index))
        table.appendChild(footTabela(tipo, soma, valorTotal))
        section.appendChild(table)
    })
    section.appendChild(tabelaBalanco(soma))
    mostrarBalanco(contas, despesas)
    atualizar(tipoContas, contas)
}

function nomeMes(data){
    let meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    return `${meses[data]}.`
}

function mostrarZero(numero){
    return numero < 10 ? `0${numero}` : numero
}

function somarContas(contas, tipo){
    return contas.reduce((total, conta) => {
        if(conta.tipoConta.tipo.nome == tipo) total += conta.valor
        return total
    }, 0)
}

function cabecalhoPrincipal(titulos){
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    thead.appendChild(tituloPrincipal(titulos))
    table.appendChild(thead)
    return table
}

function tituloPrincipal(titulos){
    let tr = document.createElement('tr')
    for(let i = 0; i < titulos.length; i++){
        let th = document.createElement('th')
        th.textContent = titulos[i]
        tr.appendChild(th)
    }
    return tr
}

function headTabela(titulos, tipo){
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    let th = document.createElement('th')
    th.colSpan = titulos.length
    th.textContent = tipo.nome
    tr.appendChild(th)
    thead.appendChild(tr)
    return thead
}

function bodyTabela(contas, tipo, despesas, soma, tipoContas, index){
    let tbody = document.createElement('tbody')
    let contaFiltro = contas.filter( conta => conta.tipoConta.nome == tipo.nome )
    let valorTotal = contaFiltro.reduce((total, conta) => { return total += conta.valor}, 0)
    if(tipo.tipo.nome == 'Debito') despesas.push({nome: tipo.nome, valor: valorTotal, porcentagem : valorTotal / soma.debito * 100})
        contaFiltro.forEach( filtro => {   
        tbody.appendChild(mostrarContas(contas, filtro, valorTotal))
    })  
    tbody.appendChild(incluirContas(index, contaFiltro))
    return tbody  
}

function mostrarContas(contas, filtro, valorTotal){
    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.textContent = filtro.nome
    tr.appendChild(td)
    td = document.createElement('td')
    td.textContent = valorTotal == 0 ? `${filtro.porcentagem}%` : `${(filtro.valor / valorTotal * 100).toFixed(2)}%`
    tr.appendChild(td)
    td = document.createElement('td')
    td.classList.add('valor')
    td.innerHTML = "";
    td.appendChild(inputMostrarValor(filtro.valor))
    tr.appendChild(td)
    if(filtro.tipoConta.tipo.nome != 'Crédito' ) tr.appendChild(selectTempo(contas, filtro))
    if(filtro.tipoConta.tipo.nome == 'Debito' ) tr.appendChild(radioSelecionar(filtro))
    return tr
}

function inputMostrarValor(filtro){
    let input = document.createElement('input');
    input.type = 'number';
    input.min = '0';
    input.step = '0.01';
    input.value = parseFloat(filtro).toFixed(2); 
    return input;
}

function selectTempo(contas, filtro){
    let selecao = contas.find( conta => conta.nome == filtro.nome)
    let td = document.createElement('td')
    if(filtro.tipoConta.tipo.nome == 'Debito'){
        let select = document.createElement('select')
        select.appendChild(selectVazio(selecao))
        select.appendChild(selectPreenchido(selecao, 'Agora'))
        select.appendChild(selectPreenchido(selecao, 'Passado'))
        td.appendChild(select)
    }else if(filtro.tipoConta.tipo.nome == 'Futuro'){
        td.classList.add('futuro')
        td.textContent = 'Futuro'
    }
   return td
}

function selectVazio(selecao){
    let option = document.createElement('option')
    option.value = ' '
    option.text = 'Selecione o tempo'
    if (selecao.tempo === ' ' || !selecao.tempo) {
        option.selected = true
    }
    return option
}

function selectPreenchido(selecao, valor){
    let option = document.createElement('option')
    option.value = valor
    option.text = valor
    if (selecao.tempo === valor) {
        option.selected = true
    }
    return option
}

function incluirContas(index, contaFiltro){
    let tr = document.createElement('tr')
    tr.dataset.index = index
    tr.id = 'incluir'
    let td = document.createElement('td')
    td.appendChild(inputSalvar('text', 'Digite o nome'))
    tr.appendChild(td)
    td = document.createElement('td')
    if(contaFiltro[0] != undefined) td.colSpan = contaFiltro[0].tipoConta.tipo.nome == 'Crédito' ? 1 : 2
    td.appendChild(inputSalvar('number', 'Digite o valor'))
    tr.appendChild(td)
    tr.appendChild(botaoSalvar())
    return tr
}

function inputSalvar(type, texto){
    let input = document.createElement('input')
    input.type = type
    if(type == 'number'){
        input.min = '0'
        input.step = '0.01'
    } 
    input.placeholder = texto
    return input
}

function radioSelecionar(filtro){
    let input = document.createElement('input')
    input.type = 'checkBox'
    input.checked = filtro.meta
    return input
}

function botaoSalvar(){
    let botao = document.createElement('button')
    botao.classList.add('salvar')
    botao.textContent = 'SALVAR'
    return botao
}

function footTabela(tipo, soma, valorTotal){
    let tfoot = document.createElement('tfoot')
    let tr = document.createElement('tr')
    tr.classList.add('total')
    let th = document.createElement('th')
    th.textContent = `Total ${tipo.nome} ${tipo.tipo.nome == 'Futuro' ? '( 30% )' : ''}`
    tr.appendChild(th)
    th = document.createElement('th')
    th.textContent = valorTotal == 0 ? '0%' : calcularPorcentagem(tipo, soma, valorTotal)
    tr.appendChild(th)
    th = document.createElement('th')
    th.textContent = valorTotal.toFixed(2)
    th.colSpan = tipo.tipo.nome == 'Crédito' ? 1 : 2
    tr.appendChild(th)
    tfoot.appendChild(tr)
    return tfoot
}

function calcularPorcentagem(tipo, soma, valorTotal){
    let total
    if(tipo.tipo.nome == 'Crédito') total = valorTotal / soma.credito * 100
    else if(tipo.tipo.nome == 'Futuro') total = valorTotal / soma.futuro * 100
    else if(tipo.tipo.nome == 'Debito') total = valorTotal / soma.debito * 100
    return `${total.toFixed(2)}%`
}

function tabelaBalanco(soma){
    let table = document.createElement('table')
    table.appendChild(headBalanco())
    table.appendChild(bodyBalanco(soma))
    table.appendChild(footBalanco(soma))
    return table
}

function headBalanco(){
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    let th = document.createElement('th')
    th.textContent = 'BALANÇO'
    th.colSpan = 2
    tr.appendChild(th)
    thead.appendChild(tr)
    return thead
}

function bodyBalanco(soma){
    let tbody = document.createElement('tbody')
    let tr = document.createElement('tr')
    let th = document.createElement('th')
    th.textContent = 'Total Despesas'
    th.colSpan = 2
    tr.appendChild(th)
    th = document.createElement('th')
    th.textContent = (soma.debito).toFixed(2)
    th.colSpan = 2
    tr.appendChild(th)
    tbody.appendChild(tr)
    tr = document.createElement('tr')
    th = document.createElement('th')
    th.textContent = 'Saldo Disponível'
    th.colSpan = 2
    tr.appendChild(th)
    th = document.createElement('th')
    th.textContent = (soma.credito - soma.debito).toFixed(2)
    soma.credito - soma.debito < 0 ? th.style.backgroundColor = 'red' : th.style.backgroundColor = 'green'
    th.colSpan = 2
    tr.appendChild(th)
    tbody.appendChild(tr)
    return tbody
}

function footBalanco(soma){
    let tfoot = document.createElement('tfoot')
    let tr = document.createElement('tr')
    let th = document.createElement('th')
    th.textContent = 'RENDA EXTRA A FAZER'
    th.colSpan = 2
    tr.appendChild(th)
    th = document.createElement('th')
    th.textContent = soma.credito - soma.debito > 0 ? '0,00' : Math.abs(soma.credito - soma.debito).toFixed(2)
    th.colSpan = 2
    tr.appendChild(th)
    tfoot.appendChild(tr)
    return tfoot
}

function atualizarInputValores(tipoContas, contas){
    let valores = document.querySelectorAll('.valor input')
    valores.forEach( valor => {
        valor.addEventListener('keydown', (e) => {
            if (e.key === "Enter") {
                contas.map( conta => {
                    if(conta.nome == e.target.parentNode.parentNode.querySelector('td:nth-child(1)').textContent){
                        conta.valor = parseFloat(valor.value)
                        mostrarFatura(tipoContas, contas)
                    }
                })
            }
        })
    })
}

function selectAtualizar(tipoContas, contas){
    let selects = document.querySelectorAll('select')
    selects.forEach( select => {
        select.addEventListener('click', (e) => {
            contas.forEach( conta => {
                if(conta.nome == e.target.parentNode.parentNode.querySelector('td:nth-child(1)').textContent) conta.tempo = select.value
                mostrarFatura(tipoContas, contas)
            })
        })
    })
}

function metaAtualizar(tipoContas, contas){
    let radios = document.querySelectorAll("input[type='checkbox']")
    radios.forEach( radio => {
        radio.addEventListener( 'input', (e) => {
            contas.forEach( conta => {
                if(conta.nome == e.target.parentNode.querySelector('td:nth-child(1)').textContent) conta.meta = radio.checked
                mostrarFatura(tipoContas, contas)
            })
        })
    })
}

function salvarConta(tipoContas, contas){
    let salvar = document.querySelectorAll('.salvar')
    salvar.forEach( botao => {
        botao.addEventListener('click', (e) => {
            let nome = e.target.parentNode.querySelector('td:nth-child(1)').querySelector('input').value
            let valor = parseFloat(e.target.parentNode.querySelector('td:nth-child(2)').querySelector('input').value)
            let numero = e.target.parentNode.dataset.index
            console.log(numero)
            if(nome != '' && valor > 0 ) contas.push(new Conta(tipoContas[numero], nome, 0, valor, '', false, 0))
            mostrarFatura(tipoContas, contas)
        })
    })
}

function atualizarInputMeta(tipoContas, contas){
    let valores = document.querySelectorAll('.meta input')
    valores.forEach( valor => {
        valor.addEventListener('keydown', (e) => {
            if (e.key === "Enter") {
                contas.map( conta => {
                    if(conta.nome == e.target.parentNode.parentNode.querySelector('td:nth-child(1)').textContent){
                        conta.valorMeta = parseFloat(valor.value)
                        mostrarFatura(tipoContas, contas)
                    }
                })
            }
        })
    })
}

function limpar(tipoContas, contas){
    let limpar = document.getElementById('limpar')
    limpar.addEventListener('click', () => {
        contas = []
        mostrarFatura(tipoContas, contas)
    })
}

function atualizar(tipoContas, contas){
    atualizarInputValores(tipoContas, contas)
    selectAtualizar(tipoContas, contas)
    metaAtualizar(tipoContas, contas)
    salvarConta(tipoContas, contas)
    atualizarInputMeta(tipoContas, contas)
    limpar(tipoContas, contas)
}

// Tabela Balanço
function mostrarBalanco(contas, despesas){
    let section = document.getElementById('balanco')
    section.innerHTML = ''
    section.appendChild(tabelaAtivo(despesas))
    section.appendChild(tabelaTempo(contas))
    section.appendChild(tabelaMetas(contas))
}

function tabelaAtivo(despesas){
    let table = document.createElement('table')
    table.appendChild(mostrarHeadBalanco('Valores Alvos', '%', 'Valor'))
    table.appendChild(mostrarBodyValoresAlvos(despesas))
    table.appendChild(mostrarFootValoresAlvos(despesas))
    return table
}

function mostrarHeadBalanco(titulo, porcento, valor){
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    let th = document.createElement('th')
    th.textContent = titulo
    tr.appendChild(th)
    th = document.createElement('th')
    th.textContent = porcento
    tr.appendChild(th)
    th = document.createElement('th')
    th.textContent = valor
    tr.appendChild(th)
    thead.appendChild(tr)
    return thead
}

function mostrarBodyValoresAlvos(despesas){
    let tbody = document.createElement('tbody')
    despesas.forEach( despesa => {
        if(despesa.valor > 0 ){
            let tr = document.createElement('tr')
            let td = document.createElement('td')
            td.textContent = despesa.nome
            tr.appendChild(td)
            td = document.createElement('td')
            td.textContent = `${despesa.porcentagem.toFixed(2)}%`
            tr.appendChild(td)
            td = document.createElement('td')
            td.textContent = despesa.valor.toFixed(2)
            tr.appendChild(td)
            tbody.appendChild(tr)
        }
    })
    return tbody
}

function mostrarFootValoresAlvos(despesas){
    let tfoot = document.createElement('tfoot')
    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.textContent = 'Total'
    tr.appendChild(td)
    td = document.createElement('td')
    let porcento = despesas.reduce( (total, despesa) => { return total += despesa.porcentagem},0)
    td.textContent = isNaN(porcento) ? '0.00%' : `${porcento.toFixed(2)}%`
    tr.appendChild(td)
    td = document.createElement('td')
    td.textContent = despesas.reduce( (total, despesa) => { return total += despesa.valor},0).toFixed(2)
    tr.appendChild(td)
    tfoot.appendChild(tr)
    return tfoot
}

function tabelaTempo(contas){
    let contaMes = [
        {nome: 'Entradas', valor: contas.reduce((total, conta) => {
            if(conta.tipoConta.tipo.nome == 'Crédito') total += conta.valor
            return total
        },0 )},
        {nome: 'Pro Futuro', valor: contas.reduce((total, conta) => {
            if(conta.tipoConta.tipo.nome == 'Futuro') total += conta.valor
            return total
        },0 )},
        {nome: 'Pro hoje', valor: contas.reduce((total, conta) => {
            if(conta.tempo == 'Agora') total += conta.valor
            return total
        },0 )},
        {nome: 'Acertando o passado', valor: contas.reduce((total, conta) => {
            if(conta.tempo == 'Passado') total += conta.valor
            return total
        },0 )},
    ]
    let table = document.createElement('table')
    table.appendChild(mostrarHeadBalanco('Meu mês no tempo', '%', 'Valor'))
    table.appendChild(mostrarBodyTempo(contaMes))
    table.appendChild(mostrarFootTempo(contaMes))
    return table
}

function mostrarBodyTempo(contaMes){    
    let despesa = contaMes.reduce( (total, conta) => {
        if(conta.nome != 'Entradas') total += conta.valor
        return total
    }, 0)
    let tbody = document.createElement('tbody')
    contaMes.forEach( conta => {
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.textContent = conta.nome
        tr.appendChild(td)
        td = document.createElement('td')
        let porcento = conta.valor / contaMes[0].valor * 100
        td.textContent = conta.nome == 'Entradas' ? '' : isNaN(porcento) ? '0.00%' : !isFinite(porcento) ? `${Math.abs((conta.valor / despesa * 100)).toFixed(2)}%` : `${porcento.toFixed(2)}%`
        tr.appendChild(td)
        td = document.createElement('td')
        td.textContent = conta.valor.toFixed(2)
        tr.appendChild(td)
        tbody.appendChild(tr)
    })
    return tbody
}

function mostrarFootTempo(contaMes){
    let despesa = contaMes.reduce( (total, conta) => {
        if(conta.nome != 'Entradas') total += conta.valor
        return total
    }, 0)
    let total = contaMes[0].valor
    let tfoot = document.createElement('tfoot')
    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.textContent = 'Saldo'
    tr.appendChild(td)
    td = document.createElement('td')
    let porcento = 100 - (despesa / total * 100)
    td.textContent = total <= 0 && despesa > 0 ? '-100.00%' : isNaN(porcento) ? '0.00%' : !isFinite(porcento) ? '100.00%' : `${porcento.toFixed(2)}%`
    tr.appendChild(td)
    td = document.createElement('td')
    td.textContent = total < 0 ? `( ${Math.abs(total).toFixed(2)} )` : (total - despesa).toFixed(2)
    tr.appendChild(td)
    tfoot.appendChild(tr)
    return tfoot
}

function tabelaMetas(contas){
    let metas = contas.filter(conta => conta.meta == true)
    let table = document.createElement('table')
    table.appendChild(mostrarHeadBalanco('Meus ativos', 'Hoje', 'Meta'))
    table.appendChild(mostrarBodyMeta(metas))
    table.appendChild(mostrarFootMeta(metas))
    return table
}

function mostrarBodyMeta(metas){    
    let tbody = document.createElement('tbody')
    metas.forEach( meta => {
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.textContent = meta.nome
        tr.appendChild(td)
        td = document.createElement('td')
        td.textContent = meta.valor.toFixed(2)
        tr.appendChild(td)
        td = document.createElement('td')
        td.classList.add('meta')
        td.appendChild(inputMostrarValor(meta.valorMeta))
        tr.appendChild(td)
        tbody.appendChild(tr)
    })
    return tbody
}

function mostrarFootMeta(metas){
    let totalHoje = metas.reduce((total, meta) => {
        if(meta.meta == true) total += meta.valor
        return total
    },0 )
    let totalMeta = metas.reduce((total, meta) => {
        if(meta.meta == true) total += meta.valorMeta
        return total
    },0 )
    let tfoot = document.createElement('tfoot')
    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.textContent = 'Total'
    tr.appendChild(td)
    td = document.createElement('td')
    td.textContent = totalHoje.toFixed(2)
    tr.appendChild(td)
    td = document.createElement('td')
    td.textContent = totalMeta.toFixed(2)
    tr.appendChild(td)
    tfoot.appendChild(tr)
    return tfoot
}