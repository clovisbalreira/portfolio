export function somarTotalFatura(index, n, resultado){
    document.getElementById(index).querySelectorAll('td')[n].textContent = ""
    document.getElementById(index).querySelectorAll('td')[n].textContent = `R$ ${resultado.toFixed(2)}`
}