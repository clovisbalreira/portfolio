var largura = window.innerWidth
if(largura < 750){
    var iframe = document.querySelector('iframe')
    iframe.setAttribute('width', '300')
}

var address = document.querySelector('address')
address.innerHTML = endereco

var pCnpj = document.getElementById('pCnpj')
pCnpj.innerHTML = "CPF/CNPJ: "
for(var i = 0; i < cnpj.length; i++){
    pCnpj.innerHTML += cnpj[i]
    if(i == 1 || i == 4){
        pCnpj.innerHTML += "."
    }else if(i == 7){
        pCnpj.innerHTML += "/"
    }else if(i == 11){
        pCnpj.innerHTML += "-"
    }
}

var pEndereco = document.getElementById('pEndereco')
pEndereco.innerHTML = endereco

var pTelefone = document.getElementById('pTelefone')
pTelefone.innerHTML = "Telefone: ("
for(var i = 0; i < telefone.length; i++){
    if(i > 1){
        pTelefone.innerHTML += telefone[i]
        if(i == 3 ){
            pTelefone.innerHTML += ") "
        }else if(i == 7){
            pTelefone.innerHTML += " - "
        }
    }
}

function clickMenu(){
    if(navMenu.style.display == 'block'){
        navMenu.style.display = 'none'
        idMenu.innerHTML = 'menu'
    }else{
        navMenu.style.display = 'block'
        idMenu.innerHTML = 'close'
    }
}

function fechaMenu(){
    navMenu.style.display = 'none'
    idMenu.innerHTML = 'menu'
}