export const mostrarPost = (post) => {
    let section = document.getElementById('post')
    section.innerHTML = ''
    let div = document.createElement('div')
    let divImagemTitulo = document.createElement('div')
    divImagemTitulo.classList.add('imagem-titulo')
    let img = document.createElement('img')
    img.classList.add('imagem-post')
    img.src = post.imagem
    divImagemTitulo.appendChild(img)
    let h2 = document.createElement('h2')
    h2.textContent = post.titulo
    divImagemTitulo.appendChild(h2)
    div.appendChild(divImagemTitulo)
    let divDescricao = document.createElement('div')
    let p = document.createElement('p')
    p.textContent = post.descricao
    divDescricao.appendChild(p)
    div.appendChild(divDescricao)
    section.appendChild(div)
}