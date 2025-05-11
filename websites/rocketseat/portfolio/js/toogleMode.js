function toogleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
    const img = document.querySelector('img')
    if(html.classList.contains('light')){
        img.setAttribute('src', 'https://github.com/clovisbalreira.png')
    }else{
        img.setAttribute('src', 'https://github.com/clovisbalreira.png')
    }
}
