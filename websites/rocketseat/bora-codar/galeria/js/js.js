let imagens = document.querySelectorAll('.container')
imagens.forEach(imagem => {
    imagem.addEventListener('click', () => {
        imagem.classList.toggle('aumentarImagem')
    })
})
/* let i = 0
imagens[i].style.transform = 'scale(2.0)'
imagens[i].style.paddingTop = '10px'
console.log(imagens[0]) */