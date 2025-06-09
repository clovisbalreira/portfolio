import { personagens } from "../control/personagem.js";

export function mostrarPersonagem(){
    const ul = document.getElementById("cartas");
    ul.innerHTML = "";
    personagens.forEach(personagem => {
        const li = document.createElement("li");
        li.classList.add("carta");
        li.setAttribute("data-categoria", personagem.categoria);
        li.setAttribute("data-preco", personagem.preco);    
        li.appendChild(mostrarImagemPersonagem(personagem));
        li.appendChild(mostrarInformacoesPersonagem(personagem));
        ul.appendChild(li);
    })
}

function mostrarImagemPersonagem(personagem){
    const img = document.createElement("img");
    img.src = `./src/img/${personagem.imagem}`;
    img.alt = `Carta ${personagem.nome}`;
    return img;
}

function mostrarInformacoesPersonagem(personagem){
    const div = document.createElement("div");
    div.classList.add("informacoes");
    div.appendChild(mostrarH2(personagem));
    div.appendChild(mostrarSpan("categoria", personagem, "Categoria"));
    div.appendChild(mostrarSpan("preco", personagem, "R$"));
    div.appendChild(mostrarLink(personagem));
    return div;
}

function mostrarH2(personagem){
    const h2 = document.createElement("h2");
    h2.classList.add("nome-personagem");
    h2.textContent = personagem.nome;
    return h2;
}

function mostrarSpan(classe, personagem, texto){
    const span = document.createElement("span");
    span.classList.add(classe);
    span.textContent = `${texto} ${texto === "Categoria" ? personagem.categoria : `${personagem.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}`;
    return span;
}

function mostrarLink(personagem){
    const a = document.createElement("a");
    a.classList.add("btn-comprar");
    a.textContent = "Comprar";
    a.href = `https://wa.me/99999999999999?text=Olá quero comprar a carta ${personagem.nome.toLowerCase()}`;
    a.target = "_blank";
    return a;
}