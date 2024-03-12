// script.js

// Dark Mode Toggle
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.querySelector('body');

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
