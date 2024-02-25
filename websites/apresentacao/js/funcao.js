function links(classe, link){
    document.querySelector(classe).addEventListener('click', () => {
        window.open(link, '_parent')
    })
}

function inicio(){
    links('.star-1', 'links.html')
    links('.star-2', 'curriculo.html')
    links('.star-3', 'imagens.html')
}

inicio()