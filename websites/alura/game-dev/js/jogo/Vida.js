class Vida{
    constructor(maximo, inicial){
        this.maximo = maximo
        this.inicial = inicial
        this.vidas = this.inicial
        this.largura = 25
        this.altura = 25
        this.xInicial = 20
        this.y = 20
    }
    draw(){
        for(let i = 0; i < this.vidas; i++){
            const maximo = i * 10
            const posicao = this.xInicial * ( i + 1)
            image(imagemVida, maximo + posicao, this.y, this.altura, this.largura)
        }
    }
    ganhaVida(){
        if(this.vidas <= this.maximo){
            this.vidas++
        }
    }
    perderVida(){
        this.vidas--
    }
}