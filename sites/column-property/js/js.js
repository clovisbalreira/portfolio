let h2 = document.querySelector("h2")
let aleatorio = parseInt(Math.random() * 5) + 2
h2.innerHTML += aleatorio

let coluna = document.querySelector('.column-count')
coluna.style.setProperty("--conta", aleatorio)
