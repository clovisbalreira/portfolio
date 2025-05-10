let numeros = document.querySelectorAll('.skill-percentage')

numeros.forEach(numero => {
    let aleatorio = `${parseFloat(Math.random() * 10 + 50).toFixed(2)}%`
    numero.style.width = aleatorio
    numero.querySelector('div').textContent = aleatorio
})