import { mostrarPost } from "../mvc/view/post.js"
import { scroll } from "../utils/scroll.js"

export function postSelecionado(posts){
        let botoesPosts = document.querySelectorAll('.btn-post')
        botoesPosts.forEach( botao => {
            botao.addEventListener('click', (event) => {
                let titulo = event.currentTarget.parentNode.parentNode.querySelector('h2').textContent
                let postEncontrado = posts.find(post => post.titulo === titulo);
                if (postEncontrado) {
                    mostrarPost(postEncontrado);
                    scroll('div-post')
                }
            }
        )
    })
}