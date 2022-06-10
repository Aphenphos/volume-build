let volume = 10;
var volumeDisplay = document.getElementById('volume');
function displayVolume() {
    volumeDisplay.textContent = volume;
}

const volumeUp = document.getElementById('vol-up');
const volumeDown = document.getElementById('vol-down');

volumeUp.addEventListener('click', () => {
    volume++;
    correctVolume();
    displayVolume();
});

volumeDown.addEventListener('click', () => {
    volume--;
    correctVolume();
    displayVolume();
});

function correctVolume() {
    if (volume < 0) volume = 0;
    if (volume > 20) volume = 20;
}

displayVolume();