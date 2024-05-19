const mostrarRadios = () => {
    const radios = document.getElementById('radios')
    dados.forEach(dado => {
        const div = document.createElement('div')
        div.classList.add('button-radios')
        const img = document.createElement('img')
        img.src = dado.imagem
        img.alt = dado.nome
        div.appendChild(img)
        radios.appendChild(div)
    })
}