export function removerAcentosImagem(img){
    return `${img.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`
}