var sectionProduto = document.getElementById('sectionProdutos')

var destaques = []
produtos.forEach( produto => {
    if(produto.destaque > 0){
        destaques[produto.destaque-1] = produto
    }
})

var h2ProdutoDestaque = document.createElement('h2')
h2ProdutoDestaque.innerHTML = "DESTAQUES"
sectionProduto.appendChild(h2ProdutoDestaque)
var divSectionProduto = document.createElement('div')
destaques.forEach( destaque => {
    var div = document.createElement('div')
    var imagem = document.createElement('img')
    imagem.setAttribute('src', './assets/imagens/produto/' + destaque.imagem)
    imagem.setAttribute('alt', destaque.descricao)
    div.appendChild(imagem)
    var button = document.createElement('button')
    button.classList.add('fale-conosco')
    button.innerHTML = 'Faça seu pedido'
    var a = document.createElement('a')
    a.setAttribute('href', `https://wa.me/${telefone}?text=Olá%20Tudo%20Bem%20gostaria%20de%20mais%20informações%20sobre%20${destaque.nome}`)
    a.setAttribute('target','_black')
    a.appendChild(button)
    div.appendChild(a)
    var nome = document.createElement('p')
    nome.innerHTML = destaque.nome
    nome.classList.add('nome')
    div.appendChild(nome)
    var preco = document.createElement('p')
    preco.innerHTML = 'R$: ' + destaque.preco.toFixed(2).replace(".",",")
    div.appendChild(preco)
    divSectionProduto.appendChild(div)
})
sectionProduto.appendChild(divSectionProduto)
    
categorias.forEach( categoria => {
    var h2 = document.createElement('h2')
    h2.innerHTML = categoria.nome
    h2.setAttribute('id', categoria.nome)
    sectionProduto.appendChild(h2)
    var divSectionProduto = document.createElement('div')
    produtos.forEach( produto => {
    if( categoria.nome == produto.categoria.nome){
            var div = document.createElement('div')
            var imagem = document.createElement('img')
            imagem.setAttribute('src', './assets/imagens/produto/' + produto.imagem)
            imagem.setAttribute('alt', produto.descricao)
            div.appendChild(imagem)
            var button = document.createElement('button')
            button.classList.add('fale-conosco')
            button.innerHTML = 'Faça seu pedido'
            var a = document.createElement('a')
            a.setAttribute('href', `https://wa.me/${telefone}?text=Olá%20Tudo%20Bem,%20Gostaria%20de%20mais%20informações%20sobre%20${produto.nome}`)
            a.setAttribute('target','_black')
            a.appendChild(button)
            div.appendChild(a)
            var nome = document.createElement('p')
            nome.innerHTML = produto.nome
            nome.classList.add('nome')
            div.appendChild(nome)
            var preco = document.createElement('p')
            preco.innerHTML = 'R$: ' + produto.preco.toFixed(2).replace(".",",")
            div.appendChild(preco)
            divSectionProduto.appendChild(div)
        }
    })
    sectionProduto.appendChild(divSectionProduto)
})

