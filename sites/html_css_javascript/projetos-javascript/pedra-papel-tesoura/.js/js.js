function jogar(){
    if(document.getElementById('pedra').checked == false && document.getElementById('papel').checked == false && document.getElementById('tesoura').checked == false){
        alert('Selecione uma opção')
    }else{
        var sorteio = Math.floor(Math.random() * 3)
        switch(sorteio){
            case 0:
                document.getElementById("pc").src = "./img/pcpedra.png"
                break
            case 1:
                document.getElementById("pc").src = "./img/pcpapel.png"
                break
            case 2:
                document.getElementById("pc").src = "./img/pctesoura.png"
                break
        }
        if((document.getElementById('pedra').checked == true && sorteio == 0) || (document.getElementById('papel').checked == true && sorteio == 1) || (document.getElementById('tesoura').checked == true && sorteio == 2)){
            document.getElementById('placar').innerHTML = 'EMPATE'
        }else if((document.getElementById('pedra').checked == true && sorteio == 2) || (document.getElementById('papel').checked == true && sorteio == 0) || (document.getElementById('tesoura').checked == true && sorteio == 1)){
            document.getElementById('placar').innerHTML = 'VENCEU'
        }else if((document.getElementById('pedra').checked == true && sorteio == 1) || (document.getElementById('papel').checked == true && sorteio == 2) || (document.getElementById('tesoura').checked == true && sorteio == 0)){
            document.getElementById('placar').innerHTML = 'PERDEU'
        }
    }
}

function resetar(){
    document.getElementById('pc').src = "./img/pc.png"
    document.getElementById('placar').innerHTML = ""
}