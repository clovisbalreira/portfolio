var nome = "Clóvis";

var notaPrimeiroBimestre = 9.4355;
var notaSegundoBimestre = 7.234;
var notaTerceiroBimestre = 4.234;
var notaQuartoBimestre = 9.183;

var notaFinal = notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre;

var media = notaFinal / 4;

var notaFixada = media.toFixed(2);

var texto = document.getElementById("bem-vindo");
var nota1 = document.getElementById("nota1");
var nota2 = document.getElementById("nota2");
var nota3 = document.getElementById("nota3");
var nota4 = document.getElementById("nota4");
var totalnota = document.getElementById("totalnota");
var notamedia = document.getElementById("media");
var resultado = document.getElementById("resultado")

texto.innerHTML = "Bem Vindo, vamos ver suas notas: ";
nota1.innerHTML = "A nota do primeiro bimestre foi : " + notaPrimeiroBimestre.toFixed(2);
nota2.innerHTML = "A nota do segundo bimestre foi : " + notaSegundoBimestre.toFixed(2);
nota3.innerHTML = "A nota do terceiro bimestre foi : " + notaTerceiroBimestre.toFixed(2);
nota4.innerHTML = "A nota do quarto bimestre foi : " + notaQuartoBimestre.toFixed(2);
totalnota.innerHTML = "O total de notas " + notaFinal.toFixed(2)
notamedia.innerHTML = "A Sua média foi : " + media.toFixed(2);

if(media <= 5){
    resultado.innerHTML = 'Você foi reprovado'
}else if(media <= 7){
    resultado.innerHTML = 'Você ficou de recuperação'
}else{
    resultado.innerHTML = 'Você foi aprovado'
}

//isso é um comentario

//revisão
//variaveis, strings, console.log, toFixed, operações, matematicas, concatenação