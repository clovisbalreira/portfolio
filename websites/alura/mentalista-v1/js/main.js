var numeroSecreto = parseInt(Math.random() * 10)
var tentativa = 1

var elementoResultado = document.getElementById("resultado");

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);

    if(chute == numeroSecreto){
        elementoResultado.innerHTML = "Você acertou.<br>Na "+tentativa+"º tentativa."
    } else if(chute > 10 || chute < 0){
        elementoResultado.innerHTML = "Você deve digitar um numero de 1 a 10"
    } else {
        elementoResultado.innerHTML = "Errou o número segredo.<br>Tente novamente.<br>"
        menorMaior(chute)
        tentativa++;
    }    
}
function menorMaior(chute){
    if(chute < numeroSecreto){
        elementoResultado.innerHTML += "O número procurado é maior."
    }else if(chute > numeroSecreto){
        elementoResultado.innerHTML += "O número procurado é menor."
    }
}