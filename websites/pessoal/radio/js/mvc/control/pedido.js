let botaoAdicionar = document.getElementById('btn-adicionar')
botaoAdicionar.addEventListener('click', (event) => {
    event.preventDefault()
    let totalClasses = document.querySelectorAll('.input-musica').length
    if(totalClasses <= 4){
        let divInput = document.getElementById('input-pedido')
        let div = document.createElement('div')
        let divMusica = document.createElement('div')
        let pMusica = document.createElement('p')
        pMusica.innerHTML = 'Música'
        divMusica.appendChild(pMusica)
        let inputMusica = document.createElement('input')
        inputMusica.classList.add('input-musica')
        inputMusica.setAttribute('type', 'text')
        inputMusica.placeholder = 'Digite a música'
        divMusica.appendChild(inputMusica)
        div.appendChild(divMusica)
        let divInterprete = document.createElement('div')
        let pInterprete = document.createElement('p')
        pInterprete.innerHTML = 'Interprete'
        divInterprete.appendChild(pInterprete)
        let inputInterprete = document.createElement('input')
        inputInterprete.classList.add('input-interprete')
        inputInterprete.setAttribute('type', 'text')
        inputInterprete.placeholder = 'Digite a Interprete'
        divInterprete.appendChild(inputInterprete)
        div.appendChild(divInterprete)
        divInput.appendChild(div)
    }
})

let botaoExcluir = document.getElementById('btn-excluir')
botaoExcluir.addEventListener('click', (event) => {
    event.preventDefault()
    let divInput = document.getElementById('input-pedido')
    const filhosDiretos = divInput.children;
  
    let count = 0;
    for (let elemento of filhosDiretos) {
      if (elemento.tagName === 'DIV') { 
        count++;
      }
    }
    if(count > 1){
        divInput.removeChild(filhosDiretos[count - 1])
    }
})

let botaoAdicionarPedido = document.getElementById('enviar')
botaoAdicionarPedido.addEventListener('click', (event) => {
  event.preventDefault()
  let nome = document.getElementById('nome')
  let idade = document.getElementById('idade')
  let pais = document.getElementById('paises')
  let estado = document.getElementById('estados')
  let cidade = document.getElementById('cidades')
  let inputMusicas = document.querySelectorAll('.input-musica')
  let musicas = Array.from(inputMusicas).map(input => input.value);
  let inputInterpretes = document.querySelectorAll('.input-interprete')
  let interpretes = Array.from(inputInterpretes).map(input => input.value);
  if(nome.value != '' && idade.value != '' && pais.value != '' && estado.value != '' && cidade.value != '' && !musicas.some(array => {return array.length === 0}) && !interpretes.some(array => {
    return array.length === 0
  })){
    let pedidoAtual = new Pedido(dados[indexRadio].nome, nome.value, idade.value, pais.value, estado.value, cidade.value)
    nome.value = ''
    idade.value = ''
    pais.value = ''
    estado.value = ''
    cidade.value = ''
    musicas.forEach((musica, index) => {
      pedidoAtual.adicionarPedido(musica,interpretes[index])
    })
    pedido.push(pedidoAtual)
    inputMusicas.forEach((input, index) => {
      input.value = ''
      inputInterpretes[index].value = ''
    })
    mostrarPedido()
  }else{
    mostrarErro()
  }
})



