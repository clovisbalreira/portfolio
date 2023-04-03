function TextoPularLinha(texto){
    document.writeln(texto+"<br>")
}

function mostrarArray(array){
    for(var i = 0; i < array.length; i++){
        document.write(array[i]+"<br>")
    }
}

function mostrarDicionaro(dicionario){
    for(var i = 0; i < dicionario.length; i++){
        document.write(dicionario[i].nome+" "+dicionario[i].cor+"<br>")
    }
}

function maiorMenor(idade){
    if(idade > 18){
        document.write("Maior de idade"+idade+"<br>")
    }else{
        document.write("Menor de idade"+idade+"<br>")
    }
}

function botao(){
    document.getElementById("agredecimento").innerHTML = "Obrigado por clicar";
}

function redirecionar(){
    window.open("https://www.google.com")
    //window.location.href = "https://www.google.com"
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    //alert("Página carregada")
}

function funcaoChange(elemento){
    var p = document.getElementById('mostrarValor')
    p.innerHTML = 'Valor : ' + elemento.value
}

var frase = "Japão é o melhor time do mundo.";
TextoPularLinha(frase);
TextoPularLinha("Mudar Japão pelo Brasil");
TextoPularLinha(frase.replace("Japão","Brasil"))
TextoPularLinha("Maiusculo")
TextoPularLinha(frase.toLocaleUpperCase())
TextoPularLinha("Minusculo")
TextoPularLinha(frase.toLowerCase())
document.write('<hr>');
var lista = ['maça',"pera","laranja"]
TextoPularLinha("Array")
mostrarArray(lista)
document.write('<hr>');
lista.push("uva")
TextoPularLinha("Adicionando valor no array")
mostrarArray(lista)
lista.pop();
document.write('<hr>');
TextoPularLinha("Deletando o ultimo valor no array")
mostrarArray(lista)
TextoPularLinha("Contando quantos valores tem no array: "+lista.length);
document.write('<hr>');
TextoPularLinha("Mostrando os valores do array: "+lista.toString());
document.write('<hr>');
TextoPularLinha("Mostrando os valores do array em ordem inversa: "+lista.reverse());
document.write('<hr>');
TextoPularLinha("Separando o array por - : "+lista.join(" - "));
document.write('<hr>');
TextoPularLinha("Dicionario");
var frutas = [{nome: "Maça", cor:"vermelho"},{nome: "uva", cor:"roxo"}]
mostrarDicionaro(frutas)
document.write('<hr>');
var fruta = {nome: "Maça", cor:"vermelho"}
TextoPularLinha(fruta.nome);
TextoPularLinha(fruta.cor);
document.write('<hr>');
TextoPularLinha("Condicional If Maior de idade")
var maior = 19
maiorMenor(maior)
document.write('<hr>');
TextoPularLinha("Condicional If Menor de idade")
var menor = 10
maiorMenor(menor)
document.write('<hr>');
TextoPularLinha("Repeticão while")
var count = 0;
while(count < 5){
    document.write(count+"<br>")
    count++
}
document.write('<hr>');
TextoPularLinha("Repeticão for")
for(var i = 0; i < 5; i++){
    document.write(i+"<br>")
}
document.write('<hr>');
var d = new Date()
TextoPularLinha("Data ano inteiro: "+d.getFullYear())
document.write('<hr>');
TextoPularLinha("Data hora"+d.getHours())
document.write('<hr>');
TextoPularLinha("Data mês"+d.getMonth())
document.write('<hr>');
TextoPularLinha("Data dia: "+d.getDate())
document.write('<hr>');
TextoPularLinha("Data dia semana"+d.getDay())
document.write('<hr>');
TextoPularLinha("Data inteira: "+d)
document.write('<hr>');

