function mudar(nomeImg, aranhaImg){
    let img = document.querySelector('.s-main-content')
    let width = window.innerWidth
    let body = document.querySelector('body')
    console.log(img)
    let video = document.querySelector('video')
    let left = document.querySelector('.s-left-column')
    let cima = document.querySelector('.s-main-content-top')
    let baixo = document.querySelector('.s-main-content-bottom')
    if(video.classList.contains('invisivel')){
        video.classList.remove('invisivel')
        img.classList.remove(nomeImg)
        if(width < '1118'){
            video.setAttribute('height', '100%')
            body.classList.replace(nomeImg,aranhaImg)
            left.classList.add('fundo')
            cima.classList.add('fundo')
            baixo.classList.add('fundo')
        }
    }else{
        video.classList.add('invisivel')
        body.classList.replace(aranhaImg,nomeImg)
        img.classList.add(nomeImg)
        left.classList.remove('fundo')
        cima.classList.remove('fundo')
        baixo.classList.remove('fundo')
    }
}