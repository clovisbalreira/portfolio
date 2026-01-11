export function criarImagem(caminho, imagem, texto){
    let img = document.createElement('img')
    img.src = `${caminho}${imagem}`
    img.alt = texto
    return img
}