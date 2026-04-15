var naipes = ['./img/copas.png','./img/ouros.png','./img/paus.png','./img/espadas.png']
var faces = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
var naipe = naipes[Math.floor(Math.random() * 4)]
var face = faces[Math.floor(Math.random() * faces.length)]
document.querySelector('h3').innerHTML = face
document.querySelector('img').src = naipe
if(naipe == './img/copas.png' || naipe == './img/ouros.png'){
    document.querySelector('h3').style.color = '#A31919'
}
