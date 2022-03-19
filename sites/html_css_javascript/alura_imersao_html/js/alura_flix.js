/*var filme1 = "Yestarday";
var filme2 = "A chegada";
var filme3 = "Escola de Rock";

document.write("<p>" + filme1 + "</p>")
document.write("<p>" + filme2 + "</p>")
document.write("<p>" + filme3 + "</p>")*/

/*var filme = ["Yestarday","A chegada","Escola de Rock"];
for(var indice = 0; indice < filme.length;indice++){
    document.write("<p>" + filme[indice] + "</p>")
}*/

var listaNomes = ["Yestarday","Arrival","Estrela de Rock"]
var listaFilmes = ["https://br.web.img2.acsta.net/pictures/19/07/23/20/57/4907896.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsn9D7UR9oJ7ZpmX2KbK8HDF8r1Rryq1F14g&usqp=CAU", "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg"]

listaFilmes.push("https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/95/59/60/20417256.jpg")

//listaFilmes.pop('')

var imagem = document.getElementById("listaFilmes")

function mostrar(){
    for(var indice = 0; indice < listaFilmes.length;indice++){
        imagem.innerHTML += "<a href=''><img src="+listaFilmes[indice]+ " class='img_capa'></a>";
        //imagem.innerHTML += "<p style='color:white'>"+listaNomes[indice]+"</p>"
    }
}

mostrar()
function adicionarFilme(){
    var campoNomeFavorito = document.getElementById("nome").value
    var campoFilmeFavorito = document.getElementById("filme").value
    if(campoFilmeFavorito.endsWith(".jpg")){
        //listarFilmesTela(campoFilmeFavorito)
        listaNomes.push(campoNomeFavorito)
        listaFilmes.push(campoFilmeFavorito)
        imagem.innerHTML = ''
        mostrar()
    }else{
        console.error("Endereço de filme invalido")
    }
    document.getElementById("filme").value = ""    
}

function listarFilmesTela(filme){
    var elementoFilmeFavorito = "<img src=" + filme +" class='img_capa'>"
    var elementolistaFilmes = document.getElementById("listaFilmes")
    elementolistaFilmes.innerHTML += elementoFilmeFavorito    
}

//remover filme
//nome
