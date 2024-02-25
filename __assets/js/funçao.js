function criarSection(titulo, dados) {
    let contadorStatusTrue = dados.filter(dado => dado.status === true).length;
    let main = document.querySelector('main')
    if (contadorStatusTrue != 0) {
        let h2 = document.createElement('h2')
        h2.innerHTML = titulo
        main.appendChild(h2)
        let section = document.createElement('section')
        dados.map((dado) => {
            if (dado.status) {
                let button = document.createElement('button')
                button.classList.add('linguagem-instrutor-escola')
                button.setAttribute(titulo, dado.id)
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

function inicio() {
    //mostrarWebSites(webSites)
    removerMain()
    criarSection('Linguagem', linguagens)
    criarSection('Instrutor', instrutores)
    criarSection('Escola', escolas)
}

inicio()

function atualizar(){
    window.location.reload()
}

document.getElementById('layout-inicio').addEventListener('click', atualizar)

function pegarAtributos(botao) {
    let atributos = {
        linguagem: '',
        instrutor: '',
        escola: ''
    }
    if (botao.getAttribute('linguagem') != null) {
        atributos.linguagem = botao.getAttribute('linguagem')
    } else if (botao.getAttribute('instrutor') != null) {
        atributos.instrutor = botao.getAttribute('instrutor')
    } else if (botao.getAttribute('escola') != null) {
        atributos.escola = botao.getAttribute('escola')
    }
    return atributos
}

botoes = document.querySelectorAll('button')
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let atributos = pegarAtributos(botao)
        if (atributos.linguagem != '') {
            removerMain()
            for (let i = 0; i < webSites.length; i++) {
                if (atributos.linguagem == webSites[i].Linguagem.id) {
                    mostrarWebSites(webSites[i])
                }
            }
        }
        else if (atributos.instrutor != '') {
            removerMain()
            for (let i = 0; i < webSites.length; i++) {
                webSites[i].Instrutores.filter(webSite => {
                    if (atributos.instrutor == webSite.id) {
                        mostrarWebSites(webSites[i])
                    }
                })
            }
        }
        else if (atributos.escola != '') {
            removerMain()
            for (let i = 0; i < webSites.length; i++) {
                if (atributos.escola == webSites[i].Escolas.id) {
                    mostrarWebSites(webSites[i])
                }
            }
        }
    })
})

function removerMain(){
    let main = document.querySelector('main')
    main.innerHTML = ''
}

function mostrarWebSites(webSites){
    let main = document.querySelector('main')
    main.classList.add('main-flex')
    let section = document.createElement('section')
    section.classList.add('web-sites')
    
    let a = document.createElement('a')
    a.href = webSites.site
    a.target = '_blank'
    let h2 = document.createElement('h2')
    h2.innerHTML = webSites.nome
    a.appendChild(h2)

    let divLinguagemEscola = document.createElement('div')

    let divLinguagem = document.createElement('div')
    let h3Linguagem = document.createElement('h3')
    h3Linguagem.innerHTML = 'Linguagem'
    divLinguagem.appendChild(h3Linguagem)
    divLinguagem.appendChild(imagens('Linguagem', webSites.Linguagem.imagem))
    divLinguagemEscola.appendChild(divLinguagem)
    
    if(webSites.Escolas.imagem != 'clovisbalreira'){
        let divEscola = document.createElement('div')
        let h3Escola = document.createElement('h3')
        h3Escola.innerHTML = 'Escola'
        divEscola.appendChild(h3Escola)
        divEscola.appendChild(imagens('escola', webSites.Escolas.imagem))
        divLinguagemEscola.appendChild(divEscola)
    }

    a.appendChild(divLinguagemEscola)

    let divInstrutores = document.createElement('div')
    let divInstrutoresTitulo = document.createElement('div')
    let h3Instrutor = document.createElement('h3')
    h3Instrutor.innerHTML = 'Instrutores'
    divInstrutoresTitulo.appendChild(h3Instrutor)
    divInstrutores.appendChild(divInstrutoresTitulo)
    
    let divInstrutor = document.createElement('div')
    webSites.Instrutores.forEach( instrutor => {
            if(instrutor.nome != 'Clóvis'){
                divInstrutor.appendChild(imagens('instrutor', instrutor))
            }
        }
    )
    divInstrutores.appendChild(divInstrutor)
    a.appendChild(divInstrutores)

    let p = document.createElement('p')
    p.innerHTML = webSites.descricao
    a.appendChild(p)

    section.appendChild(a)
    main.appendChild(section)
}

function imagens(origem, instrutor){
    let img = document.createElement('img')
    if(origem != 'linguagem'){
        img.classList.add('instrutor-escola')
    }
    img.src = pastasImagens(origem, origem == 'instrutor' ? instrutor.imagem : instrutor)
    img.alt = instrutor.nome
    return img
}