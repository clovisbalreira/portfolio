import { pedido } from "../control/pedido.js"

export const mostrarPedido = () => {
    let section = document.getElementById('pedido-confirmacao')
    section.innerHTML = ''
    section.style.display = 'block'
    let div = document.createElement('div')
    let h3 = document.createElement('h3')
    h3.textContent = `Olá ${pedido[pedido.length - 1].nome}!`
    div.appendChild(h3)
    let p = document.createElement('p')
    p.textContent = `Primeiramente, queremos expressar nosso mais sincero agradecimento por escolher nossa ${pedido[pedido.length - 1].radio}. É um prazer poder atender a um cliente tão especial de ${pedido[pedido.length - 1].cidade.toLowerCase()} , ${pedido[pedido.length - 1].estado.toLowerCase()} , ${pedido[pedido.length - 1].pais.toLowerCase()}. Estamos empolgados em compartilhar com você, aos seus ${pedido[pedido.length - 1].idade} anos, uma seleção de músicas que acreditamos que irão enriquecer seus dias. Aqui ${pedido[pedido.length - 1].pedido.length == 1 ? 'está ' : 'estão as '}${pedido[pedido.length - 1].pedido.length}${pedido[pedido.length - 1].pedido.length == 1 ? ' música ' : ' músicas '}que você nos pediu para preparar:`
    div.appendChild(p)
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let trThead = document.createElement('tr')
    let thMusica = document.createElement('th')
    thMusica.textContent = 'Música'
    trThead.appendChild(thMusica)
    let thInterprete = document.createElement('th')
    thInterprete.textContent = 'Interprete'
    trThead.appendChild(thInterprete)
    thead.appendChild(trThead)
    table.appendChild(thead)
    let tbody = document.createElement('tbody')
    pedido[pedido.length - 1].pedido.forEach( pedido => {
        let trtbody = document.createElement('tr')
        let tdMusica = document.createElement('td')
        trtbody.appendChild(tdMusica)
        tdMusica.textContent = pedido.musica
        let tdInterprete = document.createElement('td')
        tdInterprete.textContent = pedido.interprete
        trtbody.appendChild(tdInterprete)
        tbody.appendChild(trtbody)
    })
    table.appendChild(tbody)
    div.appendChild(table)
    let pAgradecimento = document.createElement('p')
    pAgradecimento.textContent = `Esperamos que ${pedido[pedido.length - 1].pedido.length == 1 ? 'essa música ' : 'essas músicas '} sejam uma fonte de inspiração e alegria.`
    div.appendChild(pAgradecimento)
    let pGratidao = document.createElement('p')
    pGratidao.textContent = 'Com gratidão e melhores cumprimentos,'
    div.appendChild(pGratidao)
    let pRadio = document.createElement('p')
    pRadio.textContent = pedido[pedido.length - 1].radio
    div.appendChild(pRadio)
    section.appendChild(div)
    esconderPedido(section)
}

export const mostrarErro = () => {
    let section = document.getElementById('pedido-confirmacao')
    section.innerHTML = ''
    section.style.display = 'block';
    let div = document.createElement('div')
    div.style.backgroundColor = 'red'
    let span = document.createElement('span')
    span.textContent = 'Todos os campos não foram preechidos.'
    div.appendChild(span)
    section.appendChild(div)
    esconderPedido(section)
}

function esconderPedido(section) {
    section.style.transition = 'opacity 2s ease-in-out';

    setTimeout(() => {
        section.style.opacity = '0';

        // Depois que a opacidade chegar a 0, escondemos de vez
        setTimeout(() => {
            section.style.display = 'none';
        }, 500); // mesmo tempo da animação
    }, 5000); // espera 10 segundos para começar a esconder
}