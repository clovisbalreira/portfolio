function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora =  data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas`
    if(hora > 0 && hora <= 12){
        img.src = 'img/manha.png'
        window.document.body.style.background = '#db4b65';
    }else if(hora >= 12 && hora < 18){
        img.src = 'img/tarde.png'  
        document.body.style.background = '#f4b194';
              
    }else{
        img.src = 'img/noite.png';
        document.body.style.backgroundColor = '#171d32'
    }
}