class BotaoGerenciador{
    constructor(texto, x, y){
        this.texto = texto
        this.y = y
        this.x = x
        this.botao = createButton(this.texto)
        this.botao.mousePressed( () => this._alteraCena())
        this.botao.addClass('botao')
    }
    draw(){
        this.botao.position(this.x, this.y)
        this.botao.center('horizontal')
    }
    _alteraCena(){
        this.botao.remove()
        cenaAtual = 'jogo'
    }
}