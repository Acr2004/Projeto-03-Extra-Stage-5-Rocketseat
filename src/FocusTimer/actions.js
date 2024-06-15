import state from "./state.js";
import * as Timer from './timer.js';
import * as Elements from './elements.js';
import * as Sounds from './sounds.js';

export function toggleRunning() {
    if(!state.isRunning) {
        state.isPaused = false;
    }
    else {
        state.isPaused = true;
    }

    state.isRunning = document.documentElement.classList.toggle('running');

    console.log(state.isPaused);
    
    Timer.countDown();
    Sounds.buttonPressAudio.play();
}

export function addFiveMinutes() {
    if(Number(Elements.minutes.textContent) > 55 ||
    (Number(Elements.minutes.textContent) === 55 && Number(Elements.seconds.textContent) > 0)) {
        Elements.minutes.textContent = "60";
        Elements.seconds.textContent = "00"
    }
    else {
        Elements.minutes.textContent = Number(Elements.minutes.textContent) + 5;
    }

    if(!state.isRunning && !state.isPaused) {
        state.minutes = Elements.minutes.textContent;
    }
}

export function subtractFiveMinutes() {
    if(Number(Elements.minutes.textContent) < 5) {
        Elements.minutes.textContent = "00";
        Elements.seconds.textContent = "00"
    }
    else {
        Elements.minutes.textContent = Number(Elements.minutes.textContent) - 5;
    }

    if(!state.isRunning && !state.isPaused) {
        state.minutes = Elements.minutes.textContent;
    }
}

export function restartTimer() {
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    Timer.updateDisplay();
}

export function toggleMusic(index) {
    const buttons = Elements.soundboard.getElementsByTagName('button');

    if(state.isMute) {
        buttons[index].classList.toggle('active');
        Sounds.bgAudios[index].play();

        state.isMute = false;
        state.currentMusic = index;

        return;
    }

    if(!state.isMute) {
        if(Number(index) === Number(state.currentMusic)) {
            buttons[index].classList.toggle('active');

            Sounds.bgAudios[index].pause();
            state.isMute = true;
            state.currentMusic = null;
        }
        else {
            buttons[Number(state.currentMusic)].classList.toggle('active');
            Sounds.bgAudios[Number(state.currentMusic)].pause();

            buttons[index].classList.toggle('active');
            Sounds.bgAudios[index].play();

            state.currentMusic = index;
        }
    }
}