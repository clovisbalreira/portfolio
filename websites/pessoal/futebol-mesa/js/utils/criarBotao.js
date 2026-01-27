export function criarBotao(){
    let button = document.createElement('button')
    button.id = 'btn-reset'
    button.textContent = 'reset'
    button.disabled = true
    return button
}