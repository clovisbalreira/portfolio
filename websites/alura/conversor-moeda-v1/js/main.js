function Converter(){
    fetch(url).then(response => response.json()).then(data => {
        data.value.forEach( moeda => {
            fetch(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='${moeda.simbolo}'&@dataCotacao='${dataAtual}'&$top=1&$format=json&$select=cotacaoCompra`).then(response => response.json()).then(data => {
                var cotacao = document.getElementById('cotacao')
                cotacao.style.display = 'flex'
                cotacao.style.flexWrap = 'wrap-reverse'
                cotacao.style.alignItems = 'center'
                cotacao.style.justifyContent = 'center'
                cotacao.style.gap = '2rem'
                cotacao.style.height = 'max-content'

                
                var subtitle = document.querySelector('.page-subtitle')
                subtitle.innerHTML += `A cotação em ${moeda.nomeFormatado} em ` + 
                Number(data.value[0].cotacaoCompra).toLocaleString('pt-br', {style:'currency', currency: 'BRL'}) + '<br>'
                subtitle.style.backgroundColor = '#00000090'
                
                var valorElemento = document.getElementById("valor");
                var valor = 2
                var valorDolarNumerico = parseFloat(valor);
                
                var valorReal = valorDolarNumerico / data.value[0].cotacaoCompra;
                
                var elementoValorConvertido = document.getElementById("valorConvertido")
                var valorConvertido = `O resultado em ${moeda.nomeFormatado} é ` + Number(valorReal).toLocaleString('pt-br', {style:'currency', currency: moeda.simbolo})
                
                elementoValorConvertido.innerHTML += valorConvertido + '<br>' 
                elementoValorConvertido.style.backgroundColor = '#00000090'
                elementoValorConvertido.style.display = 'inline'
                elementoValorConvertido.style.paddingInline = '3rem'
                    }
                ).catch(error => console.log(error))
            });
        }
    ).catch(error => console.log(error))
}
