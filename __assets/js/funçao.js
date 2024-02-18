function criarSection(titulo, dados) {
    let main = document.querySelector('main')
    let h2 = document.createElement('h2')
    h2.innerHTML = titulo
    main.appendChild(h2)
    let section = document.createElement('section')
    dados.map((dado) => {
        if (dado.status) {
            let button = document.createElement('button')
            let h3 = document.createElement('h3')
            h3.innerHTML = dado.nome
            button.appendChild(h3)
            let img = document.createElement('img')
            img.src = pastasImagens(titulo, dado.imagem)
            if (titulo != 'Linguagem') {
                img.classList.add('imgRedonda')
            }
            button.appendChild(img)
            section.appendChild(button)
        }
    })
    main.appendChild(section)
}

function pastasImagens(titulo, imagem) {
    let pasta = ''
    if (imagem == '') {
        if (titulo == 'Instrutores') {
            pasta = `./__assets/img/linguagem/professor.png`
        } else {
            pasta = `./__assets/img/linguagem/escola.jpg`
        }
    }
    else {
        if (titulo != 'Linguagem') {
            pasta = `https://github.com/${imagem}.png`
        } else {
            pasta = `./__assets/img/linguagem/${imagem}`
        }
    }
    return pasta
}
criarSection('Linguagem', linguagens)
criarSection('Instrutores', instrutores)
criarSection('Escolas', escolas)

botoes = document.querySelectorAll('button')

console.log(botoes)
