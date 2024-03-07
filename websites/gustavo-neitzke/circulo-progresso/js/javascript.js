function go(){
    let circle = document.getElementById('circle-progress')
    let number = document.getElementById('number-progress').value
    document.querySelector('.number h2').innerHTML = `${number}%`
    if(number < 0){
        number = 0
    }else if(number > 100){
        number = 100
    }
    circle.style.strokeDashoffset = 380 - ( 380 * number) / 100
}