let cardContainer = document.querySelector('.card-container')
let campoBusca = document.querySelector('header input')
let dados = []

async function iniciarBusca(){
    if(dados.length === 0){
        try{
            let resposta = await fetch("./json/data.json")
            dados = await resposta.json()
        }catch(error){
            console.error("Falha ao buscar dados:", error)
            return
        }
    }
    const termoBusca = campoBusca.value.toLowerCase()
    const dadosFiltrados = dados.filter( dado => 
        dado.nome.toLowerCase().includes(termoBusca) ||
        dado.descricao.toLowerCase().includes(termoBusca)
    )
    console.log(dadosFiltrados)
    renderizarCards(dadosFiltrados)
}

function renderizarCards(dados){
    cardContainer.innerHTML = ""
    for(let dado of dados){
        console.log(dado)
        let article = document.createElement('article')
        article.classList.add('card')
        let h2 = document.createElement('h2')
        h2.textContent = dado.nome
        article.appendChild(h2)
        let pAno = document.createElement('p')
        pAno.textContent = dado.data_criacao
        article.appendChild(pAno)
        let pDescricao = document.createElement('p')
        pDescricao.textContent = dado.descricao
        article.appendChild(pDescricao)
        
        let a = document.createElement('a')
        a.href = dado.link
        a.target = '_blank'
        a.textContent = 'Saiba Mais'
        article.appendChild(a)
        cardContainer.appendChild(article)
    }
}