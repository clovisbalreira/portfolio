const cartoes = document.querySelectorAll(".cartao");
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
btnVoltar.style.visibility = 'hidden'
visualicacaoBotao(btnVoltar, 'hidden')
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add("selecionado");
}

function visualicacaoBotao(id, visualicacao){
  id.style.visibility = visualicacao
}

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 2) visualicacaoBotao(btnAvancar, 'hidden')
  visualicacaoBotao(btnVoltar, 'visible')

  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 1) visualicacaoBotao(btnVoltar, 'hidden');
  visualicacaoBotao(btnAvancar, 'visible')
  esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});