function Converter(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorDolarNumerico = parseFloat(valor);
    
    var valorReal = valorDolarNumerico * 5;

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em dolar é R$ " + valorReal.toFixed(2)

    elementoValorConvertido.innerHTML = valorConvertido
    console.log(valorReal);

}