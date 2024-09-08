var numeroSecreto
var txtNumeroTentativa = document.getElementById('numeroTentativa')
var btnComecar = document.getElementById('btnComecar')
var resultado = document.getElementById('resultado')
var txtChute = document.getElementById('chute')
var btnBotao = document.getElementById('btnChute')
var somaTentativa
var tentativa
var numeroChutado = []
function liberarInput( comecar, acabar){
    if(txtNumeroTentativa.value == '' || txtNumeroTentativa.value <= 0){
        resultado.innerHTML = 'Digite o número de tentativa'
        txtNumeroTentativa.focus()
    }else{
        btnComecar.disabled = comecar
        txtNumeroTentativa.disabled = comecar
        btnBotao.disabled = acabar
        txtChute.value = ''
        txtChute.disabled = acabar
        somaTentativa = 0
        tentativa = 0
        if(!comecar){
            txtNumeroTentativa.value = ''
            txtNumeroTentativa.focus()
        }else{
            numeroSecreto = parseInt(Math.random() * 1001)
            console.log(numeroSecreto)
            numeroChutado = []  
        }
    }
}

btnComecar.addEventListener('click', () => {
    liberarInput(true,false)
    txtChute.focus()
})

btnBotao.addEventListener("click", () => {
    var txtChute = document.getElementById('chute')
    if(txtChute.value == '' || txtChute.value < 1 || txtChute.value > 1000){
        resultado.innerHTML = 'Valor invalido.'
        txtChute.focus()
    }else{
        var contemNumero = true
        numeroChutado.forEach(numero => {
            if(parseInt(numero) == chute.value){
                contemNumero = false
            }
        })
        if(contemNumero){        
            numeroChutado.push(chute.value)
            tentativa += 1
            if(parseInt(txtChute.value) == numeroSecreto){
                resultado.innerHTML = 'Acertou! na '+ tentativa+'º tentativa.O número segredo é ' + numeroSecreto
                liberarInput(false, true)
            }else if(parseInt(txtChute.value) > numeroSecreto){
                resultado.innerHTML = 'Errou... na '+ tentativa+'º tentativa. O número secreto é menor do que ' + txtChute.value + ' e seus chutes foram ' + numeroChutado.join(', ')
                txtChute.value = ''
            }else{
                resultado.innerHTML = 'Errou... na '+ tentativa+'º tentativa. O número secreto é maior do que ' + txtChute.value + ' e seus chutes foram ' + numeroChutado.join(', ')
                txtChute.value = ''
            }
            somaTentativa += 1
            if(parseInt(txtNumeroTentativa.value) == somaTentativa){
                resultado.innerHTML = 'As ' + somaTentativa + " acabou o número sorteado era " + numeroSecreto
                liberarInput(false, true)
            }
        }else{
            resultado.innerHTML = "Esse número já foi tentado." + ' e seus chutes foram ' + numeroChutado.join(', ')
            txtChute.value = ''
        }
        txtChute.focus()
    }
})
