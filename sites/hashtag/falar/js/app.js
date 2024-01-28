const caixaTexto = document.getElementById('texto-transcrito')
const botaoTranscricao = document.getElementById('transcrever')
const reconhecimento = new webkitSpeechRecognition()

reconhecimento.onresult = (evento) => {
    const transcricao = evento.results[0][0].transcript
    caixaTexto.innerHTML = transcricao
}

botaoTranscricao.addEventListener('click', () => reconhecimento.start())
