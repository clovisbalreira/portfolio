export function diminirCredito(index, resultado){
    let limite = parseFloat(document.getElementById(index).querySelectorAll('td')[3].textContent.replace('R$', '').replace(',', '.').trim());
    document.getElementById(index).querySelectorAll('td')[4].textContent = ""
    document.getElementById(index).querySelectorAll('td')[4].textContent = `R$ ${(limite - resultado).toFixed(2)}`
}