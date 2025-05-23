function preload(){
    imagemCenario = loadImage('./imagens/cenario/bg01.png')
    imagemGameOver = loadImage('./imagens/assets/game-over.png')
    imagemPersonagem = loadImage('./imagens/personagem/correndo.png')
    imagemInimigo = loadImage('./imagens/inimigos/gotinha.png')
    imagemInimigoGrande = loadImage('./imagens/inimigos/troll.png')
    imagemInimigoVoador = loadImage('./imagens/inimigos/gotinha-voadora.png')
    imagemTelaInicial = loadImage('./imagens/cenario/telaInicial.png')
    imagemVida = loadImage('./imagens/assets/coracao.png')
    fonteTelaInicial = loadFont('./imagens/assets/fonteTelaInicial.otf')
    fita = loadJSON('./fita/fita.json')
    somJogo = loadSound('./sons/trilha_jogo.mp3')
    somJPulo = loadSound('./sons/somPulo.mp3')
}
