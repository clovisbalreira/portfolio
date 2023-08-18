function acordionPartidos(){
    let acordions = document.querySelectorAll('.acordion-partidos')
    acordions.forEach(acordion => {
        acordion.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.querySelector('section').classList.toggle('apagar-partidos')
        })
    })
}

function acordionPartidosEstados(){
    let acordions = document.querySelectorAll('.acordion-partidos-estados')
    acordions.forEach(acordion => {
        acordion.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.querySelector('section').classList.toggle('estados-partidos')
            e.target.parentNode.parentNode.querySelector('section').classList.toggle('apagar-partidos-estados')
        })
    })
}

function acordionEstados(){
    let acordions = document.querySelectorAll('.acordion-estados')
    acordions.forEach(acordion => {
        acordion.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.querySelector('section').classList.toggle('apagar-estados')
        })
    })
}

function acordionEstadosPartidos(){
    let acordions = document.querySelectorAll('.acordion-estados-partidos')
    acordions.forEach(acordion => {
        acordion.addEventListener('click', (e) => {
            e.preventDefault()
            console.log(e.target.parentNode.parentNode.querySelector('section').style.display)
            if(e.target.parentNode.parentNode.querySelector('section').style.display == 'none'){
                e.target.parentNode.parentNode.querySelector('section').style.display = 'block'
            }else{
                e.target.parentNode.parentNode.querySelector('section').style.display = 'none'
            }
        })
    })
}