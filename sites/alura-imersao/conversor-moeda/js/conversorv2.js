var pMetros = document.getElementById("conversaoVelocidadeLuz")
pMetros.addEventListener( 'click', interestelar)
function interestelar(){
    var velocidadeLuz = 3000000
    var segundosAno = 31536000
    var metros = velocidadeLuz * segundosAno
    pMetros.innerHTML = velocidadeLuz + " velocidade da luz é equivalente a " + metros + " metro."
   var titulo = document.querySelector("h1")
   titulo.innerHTML = "Conversor de interEstelar"
   var img = document.querySelectorAll("img")
   img[2].setAttribute("src","https://static.wikia.nocookie.net/ptstarwars/images/c/cc/Star-wars-logo-new-tall.jpg")
}

var btn_cotacao = document.getElementById('btn-cotacao')
btn_cotacao.addEventListener('click', cotacoes)

function cotacoes(){
    fetch(url).then(response => response.json()).then(data => {
        data.value.forEach( moeda => {
            if(moeda.simbolo == 'USD' || moeda.simbolo == 'EUR'){
                fetch(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='${moeda.simbolo}'&@dataCotacao='${dataAtual}'&$top=1&$format=json&$select=cotacaoCompra`).then(response => response.json()).then(data => {
                    var id = "conversaoDolarReal"
                    if(moeda.simbolo == 'EUR'){
                        id = "conversaoEuroReal"
                    } 
                    var valorEmReal = document.getElementById('dinheiro').value;
                    var cotacao = data.value[0].cotacaoCompra;
                    var valor = valorEmReal / cotacao
                    var p = document.getElementById(id)
                    p.innerHTML = "Seus " + Number(valorEmReal).toLocaleString('pt-br', {style:'currency', currency: 'BRL'}) + " com a cotação de " + Number(cotacao).toLocaleString('pt-br', {style:'currency', currency: 'BRL'}) + " é " + Number(valor).toLocaleString('pt-br', {style:'currency', currency: moeda.simbolo}) + "."
                }
                ).catch(error => console.log(error))    
            }
            });    
        }    
    ).catch(error => console.log(error))    

}
