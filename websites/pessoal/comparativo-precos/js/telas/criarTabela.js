export function criarTabela(mercado, valorTotal, listaCompras, id){
    let table = document.createElement('table')
    table.appendChild(criarCaption(mercado, valorTotal))
    table.appendChild(criarThead())
    table.appendChild(criarTbody(listaCompras, id))
    return table
}

function criarCaption(mercado, valorTotal){
    let caption = document.createElement('caption')
    let valorTeleEntrega = valorTotal > 0 ? mercado.valorMinimo == 0 ? mercado.valor : valorTotal < mercado.valorMinimo ? mercado.valor : 0 : 0
    caption.textContent = `${mercado.nome} - ${valorMonetario(valorTotal + valorTeleEntrega)} ${mercado.teleEntrega ? `Tele-Entrega: ${valorTeleEntrega == 0 ? 'Gratuito' : 'R$ ' + mercado.valor}` : 'Sem tele-entrega'}`
    return caption
}

function criarThead(){
    let thead = document.createElement('thead')
    let titulos = ['Descrição', 'Tam.', 'Q.t.d.', 'Valor', 'Valor Total']
    let tr = document.createElement('tr')
    titulos.forEach( titulo => {
        let th = document.createElement('th')
        th.textContent = titulo
        tr.appendChild(th)
    })
    thead.appendChild(tr)
    return thead
}

function criarTbody(listaCompras, id){
    let tbody = document.createElement('tbody')
    listaCompras.forEach( compra => {
        let tr = document.createElement('tr')
        colocarClasse(compra, tr)
        tr.appendChild(criarTd(`${compra.produto} - ${compra.descricao}`, {id: id, menor: compra.menor}))
        tr.appendChild(criarTd(compra.tamanho.toFixed(3), ''))
        tr.appendChild(criarTd(compra.quantidade, ''))
        tr.appendChild(criarTd(valorMonetario(compra.valor), ''))
        tr.appendChild(criarTd(valorMonetario(compra.valorTotal), ''))
        tbody.appendChild(tr) 
    })
    return tbody
}

function colocarClasse(compra, tr){
    if(!compra.menor && !compra.igual && !compra.maior) return tr.classList.add('neutro') 
    else if(compra.menor) return tr.classList.add('menor')
    else if(compra.igual) return tr.classList.add('igual')
    else if(compra.maior) return tr.classList.add('maior')
}

function criarTd(texto, array){
    let td = document.createElement('td')
    if(array != '' && array.id == 'section-pesquisados') {
        let div = document.createElement('div')
        div.appendChild(checkBox(array.menor))
        div.appendChild(document.createTextNode(' '))
        td.appendChild(div)
    }
    td.appendChild(document.createTextNode(texto))
    return td
}

function valorMonetario(numero){
    return `R$ ${parseFloat(numero).toFixed(2)}`
}

function checkBox(valorInicial) {
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.classList.add('input');
    input.checked = valorInicial;
    return input;
}