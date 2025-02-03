let botao = document.getElementById('enviar');
botao.addEventListener('click', function(event) {
    event.preventDefault();
    let dados = pegarDados();
    let verificarDados = verificarDadosVazios(dados);
    let resposta = document.getElementById('resposta');
    resposta.innerHTML = ''
    if(verificarDados.length > 0){
        let p = document.createElement('p');
        p.textContent = 'Campos vazios: ' + verificarDados.join(', ');
        resposta.appendChild(p);
    }else{
        let h2 = document.createElement('h2');
        h2.textContent = `Olá, ${dados.Nome}!`;
        resposta.appendChild(h2);
        let p = document.createElement('p');
        p.textContent = `É um prazer ter você como cliente.`
        resposta.appendChild(p);
        p = document.createElement('p');
        p.textContent = `Estamos muito felizes por seu interesse em nossos serviços.`;    
        resposta.appendChild(p);
        p = document.createElement('p');
        p.textContent = `Aqui estão as informações que você nos forneceu:`;    
        resposta.appendChild(p);
        p = document.createElement('p');
        let ul = document.createElement('ul')
        let li = document.createElement('li')
        li.textContent = `Nome: ${dados.Nome}`
        ul.appendChild(li)
        li = document.createElement('li')
        li.textContent = `Email: ${dados.Email}`
        ul.appendChild(li)
        li = document.createElement('li')
        li.textContent = `Assunto: ${dados.Assunto}`
        dados.OutroAssunto != '-' ? li.textContent += ` - ${dados.OutroAssunto}` : `` ;
        ul.appendChild(li)
        li = document.createElement('li')
        li.textContent = `Mensagem: ${dados.Mensagem}`
        ul.appendChild(li)
        resposta.appendChild(ul)
        p.textContent = `Em breve, entraremos em contato com você`;    
        resposta.appendChild(p);
        p = document.createElement('p');
        p.textContent = `Agradecemos sua preferência e estamos à disposição para qualquer dúvida ou necessidade.`;    
        resposta.appendChild(p);
        p = document.createElement('p');
        p.textContent = `Atenciosamente,`;    
        resposta.appendChild(p);
        p = document.createElement('p');
        p.textContent = `João da Silva`;    
        resposta.appendChild(p);
    }
    resposta.style.display = "flex"
    setTimeout(() => {
        resposta.style.display = "none"
    }, 10000)
});

function pegarDados(){
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;
    let assunto = document.querySelector('input[name="assunto"]:checked').value;
    let outroAssunto = document.getElementById('outro-assunto').value;
    let dados = {
        Nome: nome,
        Email: email,
        Assunto: assunto,
        OutroAssunto : outroAssunto,
        Mensagem: mensagem,
    };
    return dados;
}

function verificarDadosVazios(dados) {
    let camposVazios = [];
    for (let key in dados) {
        if (dados[key] === '' || dados[key] === null || dados[key] === undefined) {
            camposVazios.push(key);
        }else{
            if(key === 'email'){
                if(!validarEmail(dados[key])){
                    camposVazios.push(key);
                }
            }
            if(key == 'Assunto'){
                if(dados[key] == 'Blog' || dados[key] == 'Serviço'){
                    dados.OutroAssunto = '-'
                }
            }
        }
    }
    return camposVazios;
}

function validarEmail(email) {
    let regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return regex.test(email);
}