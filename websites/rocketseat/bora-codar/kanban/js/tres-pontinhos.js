const elements = document.querySelectorAll('.card p')
const LIMIT = 15
for(let p of elements){
    const aboveLimit = p.innerHTML.length > LIMIT
    const dotsOrEmpty = aboveLimit ? '...' : ''
    p.innerHTML = p.innerHTML.substring(0,LIMIT) + dotsOrEmpty
}