export function apagarTabela(){
    let div = document.getElementById('tabela-campeonato')
    div.innerHTML = ''
    div.classList.remove('tabela-campeonato')
}