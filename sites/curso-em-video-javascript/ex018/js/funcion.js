var num = document.getElementById('numero')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isnumero(num){
    if(Number(num) >= 1 && Number(num) <= 100){
        return true
    }else{
        return false
    }
}

function inlista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isnumero(num.value) && !inlista(num.value,valores) ){
        valores.push(Number(num.value))
        var item = document.createElement('option');
        item.text = `Valor ${num.value} adcicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        var item = document.createElement('option');
        item.text = `Valor ${num.value} invalido ou já encontrado`
        lista.appendChild(item)
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        res.innerHTML = 'Adicione valores antes de finalizar'
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        let media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior número informado é ${maior}</p>`
        res.innerHTML += `<p>O menor número informado é ${menor}</p>`
        res.innerHTML += `<p>A soma de todos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
        lista.item = ''
    }
}