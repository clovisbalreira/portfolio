var listaFilmes = [{nome:"nomeFavorito",imagem:"https://www.themoviedb.org/t/p/original/ngc3XoF4WWsFtuiEGefQoCFKDWW.jpg",trailer:"trailerFavorito"},{nome:"nomeFavorito",imagem:"https://www.themoviedb.org/t/p/original/ngc3XoF4WWsFtuiEGefQoCFKDWW.jpg",trailer:"trailerFavorito"},{nome:"nomeFavorito",imagem:"https://www.themoviedb.org/t/p/original/ngc3XoF4WWsFtuiEGefQoCFKDWW.jpg",trailer:"trailerFavorito"}]
listaFilmes.forEach( lista => {
    var elementoListaFilmes= document.getElementById('listaFilmes')
    elementoListaFilmes.innerHTML += '<div><span class="btn-excluir">Excluir</span><p>'+ lista.nome +'</p><img src=' + lista.imagem + '><a href='+lista.trailer+' target="_blank">Trailer</a></div>'    
});

function adicionarFilme(){
    var nomeFavorito = document.getElementById('nome').value
    var filmeFavorito = document.getElementById('filme').value
    var trailerFavorito = document.getElementById('trailer').value
    var erro = document.getElementById('erro').value
    var elementoListaFilmes= document.getElementById('listaFilmes')
    elementoListaFilmes.innerHTML += '<img src=' + filmeFavorito + '>'
    if(filmeFavorito.slice(filmeFavorito.length - 3 == "jpg")){
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
