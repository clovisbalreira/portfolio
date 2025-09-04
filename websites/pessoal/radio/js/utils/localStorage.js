import { normalizarData } from "./normalizarData.js"

export const salvarLocalStorage = (chave, informacao) => {
    localStorage.setItem(chave, JSON.stringify(informacao))
}

export const lerLocalStorage = (chave) => {
    return JSON.parse(localStorage.getItem(chave))
}

export const apagarDoLocalStorage = (chave, itemApagar) => {
    const lista = JSON.parse(localStorage.getItem(chave)) || [];
    let listaFiltrada = ''
    if(chave == 'pedido'){
        listaFiltrada = lista.filter(item => normalizarData(new Date(item.data)).getTime() == itemApagar.getTime()
        );
    }
    localStorage.setItem(chave, JSON.stringify(listaFiltrada));
};