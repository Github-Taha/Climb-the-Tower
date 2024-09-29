const pingSound = new Audio("sounds/beep.wav");
const bounceAudio = new Audio("sounds/bouncesound.mp3");
const winAudio = new Audio("sounds/winSound.mp3");
const deathAudio = new Audio("sounds/sizzle.wav");

pingSound.preload = 'auto';

// Cloud 9 by Itro & Tobu
const backgroundmusic = new Audio('sounds/backgroundmusic.mp3');
backgroundmusic.volume = 0.05;
let musicPlay = true;
window.setInterval(
    () => {
        musicPlay && backgroundmusic.play();
    },
    10
);


// Create an AudioContext
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Function to play a beep sound
function jumpBeep() {
    const oscillator = audioContext.createOscillator();
    oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(1, audioContext.currentTime);
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.1);
}

function checkPointBeep() {
    pingSound.play();
}

function pointBeep() {
    const oscillator = audioContext.createOscillator();
    oscillator.frequency.setValueAtTime(500, audioContext.currentTime);
    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(1, audioContext.currentTime);
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.1);
}

function deathSound() {
    deathAudio.play();
}

function bounceSound() {
    bounceAudio.play();
}

function winSound() {
    winAudio.play();
}
