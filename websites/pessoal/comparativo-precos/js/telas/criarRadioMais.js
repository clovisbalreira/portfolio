export function criarRadioMais(escolha, textoH4, name){
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    h4.innerHTML = textoH4
    div.appendChild(h4)
    const opcoes = ['Sim', 'Não']
    let resposta = escolha ? 'Sim' : "Não" 
    opcoes.forEach( texto => {
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = name;
        radio.id = texto;
        radio.value = texto;
        if(resposta == texto) radio.checked = true
        const label = document.createElement('label');
        label.htmlFor = radio.id;
        label.textContent = texto;
        div.appendChild(radio);
        div.appendChild(label);
    });
    return div
}