function criarSection(titulo, dados){
    let main = document.querySelector('main')
    let h2 = document.createElement('h2')
    h2.innerHTML = titulo
    main.appendChild(h2)
    let section = document.createElement('section')
    dados.map((dado) => {
        if(dado.status){
            let button = document.createElement('button')
            let h3 = document.createElement('h3')
            h3.innerHTML = dado.nome
            button.appendChild(h3)
            let img = document.createElement('img')
            img.src = `./__assets/img/linguagem/${dado.imagem}`
            button.appendChild(img)
            section.appendChild(button)
        }
    })
    main.appendChild(section)
}
criarSection('Linguagem', linguagens)
criarSection('Instrutores', instrutores)
criarSection('Escolas', escolas)
