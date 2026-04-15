function on(){
    document.getElementById('lamp').src = "./img/on.jpg"
}

function off(){
    document.getElementById('lamp').src = "./img/off.jpg"
}

function blink(){
    var intervalo = 0
    var contador = 0
    while(contador < 10){
        intervalo += 200
        setTimeout( () => {
            document.getElementById('lamp').src = './img/on.jpg';
        }, intervalo)
        intervalo += 200
        setTimeout( () => {
            document.getElementById('lamp').src = './img/off.jpg';
        }, intervalo)
        contador++
    }
}