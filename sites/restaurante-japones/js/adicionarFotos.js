produtos =[
    {nome : "objeto1.png"},
    {nome : "objeto2.png"},
    {nome : "objeto3.png"},
    {nome : "objeto4.png"},
    {nome : "objeto5.png"},
    {nome : "objeto6.png"},
    {nome : "objeto7.png"},
    {nome : "objeto8.png"},
    {nome : "objeto9.png"},
    {nome : "objeto10.png"},
    {nome : "objeto11.png"},
    {nome : "objeto12.png"},
]
fotos = [
    {nome:'cozinha1.png'},
    {nome:'cozinha2.png'},
    {nome:'cozinha3.png'},
    {nome:'cozinha4.png'},
    {nome:'cozinha5.png'},
    {nome:'cozinha6.png'},
    {nome:'cozinha7.png'},
    {nome:'cozinha8.png'},
    {nome:'cozinha9.png'},
    {nome:'cozinha10.png'},
    {nome:'cozinha11.png'},
    {nome:'cozinha12.png'},
]

function adicionarFotos(id, pasta, array){
    let sectionProduto = document.getElementById(id)
    let ulProduto = document.createElement('ul')
    array.forEach(produto => {
        let li = document.createElement('li')
        let img = document.createElement('img')
        img.classList.add('img-objeto')
        img.classList.add('magnify')
        img.setAttribute('src', 'img/'+pasta+'/' + produto.nome)
        li.appendChild(img)
        ulProduto.appendChild(li)
    });
    sectionProduto.appendChild(ulProduto)
}