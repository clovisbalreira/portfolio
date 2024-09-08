var filmes = [
    {nome: "Yestarday", imagem: "https://br.web.img2.acsta.net/pictures/19/07/23/20/57/4907896.jpg"},
    {nome: "Arrival", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsn9D7UR9oJ7ZpmX2KbK8HDF8r1Rryq1F14g&usqp=CAU"},
    {nome: "Escola de Rock", imagem: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg"}
]

filmes.push({nome: "Harry Potter", imagem: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/95/59/60/20417256.jpg"})
var imagem = document.getElementById("listaFilmes")

function mostrar(){
    var divFilmes = document.createElement("div")

    filmes.forEach( (filme, index) => {
        imagem.innerHTML += "<div><img src="+filme.imagem+ " class='img_capa'><p style='color:white'>"+filme.nome+"</p><button class='form-wrappe' onclick='deletar("+index+")'>Deletar</button></div>"
    })
    imagem.appendChild(divFilmes)
}
mostrar()

function deletar(indice){
    filmes.splice(indice,1)
    imagem.innerHTML = ''
    mostrar()
}

function adicionarFilme(){
    var campoNomeFavorito = document.getElementById("nome").value
    var campoFilmeFavorito = document.getElementById("filme").value
    if(campoFilmeFavorito.endsWith(".jpg")){
        filmes.push({nome: campoNomeFavorito, imagem: campoFilmeFavorito})
        listaNomes.push(campoNomeFavorito)
        listaFilmes.push(campoFilmeFavorito)
        imagem.innerHTML = ''
        mostrar()
    }else{
        console.error("Endereço de filme invalido")
    }
    document.getElementById("nome").value = ""    
    document.getElementById("filme").value = ""    
}
