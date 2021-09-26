var listaFilmes = ["https://br.web.img2.acsta.net/pictures/19/07/23/20/57/4907896.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsn9D7UR9oJ7ZpmX2KbK8HDF8r1Rryq1F14g&usqp=CAU", "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg"]

listaFilmes.push("https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/95/59/60/20417256.jpg")

for(var indice = 0; indice < listaFilmes.length;indice++){
    document.write("<img src="+listaFilmes[indice]+ " class='img_capa'>")
}

function adicionarFilme(){
    var campoFilmeFavorito = document.getElementById("filme").value
    listaFilmes.push(campoFilmeFavorito)
    if(campoFilmeFavorito.endsWith(".jpg")){
        listarFilmesTela(campoFilmeFavorito)
    }else{
        console.error("Endereço de filme invalido")
    }
    document.getElementById("filme").value = ""    
}

function listarFilmesTela(filme){
    var elementoFilmeFavorito = "<img src=" + filme +">"
    var elementolistaFilmes = document.getElementById("listaFilmes")
    elementolistaFilmes.innerHTML += elementoFilmeFavorito    
}

