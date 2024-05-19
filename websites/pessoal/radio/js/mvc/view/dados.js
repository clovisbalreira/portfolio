const atualizarDados = (radio) => {
    let data = new Date()
    let urlRadio = document.getElementById('radioPlayer')
    urlRadio.src = radio.url
    let imagemPlayer = document.getElementById('audio-imagem')
    imagemPlayer.alt = radio.nome 
    imagemPlayer.src = radio.imagem
    let imagemLogo = document.getElementById('imagem-logo')
    imagemLogo.alt = radio.nome
    imagemLogo.src = radio.imagemLogo
    let inicio = document.getElementById('ano')
    inicio.textContent = radio.fundacao
    let atual = document.getElementById('atual')
    atual.textContent = data.getFullYear()
    let nome = document.getElementById('nome-radio')
    nome.textContent = radio.nomeCompleto
    let slogan = document.getElementById('slogan-radio')
    slogan.textContent = radio.slogan
    let facebook = document.getElementById('facebook')
    facebook.href = radio.facebook
    let instagram = document.getElementById('instagram')
    instagram.href = radio.instagram
    let twitter = document.getElementById('twitter')
    twitter.href = radio.twitter
    let playstore = document.getElementById('playstore')
    playstore.href = radio.playstore
}