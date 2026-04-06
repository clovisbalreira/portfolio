import { linguagens } from '../controll/linguagens.js'
import { instrutores } from '../controll/instrutores.js'
import { escolas } from '../controll/escolas.js'
import { webSites } from '../controll/websites.js'

let redesSociais = [
    {
        nome: 'Curriculo',   
        link: 'https://clovisbalreira.github.io/portfolio/websites/pessoal/apresentacao/curriculo/curriculo.html',
        imagem: ['fa-solid', 'fa-file']
    },
    {
        nome: 'LinkedIn',   
        link: 'https://www.linkedin.com/in/clovis-balreira-rodrigues-dev/',
        imagem: ['fa-brands', 'fa-linkedin']
    },
    {
        nome: 'GitHub',   
        link: 'https://github.com/clovisbalreira',
        imagem: ['fa-brands', 'fa-github'],
    }
]

function header(){
    let header = document.querySelector('header')    
    header.appendChild(imagemHeader())
    header.appendChild(redesSociaisLinks())
}

function imagemHeader(){
    let div = document.createElement('div')
    div.id = 'layout-inicio'
    div.classList.add('dados')
    let img = document.createElement('img')
    img.src = 'https://github.com/clovisbalreira.png'
    img.alt = 'Clóvis Balreira Rodrigues'
    div.appendChild(img)
    let p = document.createElement('p')
    p.innerHTML = '@clovisbalreira'
    div.appendChild(p)
    return div
}

function footer(){
    let header = document.querySelector('footer')  
    header.appendChild(redesSociaisLinks())
}

function redesSociaisLinks(){
    let div = document.createElement('div')
    div.classList.add('redes-sociais')
    redesSociais.forEach(rede => {
        let a = document.createElement('a')
        a.href = rede.link
        a.target = '_blank'
        let i = document.createElement('i')
        i.classList.add(rede.imagem[0], rede.imagem[1])
        a.appendChild(i)
        div.appendChild(a)
    })
    return div
}

function removerMain(){
    let main = document.querySelector('main')
    main.innerHTML = ''
}

function criarButton(classe, texto){
    let button = document.createElement('button')
    button.classList.add('btn')
    button.classList.add(classe)
    button.setAttribute('onclick', 'scrollLeft')
    button.textContent = texto
    return button
}

function criarCarrossel(titulo, dados) {
    let contadorStatusTrue = dados.filter(dado => dado.status === true).length;
    let div = document.createElement('div')
    div.classList.add('carrossel-container')
    if (contadorStatusTrue != 0) {
        let h2 = document.createElement('h2')
        h2.innerHTML = titulo
        div.appendChild(h2)
        let divSection = document.createElement('div')
        divSection.appendChild(criarButton('left', '◀'))
        let section = document.createElement('section')
        section.id = 'carrossel'
        section.classList.add('carrossel')
        dados.map((dado) => {
            if (dado.status) {
                let button = document.createElement('button')
                button.classList.add('card')
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
        divSection.appendChild(section)
        divSection.appendChild(criarButton('right', '▶'))
        div.appendChild(divSection)
    }
    return div
}

function pastasImagens(titulo, imagem) {
    let pasta = ''
    if (imagem == '') {
        if (titulo == 'Instrutores') {
            pasta = `./assets/img/linguagem/professor.png`
        } else {
            pasta = `./assets/img/linguagem/escola.jpg`
        }
    }
    else {
        if (titulo != 'Linguagem') {
            pasta = `https://github.com/${imagem}.png`
        } else {
            pasta = `./assets/img/linguagem/${imagem}`
        }
    }
    return pasta
}

function mostrarWebSites(webSites){
    let main = document.querySelector('main')
    main.classList.add('main-flex')
    let section = document.createElement('section')
    section.classList.add('web-sites')

    let h2 = document.createElement('h2')
    h2.innerHTML = webSites.nome
    section.appendChild(h2)

    let divLinguagemEscola = document.createElement('div')

    let divLinguagem = document.createElement('div')
    let h3Linguagem = document.createElement('h3')
    h3Linguagem.innerHTML = 'Linguagem'
    divLinguagem.appendChild(h3Linguagem)
    divLinguagem.appendChild(imagens('Linguagem', webSites.linguagem.imagem))
    divLinguagemEscola.appendChild(divLinguagem)
    
    if(webSites.site != ''){
        let aSite = document.createElement('a')
        aSite.innerHTML = 'Site'
        aSite.href = webSites.site
        aSite.target = `_blank`
        aSite.classList.add('btn-site')
        section.appendChild(aSite)
    }

    let aGitHub = document.createElement('a')
    aGitHub.innerHTML = 'GitHub'
    aGitHub.href = `https://github.com/clovisbalreira/${webSites.github}`
    aGitHub.target = `_blank`
    aGitHub.classList.add('btn-github')
    section.appendChild(aGitHub)

    if(webSites.escola.imagem != 'clovisbalreira' && webSites.escola.imagem != 'nenhum'){
        let divEscola = document.createElement('div')
        let h3Escola = document.createElement('h3')
        h3Escola.innerHTML = 'Escola'
        divEscola.appendChild(h3Escola)
        divEscola.appendChild(imagens('escola', webSites.escola.imagem))
        divLinguagemEscola.appendChild(divEscola)
    }
    
    section.appendChild(divLinguagemEscola)
    let divInstrutores = document.createElement('div')
    let divInstrutoresTitulo = document.createElement('div')
    if((!(webSites.instrutor[0] == undefined)) && (webSites.instrutor[0].imagem != 'clovisbalreira' && webSites.instrutor[0].imagem != undefined)){
        let h3Instrutor = document.createElement('h3')
        h3Instrutor.innerHTML = 'Instrutores'
        divInstrutoresTitulo.appendChild(h3Instrutor)
        divInstrutores.appendChild(divInstrutoresTitulo)
    }
    let divInstrutor = document.createElement('div')
    webSites.instrutor.forEach( instrutor => {
            if(instrutor.nome != 'Clóvis' && instrutor.nome != undefined){
                divInstrutor.appendChild(imagens('instrutor', instrutor))
            }
        }
    )
    divInstrutores.appendChild(divInstrutor)
    section.appendChild(divInstrutores)

    let p = document.createElement('p')
    p.innerHTML = webSites.descricao
    section.appendChild(p)
    
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

function atualizar(){
    window.location.reload()
}

function botoesWebSites(){
    let botoes = document.querySelectorAll('button')
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            let atributos = pegarAtributos(botao)
            if (atributos.linguagem != '') {
                removerMain()
                for (let i = 0; i < webSites.length; i++) {
                    if (atributos.linguagem == webSites[i].linguagem.id) {
                        mostrarWebSites(webSites[i])
                    }
                }
            }
            else if (atributos.instrutor != '') {
                removerMain()
                for (let i = 0; i < webSites.length; i++) {
                    webSites[i].instrutor.filter(webSite => {
                        if (atributos.instrutor == webSite.id) {
                            mostrarWebSites(webSites[i])
                        }
                    })
                }
            }
            else if (atributos.escola != '') {
                removerMain()
                for (let i = 0; i < webSites.length; i++) {
                    if (atributos.escola == webSites[i].escola.id) {
                        mostrarWebSites(webSites[i])
                    }
                }
            }
        })
    })
}

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

export function inicio() {
    header()
    footer()
    removerMain()
    let main = document.querySelector('main')
    main.appendChild(criarCarrossel('Linguagem', linguagens))
    main.appendChild(criarCarrossel('Escola', escolas))
    main.appendChild(criarCarrossel('Instrutor', instrutores))
    document.getElementById('layout-inicio').addEventListener('click', atualizar)
    botoesWebSites()
    rolagem()
    
}

function rolagem(){
    const carrosseis = document.querySelectorAll('.carrossel-container div')
    carrosseis.forEach( carrossel => {
        carrossel.querySelector(".left").addEventListener("click", () => {
            carrossel.querySelector(".carrossel").scrollBy({ left: -300, behavior: 'smooth' });
        });

        carrossel.querySelector(".right").addEventListener("click", () => {
            carrossel.querySelector(".carrossel").scrollBy({ left: 300, behavior: 'smooth' });
        });
    })
}