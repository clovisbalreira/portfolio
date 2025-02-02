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
        li.textContent = `Telefone: ${dados.Telefone}`
        ul.appendChild(li)
        li = document.createElement('li')
        li.textContent = `Mensagem: ${dados.Mensagem}`
        ul.appendChild(li)
        li = document.createElement('li')
        li.textContent = `Preferência de Contato: ${dados.Contato}`
        ul.appendChild(li)
        li = document.createElement('li')
        li.textContent = `Melhor Turno para Contato: ${dados.Turno}`
        ul.appendChild(li)
        li = document.createElement('li')
        li.textContent = `Receber Atividades por Email: ${dados.Checkbox ? "Sim" : "Não"}`
        ul.appendChild(li)
        resposta.appendChild(ul)
        p = document.createElement('p');
        p.textContent = `Em breve, entraremos em contato com você por ${dados.Contato} durante o turno da ${dados.Turno}.`;    
        resposta.appendChild(p);
        p = document.createElement('p');
        p.textContent = `Agradecemos sua preferência e estamos à disposição para qualquer dúvida ou necessidade.`;    
        resposta.appendChild(p);
        p = document.createElement('p');
        p.textContent = `Atenciosamente,`;    
        resposta.appendChild(p);
        p = document.createElement('p');
        p.textContent = `Barbearia Alura`;    
        resposta.appendChild(p);
    }
    resposta.style.display = "flex"
    setTimeout(() => {
        resposta.style.display = "none"
    }, 10000)
});

function pegarDados(){
    let nome = document.getElementById('nome-sobrenome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let mensagem = document.getElementById('mensagem').value;
    let contato = document.querySelector('input[name="contato"]:checked').value;
    let turno = document.getElementById('turno').value;
    let checkbox = document.getElementById('checkbox');
    let dados = {
        Nome: nome,
        Email: email,
        Telefone: telefone,
        Mensagem: mensagem,
        Contato: contato,
        Turno: turno,
        Checkbox: verificarCheckbox(checkbox)
    };
    return dados;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function verificarDadosVazios(dados) {
    let camposVazios = [];
    for (let key in dados) {
        if (dados[key] === '' || dados[key] === null || dados[key] === undefined) {
            camposVazios.push(key);
        }else{
            if(key === 'email'){
                console.log(validarEmail(dados[key]))
                if(!validarEmail(dados[key])){
                    camposVazios.push(key);
                }
            }
            if(key === 'telefone'){
                console.log(validarTelefone(dados[key]))
                if(!validarTelefone(dados[key])){
                    camposVazios.push(key);
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

function validarTelefone(telefone) {
    let regex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    return regex.test(telefone);
}

function verificarCheckbox(checkbox){
    if(checkbox.checked){
        return true;
    } else {
        return false;
    }
}