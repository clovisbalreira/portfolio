export function publicidade(){
    let div = document.createElement('div')
    div.classList.add('publicidade')
    if(window.innerWidth <= 768){
        div.appendChild(anuncio('<p>Publicidade</p>'))
    }else if(window.innerWidth <= 1000){
        div.appendChild(anuncio('<p>Publicidade</p>'))
        div.appendChild(anuncio('<p>Publicidade</p>'))
    }else{
        div.appendChild(anuncio('<p>Publicidade</p>'))
        div.appendChild(anuncio('<p>Publicidade</p>'))
        div.appendChild(anuncio('<p>Publicidade</p>'))
    }
    return div
}

function anuncio(anuncio){
    let div = document.createElement('div')
    div.innerHTML = anuncio
    return div
}