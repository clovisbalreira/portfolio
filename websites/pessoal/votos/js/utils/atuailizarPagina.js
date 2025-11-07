export function atualizarPagina(){
    let configuracoes = document.getElementById('configuracao')
    configuracoes.innerHTML = ''
    let i = document.createElement('i')
    i.id = 'btn-atualizar'
    i.classList.add('fa-solid')
    i.classList.add('fa-rotate')
    configuracoes.appendChild(i)
    let localizacao = document.getElementById('buscando-localizacao')
    localizacao.innerHTML = ''
    atualizar()
}

function atualizar(){
    let botao = document.getElementById('btn-atualizar')
    botao.addEventListener('click', () => {
        location.reload()
    })
}