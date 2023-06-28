let produtos = [
    {produto: 'Monitor', descricao: 'Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e DisplayPort, HDR 1000, FreeSync Premium, Ajuste de Altura - LC49G95TSSLXZD', imagem: 'product-image-monitor.jpg', preco: 8599.90, quantidade: 0},
    {produto: 'Cadeira Gamer', descricao: 'Cadeira Gamer  RGB - Preta com Iluminação (Led)', imagem: 'product-image-cadeira.jpg', preco: 959.90, quantidade: 0},
    {produto: 'Teclado Gamer', descricao: 'Teclado Gamer Mecânico Low Profile RGB AW510K 580', imagem: 'product-image-teclado.jpg', preco: 1002.00, quantidade: 0},
    {produto: 'Headset Gamer', descricao: 'Headset Gamer RGB Preto', imagem: 'product-image-headset.jpg', preco: 99.90, quantidade: 0},
    {produto: 'Patinho De Borracha', descricao: 'Patinho De Borracha Para Banho', imagem: 'product-image-patinho.jpg', preco: 19.90, quantidade: 0}
]

let produtosCarrinho = []   

/* mostrar produtos */
function mostrarProdutos(){
    let sectionProdutos = document.querySelector('#produtos')
    produtos.forEach( produto => {
        let divProdutos = document.createElement('div')
        divProdutos.classList.add('div-produto')
        let imagem = document.createElement('img')
        imagem.setAttribute('src', `./img/${produto.imagem}`)
        let divNomePreco = document.createElement('div')
        divNomePreco.classList.add('nome-preco')
        let nome = document.createElement('h2')
        nome.innerHTML = produto.produto
        let preco = document.createElement('p')
        preco.innerHTML = Number(produto.preco).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})
        let button = document.createElement('button')
        button.setAttribute('onClick', 'adicionarCarrinho(this)')
        button.innerHTML = 'adicionar ao carrinho'
        let divDescricao = document.createElement('div')
        divDescricao.classList.add('descricao')
        let descricao = document.createElement('p')
        descricao.innerHTML = produto.descricao
        divNomePreco.appendChild(nome)
        divNomePreco.appendChild(preco)
        divNomePreco.appendChild(button)
        divDescricao.appendChild(descricao)
        divProdutos.appendChild(imagem)
        divProdutos.appendChild(divNomePreco)
        divProdutos.appendChild(divDescricao)
        sectionProdutos.appendChild(divProdutos)
    })
}

/* adicionar carrinho */
function adicionarCarrinho(e){
    let nome = e.parentNode.querySelector('h2').innerHTML
    let adicionar = produtos.find( produto => produto.produto == nome)
    let incluir = true
    produtosCarrinho.forEach( produto => {
        if(produto == adicionar){
            incluir = false
        }
    })
    
    if(incluir){
        adicionar.quantidade = 1
        produtosCarrinho.push(adicionar)
    }
    carrinho()
}

/* mostrar carrinho */
function carrinho(){
    let carrinho = document.querySelector('#app main')
    carrinho.innerHTML = ''
    produtosCarrinho.forEach( produto => {
        divItem = document.createElement('div')
        divItem.classList.add('item')
        img = document.createElement('img')
        img.setAttribute('src', `./img/${produto.imagem}`)
        img.setAttribute('alt', produto.produto)
        divDetails = document.createElement('div')
        divDetails.classList.add('details')
        divTitle = document.createElement('div')
        divTitle.classList.add('title')
        divTitle.innerHTML = produto.descricao
        divPriceQty = document.createElement('div')
        divPriceQty.classList.add('price-qty')
        divPrice = document.createElement('div')
        divPrice.classList.add('price')
        divPrice.innerHTML = Number(produto.preco * produto.quantidade).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})
        divQty = document.createElement('div')
        divQty.classList.add('qty')        
        buttonSub = document.createElement('button')
        buttonSub.classList.add('sub')
        iSub = document.createElement('i')
        iSub.classList.add('ph')
        iSub.classList.add('ph-minus')
        span = document.createElement('span')
        span.innerHTML = produto.quantidade
        buttonAdd = document.createElement('button')
        buttonAdd.classList.add('add')
        iAdd = document.createElement('i')
        iAdd.classList.add('ph')
        iAdd.classList.add('ph-plus')
        divQty.appendChild(buttonSub)
        buttonSub.appendChild(iSub)
        divQty.appendChild(span)
        divQty.appendChild(buttonAdd)
        buttonAdd.appendChild(iAdd)
        divPriceQty.appendChild(divPrice)
        divPriceQty.appendChild(divQty)
        divItem.appendChild(img)
        divDetails.appendChild(divTitle)
        divDetails.appendChild(divPriceQty)
        divItem.appendChild(divDetails)
        carrinho.appendChild(divItem)
    })
    quantidade()
    setTimeout( () => {
        total()
    },100)    
}   

function quantidade(){ 
    let compras = document.querySelector('#app header div strong')
    let produtosCarrinhoElemento = document.querySelectorAll('#app main .item') 
    /* mudar quantidade itens */
    compras.innerHTML = produtosCarrinhoElemento.length + (produtosCarrinhoElemento.length > 1 ? ' itens' : ' item')
    /* mudar variaveis quantidade */
    produtosCarrinhoElemento.forEach( produto => {
        let quantidade = produto.querySelector('.details .price-qty .qty span')
        let descricao = produto.querySelector('img').getAttribute('alt')
        let preco = produto.querySelector('.details .price-qty .price')
        produto.querySelector('.details .price-qty .qty .sub').addEventListener('click', () => {
            if(parseInt(quantidade.innerHTML) != 0){
                let nome = produto.querySelector('div img').getAttribute('alt')
                quantidade.innerHTML = parseInt(quantidade.innerHTML) - 1
                precoProduto = produtosCarrinho.find( produto => produto.produto == descricao)
                preco.innerHTML = Number(parseFloat(precoProduto.preco) * parseInt(quantidade.innerHTML)).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})
                atualizarQuantidade(parseInt(quantidade.innerHTML), nome)
                setTimeout( () => {
                    total()
                },100)    
            }
            if(parseInt(quantidade.innerHTML) < 1){
                excluir = produto.querySelector('div img').getAttribute('alt')
                produtosCarrinho = produtosCarrinho.filter( produto => produto.produto != excluir && produto.quantidade > 0)
                produtosCarrinho.forEach(produto => console.log(`${produto.produto} - ${produto.quantidade}`))
                carrinho()
            }
        })
        produto.querySelector('.details .price-qty .qty .add').addEventListener('click', () => {
            let nome = produto.querySelector('div img').getAttribute('alt')
            quantidade.innerHTML = parseInt(quantidade.innerHTML) + 1
            precoProduto = produtosCarrinho.find( produto => produto.produto == descricao)
            preco.innerHTML = Number(parseFloat(precoProduto.preco) * parseInt(quantidade.innerHTML)).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})
            atualizarQuantidade(parseInt(quantidade.innerHTML), nome)
            setTimeout( () => {
                total()
            },100)
        })
    })
}
 

function atualizarQuantidade(numero, nome){
    produtosCarrinho.forEach( produto => {
        if(produto.produto == nome){
            produto.quantidade = numero
        }
    })
    console.log(nome)
}

function total(){
    let precos = document.querySelectorAll('#app main .item')
    let total = 0
    precos.forEach( preco => {
        precoProduto = parseFloat(preco.querySelector('.details .price-qty .price').innerHTML.replace('R$&nbsp;','').replace('.','').replace(',','.'))
        total += precoProduto
    })
    if(document.querySelector('#app footer .coupon input').value.includes('desconto')){
        let desconto = parseInt(document.querySelector('#app footer .coupon div input').value.replace('desconto',''))
        if( desconto < 71){
            total = total - ( total / 100 * desconto )
        }
    }
    document.querySelector('#app footer .total strong').innerHTML = Number(total).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})
    produtos.forEach(produto => console.log(`${produto.produto} - ${produto.quantidade}`))
    produtosCarrinho.forEach(produto => console.log(`${produto.produto} - ${produto.quantidade}`))
    console.log('-----------------')
}

function descontos(input){
    coupon.classList.toggle('esconder')
    div.classList.toggle('esconder')
    div.querySelector('input').value = input
    carrinho()
}

let coupon = document.querySelector('.coupon span')
let div = document.querySelector('.coupon div')

coupon.addEventListener('click', () => {
    descontos('desconto10')
})
    
div.querySelector('i.ph-x').addEventListener('click', () => {
    descontos('')
})

div.querySelector('input').addEventListener('input', () => {
    carrinho()
})

let menuIcon = true
/* menu */
let menu = document.querySelector('#menu')
menu.addEventListener('click',() => {
    document.querySelector('#app').classList.toggle('grid')
    document.querySelector('#app').classList.toggle('esconder')
})

let menuApp = document.querySelector('#app')
menuApp.querySelector('header i').addEventListener('click', () => {
    menuApp.classList.add('esconder')
})