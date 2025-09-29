import { selecionarLocutor } from "../../utils/selecionarLocutor.js"
import { selecionarPrograma } from "../../utils/selecionarPrograma.js"
import { publicidade } from "../../utils/publicidade.js"
import { links } from "../control/links.js";
import { Links } from "../model/Links.js";

export const mostrarProgramacao = (programacao) => {
    links.push(new Links('Programação', 'nav-programacao'))
    let divProgramacao = document.getElementById('programacao')
    divProgramacao.style.display = 'flex'
    divProgramacao.innerHTML = ''
    divProgramacao.appendChild(publicidade())
    let nav = document.createElement('nav')
    nav.id = 'nav-programacao'
    let ul = document.createElement('ul')
    programacao.dia.forEach( (dia, index) => {
        let li = document.createElement('li')
        li.classList.add('lista-dias')
        li.textContent = dia.nome.charAt(0).toUpperCase() + dia.nome.slice(1)
        li.dataset.dia = index
        ul.appendChild(li)
        nav.appendChild(ul)
    })
    divProgramacao.appendChild(nav)
    let divProgramas = document.createElement('div')
    divProgramas.id = 'div-programas'
    divProgramacao.appendChild(divProgramas)
    escolherDia(programacao)  
    selecionarPrograma()
    selecionarLocutor()
}

function escolherDia(programacao){
    let listas = document.querySelectorAll('.lista-dias')
    listas.forEach( lista => {
        mostrarProgramas(programacao, new Date().getDay())
        lista.addEventListener('click', (e) => { 
            listas.forEach( l => {
                l.style.backgroundColor = 'var(--fundo-principal)'
            })
            mostrarProgramas(programacao, parseInt(e.target.dataset.dia))
        })
    })
}

function mostrarProgramas(programacao, hoje){
    document.querySelectorAll('.lista-dias')[hoje].style.backgroundColor = 'var(--fundo-active)'
    let divPrograma = document.getElementById('div-programas')
    divPrograma.innerHTML = ""
    let listas = programacao.dia.find( (d, index) => index == hoje)
    listas.programas.forEach( lista => {
        let div = document.createElement('div')
        if(lista.programa.foto == ''){
            div.style.backgroundColor = 'var(--fundo)'
        }else{
            div.style.backgroundImage = `url('${lista.programa.foto}')`
        }
        if(hoje == new Date().getDay() && estaEntre(lista.horaInicio, lista.horaFim)) div.appendChild(aovivo())
        let divTextosImagem = document.createElement('div') 
        let divTextos = document.createElement('div') 
        let h2 = document.createElement('h2')
        h2.classList.add('nome-programa')
        h2.textContent = lista.programa.nome
        divTextos.appendChild(h2)
        let h3 = document.createElement('h3')
        h3.classList.add('nome-locutor')
        h3.textContent = `Com ${lista.programa.locutor.nome}`
        divTextos.appendChild(h3)   
        divTextosImagem.appendChild(divTextos)  
        let img = document.createElement('img')
        let divImagem = document.createElement('div') 
        divImagem.appendChild(img)
        img.src = lista.programa.locutor.foto
        divTextosImagem.appendChild(divImagem)
        div.appendChild(divTextosImagem)
        let p = document.createElement('p')
        p.textContent = `${lista.horaInicio} ${lista.programa.descricao == '' ? '' : '-'} ${lista.programa.descricao}`
        div.appendChild(p)
        divPrograma.appendChild(div)
    })
}

function aovivo(){
    let span = document.createElement('span')
    span.textContent = 'AO VIVO'
    return span
}

function estaEntre(horaInicio, horaFim){
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let horaMinutos = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`
    return horaMinutos >= horaInicio && horaMinutos <= horaFim;
}