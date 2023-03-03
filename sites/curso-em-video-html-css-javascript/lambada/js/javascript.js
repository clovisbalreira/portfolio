let p = document.querySelectorAll('p')
p[0].innerHTML = 'Olá mundo!!';
p[1].innerHTML = 'Olá hoje é dia ' + Date();


var quebrada = false
function MudarLampada(tipo){
if(!quebrada){
    document.getElementById('luz').src = 'imagens/'+tipo+'.jpg'
    if(tipo == 'lambada-quebrada'){
        quebrada = true
    }
}
}

function AcendeLampada(){
document.getElementById('luz').src = '_imagens/lampada-acesa.jpg'
}

function ApagaLampada(){
document.getElementById('luz').src = '_imagens/lampada-apagada.jpg'
}

function QuebraLambada(){
document.getElementById('luz').src = '_imagens/lampada-quebrada.jpg';
}
