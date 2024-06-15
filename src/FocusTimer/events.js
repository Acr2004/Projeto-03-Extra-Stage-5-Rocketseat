import { controls, soundboard } from './elements.js';
import * as Actions from './actions.js';

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action;

        if(typeof Actions[action]() != "function") {
            return;
        }

        Actions[action]();
    });
}

export function registerSoundboard() {
    soundboard.addEventListener('click', (event) => {
        const soundNumber = event.target.dataset.sound;

        Actions.toggleMusic(soundNumber);
    });
}