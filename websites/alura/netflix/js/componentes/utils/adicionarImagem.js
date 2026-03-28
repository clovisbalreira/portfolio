export function adicionarImagem(perfil){
    let img = document.createElement('img')
    img.src = `./img/${perfil.imagem}`
    img.alt = perfil.alt
    return img
}