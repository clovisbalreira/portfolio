const radioPlayer = document.getElementById('radioPlayer');
        const playButton = document.querySelectorAll('.audio-play-pause');
        const play = document.getElementById('audio-play')
        const pause = document.getElementById('audio-pause')
        const volumeControl = document.getElementById('vol-control');
        const frase = document.getElementById('frase').innerHTML = "Rádio CNS - A rádio que liga você!" /* "Hits | Top 40 | Jovem | Pop-Rock | Música Eletrônica | Notícias | Canoas-RS | radiocns.com" */

        let isplayPause = true
        
        playButton.forEach((plays) => {
            plays.addEventListener('click', () => {
                if(isplayPause){
                    play.style.display = 'block'
                    pause.style.display = 'none'
                    isplayPause = false
                    radioPlayer.play();
                }else{
                    play.style.display = 'none'
                    pause.style.display = 'flex'
                    isplayPause = true
                    radioPlayer.pause();
                }
            })
        })
        radioPlayer.play();
        
        volumeControl.addEventListener('input', function() {
            console.log(volumeControl.value)
            radioPlayer.volume = parseFloat(volumeControl.value) / 100;
        });