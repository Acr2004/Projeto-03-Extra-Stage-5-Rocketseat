export const buttonPressAudio = new Audio('./assets/button-press.wav');
export const kitchenTimer = new Audio('./assets/kitchen-timer.mp3');

const bgAudio1 = new Audio('./assets/bg-audio1.wav');
const bgAudio2 = new Audio('./assets/bg-audio2.wav');
const bgAudio3 = new Audio('./assets/bg-audio3.wav');
const bgAudio4 = new Audio('./assets/bg-audio4.wav');
bgAudio1.loop = true;
bgAudio2.loop = true;
bgAudio3.loop = true;
bgAudio4.loop = true;

export const bgAudios = [
    bgAudio1,
    bgAudio2,
    bgAudio3,
    bgAudio4
]