var etanol,gasolina;
function calcular(){
    etanol = parseFloat(frmFlex.txtEtanol.value)
    gasolina = parseFloat(frmFlex.txtGasolina.value)
    if(etanol < 0.7 * gasolina){
        document.getElementById('status').src = './img/etanol.png'
    }else{
        document.getElementById('status').src = './img/gasolina.png'
    }
}

function resetar(){
    document.getElementById('status').src = './img/neutro.png'
}