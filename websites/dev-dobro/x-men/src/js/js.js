const personagens = document.querySelectorAll('.personagem')
personagens.forEach( (personagem) => {
    personagem.addEventListener('mouseenter', () =>{
        if(window.innerWidth < 450){
            window.scrollTo({top:0, behavior:'smooth'})
        }
        removerSelecaoDoPersonagem()

        adicionarSelecaoDoPersonagem(personagem)

        alterarImagemPersonagemSelecionado(personagem)

        alterarNomePersonagemSelecionado(personagem)
        
        alterarDescricaoPersonagem(personagem)
        
    })
})

function adicionarSelecaoDoPersonagem(personagem) {
    personagem.classList.add('selecionado')
}

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem')
    descricaoPersonagem.innerHTML = personagem.getAttribute('data-description')
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem')
    nomePersonagem.innerHTML = personagem.getAttribute('data-name')
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande')
    const idPersonagem = personagem.attributes.id.value
    imagemPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')
}
