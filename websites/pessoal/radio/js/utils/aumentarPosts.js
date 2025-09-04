import { variavelGlobal } from "../mvc/control/global.js"
import { mostrarPosts } from "../mvc/view/posts.js"

export function aumentarPosts(posts, dados){
    document.getElementById('btn-mais').addEventListener('click', () => {
        variavelGlobal.conta += 2
        mostrarPosts(posts, dados[variavelGlobal.indexRadio].nome)
    })
}