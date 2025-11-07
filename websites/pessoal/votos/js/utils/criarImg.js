export function criarImg(src, alt){
  let img = document.createElement('img')
  img.src = src
  img.alt = alt
  return img
}