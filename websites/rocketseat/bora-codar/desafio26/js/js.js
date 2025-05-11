function increaseCounter(){
    const counter = document.getElementById("counter")
    let value = parseInt(counter.textContent)
    value++
    counter.textContent = value.toString().padStart(2,"0")
}

function decreaseCounter(){
    const counter = document.getElementById("counter")
    let value = parseInt(counter.textContent)
    if(value > 1){
        value--
        counter.textContent = value.toString().padStart(2,"0")
    }
}
const counter = document.getElementById("counter")
const lis = document.querySelectorAll('ul li span')
lis.forEach((li) => {
    let unidade = parseFloat(counter.textContent) / parseFloat(li.textContent)
    console.log(unidade) 
    //li.textContent = 9
    //console.log(li.innerHTML)
})