import { criarElemento } from "../../componentes/criarElemento.js"

export function mostrarInfo(jogo){
    let div = document.createElement('div')
    div.classList.add('info')
    div.appendChild(criarElemento('span', `📅 ${formatarData(jogo)}`))
    div.appendChild(criarElemento('span', `🕒 ${formatarHora(jogo)}`))
    return div
}

function formatarData(jogo){
    const dia = String(jogo.data.getDate()).padStart(2, '0');
    const mes = String(jogo.data.getMonth() + 1).padStart(2, '0');
    const ano = jogo.data.getFullYear();
    return `${dia}/${mes}/${ano}`
}

function formatarHora(jogo){
    const hora = String(jogo.data.getHours()).padStart(2, '0');
    const minuto = String(jogo.data.getMinutes()).padStart(2, '0');
    return `${hora}:${minuto}`
}