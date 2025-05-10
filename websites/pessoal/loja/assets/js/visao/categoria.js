var menu = document.getElementById('navMenu')
categorias.forEach( categoria => {
    var a = document.createElement('a')
    a.innerHTML = categoria.nome
    a.setAttribute('href', `#${categoria.nome}`) 
    a.setAttribute('onClick', 'fechaMenu()') 
    menu.append(a)
});