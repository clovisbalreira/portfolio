export function filtrarCartas(){
    const botaoFiltrar  = pegarTag('.btn-filtrar')

    botaoFiltrar.addEventListener('click', () => {

        const categoriaSelecionada = pegarValorTag('#categoria')
        const precoMaximoSelecionada = pegarValorTag('#preco')

        const cartas = pegarVariosTag('.carta')

        cartas.forEach( carta => {
            const categoriaCarta = pegarDataset(carta.dataset.categoria)
            const precoCarta = pegarDataset(carta.dataset.preco)
            let mostrarCarta = condicaoMostrarCarta(categoriaSelecionada, categoriaCarta, precoMaximoSelecionada, precoCarta)
            condicaoMostrar(mostrarCarta, carta)
        })
    })
}

function pegarTag(tag){
    return document.querySelector(tag)
}

function pegarVariosTag(tag){
    return document.querySelectorAll(tag)
}

function pegarValorTag(tag){
    return document.querySelector(tag).value
}

function pegarDataset(dataset){
    return dataset
}

function esconderMostrar(carta, adicionar, esconder){
    carta.classList.add(adicionar)
    carta.classList.remove(esconder)
}

function validarMostrarCarta(mostrarCarta, filtro, naoBate){
    const temFiltro = filtro
    const cartaNaoBateComFiltro = naoBate
    temFiltro && cartaNaoBateComFiltro ? mostrarCarta = false : mostrarCarta == true ? mostrarCarta == true : mostrarCarta == false 
    return mostrarCarta
}

function condicaoMostrar(mostrarCarta, carta){
    if(mostrarCarta){
        esconderMostrar(carta, 'mostrar', 'esconder')
    }else{
        esconderMostrar(carta, 'esconder', 'mostrar')
    }
}

function condicaoMostrarCarta(categoriaSelecionada, categoriaCarta, precoMaximoSelecionada, precoCarta){
    let mostrarCarta = true
    mostrarCarta = validarMostrarCarta(mostrarCarta,  categoriaSelecionada != '', categoriaSelecionada.toLowerCase()  !=  categoriaCarta.toLowerCase())
    mostrarCarta = validarMostrarCarta(mostrarCarta,  precoMaximoSelecionada != '', parseFloat(precoCarta) > parseFloat(precoMaximoSelecionada))  
    return mostrarCarta
}