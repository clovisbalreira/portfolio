let imagens = [
    { img : 'img/header/gif1.gif', classe : 'header-imagem', alt : 'Pratos Restaurante'},
    { img : 'img/header/logo.png', classe : 'header-logo', alt : 'Pratos Restaurante'},
    { img : 'img/header/gif2.gif', classe : 'header-imagem', alt : 'Pratos Restaurante'}
]
let paginas = [
    { href : 'index.html', src : 'home.png', src_selecionado : 'home-selecionado.png', name : 'home'},
    { href : 'cardapio.html', src : 'cardapio.png', src_selecionado : 'cardapio-selecionado.png', name : 'cardapio'},
    { href : 'servico.html', src : 'servico.png', src_selecionado : 'servico-selecionado.png', name : 'servico'},
    { href : 'produto.html', src : 'produto.png', src_selecionado : 'produto-selecionado.png', name : 'produto'},
    { href : 'fotos.html', src : 'fotos.png', src_selecionado : 'fotos-selecionado.png', name : 'fotos'},
    { href : 'contato.html', src : 'contato.png', src_selecionado : 'contato-selecionado.png', name : 'contato'},
    { href : 'localizacao.html', src : 'localizacao.png', src_selecionado : 'localizacao-selecionado.png', name : 'localizacao'}
]

let header = document.querySelector('header')
let div = document.createElement('div')
imagens.forEach( imagem => {
    let img = document.createElement('img')
    img.src = imagem.img
    img.alt = imagem.alt
    img.classList.add(imagem.classe)
    div.appendChild(img)
})
header.appendChild(div)
let nav = document.createElement('nav')
let ul = document.createElement('ul')
let i = 1
paginas.forEach( pagina => {
    let li = document.createElement('li')
    let a = document.createElement('a')
    a.href = pagina.href
    let img = document.createElement('img')
    let paginaUrl = pagina.name == 'home' ? 'index' : pagina.name
    let imagemMostra = window.location.href.includes(paginaUrl) ? `img/nav/${pagina.src_selecionado}` : `img/nav/${pagina.src}`
    img.src = imagemMostra
    console.log(imagemMostra)
    img.classList.add('img-nav')
    img.alt = `Pagina ${pagina.name[0].toUpperCase()}${pagina.name.slice(1)}`
    img.setAttribute('name', pagina.name)
    img.setAttribute('onmouseover', `javascript:swapImage${i}();`)
    img.setAttribute('onmouseout', `javascript:callBack();`)
    a.appendChild(img)
    li.appendChild(a)
    ul.appendChild(li)
    i++
})
nav.appendChild(ul)
header.appendChild(nav)