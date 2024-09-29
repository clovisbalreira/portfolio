let respostasPreenchidas = 'Formulário Vazio'
let botaoResposta = document.getElementById('resposta')
botaoResposta.addEventListener( 'click' , (e) => {
    e.preventDefault()
    let respostas = 0
    let pergunta1b = document.getElementById('p1b')
    let pergunta2 = document.getElementById('p2')
    let pergunta3 = document.getElementById('p3')
    let pergunta4 = document.getElementById('p4')
    let pergunta5a = document.getElementById('p5a')
    let pergunta5c = document.getElementById('p5c')
    let pergunta6 = document.getElementById('p6')
    let pergunta7 = document.getElementById('p7')
    let pergunta8 = document.getElementById('p8')
    if(pergunta1b.checked){
        respostas += 1
    }
    if(pergunta2.value.toLowerCase() == 'dominio' || pergunta2.value.toLowerCase() == 'domínio'){
        respostas += 1
    }
    if(verificarSenhaForte(pergunta3.value)){
        respostas += 1
    }
    if(pergunta4.value.slice(0,4) == '1991'){
        respostas += 1        
    }
    if(pergunta5a.checked && pergunta5c.checked){
        respostas += 1        
    }
    if(pergunta6.value.includes('.html')){
        respostas += 1        
    }
    if(pergunta7.value == 'type'){
        respostas += 1        
    }
    if(pergunta8.value.toLowerCase() == 'java'){
        respostas += 1        
    }
    respostasPreenchidas = 'Enviou Resposta'
    formatarTabela(respostas)
    resetarFormulario('formulario-quiz')
})

function verificarSenhaForte(senha) {
    // Definindo critérios mínimos (ajuste conforme necessário)
    const hasUpper = /[A-Z]/.test(senha);
    const hasLower = /[a-z]/.test(senha);
    const hasNumber = /\d/.test(senha);
    const hasSpecial = /[!@#$%^&*()_+]/g.test(senha);
  
    // Verificando se todos os critérios foram atendidos
    if (hasUpper && hasLower && hasNumber && hasSpecial) {
      return true;
    } else {
      return false;
    }
}

function formatarTabela(respostas){
    let respostasCerta = 0
    if(respostas <= 2){
        respostasCerta = 1
    }else if(respostas >= 3 && respostas <= 4){
        respostasCerta = 2
    }else if(respostas >= 5 && respostas <= 7){
        respostasCerta = 3
    }else{
        respostasCerta = 4
    }
    let linhas = document.querySelectorAll(`table tbody tr`)
    linhas.forEach( linha => {
        linha.style.backgroundColor =  ''
    })
    document.querySelector(`table tbody tr:nth-child(${respostasCerta})`).style.backgroundColor =  'green'
    mudarDisplay('contato-resposta', 'none')
    mudarDisplay('pontuacao', 'block')
}

let contato = document.getElementById('contato')
contato.addEventListener( 'click', (e) => {
    e.preventDefault()
    
    let nome = document.getElementById('name').value
    let email = document.getElementById('email').value
    let comentarios = document.getElementById('comentarios').value

    let strongNome = document.getElementById('nome-comentario')
    let strongEmail = document.getElementById('email-comentario')
    let strongComentarios = document.getElementById('comentario-comentario')

    strongNome.textContent = nome
    strongEmail.textContent = email
    strongComentarios.textContent = comentarios

    mudarDisplay('contato-resposta', 'block')
    mudarDisplay('pontuacao', 'none')
    resetarFormulario('formulario-feedback')
})

function resetarFormulario(id){
    document.getElementById(id).reset()
}

function mudarDisplay(id, acao){
    document.getElementById(id).style.display = acao
}

const formulario = document.getElementById('formulario-quiz');
formulario.addEventListener('click', (event) => {
    if(respostasPreenchidas == 'Enviou Resposta'){
        respostasPreenchidas = 'Esconder Tabela'
        console.log('ola')
    }else if(respostasPreenchidas == 'Esconder Tabela'){
        respostasPreenchidas = 'Formulário Vazio' 
        document.getElementById('pontuacao').style.display = 'none'       
    }
});
