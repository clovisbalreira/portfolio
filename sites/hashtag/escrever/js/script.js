const elementoTexto = document.getElementById('texto')
const elementoBotao = document.getElementById('falar')

function falar() {
    /* Dizer qual é o texto teve ser lido */
    const textoASerFalado = elementoTexto.value
    /* Configurar fala */
    const configuracaoFala = new SpeechSynthesisUtterance(textoASerFalado)
    /* Colocar o computador para falar */
    //window.speechSynthesis.speak(configuracaoFala)

    const vozes = window.speechSynthesis.getVoices()
    console.log(vozes)
    const vozGoogle = window.speechSynthesis.getVoices()[14]
    console.log(vozGoogle)

    const configuracaoFalaGoogle = new SpeechSynthesisUtterance(`Hoje O jogo é entre ${textoASerFalado}`)
    configuracaoFalaGoogle.voice = vozGoogle
    window.speechSynthesis.speak(configuracaoFalaGoogle)
}

elementoBotao.addEventListener('click', falar)