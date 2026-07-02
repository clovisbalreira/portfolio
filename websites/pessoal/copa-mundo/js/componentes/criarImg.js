export function criarImg(imagem, texto){
    let img = document.createElement('img')
    img.src = imagem
    img.alt = texto
    return img
}