var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
console.log(firstScriptTag)
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let video
let ambientLight
let animationHasEmbed = false
const videoId = "qC0vDKVPCrw"

function createAmbienteLight(){
    if(!animationHasEmbed) return
    ambientLight = new YT.Player('ambient-light', {
        videoId,
        events:
        {
            onReady: ambientLightReady,
            onStateChange: ambienteStateChange,
        },
    })
}

window.onYouTubeIframeAPIReady = function(){
    video = new YT.Player('video', {
        videoId,
        events:
        {
            onStateChange: videoStateChange,
        },
    })
}

function videoStateChange(event){
    switch(event.data){
        case YT.PlayerState.PLAYING:
            if (!ambientLight) return
            ambientLight.seekTo(event.target.getCurrentTime())
            ambientLight.playVideo()
            break
        case YT.PlayerState.PAUSED:
            if (!ambientLight) return
            ambientLight.seekTo(event.target.getCurrentTime())
            ambientLight.pauseVideo()
            break
    }
}

function betterAmbienteLigth(event){
    event.target.mute()
    const qualityLevels = event.target.getAvailableQualityLevels()
    if(qualityLevels && qualityLevels.length && qualityLevels.length > 0 ){
        qualityLevels.reverse()
        const lowestLevel = qualityLevels(qualityLevels.findIndex(q => q != 'auto'))
        event.target.setPlaybackQuality(lowestLevel)
    }
}

function ambientLightReady(event){
    betterAmbienteLigth(event)
}    

function ambienteStateChange(event){
    switch(event.data){
        case YT.PlayerState.BUFFERING:
        case YT.PlayerState.PLAYING:
            betterAmbienteLigth(event)
            break
    }
}

const app = document.querySelector('#app')
app.addEventListener('animationend', e => {
    if(e.animationName != 'appear') return
    animationHasEmbed = true
    createAmbienteLight()
})
