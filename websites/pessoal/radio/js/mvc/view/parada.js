import { publicidade } from "../../utils/publicidade.js"
import { links } from "../control/links.js";
import { Links } from "../model/Links.js";

let cores = ['gold', 'silver', 'brown', 'orange']

export const mostrarParada = (paradaMusicas) => {
    links.push(new Links('Parada', 'h2-parada'))
    let paradaMusical = document.getElementById('parada')
    paradaMusical.style.display = 'flex'
    paradaMusical.innerHTML = ''
    paradaMusical.appendChild(publicidade())
    let h2 = document.createElement('h2')
    h2.id = 'h2-parada'
    h2.textContent = paradaMusicas.titulo
    paradaMusical.appendChild(h2)
    let divParada = document.createElement('div')
    divParada.classList.add('parada')
    paradaMusicas.musicas.forEach((musica, index) => {
        let div = document.createElement('div')
        let h3 = document.createElement('h3')
        h3.textContent = index + 1
        h3.style.backgroundColor = index < cores.length ? cores[index] : cores[cores.length - 1]
        index + 1 > 10 ? h3.style.padding = '1.5rem' : ''
        div.appendChild(h3)
        let divInterprete = document.createElement('div')
        divInterprete.classList.add('interprete')
        let pMusica = document.createElement('p')
        pMusica.textContent = musica.nome
        divInterprete.appendChild(pMusica)
        div.appendChild(divInterprete)
        let pInterprete = document.createElement('p')
        pInterprete.textContent = musica.interprete
        divInterprete.appendChild(pInterprete)
        div.appendChild(divInterprete)
        divParada.appendChild(div)
    });
    paradaMusical.appendChild(divParada)
}