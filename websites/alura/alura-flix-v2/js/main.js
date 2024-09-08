var listaFilmes = [{nome:"10 coisas que odeio em você",imagem:"https://www.themoviedb.org/t/p/original/ngc3XoF4WWsFtuiEGefQoCFKDWW.jpg",trailer:"https://www.youtube.com/watch?v=tD76OqlJRwQ"},{nome: "Yestarday", imagem: "https://br.web.img2.acsta.net/pictures/19/07/23/20/57/4907896.jpg",trailer:"https://www.youtube.com/watch?v=Yyk9N40uIFs"},
{nome: "Arrival", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsn9D7UR9oJ7ZpmX2KbK8HDF8r1Rryq1F14g&usqp=CAU",trailer:"https://www.youtube.com/watch?v=rNciXGzYZms"},
{nome: "Escola de Rock", imagem: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg",trailer:"https://www.youtube.com/watch?v=PSaRbGB9tBU"}]
listaFilmes.push({nome: "Harry Potter", imagem: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/95/59/60/20417256.jpg",trailer:"https://www.youtube.com/watch?v=F-Ws36-Go6A"})


listaFilmes.forEach( lista => {
    var elementoListaFilmes= document.getElementById('listaFilmes')
    elementoListaFilmes.innerHTML += '<div><p>'+ lista.nome +'</p><img src=' + lista.imagem + '><button  class="btn-excluir">Excluir</button><a href='+lista.trailer+' target="_blank">Trailer</a></div>'    
});

function adicionarFilme(){
    var nomeFavorito = document.getElementById('nome').value
    var filmeFavorito = document.getElementById('filme').value
    var trailerFavorito = document.getElementById('trailer').value
    var erro = document.getElementById('erro').value
    var elementoListaFilmes= document.getElementById('listaFilmes')
    if(nomeFavorito != '' && filmeFavorito.slice(filmeFavorito.length - 3 == "jpg" && trailerFavorito != '')){
        elementoListaFilmes.innerHTML += '<div><p>'+ nomeFavorito +'</p><img src=' + filmeFavorito + '><button  class="btn-excluir">Excluir</button><a href='+trailerFavorito+' target="_blank">Trailer</a></div>'
        listaFilmes.push({nome:nomeFavorito,imagem:filmeFavorito,trailer:trailerFavorito})
    }else{
        erro.innerHTML = 'Erro nos dados inseridos'
    }    
    document.getElementById('nome').value = ''
    document.getElementById('filme').value = ''
    document.getElementById('trailer').value = ''
}

var listaDeletar = document.querySelector('#listaFilmes')

listaDeletar.addEventListener("click", function(event){
    var elemnetoclicado = event.target
    if(elemnetoclicado.classList.contains("btn-excluir")){
        var elementoPai = elemnetoclicado.parentNode
        elementoPai.remove()
    }
})
