var produtos = [
  { nome: 'Nome', descricao: 'Descrição.', valor: '00,00', imagem: 'img/produto/produto01.png' },
  { nome: 'Nome', descricao: 'Descrição.', valor: '00,00', imagem: 'img/produto/produto02.png' },
  { nome: 'Nome', descricao: 'Descrição.', valor: '00,00', imagem: 'img/produto/produto03.png' },
  { nome: 'Nome', descricao: 'Descrição.', valor: '00,00', imagem: 'img/produto/produto03.png' },
]

function criarProduto(){
  var section = document.getElementById("vendas")
  for(var i = 0; i < produtos.length; i++){
    var div = document.createElement("div")
    var img = document.createElement("img")
    div.appendChild(img)
    img.setAttribute('src', produtos[i].imagem)
    img.setAttribute('alt', produtos[i].nome)
    divDescricao = document.createElement("div")
    pNome = document.createElement("p")
    pNome.innerHTML = produtos[i].nome
    divDescricao.appendChild(pNome)
    pDescricao = document.createElement("p")
    pDescricao.innerHTML = produtos[i].descricao
    divDescricao.appendChild(pDescricao)
    pValor = document.createElement("p")
    pValor.innerHTML = "R$ " + produtos[i].valor
    divDescricao.appendChild(pValor)
    div.appendChild(divDescricao)
    section.appendChild(div)
  }
}
criarProduto()

