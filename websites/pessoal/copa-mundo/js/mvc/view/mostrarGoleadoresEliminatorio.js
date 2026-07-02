export function atualizarGoleadoresEliminatorio(){
    let ponteiros = document.querySelectorAll('.computador div span')
    ponteiros.forEach( ponteiro => {
        ponteiro.addEventListener("mouseenter", () => {
            if(ponteiro.parentNode.querySelector('.desaparecer').innerHTML != '') {
                ponteiro.parentNode.querySelector('div').classList.remove('desaparecer')
            }
        });
        
        ponteiro.addEventListener("mouseleave", () => {
            ponteiro.parentNode.querySelector('div').classList.add('desaparecer')
        });
    })
}