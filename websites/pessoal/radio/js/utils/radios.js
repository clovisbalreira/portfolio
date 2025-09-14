import { radios } from "../mvc/control/radios.js";
import { escolherRadio } from "./botoes-radios.js";
import { links } from "../mvc/control/links.js";

export const mostrarRadios = () => {
    const radio = document.getElementById('radios')
    radio.style.display = 'flex'
    radio.innerHTML = ''
    if(radios.length > 1){
        radios.forEach(dado => {
            const div = document.createElement('div')
            div.classList.add('button-radios')
            const img = document.createElement('img')
            img.src = `./img/radio/${dado.imagem}`
            img.alt = dado.nome
            div.appendChild(img)
            radio.appendChild(div)
        })
        escolherRadio()
    }else{
        links.forEach( link => {
            if(link.nome == 'Home'){
                link.link = 'redes-sociais'
            }
        })
    }
}