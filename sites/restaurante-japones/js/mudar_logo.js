//PréCarregando Imagens;
var imagem01 = new Image(52,52);	
var imagem02 = new Image(52,52);	   
var imagem03 = new Image(52,52);
var imagem04 = new Image(52,52);
var imagem05 = new Image(52,52);	   
var imagem06 = new Image(52,52);
var imagem07 = new Image(52,52);


//Chamando as Imagens;
imagem01.src = "img/nav/home1.png";		  
imagem02.src = "img/nav/cardapio1.png";	  
imagem03.src = "img/nav/servico1.png";	
imagem04.src = "img/nav/produto1.png";
imagem05.src = "img/nav/galeriadefotos1.png";
imagem06.src = "img/nav/contato1.png";
imagem07.src = "img/nav/localizacao1.png";  

//Criando a Função de Retorno da Imagem Original;
function callBack(logo) {
  document.home.src = "img/nav/home.png";	
  document.cardapio.src = "img/nav/cardapio.png";
  document.servico.src = "img/nav/servico.png";
  document.produto.src = "img/nav/produto.png";
  document.galeriadefotos.src = "img/nav/galeriadefotos.png";
  document.contato.src = "img/nav/contato.png";
  document.localizacao.src = "img/nav/localizacao.png";
  if(logo == "home"){
    document.home.src = "img/nav/home2.png";	
  }
}

//Criando a Função para Troca de Imagens;
function swapImage() {
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
  document.galeriadefotos.src = (imagem05.src);			
}	
function swapImage6(){	
  document.contato.src = (imagem06.src);			
}	
function swapImage7(){	
  document.localizacao.src = (imagem07.src);			
}	