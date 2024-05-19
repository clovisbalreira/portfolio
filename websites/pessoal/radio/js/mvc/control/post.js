let botoesPosts = document.querySelectorAll('.btn-post')

botoesPosts.forEach( botao => {
    botao.addEventListener('click', (event) => {
        let titulo = event.currentTarget.parentNode.querySelector('h2').innerText
        let postEncontrado = posts.find(post => post.titulo === titulo);
        if (postEncontrado) {
            mostrarPost(postEncontrado);
            document.getElementById('post').scrollIntoView({
                behavior: 'smooth'
            });
        }
    })
})