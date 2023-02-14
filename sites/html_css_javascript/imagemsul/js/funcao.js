function tamanhoTela(){
    var mapa = document.getElementById("mapa_google")
    if (window.innerWidth < 675) {
        mapa.width = 300
    } else {
        mapa.width = 600    
    }
}
tamanhoTela()
