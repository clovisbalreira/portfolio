export function valoresSelects(){
    let mesSelecionado = document.getElementById('mes').value
    let anoSelecionado = document.getElementById('ano').value
    return {mes : mesSelecionado, ano : anoSelecionado}
}
