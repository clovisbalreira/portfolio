class Cards {
    constructor(){
        this.posicaoSectionDicas = document.getElementById('section-dicas')
        this.cardEsq = document.querySelector('.card-esq')
        this.cardDir = document.querySelector('.card-dir')
    }

    scrollCards(){
        window.requestAnimationFrame(this.calculoScroll.bind(this))
    }
    
    calculoScroll(){
        let posicao = this.posicaoSectionDicas.getBoundingClientRect()['y']
        let comecoAnimacao = 30
        if(posicao >= 25){
            this.cardEsq.style.transform = `translate(${(-posicao + comecoAnimacao) / 10}%)`
            this.cardDir.style.transform = `translate(${(posicao - comecoAnimacao) / 10}%)`
        }
    }
}

export { Cards }