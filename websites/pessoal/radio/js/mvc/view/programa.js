export function mostrarPrograma(selecao){
    let section = document.getElementById('programa')
    let divPrincipal = document.createElement('div')
    let img = document.createElement('img')
    img.src = selecao.foto 
    divPrincipal.appendChild(img)
    let div = document.createElement('div')
    let h2 = document.createElement('h2')
    h2.textContent = `Programa: ${selecao.nome}`
    div.appendChild(h2)
    if(selecao.descricao != ''){
        let p = document.createElement('p')
        p.textContent = `Descrição: ${selecao.descricao}`
        div.appendChild(p)
    }
    let h3 = document.createElement('h3')
    h3.classList.add('nome-locutor-select')
    h3.textContent = `Programa: ${selecao.locutor.nome}`
    div.appendChild(h3)
    divPrincipal.appendChild(div)
    section.appendChild(divPrincipal)
}