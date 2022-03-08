function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length <= 0 || fano.value > ano){
        res.innerHTML = `Erro! verifique os dados e tente novamente`
    }else{
        var fsexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/bebe-homem.png')
            }else if(idade < 18){
                img.setAttribute('src', 'img/jovem-homem.png')
            }else if(idade < 50){
                img.setAttribute('src', 'img/adulto-homem.png')
            }else{
                img.setAttribute('src', 'img/idoso-homem.png')
            }
        }else if(fsexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/bebe-mulher.png')
            }else if(idade < 18){
                img.setAttribute('src', 'img/jovem-mulher.png')
            }else if(idade < 50){
                img.setAttribute('src', 'img/adulto-mulher.png')
            }else{
                img.setAttribute('src', 'img/idoso-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}