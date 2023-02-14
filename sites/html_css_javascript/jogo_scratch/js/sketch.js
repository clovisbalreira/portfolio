//variaveis tela
let width = 600;
let height = 400;

//variaveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

//velocidade bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis raquete
let xRaquete = 5;
let yRaquete = 150;

//variaveis oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  //trilha = loadSound('trilha.mp3')
  //raquetada = loadSound('raquetada.mp3')
  //ponto = loadSound('ponto.mp3')
}

function setup() {
  createCanvas(width, height);
  //trilha.loop();
}

function draw() {
  background(0);
  mostrarBolinha();
  movimentoBolinha();
  verificarColisaoBorda();
  mostrarRaquete(xRaquete, yRaquete);
  movimentarMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluirPlacar();
  marcarPonto();
}

function mostrarBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentoBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificarColisaoBorda(){
  if(xBolinha + raio > width || xBolinha - raio < 0 ){
    velocidadeXBolinha *= -1;
  }
  
  if(yBolinha + raio > height || yBolinha - raio < 0 ){
    velocidadeYBolinha *= -1;
  }
}

function mostrarRaquete(x, y){
  rect(x, y, raqueteComprimento ,raqueteAltura);
}

function movimentarMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if(xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha - raio > yRaquete){
    velocidadeXBolinha *= -1;
    //raquetada.play();
  }
}

function verificarColisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
    //raquetada.play();
  } 
}

function movimentoRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente;
}

function incluirPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20)
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20)
  fill(255);
  text(pontosDoOponente, 470, 26);
}

function marcarPonto(){
  if(xBolinha > 590){
    meusPontos += 1;
    //ponto.play();
  }
  if(xBolinha < 10){
    pontosDoOponente += 1;
    //ponto.play();
  }
}