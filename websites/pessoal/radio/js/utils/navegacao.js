import { links } from '../mvc/control/links.js'

export function mostrarNavegacao(radio){
    let section = document.getElementById('navegacao')
    section.innerHTML = ''
    section.appendChild(img(radio))
    if(window.innerWidth <= 768){
        let div = document.createElement('div')
        div.innerHTML = "<i class='fa-solid fa-bars'></i>"
        section.appendChild(div)
        mostrarNav(radio)
    }else{   
        section.append(nav())
    }
}

function nav(){
    let nav = document.createElement('nav')
    nav.innerHTML = ''
    nav.appendChild(ul(links))
    return nav
}

function img(radio){
    let img = document.createElement('img')
    img.alt = radio.nome
    img.src = `./img/radio/${radio.imagemLogo}`
    return img
}

function ul(links){
    let ul = document.createElement('ul')
    ul.innerHTML = ''
    links.forEach( link => {
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.textContent = link.nome
        a.href = `#${link.link}`
        li.appendChild(a)
        ul.appendChild(li)
    })
    return ul
}

function mostrarNav(radio){
    let menu = document.querySelector('.fa-bars')
    menu.addEventListener('click', (e) => {
        if(e.target.parentNode.querySelector('nav') == null){
            e.target.parentNode.append(nav())
            mostrarUL(radio)
        }else{
           mostrarNavegacao(radio)
        }
    })
}

function mostrarUL(radio){
    let lis = document.querySelector('.fa-bars').parentNode.querySelector('nav').querySelector('ul').querySelectorAll('li')
    lis.forEach( li => {
        li.addEventListener('click', (e) => {
            mostrarNavegacao(radio)
        })
    })
}