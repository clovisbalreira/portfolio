const pulse = document.getElementById('pulse');
const click = document.getElementById('click');
const snare = document.getElementById('snare');
const partitura = document.getElementById('partitura');
const beatDisplay = document.getElementById('beat-count');
const barDisplay = document.getElementById('bar-count');
const bpmDisplay = document.getElementById('bpm-display');
const bpmSlider = document.getElementById('bpmRange');

let interval = null;
let currentBeat = 0;
let totalBeats = 4;
let bpm = parseInt(bpmSlider.value);
let barCount = 0;

let tapTimes = [];

function updatePartitura(current) {
    let output = "";
    for (let i = 1; i <= totalBeats; i++) {
    output += i === current ? "●" : "○";
    }
    partitura.textContent = output;
}

function updateBPMDisplay() {
    const figura = parseInt(document.getElementById('figure').value);
    const notaSimbolos = {
    1: '𝅝',
    2: '𝅗𝅥',
    4: '𝅘𝅥',
    8: '𝅘𝅥𝅮',
    16: '𝅘𝅥𝅯'
    };
    bpmDisplay.textContent = `BPM: ${bpm} (${notaSimbolos[figura]})`;
}

function updateBPM(value) {
    bpm = parseInt(value);
    updateBPMDisplay();
    if (interval) {
    clearInterval(interval);
    interval = setInterval(playBeat, 60000 / bpm);
    }
}

function playBeat() {
    currentBeat = (currentBeat % totalBeats) + 1;
    if (currentBeat === 1) barCount++;

    pulse.classList.add('active');
    pulse.classList.toggle('first', currentBeat === 1);
    setTimeout(() => pulse.classList.remove('active'), 100);

    if (currentBeat === 1) {
    click.currentTime = 0;
    click.play();
    } else {
    snare.currentTime = 0;
    snare.play();
    }

    updatePartitura(currentBeat);
    beatDisplay.textContent = `Batida: ${currentBeat} / ${totalBeats}`;
    barDisplay.textContent = `Compasso: ${barCount}`;
    updateBPMDisplay();
}

function startMetronome() {
    const figura = parseInt(document.getElementById('figure').value);
    const compass = parseInt(document.getElementById('compass').value);
    totalBeats = figura * compass;
    currentBeat = 0;
    barCount = 0;
    clearInterval(interval);
    interval = setInterval(playBeat, 60000 / bpm);
    updateBPMDisplay();
}

function stopMetronome() {
    clearInterval(interval);
    beatDisplay.textContent = '';
    barDisplay.textContent = '';
    partitura.textContent = '';
    bpmDisplay.textContent = '';
}

function tapTempo() {
    const now = Date.now();
    tapTimes.push(now);
    if (tapTimes.length > 4) tapTimes.shift();
    if (tapTimes.length >= 2) {
    const intervals = tapTimes.slice(1).map((t, i) => t - tapTimes[i]);
    const avg = intervals.reduce((a, b) => a + b) / intervals.length;
    bpm = Math.round(60000 / avg);
    bpmSlider.value = bpm;
    clearInterval(interval);
    interval = setInterval(playBeat, 60000 / bpm);
    updateBPMDisplay();
    }
}