const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const segundsElement = document.getElementById('segunds')
const hoursHand = document.querySelector('.hours-hand')
const minutesHand = document.querySelector('.minutes-hand')
const secondsHand = document.querySelector('.seconds-hand')

function newTime(){
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const segunds = date.getSeconds()
    
    hoursElement.textContent = fixTime(hours)
    minutesElement.textContent = fixTime(minutes)
    segundsElement.textContent = fixTime(segunds)
}

function fixTime(time){
    return time < 10 ? `0${time}` : time
}

newTime()
setInterval(newTime, 1000)

function numberAnalog(){
    let analog = document.querySelector('.analog')
    let graus = 0
    for( let i = 1; i < 13; i++){
        graus += 30
        let div = document.createElement('div')
        div.textContent = i
        div.classList.add('number')
        div.classList.add(`number-${i}`)
        div.style.transform = `rotate(${graus}deg)`
        analog.appendChild(div)
    }
}

const getTime = () => {
    const date = new Date()
    return {
        hours : date.getHours(),
        minutes : date.getMinutes(),
        seconds : date.getSeconds(),
    }
}

numberAnalog()
setInterval(() => {
    const { hours, minutes, seconds } = getTime()
    hoursHand.style.transform =`translate(0, -50%) rotate(${hours * 30 + ( minutes / 2 )}deg)`
    minutesHand.style.transform =`translate(0, -50%) rotate(${minutes * 6}deg)`
    secondsHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`
}, 1000)

const timerEl = document.getElementById('timer')
const marksListEl = document.getElementById('marks-list')
let intervalId = 0
let timer = 0
let marks = []

const formatTime = (time) => {
    const hours = Math.floor(time / 360000)
    const minutes = Math.floor((time % 360000) / 60000)
    const seconds = Math.floor((time % 6000) / 100)
    const hundredths = time % 100
    return `${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}:${hundredths.toString().padStart(2, 0)}`
}

const addMarkToList = (markIndex, markTime) => {
    marksListEl.innerHTML += `<p> Marca ${markIndex}: ${formatTime(markTime)}`
}

const markTime = () => {
    marks.push(timer)
    addMarkToList(marks.length, timer)
}

const toogleTime = () => {
    const button = document.getElementById('power')
    const action = button.getAttribute('action')

    clearInterval(intervalId)
    if(action == 'start' || action == 'continue'){
        intervalId = setInterval(() => {
            timer += 1
            setTimer(timer)
        }, 10)
        button.setAttribute('action', 'pause')
        button.innerHTML = '<i class="fa-solid fa-pause"></i>'
    }else if(action == 'pause'){
        button.setAttribute('action', 'continue')
        button.innerHTML = '<i class="fa-solid fa-play"></i>'
    }
}

const resetTimer = () => {
    clearInterval(intervalId)
    timer = 0
    marks = []
    setTimer(timer)
    marksListEl.innerHTML = ''
    const button = document.getElementById('power')
    button.getAttribute('action', 'start')
    button.innerHTML = '<i class="fa-solid fa-play"></i>'
}

const setTimer = (time) => {
    timerEl.innerHTML = formatTime(time)
}

document.getElementById('power').addEventListener('click', toogleTime)
document.getElementById('mark').addEventListener('click', markTime)
document.getElementById('reset').addEventListener('click', resetTimer)