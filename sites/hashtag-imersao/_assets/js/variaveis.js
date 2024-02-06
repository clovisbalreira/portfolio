let aulas = [
    {titulo:'Player', caminho: './aula01'},
    {titulo: 'E-Commerce', caminho: './aula02'},
    {titulo: 'Ifood', caminho: 'https://github.com/clovisbalreira/portfolio/tree/main/sites/hashtag-imersao/aula03'},
    {titulo: 'Chat', caminho: 'https://github.com/clovisbalreira/portfolio/tree/main/sites/hashtag-imersao/aula04'},
]
let main = document.querySelector('main')
let ul = document.createElement('ul')
aulas.forEach( aula => {
    let li = document.createElement('li')
    let a = document.createElement('a')
    a.innerHTML = aula.titulo
    a.setAttribute('href', aula.caminho )
    a.setAttribute('target', '_black')
    li.appendChild(a)
    if(aula.titulo == 'Player' || aula.titulo == 'E-Commerce'){
        let embed = document.createElement('embed')
        embed.classList.add('play')
        embed.setAttribute('type','video/webm')
        embed.setAttribute('src', aula.caminho)
        embed.setAttribute('height','350px')
        li.appendChild(embed)
    }
    ul.appendChild(li)
})
main.appendChild(ul)
