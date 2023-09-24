/* 
    Juros Simples 
    vf = valor futuro
    vp = valor presente
    i = taxa de juros
    n = duração
    formula - vf = vp( 1 + i X n)
*/

function calcularJurosSimples(vp, i, n){
    return vp * i / 100 * n
}

function jurosSimples(vp, i, n){
    parcelas = []
    for( var indice = 0; indice < n; indice++){
        parcelas.push(vp + calcularJurosSimples(vp, i, n))   
    }
    return parcelas
}

console.log(jurosSimples(1000000, 5, 3))

/* 
Juros Compostos 
vf = valor futuro
vp = valor presente
i = taxa de juros
j = juros
n = duração
formula - vf = vp( 1 + i )n
*/

function calcularJurosComposto(i, n){
    return Math.pow( 1 + i / 100, n )
}

function jurosCompostos(vp, i, n){
    parcelas = []
    for( var indice = 0; indice < n; indice++){
        p = (vp * calcularJurosComposto(i, n)).toFixed(2)
        parcelas.push(p)   
    }
    return parcelas
}

console.log(jurosCompostos(1500, 1.0, 5))

function jurosCompostosEquivalente(vp, i, n){
    parcelas = []
    for( var indice = 0; indice < n; indice++){
        p = (vp * calcularJurosComposto(i, indice + 1)).toFixed(2)
        parcelas.push(p)   
    }
    return parcelas
}

console.log(jurosCompostosEquivalente(1500, 1.0, 5))

function calcularSaldoDevedor(montanteContratado, taxaAnual, periodoCarência) {
    const taxaMensal = (taxaAnual / 12) / 100;
    const numeroDeMeses = periodoCarência;
    
    const saldoDevedor = montanteContratado * Math.pow(1 + taxaMensal, numeroDeMeses);
    
    return saldoDevedor;
  }
  
  // Exemplo de uso
  const montanteContratado = 600000000; // R$ 600 milhões
  const taxaAnual = 1.5; // 1,5% ao ano
  const periodoCarência = 18; // 18 meses
  
  const saldoDevedor = calcularSaldoDevedor(montanteContratado, taxaAnual, periodoCarência);
  console.log(`O saldo devedor após ${periodoCarência} meses de carência é de R$ ${saldoDevedor.toFixed(2)}`);
  
