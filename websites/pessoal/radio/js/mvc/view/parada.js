import { anuncio } from "../../utils/anuncio.js"

let classes = (numero) => {
    let nome = 'posicao-quatro'
    if(numero == 1){
        nome = 'posicao-um'
    }else if(numero == 2){
        nome = 'posicao-dois'
    }else if(numero == 3){
        nome = 'posicao-tres'
    }
    return nome
}

export const mostrarParada = (paradaMusicas) => {
    let paradaMusical = document.getElementById('parada')
    paradaMusical.innerHTML = ''
    paradaMusical.appendChild(anuncio('<p>anuncio</p>'))
    let h2 = document.createElement('h2')
    h2.textContent = paradaMusicas.titulo
    paradaMusical.appendChild(h2)
    let divParada = document.createElement('div')
    divParada.classList.add('parada')
    let posicao = 1
    paradaMusicas.musicas.forEach(musica => {
        let div = document.createElement('div')
        let h3 = document.createElement('h3')
        h3.textContent = posicao
        h3.classList.add(classes(posicao++))
        posicao > 10 ? h3.style.padding = '1.5rem' : ''
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