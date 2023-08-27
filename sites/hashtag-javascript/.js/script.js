//Referencias
const songName = document.getElementById('song-name')
const bandName = document.getElementById('band-name')
const cover = document.getElementById('cover')
const song = document.getElementById('audio')
const play = document.getElementById('play')
const previous = document.getElementById('previous')
const next = document.getElementById('next')
const currentProgress = document.getElementById('current-progress')
const progressContainer = document.getElementById('progress-container')
const likeButton = document.getElementById('like')
const shuffleButton = document.getElementById('shuffle')
const repeatButton = document.getElementById('repeat')
const songTime = document.getElementById('song-time')
const totalTime = document.getElementById('total-time')

//variaveis
const playList = JSON.parse(localStorage.getItem('playlist')) ?? 
    [{
        songName : 'Bichos Escrotos',
        artist: 'Titãs',
        file: 'titas.jpeg',
        music: 'bichos-escrotos.mp3',
        liked: false
    },
    {
        songName : 'Alagados',
        artist: 'Paralamos do sucesso',
        file: 'paralamas-do-sucesso.jpg',
        music: 'alagados.mp3',
        liked: false
    },
    {
        songName : 'Eduardo e Monica',
        artist: 'Legião Urbana',
        file: 'legiao-urbana.jpeg',
        music: 'eduardo-e-monica.mp3',
        liked: false
    }]

let sortedPlaylist = [...playList]
let isPlaying = false
let isShuffle = false
let isRepeat = false
let index = 0

//funções
function likeButtomRender(){
    if(sortedPlaylist[index].liked){
        likeButton.querySelector('.bi').classList.remove('bi-heart')
        likeButton.querySelector('.bi').classList.add('bi-heart-fill')
        likeButton.querySelector('.bi').classList.add('button-active')
    }else{
        likeButton.querySelector('.bi').classList.add('bi-heart')
        likeButton.querySelector('.bi').classList.remove('bi-heart-fill')
        likeButton.querySelector('.bi').classList.remove('button-active')
    }
}

function playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill')
    play.querySelector('.bi').classList.add('bi-pause-circle-fill')
    song.play()
    isPlaying = true
}

function pauseSong(){
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill')
    play.querySelector('.bi').classList.add('bi-play-circle-fill')
    song.pause()
    isPlaying = false
}

function playPause(){
    if(isPlaying == true){
        pauseSong()
    }else{
        playSong()
    }
}

function initializaSong(){
    cover.src = `./img/${sortedPlaylist[index].file}`
    song.src = `./audio/${sortedPlaylist[index].music}`
    songName.innerHTML = sortedPlaylist[index].songName
    bandName.innerHTML = sortedPlaylist[index].artist
    likeButtomRender()
}

function previousSong(){
    index = index === 0 ? sortedPlaylist.length - 1 : index -= 1
    initializaSong()
    playSong()
}

function nextSong(){
    index = index === sortedPlaylist.length - 1 ? 0 : index += 1
    initializaSong()
    playSong()
}

function updateProgress(){
    const barWidth = (song.currentTime/song.duration)*100;
    currentProgress.style.setProperty('--progress', `${barWidth}%`)
    updateCurrentTime()
}

function jungTo(event){
    const width = progressContainer.clientWidth
    const clickPosition = event.offsetX
    const jumpToTime = (clickPosition / width) * song.duration
    song.currentTime = jumpToTime
}

function shuffleArray(preShuffleArray){
    const size = preShuffleArray.length
    let currentIndex = size - 1
    while(currentIndex > 0){
        let randoIndex = Math.floor(Math.random()* size)
        let aux = preShuffleArray[currentIndex]
        preShuffleArray[currentIndex] = preShuffleArray[randoIndex]
        preShuffleArray[randoIndex] = aux
        currentIndex -= 1
    }
}

function shuffleButtonChecked(){
    if(isShuffle === false){
        isShuffle = true
        shuffleArray(sortedPlaylist)
        shuffleButton.classList.add('button-active')
    }else{
        isShuffle = false
        sortedPlaylist = [...playList]
        shuffleButton.classList.remove('button-active')
    }
    initializaSong()
}

function repeatButtonChecked(){
    if(isRepeat === false){
        isRepeat = true
        repeatButton.classList.add('button-active')
    }else{
        isRepeat = false
        repeatButton.classList.remove('button-active')
    }
}

function nextOrRepeat(){
    if(isRepeat === false){
        nextSong()
    }else{
        playSong()
    }
}

function toHHMMSS(originalNumber){
    let hours = Math.floor(originalNumber / 3600)
    let minutes = Math.floor((originalNumber - hours * 3600) / 60)
    let secunds = Math.floor(originalNumber - hours * 3600) - minutes*60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secunds.toString().padStart(2, '0')}`
}

function updateCurrentTime(){
    songTime.innerHTML = toHHMMSS(song.currentTime)
}

function updateTotalTime(){
    totalTime.innerHTML = toHHMMSS(song.duration)
}

function likeButtonChecked(){
    if(sortedPlaylist[index].liked === false){
        sortedPlaylist[index].liked = true
    }else{
        sortedPlaylist[index].liked = false
    }
    likeButtomRender()
    localStorage.setItem('playlist', JSON.stringify(playList))
}

//chamadas
initializaSong()

play.addEventListener('click', playPause)
previous.addEventListener('click', previousSong)
next.addEventListener('click', nextSong)
song.addEventListener('timeupdate', updateProgress)
song.addEventListener('ended', nextOrRepeat)
song.addEventListener('loadedmetadata', updateTotalTime)
progressContainer.addEventListener('click', jungTo)
shuffleButton.addEventListener('click', shuffleButtonChecked)
repeatButton.addEventListener('click', repeatButtonChecked)
likeButton.addEventListener('click', likeButtonChecked)