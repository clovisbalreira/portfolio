const slider = document.getElementById('slider')
const before = document.querySelector('.before-image')
const dragger = document.getElementById('dragger')

const width = window.innerWidth
n = 40
console.log(n)

const img = document.querySelectorAll('img')
if(width < 559){
    n = 100
}else if(width < 629){
    n = 90
}else if(width < 720){
    n = 80
}else if(width < 858){
    n = 70
}else if(width < 1058){
    n = 60
}else if(width < 1258){
    n = 50
}


for(i = 0; i < img.length; i++){
    img[i].style.width = `${n}vw`
}

slider.addEventListener("input", (e) => {
    before.style.width = e.target.value + '%'
    dragger.style.left = `calc(${e.target.value}%)`
})