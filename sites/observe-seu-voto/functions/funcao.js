function acordionPartidos(){
    let acordions = document.querySelectorAll('.acordion')
    acordions.forEach(acordion =>
        {
            acordion.addEventListener('click', (e) => {
                e.target.parentNode.parentNode.querySelector('section').classList.toggle('apagar')
            })
        })
}

function acordionEstados(){
    let acordions = document.querySelectorAll('.acordion-estados')
    acordions.forEach(acordion =>
        {
            acordion.addEventListener('click', (e) => {
                e.target.parentNode.parentNode.querySelector('section').classList.toggle('apagar-estados')
            })
        })
}