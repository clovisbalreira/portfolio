var nome = "Clóvis"
var valorEmDolar = 30;
var cotacaoDoDolar = 5.32;
var valorEmReal = valorEmDolar * cotacaoDoDolar
valorEmReal = valorEmReal.toFixed(2)
var pReal = document.getElementById("conversaoDolarReal")
pReal.innerHTML = "Olá " + nome + " seus $" + valorEmDolar + " com a cotação de R$" + cotacaoDoDolar + " é R$" + valorEmReal + "."

var cotacaoCliptomoeda = 118422.19;
var bitcons = 3
var valorEmcliptomoedaParaReal = bitcons * cotacaoCliptomoeda;
valorEmcliptomoedaParaReal = valorEmcliptomoedaParaReal.toFixed(2)
var pCliptomoeda = document.getElementById("conversaoCliptomoeda")
pCliptomoeda.innerHTML = "Olá " + nome + " seus " + bitcons + " bitcons com a cotação de R$" + cotacaoCliptomoeda + " é R$" + valorEmcliptomoedaParaReal + "."

var pMetros = document.getElementById("conversaoMetros")
function interestelar(){
    var velocidadeLuz = 3000000
    var segundosAno = 31536000
    var metros = velocidadeLuz * segundosAno
    pMetros.innerHTML = "Olá " + nome + "  " + velocidadeLuz + " velocidade da luz é equivalente a " + metros + " metro."
   var titulo = document.querySelector("h1")
   titulo.innerHTML = "Conversor de interEstelar"
   var img = document.querySelectorAll("img")
   img[2].setAttribute("src","https://static.wikia.nocookie.net/ptstarwars/images/c/cc/Star-wars-logo-new-tall.jpg")
}

pMetros.addEventListener( 'click', interestelar)

var kelvin = 250;
var celsius = 37;
var fahrenheit = 95;
var kevinParaCelsius = kelvin - 273
var kevinParaFahrenheit = ( kelvin -273 ) * 1.8 + 32
var celsiusParaKelvin = celsius + 273
var celsiusParaFahrenheit = celsius * 1.8 +32
var fahrenheitParaKelvin =( fahrenheit - 32 ) / 1.8
var fahrenheitParaCelsius = ( fahrenheit - 32 ) * ( 5 / 9 ) + 273
var temperaturaKC = document.getElementById("conversaoKC")
temperaturaKC.innerHTML = 
kelvin + "K convertido em celsius é " + kevinParaCelsius.toFixed(2) + "°C."
var temperaturaKF = document.getElementById("conversaoKF")
temperaturaKF.innerHTML = kelvin + "K convertido em fahrenheit é " + kevinParaFahrenheit.toFixed(2) + "°F." 
var temperaturaCK = document.getElementById("conversaoCK")
temperaturaCK.innerHTML = celsius + "°C convertido em Celsius é " + celsiusParaKelvin.toFixed(2) + "K."
var temperaturaCF = document.getElementById("conversaoCF")
temperaturaCF.innerHTML = celsius + "°C convertido em fahrenheit é " + celsiusParaFahrenheit.toFixed(2) + "°F."
var temperaturaFK = document.getElementById("conversaoFK")
temperaturaFK.innerHTML = fahrenheit + "°F convertido em celsius é " + fahrenheitParaKelvin.toFixed(2) + "K." 
var temperaturaFC = document.getElementById("conversaoFC")
temperaturaFC.innerHTML = fahrenheit + "°F convertido em Celsius é " + fahrenheitParaCelsius.toFixed(2) + "°C." 