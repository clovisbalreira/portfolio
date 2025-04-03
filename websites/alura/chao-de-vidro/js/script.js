function jogar(nomeJogador, rodada){
    let nome
    if(nomeJogador == undefined) nome = document.getElementById('nome').value
    else nome = nomeJogador
    let numeroRodada
    if(rodada == undefined) numeroRodada = document.getElementById('rodada').value
    else numeroRodada = rodada.length
    if(nome == '' || numeroRodada  == ''){
        let p = document.getElementById('resposta')
        p.textContent = 'Preencha todos os campos!'
        p.style.display = 'block'
    }else{
        let rodadas = criandoRodada(numeroRodada)
        let passos = 0
        iniciarJogo(rodadas, passos, nome) 
    }
}

function criandoRodada(rodada){
    let rodadas = []
    let numeroAnterior = 0
    for( let i = 0; i < rodada; i++){
        if(numeroAnterior == 1){
            numero = Math.floor(Math.random() * 2) + 1
        }else if(numeroAnterior == 3){
            numero = Math.floor(Math.random() * 2) + 2
        }else{
            numero = Math.floor(Math.random() * 3) + 1
        }
        rodadas.push(
            {andando: false, caminho: [
                {piso : numero == 1 ? 1 : 0, cor: 'red'},
                {piso : numero == 2 ? 1 : 0, cor: 'blue'},
                {piso : numero == 3 ? 1 : 0, cor: 'green'}
            ]}
        )
        numeroAnterior = numero
    }
    return rodadas
}

function iniciarJogo(rodadas, passos, nome){ 
    let caminho = document.querySelector('.content')
    caminho.innerHTML = ''
    let div = document.createElement('div')
    div.id = 'div-menu'
    div.appendChild(criandoH2('Escolha as opções'))
    div.appendChild(criarOpcoes())
    caminho.appendChild(div)
    caminho.appendChild(criandoH2('Caminhe pelo piso não quebraveis'))
    caminho.appendChild(criarCaminho(rodadas))
    escolherCaminho(rodadas, passos, nome)
}

function criarCaminho(rodadas){
    let divCaminho = document.createElement('div')
    divCaminho.innerHTML = ''
    divCaminho.classList.add('div-caminho')
    let divColuna = document.createElement('div')
    let divLinha = document.createElement('div')
    rodadas.forEach( rodada => {
        divColuna = document.createElement('div')
        divColuna.classList.add('div-coluna')
        rodada.caminho.forEach( piso => {
            divLinha = document.createElement('div')
            if(rodada.andando){
                if(piso.piso == 1){
                    divLinha.style.backgroundColor = piso.cor
                }else{
                    divLinha.style.backgroundColor = `dark${piso.cor}`
                }
            }else{
                divLinha.style.backgroundColor = piso.cor
            }
            divLinha.classList.add('div-linha')
            divColuna.appendChild(divLinha)
        })
        divCaminho.appendChild(divColuna)
    })
    return divCaminho
}

function criandoH2(texto){
    let h2 = document.createElement('h2')
    h2.textContent = texto
    return h2
}

function criarOpcoes(){
    let divCaminho = document.createElement('div')
    divCaminho.classList.add('div-caminho')
    let divColuna = document.createElement('div')
    divColuna.classList.add('div-coluna')
    let divLinha = document.createElement('div')
    let cores = ['red','blue','green']
    for(let i = 0; i < cores.length; i++){
        divLinha = document.createElement('div')
        divLinha.style.backgroundColor = cores[i]
        divLinha.classList.add('div-linha')
        divLinha.classList.add('div-opcoes')
        divColuna.appendChild(divLinha)
    }
    divCaminho.appendChild(divColuna)
    return divCaminho
}

function escolherCaminho(rodadas, passos, nome) {
    let opcoes = document.querySelectorAll('.div-opcoes');
    opcoes.forEach(opcao => {
        opcao.addEventListener('click', () => {
            caminhando(opcao.style.backgroundColor, rodadas, passos, nome)
        });
    });
}

function caminhando(caminho, rodadas, passos, nome){
    for(let indexRodada = 0; indexRodada < rodadas.length; indexRodada++) {
        if(rodadas[indexRodada].andando == false){
            rodadas[indexRodada].andando = true
            for(let opcao of rodadas[indexRodada].caminho){
                if(caminho == opcao.cor){
                    if(opcao.piso == 1){
                        passos += 1
                        iniciarJogo(rodadas, passos, nome)
                        if(rodadas[rodadas.length - 1].andando)  reset(passos, nome, rodadas)
                        return
                    }else{
                        passos += 1
                        reiniciar(rodadas, passos, nome)
                        return
                    }
                }
            }
        }
    }
}

function reiniciar(rodadas, passos, nome){
    rodadas.forEach( rodada => {
        rodada.andando = false
    })
    iniciarJogo(rodadas, passos, nome)
}

function reset(passos, nome, rodadas){
    let reset = document.getElementById('div-menu')
    reset.innerHTML = ''
    let p = document.createElement('p')
    p.textContent = `Parabens ${nome} !! voce concluir o a caminho com ${passos} passo${passos == 1 ? '' : 's'}.` 
    reset.appendChild(p)
    let button = document.createElement('button')
    button.textContent = 'Reiniciar'
    button.onclick = () => jogar(nome, rodadas)
    reset.appendChild(button)
}

