const websites = [
  {nome: 'GTA', caminho: 'gta'},
  {nome: 'One Pierce', caminho: 'one-pierce'},
  {nome: 'Pokemon', caminho: 'pokemon'},
  {nome: 'Super Mario', caminho: 'super-mario'},
  {nome: 'The Last Us', caminho: 'the-last-us'},
  {nome: 'X-men', caminho: 'x-men'},
]

const btnMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
let quantidadeDeProjetos = 2;

document.addEventListener("DOMContentLoaded", function () {
  mostrarProjetos(websites, quantidadeDeProjetos);
});

btnMostrarProjetos.addEventListener('click', () => {
  mostrarMaisProjetos()
  esconderBotao()
})

function mostrarProjetos(websites, quantidadeDeProjetos) {
  const divProjetos = document.querySelector('.container-projetos')
  let i = 0
  websites.forEach(website => {
    divProjetos.innerHTML += `
    <div class="projeto ${i < quantidadeDeProjetos ? 'ativo' : 'remover'}">
    <a href="../${website.caminho}/index.html" target="_blank">
    <embed src="../${website.caminho}" type="video/webm">
    <h3>${website.nome}</h3>
    <div class="informacoes-projeto">
    <p>Projeto feito usando HTML, CSS e JavaScript</p>
    <p>🔗 Ver no GitHub Pages</p>
    </div>
    </a>
    </div>
    `
    i++
  })
}

function mostrarMaisProjetos() {  
  const projetosInativos = document.querySelectorAll('.projeto:not(.ativo')
  quantidadeDeProjetos += 2
  for(let i = 0; i < 2; i++){
    projetosInativos[i].classList.add('ativo')
  }
/*   projetosInativos.forEach(projetosInativo => {
  }) */
}

function esconderBotao(){
  if(quantidadeDeProjetos == websites.length){ 
    btnMostrarProjetos.classList.add('remover')
  }
}