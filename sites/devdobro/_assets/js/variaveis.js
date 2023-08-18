let desafios = [
    {titulo:'Mario', caminho: './desafio01'},
    {titulo: 'The last of us', caminho: './desafio02'},
    {titulo: 'Pokemon', caminho: './desafio03'},
    {titulo: 'X-men', caminho: './desafio04'}
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
