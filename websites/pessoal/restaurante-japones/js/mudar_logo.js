var imagem01 = new Image(52,52);	
var imagem02 = new Image(52,52);	   
var imagem03 = new Image(52,52);
var imagem04 = new Image(52,52);
var imagem05 = new Image(52,52);	   
var imagem06 = new Image(52,52);
var imagem07 = new Image(52,52);

imagem01.src = "img/nav/home-hover.png";		  
imagem02.src = "img/nav/cardapio-hover.png";	  
imagem03.src = "img/nav/servico-hover.png";	
imagem04.src = "img/nav/produto-hover.png";
imagem05.src = "img/nav/fotos-hover.png";
imagem06.src = "img/nav/contato-hover.png";
imagem07.src = "img/nav/localizacao-hover.png";  

function callBack() {
  document.home.src = "img/nav/home.png";	
  document.cardapio.src = "img/nav/cardapio.png";
  document.servico.src = "img/nav/servico.png";
  document.produto.src = "img/nav/produto.png";
  document.fotos.src = "img/nav/fotos.png";
  document.contato.src = "img/nav/contato.png";
  document.localizacao.src = "img/nav/localizacao.png";
  mostrarSelecionado()
}

function mostrarSelecionado(){
  if(window.location.href.includes('index')){
    document.home.src = "img/nav/home-selecionado.png";	
  }else if(window.location.href.includes('cardapio')){
    document.cardapio.src = "img/nav/cardapio-selecionado.png";
  }else if(window.location.href.includes('servico')){
    document.servico.src = "img/nav/servico-selecionado.png";
  }else if(window.location.href.includes('produto')){
    document.produto.src = "img/nav/produto-selecionado.png";
  }else if(window.location.href.includes('fotos')){
    document.fotos.src = "img/nav/fotos-selecionado.png";
  }else if(window.location.href.includes('contato')){
    document.contato.src = "img/nav/contato-selecionado.png";
  }else if(window.location.href.includes('localizacao')){
    document.localizacao.src = "img/nav/localizacao-selecionado.png";
  }
}

function swapImage1() {
  document.home.src = (imagem01.src);	
}		
function swapImage2(){	
  document.cardapio.src = (imagem02.src);			
}	 
function swapImage3(){	
  document.servico.src = (imagem03.src);			
}	
function swapImage4(){	
  document.produto.src = (imagem04.src);			
}	
function swapImage5(){	
  document.fotos.src = (imagem05.src);			
}	
function swapImage6(){	
  document.contato.src = (imagem06.src);			
}	
function swapImage7(){	
  document.localizacao.src = (imagem07.src);			
}	