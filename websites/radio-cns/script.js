const audio=document.getElementById("radioAudio"), play=document.getElementById("playButton"), label=document.getElementById("playLabel"), status=document.getElementById("status"), mute=document.getElementById("muteButton"), volume=document.getElementById("volume"), volumeValue=document.getElementById("volumeValue"), card=document.querySelector(".player-card");

audio.volume=.85;
function setPlaying(on){
  card.classList.toggle("playing",on);
  label.textContent=on?"PARAR TRANSMISSÃO":"OUVIR AO VIVO";
  status.textContent=on?"● Conectado à transmissão ao vivo":"Pronto para transmitir";
  play.querySelector(".play-icon").textContent=on?"■":"▶";
}
play.addEventListener("click",async()=>{
  if(audio.paused){
    try{await audio.play();setPlaying(true)}catch(e){status.textContent="Não foi possível iniciar. Toque novamente para tentar."}
  }else{audio.pause();setPlaying(false)}
});
audio.addEventListener("playing",()=>setPlaying(true));
audio.addEventListener("pause",()=>setPlaying(false));
audio.addEventListener("error",()=>{status.textContent="Transmissão indisponível no momento.";setPlaying(false)});
volume.addEventListener("input",e=>{audio.volume=e.target.value;volumeValue.textContent=Math.round(e.target.value*100)+"%";mute.textContent=audio.volume==0?"🔇":"🔊"});
mute.addEventListener("click",()=>{audio.muted=!audio.muted;mute.textContent=audio.muted?"🔇":"🔊"});
document.getElementById("shareButton").addEventListener("click",async()=>{
  const data={title:"CNS Rádio",text:"Ouça a CNS Rádio ao vivo!",url:location.href};
  if(navigator.share){try{await navigator.share(data)}catch(e){}}
  else{await navigator.clipboard?.writeText(location.href);alert("Link da rádio copiado!")}
});
if("mediaSession" in navigator){
 navigator.mediaSession.metadata=new MediaMetadata({title:"CNS Rádio",artist:"Ao vivo",album:"CNS Rádio"});
 navigator.mediaSession.setActionHandler("play",()=>audio.play());
 navigator.mediaSession.setActionHandler("pause",()=>audio.pause());
}
