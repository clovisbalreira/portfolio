let fotos = [
    {foto: 'imagem001.jpg', alt: 'a'},
    {foto: 'imagem002.jpg', alt: ''},
    {foto: 'imagem003.jpg', alt: ''},
    {foto: 'imagem004.jpg', alt: ''},
    {foto: 'imagem005.jpg', alt: ''},
    {foto: 'imagem006.jpg', alt: ''},
    {foto: 'imagem007.jpg', alt: ''},
    {foto: 'imagem008.jpg', alt: ''},
    {foto: 'imagem009.jpg', alt: ''},
    {foto: 'imagem010.jpg', alt: ''},
    {foto: 'imagem011.jpg', alt: ''},
    {foto: 'imagem012.jpg', alt: ''},
    {foto: 'imagem013.jpg', alt: ''},
    {foto: 'imagem014.jpg', alt: ''},
    {foto: 'imagem015.jpg', alt: ''},
    {foto: 'imagem016.jpg', alt: ''},
    {foto: 'imagem017.jpg', alt: ''},
    {foto: 'imagem018.jpg', alt: ''},
    {foto: 'imagem019.jpg', alt: ''},
    {foto: 'imagem020.jpg', alt: ''},
    {foto: 'imagem021.jpg', alt: ''},
    {foto: 'imagem022.jpg', alt: ''},
    {foto: 'imagem023.jpg', alt: ''},
    {foto: 'imagem024.jpg', alt: ''},
    {foto: 'imagem025.jpg', alt: ''},
    {foto: 'imagem026.jpg', alt: ''},
    {foto: 'imagem027.jpg', alt: ''},
    {foto: 'imagem028.jpg', alt: ''},
    {foto: 'imagem029.jpg', alt: ''},
    {foto: 'imagem030.jpg', alt: ''},
    {foto: 'imagem031.jpg', alt: ''},
    {foto: 'imagem032.jpg', alt: ''},
    {foto: 'imagem033.jpg', alt: ''},
    {foto: 'imagem034.jpg', alt: ''},
    {foto: 'imagem035.jpg', alt: ''},
    {foto: 'imagem036.jpg', alt: ''},
    {foto: 'imagem037.jpg', alt: ''},
    {foto: 'imagem038.jpg', alt: ''},
    {foto: 'imagem039.jpg', alt: ''},
    {foto: 'imagem040.jpg', alt: ''},
    {foto: 'imagem041.jpg', alt: ''},
    {foto: 'imagem042.jpg', alt: ''},
    {foto: 'imagem043.jpg', alt: ''},
]

let album = document.getElementById('album')
contagem = 1
let section = ''
fotos.forEach( foto => {
    if(contagem == 1) {
        section = document.createElement('section')
        section.classList.add('coluna')
    }
    console.log(section)
    contagem += 1
    let img = document.createElement('img')
    img.src = `./imagens/${foto.foto}`
    img.alt = foto.alt
    section.appendChild(img)
    if(contagem == 5){
        contagem = 1
        album.appendChild(section)
    }
})