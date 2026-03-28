import { adicionarDetails } from "./adicionarDetails.js"

export function adicionarArticle(perfil){
    let article = document.createElement('article')
    article.appendChild(adicionarDetails(perfil.descricao))
    return article
}