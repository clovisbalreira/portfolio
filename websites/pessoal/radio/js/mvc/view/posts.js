const mostrarPosts = (posts, radio) => {
    const artigos = posts.filter(post => post.radio === radio);
    let divPost = document.getElementById('posts')
    divPost.innerHTML = ''
    artigos.forEach( noticia => {
        let div = document.createElement('div')
        div.classList.add('post')
        let img = document.createElement('img')
        img.src = noticia.imagem
        div.appendChild(img)
        let h2 = document.createElement('h2')
        h2.textContent = noticia.titulo
        div.appendChild(h2)
        let p = document.createElement('p')
        p.textContent = noticia.descricao
        div.appendChild(p)
        let button = document.createElement('button')
        button.textContent = 'Leia Mais'
        button.classList.add('btn-post')
        div.appendChild(button)
        divPost.appendChild(div)
    })
}