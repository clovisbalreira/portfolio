var numeroSecreto = parseInt(Math.random() * 10)

var tentativa = 0

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);

    var elementoResultado = document.getElementById("resultado");

    console.log(chute)
    if(chute == numeroSecreto){
        tentativa = 4;
    } else if(chute > 10 || chute < 0){
        elementoResultado.innerHTML = "Você deve digitar um numero de 1 a 10"
    } else {
        elementoResultado.innerHTML = "Errou o número segredo.<br>Tente novamente.  " + numeroSecreto +" " + tentativa
        tentativa++;
    }
    
    if( tentativa > 3){
        if(tentativa == 4){
            elementoResultado.innerHTML = "Você acertou.<br>Na "+tentativa+"º tentativa."
        }else{
            elementoResultado.innerHTML = "Errou o número segreto era : " + numeroSecreto +" " + tentativa
        }
    }

    
}

//numero de tentativas
//na mensagem de erro mostre se numero é melhor ou maior