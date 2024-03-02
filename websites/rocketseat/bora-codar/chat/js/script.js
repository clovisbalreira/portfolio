let agora = new Date();

let dialogos = [
    {hora : `${zeroAEsquerda(agora.getHours(agora.setMinutes(agora.getMinutes() - 8)))} : ${zeroAEsquerda(agora.getMinutes(agora.setMinutes(agora.getMinutes() - 8)))}`, nome : 'Atendente', mensagem : 'Olá! Bem-vindo à nossa loja virtual. Como posso ajudá-lo hoje?'},
    {hora : `${zeroAEsquerda(agora.getHours(agora.setMinutes(agora.getMinutes() + 1)))} : ${zeroAEsquerda(agora.getMinutes(agora.setMinutes(agora.getMinutes() + 1)))}`, nome : 'Cliente', mensagem : 'Oi! Estou interessado nos novos fones sem fio, os AirSounds Pro. Pode me dar mais informações?'},
    {hora : `${zeroAEsquerda(agora.getHours())} : ${zeroAEsquerda(agora.getMinutes())}`, nome : 'Atendente', mensagem : 'Claro, ficarei feliz em ajudar! Os AirSounds Pro são a nossa mais recente inovação em fones de ouvido sem fio. Eles oferecem até 24 horas de reprodução de música com uma única carga, têm cancelamento de ruído ativo e são resistentes à água e ao suor. Além disso, a qualidade do som é absolutamente incrível, com graves profundos e agudos claros. Você está procurando algo específico em seus novos fones?'},
    {hora : `${zeroAEsquerda(agora.getHours(agora.setMinutes(agora.getMinutes() + 3)))} : ${zeroAEsquerda(agora.getMinutes(agora.setMinutes(agora.getMinutes() + 3)))}`, nome : 'Cliente', mensagem : 'Isso soa bem! Eles são compatíveis com todos os dispositivos?'},
    {hora : `${zeroAEsquerda(agora.getHours())} : ${zeroAEsquerda(agora.getMinutes())}`, nome : 'Atendente', mensagem : 'Sim, eles são! Os AirSounds Pro utilizam a tecnologia Bluetooth 5.0, o que os torna compatíveis com praticamente qualquer dispositivo Bluetooth, seja ele um smartphone, tablet, laptop ou até mesmo um smartwatch.'},
    {hora : `${zeroAEsquerda(agora.getHours(agora.setMinutes(agora.getMinutes() + 4)))} : ${zeroAEsquerda(agora.getMinutes(agora.setMinutes(agora.getMinutes() + 4)))}`, nome : 'Cliente', mensagem : 'E sobre o preço?'},
    {hora : `${zeroAEsquerda(agora.getHours())} : ${zeroAEsquerda(agora.getMinutes())}`, nome : 'Atendente', mensagem : 'Eles estão atualmente disponíveis por R$499. Além disso, o frete é gratuito para todo o país. <br>Se está interessado digite: 1'},
]

document.getElementById('last-seen').innerHTML = `${zeroAEsquerda(agora.getHours(agora.setMinutes(agora.getMinutes() - 15)))} : ${zeroAEsquerda(agora.getMinutes(agora.setMinutes(agora.getMinutes() - 15)))}`

let botaoEnviar = document.getElementById('btn-enviar')

function zeroAEsquerda(num) {
    return num < 10 ? '0' + num : num;
}

function criarMensagem(dialogos){
    let mensagens = document.querySelector('.messages')
    mensagens.innerHTML = ''
    dialogos.forEach(dialogo => {
        let div = document.createElement('div')
        div.classList.add('message')
        let divNomeHora = document.createElement('div')
        divNomeHora.classList.add('top')
        divNomeHora.innerHTML = `${dialogo.nome} - ${dialogo.hora}`
        div.appendChild(divNomeHora)
        
        let divMensagem = document.createElement('div')
        divMensagem.classList.add('body')
        divMensagem.innerHTML = `${dialogo.mensagem}`
        div.appendChild(divMensagem)

        if(dialogo.nome == 'Cliente'){
            div.classList.add('you')
        }
        mensagens.appendChild(div)
    }); 
}

function atualizarMensagem(){
    pegarTexto(dialogos, )
    criarMensagem(dialogos)
}

function incluirValores(name, texto){
dialogos.push({hora : `${zeroAEsquerda(agora.getHours())} : ${zeroAEsquerda(agora.getMinutes())}`, nome : name, mensagem : texto})
}

function pegarTexto(dialogos){
    let texto = document.getElementById('mensagem-texto')
    let valor = texto.value
    texto.value = ''
    if(valor != ''){
        incluirValores('Cliente', valor)
        incluirValores('Atendente', '...')
        setTimeout(() => {
            dialogos.pop()
            proposta(dialogos, valor)
            criarMensagem(dialogos)
        }, 5000);
    }
}

function realizarCompra(dialogos, texto){
    if(texto == '1'){
        compraEvetuada(dialogos)
    }else{
        desconto()
    }
}

function desconto(){
    incluirValores('Clóvis', 'Estamos com desconto de 15% para novos clientes esta endereçado. <br> Digite: 1')
}

function compraEvetuada(){
    incluirValores('Clóvis', 'Obrigado pela compra.')
    incluirValores('Clóvis', 'O valor Total R$: 499,00')
}

function realizarCompraComDesconto(){
    incluirValores('Atendente', 'Incluido desconto de 15%')
    incluirValores('Atendente', 'O valor R$: 499,00')
    incluirValores('Atendente', 'Desconto de 15% R$: 74,85')
    incluirValores('Atendente', 'Valor Total R$: 424,15')
}

function finalizarCompra(){
    incluirValores('Atendente', 'obrigada pela paciência.')
    incluirValores('Atendente', 'Se precisar de mais assistência no futuro, estaremos aqui.')
    incluirValores('Atendente', 'Tenha um ótimo dia!')
}

function proposta(dialogos, texto){
    console.log(dialogos.length)
    switch(dialogos.length){
        case 8:
            realizarCompra(dialogos, texto)
            break
        default:
            if(texto == 1){
                realizarCompraComDesconto()
            }else{
                finalizarCompra()
            }
            break
    }
}


criarMensagem(dialogos)