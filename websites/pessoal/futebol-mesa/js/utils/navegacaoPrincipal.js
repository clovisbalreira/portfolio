export function botaoNavegacaoAssociacao(){
    menuAbrirNavecacao()
    menuFecharNavecacao()
}

function menuAbrirNavecacao(){
    let menu = document.getElementById('btn-navegacao')
    menu.addEventListener('click', () => {
        let navegacao = document.getElementById('navegacao-associacao')
        navegacao.classList.remove('esconder-navegacao-associacao')
    })
}

function menuFecharNavecacao(){
    let menu = document.getElementById('btn-fechar')
    menu.addEventListener('click', () => {
        let navegacao = document.getElementById('navegacao-associacao')
        navegacao.classList.add('esconder-navegacao-associacao')
    })
}

