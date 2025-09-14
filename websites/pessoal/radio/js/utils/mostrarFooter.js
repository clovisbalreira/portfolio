export function mostrarFooter(radio, data){
    let footer = document.querySelector('footer')
    let p = document.createElement('p')
    p.appendChild(document.createTextNode("Copyright © | "))
    p.appendChild(span('ano', radio.fundacao))
    p.appendChild(document.createTextNode(" - "))
    p.appendChild(span('atual', data.getFullYear()))
    p.appendChild(document.createTextNode(" | "))
    p.appendChild(strong('nome-radio', radio.nomeCompleto))
    p.appendChild(document.createTextNode(" - "))
    p.appendChild(span('slogan-radio', radio.slogan))
    footer.appendChild(p)
    return p
}

function span(id, texto){
    let span = document.createElement('span')
    span.id = id
    span.textContent = texto 
    return span
}

function strong(id, texto){
    let strong = document.createElement('strong')
    strong.id = id
    strong.textContent = texto 
    return strong
}