const mostrarPosts = (posts, radio) => {
    const artigos = posts.filter(post => post.radio === radio);
    let divPost = document.getElementById('posts')
    divPost.innerHTML = ''
    let artigoTotal = artigos.length
    if(conta > artigoTotal){
        let botaoSection = document.getElementById('section-post')
        botaoSection.style.display = 'none'
        conta = artigoTotal
    }
    for(let i = 0; i < conta; i++){
        let div = document.createElement('div')
        div.classList.add('post')
        let img = document.createElement('img')
        img.src = artigos[i].imagem
        div.appendChild(img)
        let h2 = document.createElement('h2')
        h2.textContent = artigos[i].titulo
        div.appendChild(h2)
        let p = document.createElement('p')
        p.textContent = artigos[i].descricao
        div.appendChild(p)
        let button = document.createElement('button')
        button.textContent = 'Leia Mais'
        button.classList.add('btn-post')
        div.appendChild(button)
        divPost.appendChild(div)
    }
}