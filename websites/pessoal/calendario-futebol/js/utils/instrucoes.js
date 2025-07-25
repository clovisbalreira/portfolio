export function instrucoes(competicao){
    let section = document.getElementById('instrucoes')
    section.style.display = 'block'
    let div = document.createElement('div')
    let botao = document.createElement('button')
    botao.textContent = 'X'
    div.appendChild(botao)
    let nome = document.createElement('h2')
    nome.textContent = competicao.nome
    div.appendChild(nome)
    let texto = document.createElement('div')
    texto.innerHTML = competicao.descricao
    div.appendChild(texto)
    section.appendChild(div)
    fechar(botao, section)
}

function fechar(botao, section){
    botao.addEventListener('click', () => {
        section.style.display = 'none'
        section.innerHTML = ''
    })
}