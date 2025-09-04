import { mostrarPedido, mostrarErro } from "../mvc/view/pedido.js"
import { dados } from "../mvc/control/dados.js"
import { pedido } from "../mvc/control/pedido.js"
import { variavelGlobal } from "../mvc/control/global.js"
import { Pedido } from "../mvc/model/Pedido.js"
import { lerLocalStorage, salvarLocalStorage, apagarDoLocalStorage } from "./localStorage.js"
import { normalizarData } from "./normalizarData.js"

export function fazerPedido(data){
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
    let email = document.getElementById('email')
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
      let pedidoAtual = new Pedido(data, dados[variavelGlobal.indexRadio].nome, nome.value, idade.value, email.value, pais.value, estado.value, cidade.value)
      nome.value = ''
      idade.value = ''
      email.value = ''
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
      variavelGlobal.pedido = lerLocalStorage('pedido') || []
      variavelGlobal.pedido.push({data : new Date(data)})
      salvarLocalStorage('pedido', variavelGlobal.pedido)
      mostrarPedido()
    }else{
      mostrarErro()
      return
    }
  })
}

export const atualizarPedido = () => {
  let pedidos = lerLocalStorage('pedido')
  if(pedidos != null){
    pedidos.forEach(pedido => {
      deletarPedido(pedido)
    })
  }
}

const deletarPedido = (pedido) => {
  let dataAgora = normalizarData(new Date())
  if(normalizarData(new Date(pedido.data)).getTime() != dataAgora.getTime()){
    inputs(false)
    apagarDoLocalStorage('pedido', dataAgora)
  }else{
    inputs(true)
  }
}

function inputs(condicao){
  let nome = document.getElementById('nome')
      let email = document.getElementById('email')
      let idade = document.getElementById('idade')
      let pais = document.getElementById('paises')
      let estado = document.getElementById('estados')
      let cidade = document.getElementById('cidades')
      let inputMusicas = document.querySelector('.input-musica')
      let inputInterpretes = document.querySelector('.input-interprete')
      let adicionar = document.getElementById('btn-adicionar')
      let remover = document.getElementById('btn-excluir')
      let enviar = document.getElementById('enviar')
      nome.disabled = condicao
      email.disabled = condicao
      idade.disabled = condicao
      pais.disabled = condicao
      estado.disabled = condicao
      cidade.disabled = condicao
      inputMusicas.disabled = condicao
      inputInterpretes.disabled = condicao
      adicionar.disabled = condicao
      remover.disabled = condicao
      enviar.disabled = condicao
}