let desafios = [
    {titulo: 'Player de música', caminho: './desafio01'},
    {titulo: 'Produto Cartão', caminho: 'desafio02'},
    {titulo: 'Botões e Cursores', caminho: 'desafio03'},
    {titulo: 'Chat', caminho: 'desafio04'},
    {titulo: 'Calculadora', caminho: 'desafio05'},
    {titulo: 'Cartão de Embarque', caminho: 'desafio06'},
    {titulo: 'Encontre seu bloco de carnaval', caminho: 'desafio07'},
    {titulo: 'Dashboard', caminho: 'desafio08'},
    {titulo: 'Conversor de moeda', caminho: 'desafio09'},
    {titulo: 'Clima', caminho: 'desafio10'},
]
let main = document.querySelector('main')
let ul = document.createElement('ul')
desafios.forEach( desafio => {
    let li = document.createElement('li')
    let a = document.createElement('a')
    a.innerHTML = desafio.titulo
    a.setAttribute('href', desafio.caminho )
    a.setAttribute('target', '_black')
    li.appendChild(a)
    let embed = document.createElement('embed')
    embed.classList.add('play')
    embed.setAttribute('type','video/webm')
    embed.setAttribute('src', desafio.caminho)
    embed.setAttribute('height','350px')
    li.appendChild(embed)
    ul.appendChild(li)
})
main.appendChild(ul)
