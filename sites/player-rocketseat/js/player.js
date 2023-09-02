import audios from "./data.js"
import {path, secondsToMunutes} from "./utils.js"
import elements from "./playerElement.js"
export default {
    audioData : audios,
    currentAudio : {},
    currentPlaying: 0,
    isPlaying: false,
    start(){
        elements.get.call(this)
        this.update()
    },
    play(){
        this.isPlaying = true
        this.audio.play()
        this.playPause.innerHTML = 'pause'
    },
    pause(){
        this.isPlaying = false
        this.audio.pause()
        this.playPause.innerHTML = 'play_arrow'
    },
    togglePlayPause(){
        if(this.isPlaying){
            this.pause()
        }else{
            this.play()
        }
    },
    toggleMute(){
        this.audio.muted = !this.audio.muted
        this.mute.innerText = this.audio.muted ? "volume_down" : "volume_up"
    },
    next(){
        this.currentPlaying++
        if(this.currentPlaying == this.audioData.length) this.restart()
        this.update()
        this.play()
    },
    setVolume(value){
        this.audio.volume = value / 100 
    },
    setSeek(value){
        this.audio.currentTime = value 
    },
    timeUpdate(){
        this.currentDuration.innerText = secondsToMunutes(this.audio.currentTime)
        this.seekBar.value = this.audio.currentTime
    },
    update(){
        this.currentAudio = this.audioData[this.currentPlaying]
        this.cover.style.background = `url('./img/${this.currentAudio.file}')no-repeat center / contain` 
        this.title.innerHTML = this.currentAudio.title
        this.artist.innerText = this.currentAudio.artist
        elements.createAudioElement.call(this, path(this.currentAudio.cover))
        this.audio.onloadeddata = () => {
          elements.actions.call(this)
        }
    },
    restart(){
        this.currentPlaying = 0
        this.update()
    }
}


