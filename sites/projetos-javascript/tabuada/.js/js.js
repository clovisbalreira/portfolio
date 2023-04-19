var p = document.querySelector('p') 

for(var i =1; i < 11; i++){
    p.innerHTML += "Tabuada do " + i + "<br>"
    for(var j = 1; j < 11; j++){
        p.innerHTML += j + " X " + i + " = " + ( i * j ) +"<br>"
    }
    p.innerHTML += "<br>"
}