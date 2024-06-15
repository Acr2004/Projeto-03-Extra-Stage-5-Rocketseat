import * as Elements from './FocusTimer/elements.js';

let darkMode = true;

const toggleBtn = document.getElementById('mode');

toggleBtn.addEventListener('click', (event) => {
    const buttons = Elements.soundboard.getElementsByTagName('button');
    for(let button of buttons) {
        button.classList.add('no-transition');
    }

    document.documentElement.classList.toggle('light');

    event.currentTarget.querySelector('span').textContent = `${mode} Mode ativado!`;
    darkMode = !darkMode;

    for(let button of buttons) {
        button.offsetHeight;
        button.classList.remove('no-transition');
    }
})