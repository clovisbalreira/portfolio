export class Carousel {
    constructor(anterior, proximo, listaProdutos, navegacao) {
        this.anterior = document.querySelector(anterior), 
        this.proximo = document.querySelector(proximo), 
        this.listaProdutos = document.querySelector(listaProdutos), 
        this.navegacao = document.querySelector(navegacao)
        this.slides = this.getListaSlides()
        this.indicadores = this.getListaIndicadores()
        this.tamanhoSlide = this.getTamanhoSlides()
        this.indiceSlideAtual = 0
        this.proximo.addEventListener('click', this.proximoSlide.bind(this))
        this.anterior.addEventListener('click', this.proximoSlide.bind(this))     
        this.navegacao.addEventListener('click', this.pularParaSlide.bind(this))
        this.preparaSlides()
    }

    getListaSlides(){
        return Array.from(this.listaProdutos.children)
    }
    
    getListaIndicadores(){
        return Array.from(this.navegacao.children)
    }

    getTamanhoSlides(){
        return this.slides[0].getBoundingClientRect().width
    }

    getSlideAtual(){
        return this.slides[this.indiceSlideAtual]
    }

    getIndiceAtual(){
        return this.indicadores[this.indiceSlideAtual]
    }

    proximoSlide(){
        let proximoPosicao = this.indiceSlideAtual + 1
        if( proximoPosicao > this.slides.length - 1){
            proximoPosicao = 0
        }
        this.vaParaSlide(proximoPosicao)
    }

    anteriorPosicao(){
        let posicaoAnterior = this.indiceSlideAtual - 1
        if( posicaoAnterior < 0){
            posicaoAnterior = this.slides.length - 1
        }
                this.vaParaSlide(posicaoAnterior)
    }

    vaParaSlide(posicao){
        const indicadorAtual = this.getIndiceAtual()
        this.indiceSlideAtual = posicao
        const indicadorSelecionado = this.getIndiceAtual()
        this.scrollParaSlide(this.getSlideAtual())
        this.atualizaIndicadores(indicadorAtual, indicadorSelecionado)
    }

    scrollParaSlide(slideSelecionado){
        this.listaProdutos.style.transform = `translateX(-${slideSelecionado.style.left})`
    }

    atualizaIndicadores(indicadorAtual, indicadorSelecionado){
        indicadorAtual.classList.remove('carousel__indicador--ativo')
        indicadorSelecionado.classList.add('carousel__indicador--ativo')
    }
    
    pularParaSlide(evento){
        if(evento.target === evento.currentTarget) return
        const indicadorSelecionado = evento.target.getAttribute('data-indicador')
        console.log(indicadorSelecionado)
        this.vaParaSlide(parseInt(indicadorSelecionado))
    }
    
    preparaSlides(){
        this.slides.forEach((slide, i) => {
            slide.style.left = `${this.tamanhoSlide * i}px`
        })
    }
}
