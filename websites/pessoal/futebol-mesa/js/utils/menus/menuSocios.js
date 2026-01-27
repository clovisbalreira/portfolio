import { criarLabelSelect } from "../criarLabelSelect.js"

export function menuSocios(socios, associacao){
    let nav = document.createElement('nav')
    nav.innerHTML = ''
    nav.id = 'nav-menu-socio'
    
    criarLabelSelect(nav, 'Sócios', 'lista-socio', socios, associacao, 'Selecione o jogador', [{ texto: 'Sócios', condicao: true}, { texto: 'Participantes', condicao: false}], '')
    return nav
}



