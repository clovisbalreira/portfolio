const botoes = document.querySelectorAll('.button-radios')
botoes.forEach( botao => {
    botao.addEventListener('click', (e) => {
        dados.forEach( (dado, index) => {
            indexRadio = index
            if(e.target.alt == dado.nome){
                console.log(dado.nome)
                mostrarPlayer(programacao[indexRadio])
                atualizarDados(dados[indexRadio])
                mostrarParada(parada[indexRadio])
                mostrarProgramacao(programacao[indexRadio])
                mostrarPosts(posts, dados[indexRadio].nome)
                document.getElementById('coracao-cheio').style.display = 'none'
                atualizarFavorito()
            }
        })
    })
})