import { mudarImagemClaroEscuro } from "../utils/mudarImagemClaroEscuro.js"

export function mudarTemaClaroEscuro(){
    let button = document.querySelector('.button-claro-escuro')
    button.addEventListener('click', () => {
        if (button.querySelector('i').classList.contains('fa-sun')) {
            trocarVariaveis('#121212', 'white', 'white', 'black', '#fffbfb1e')
            mudarImagemClaroEscuro(button, '<i class="fa-solid fa-moon"></i>')
        } else {
            trocarVariaveis('#ffffff', 'black', 'black', 'white', '#00000031')
            mudarImagemClaroEscuro(button, '<i class="fa-solid fa-sun"></i>')
        }
    })
}

function trocarVariaveis(background, bodyColor, aColor, aHoverColor, headerFooter){
    document.documentElement.style.setProperty('--body-background-color', background);
    document.documentElement.style.setProperty('--body-color', bodyColor);
    document.documentElement.style.setProperty('--a-color', aColor);
    document.documentElement.style.setProperty('--a-hover-color', aHoverColor);
    document.documentElement.style.setProperty('--header-footer', headerFooter);
}