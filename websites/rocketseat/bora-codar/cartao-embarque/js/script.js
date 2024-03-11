let letras = ['A', 'B']
let cidades =['São Paulo, Brasil', 'Rio de Janeiro, Brasil','Porto Alegre, Brasil','Salvador, Brasil','Pernambuco, Brasil','São Francisco, EUA','New York, EUA','Buenos Aires, ARG','Barcelona, ESP','Milão, ITA']

function gerarTicked(){
    let agora = new Date();
    let cidadeNumero = Math.floor(Math.random() * 10) 
    document.querySelector('.number strong').innerHTML = `${String.fromCharCode(65+Math.floor(Math.random() * 26))}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`
    document.querySelector('.date strong').innerHTML = `${zeroAEsquerda(agora.getDate())}/${zeroAEsquerda(agora.getMonth() + 1)}/${agora.getFullYear()}`
    document.querySelector('.departure p').innerHTML = cidades[cidadeNumero]
    document.querySelector('.departure strong').innerHTML = `${String.fromCharCode(65+Math.floor(Math.random() * 26))}${String.fromCharCode(65+Math.floor(Math.random() * 26))}${String.fromCharCode(65+Math.floor(Math.random() * 26))}`
    document.querySelector('.arrival p').innerHTML = cidades[sorteioCidade(cidadeNumero)]
    document.querySelector('.arrival strong').innerHTML = `${String.fromCharCode(65+Math.floor(Math.random() * 26))}${String.fromCharCode(65+Math.floor(Math.random() * 26))}${String.fromCharCode(65+Math.floor(Math.random() * 26))}`
    document.querySelector('.seat strong').innerHTML = `${Math.floor(Math.random() * 20) + 1}${letras[Math.floor(Math.random() * 2)]}${letras[Math.floor(Math.random() * 2)]}`
    document.querySelector('.container dl dt:nth-child(2) strong').innerHTML = Math.floor(Math.random() * 10) + 1
    document.querySelector('.container dl dt:nth-child(3) strong').innerHTML = Math.floor(Math.random() * 20) + 1
    document.querySelector('.container dl dt:nth-child(1) time').innerHTML = `${zeroAEsquerda(agora.getHours(agora.setMinutes(agora.getMinutes() + 60)))}:${zeroAEsquerda(agora.getMinutes(agora.setMinutes(agora.getMinutes())))}`
    document.querySelector('.bottom p span').innerHTML = `${zeroAEsquerda(agora.getHours(agora.setMinutes(agora.getMinutes() + 15)))}:${zeroAEsquerda(agora.getMinutes(agora.setMinutes(agora.getMinutes() + 15)))}`
    document.querySelector('.departure time').innerHTML = `${zeroAEsquerda(agora.getHours(agora.setMinutes(agora.getMinutes() - 5)))}:${zeroAEsquerda(agora.getMinutes(agora.setMinutes(agora.getMinutes() - 5)))}`
    document.querySelector('.arrival time').innerHTML = `${zeroAEsquerda(agora.getHours(agora.setMinutes(agora.getMinutes() + 660)))}:${zeroAEsquerda(agora.getMinutes(agora.setMinutes(agora.getMinutes() + 40)))}<sup>-${Math.floor(Math.random() * 10) + 1}</sup>`
}
    
function zeroAEsquerda(num) {
    return num < 10 ? '0' + num : num;
}

function sorteioCidade(num){
    sair = true
    let cidade = 0
    while(sair){
        cidade = Math.floor(Math.random() * 10)
        if(cidade != num){
            sair = false
        }  
    }
    return cidade
}

gerarTicked()