export function atualizarAno(){
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let select = document.getElementById('ano')
    for(let i = -2; i < 5; i++){
        let option = document.createElement('option')
        option.textContent = anoAtual + i
        option.setAttribute('value', anoAtual + i )
        if ((anoAtual + i) === 2025) {
            option.setAttribute('selected', 'selected');
        }
        select.appendChild(option)
    }
}