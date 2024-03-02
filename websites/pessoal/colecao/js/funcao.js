let main = document.querySelector('main')
let soma = 0 
let cedulas = 0 
let moedas = 0 
let convertido = 0
for(let i = 0; i < dinheiros.length; i++){
    if(dinheiros[i].nome != ''){
        somarCedulasMoedas(dinheiros[i].tipo)
        soma += parseFloat(dinheiros[i].valor)
        convertido += atualizarValor(dinheiros[i].nome, parseFloat(dinheiros[i].valor))
        let section = document.createElement('section')
        let divDados = document.createElement('div')
        let h2Nome = document.createElement('h2')
        h2Nome.innerHTML = `${dinheiros[i].nome} - ${dinheiros[i].pacote}`
        divDados.appendChild(h2Nome)
        let divSerie = document.createElement('div')
        let h2Serie = document.createElement('h2')
        h2Serie.innerHTML = 'Série'
        divSerie.appendChild(h2Serie)
        let pSerie = document.createElement('p')
        pSerie.innerHTML = dinheiros[i].serie
        divSerie.appendChild(pSerie)
        divDados.appendChild(divSerie)
        section.appendChild(divDados)
    
        let divPais = document.createElement('div')
        let h2Pais = document.createElement('h2')
        h2Pais.innerHTML = 'Pais'
        divPais.appendChild(h2Pais)
        let divNomeImagem = document.createElement('div')
    
        let pPais = document.createElement('p')
        divNomeImagem.innerHTML = dinheiros[i].pais
        divPais.appendChild(pPais)
        let paisImagem = document.createElement('img')
        paisImagem.src = `./img/bandeira/${dinheiros[i].pais.toLowerCase().replace(" ", "-")}.png`
        paisImagem.alt = dinheiros[i].pais
        divNomeImagem.appendChild(paisImagem)
        divPais.appendChild(divNomeImagem)
        section.appendChild(divPais)
            
        let divValor = document.createElement('div')
        let h2Valor = document.createElement('h2')
        h2Valor.innerHTML = 'Valor'
        divValor.appendChild(h2Valor)
        let pValor = document.createElement('p')
        pValor.innerHTML = `${cifrao(dinheiros[i].pais, dinheiros[i].nome)} ${parseFloat(dinheiros[i].valor).toFixed(2)}`
        divValor.appendChild(pValor)
        section.appendChild(divValor)

        let divAtual = document.createElement('div')
        let h2Atual = document.createElement('h2')
        h2Atual.innerHTML = 'Valor Conv.'
        divAtual.appendChild(h2Atual)
        let pAtual = document.createElement('p')
        pAtual.innerHTML = `R$: ${atualizarValor(dinheiros[i].nome, parseFloat(dinheiros[i].valor).toFixed(2))}`
        divAtual.appendChild(pAtual)
        section.appendChild(divAtual)

        /* let divCotacao = document.createElement('div')
        let h2Cotacao = document.createElement('h2')
        h2Cotacao.innerHTML = 'Cotação pra venda'
        divCotacao.appendChild(h2Cotacao)
        let pCotacao = document.createElement('p')
        pCotacao.innerHTML = `$ ${parseFloat(dinheiros[i].valor).toFixed(2)}`
        divCotacao.appendChild(pCotacao)
        section.appendChild(divCotacao) */

        let divImagem = document.createElement('div')
        divImagem.classList.add('imagem')
        let frenteImagem = document.createElement('img')
        frenteImagem.src = `./img/${dinheiros[i].tipo.toLowerCase()}/${dinheiros[i].imagem_frente}`
        frenteImagem.alt = `${dinheiros[i].nome} Série: ${dinheiros[i].serie} País: ${dinheiros[i].pais}`
        divImagem.appendChild(frenteImagem)
        let versoImagem = document.createElement('img')
        versoImagem.src = `./img/${dinheiros[i].tipo.toLowerCase()}/${dinheiros[i].imagem_verso}`
        versoImagem.alt = `${dinheiros[i].nome} Série: ${dinheiros[i].serie} País: ${dinheiros[i].pais}`
        divImagem.appendChild(versoImagem)
        section.appendChild(divImagem)
        main.appendChild(section)
    }
}

function somarCedulasMoedas(valor){
    if( valor == 'Cedula'){
        cedulas += 1
    }else{
        moedas += 1
    }
}

function atualizarValor(moeda, valor){
    if( moeda == 'Real'){
        valor = valor
    }else if( moeda == 'Cruzeiros'){
        valor = valor / 2750
    }else if( moeda == 'Cruzeiros Novos'){
        valor = 0
    }else if( moeda == 'Cruzados'){
        valor = valor / ( 1 * 1 * 2750)
    }else if( moeda == 'Cruzados Novos'){
        valor = 0
    }
    return valor 
}

function cifrao(pais, brasil){
    let cifroes = ''
    if(pais == 'Brasil'){
        if( brasil == 'Real'){
            cifroes = 'R$'
        }else if( brasil == 'Cruzeiros'){
            cifroes = 'Cr$'
        }else if( brasil == 'Cruzeiros Novos'){
            cifroes = 'NCr$'
        }else if( brasil == 'Cruzados'){
            cifroes = 'Cz$'
        }else if( brasil == 'Cruzados Novos'){
            cifroes = 'NCz$'
        }
    }else if(pais == 'Estados Unidos'){
        cifroes = 'US$'
    }else if(pais == 'Uruguai'){
        cifroes = '$U'
    }else if(pais == 'Argentina'){
        cifroes = 'A'
    }
    return cifroes
}

function somarTotais(id, valor){
    let moeda = document.getElementById(id)
    moeda.innerHTML += valor 
}

somarTotais('moedas', moedas)
somarTotais('cedulas', cedulas)
somarTotais('valorTotal', soma.toFixed(2))
somarTotais('valorConvertido', convertido.toFixed(2))
