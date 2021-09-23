function Converter(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorDolarNumerico = parseFloat(valor);
    
    var valorReal = valorDolarNumerico * 5;

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em real é R$ " + valorReal

    elementoValorConvertido.innerHTML = valorConvertido
    console.log(valorReal);

}