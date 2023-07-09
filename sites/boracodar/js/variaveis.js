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
    {titulo: 'Login', caminho: 'desafio11'},
    {titulo: 'Kanban', caminho: 'desafio12'},
    {titulo: 'Formulário de cartão de crédito', caminho: 'desafio13'},
    {titulo: 'Upload', caminho: 'desafio14'},
    {titulo: 'Tabela de Preços', caminho: 'desafio15'},
    {titulo: 'Scrollbar', caminho: 'desafio16'},
    {titulo: 'Data', caminho: 'desafio17'},
    {titulo: 'Efeito 3D', caminho: 'desafio18'},
    {titulo: 'Interface UBER', caminho: 'desafio19'},
    {titulo: 'Galeria', caminho: 'desafio20'},
    {titulo: 'Carrinho de compras', caminho: 'desafio21'},
    {titulo: 'Profile Settings', caminho: 'desafio22'},
    {titulo: 'Formulário', caminho: 'desafio23'},
    {titulo: 'Ajustes de iliminação', caminho: 'desafio24'},
    {titulo: 'Interações em VR', caminho: 'desafio25'},
    {titulo: 'Receitas', caminho: 'desafio26'},
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
