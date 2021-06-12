const texts = ["I Am A Self-Learned Coder", "I Am A Web-Devloper", "I have Intrest In Technologies", "My Name Is Het"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing-Effect').textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0
    }
    setTimeout(type, 300)
})();


const hamBuger = document.querySelector('.hamBuger');
const leftNavHome = document.querySelector('.left-nav');
const rightNavHome = document.querySelector('.right-nav-home');
const centerNavHome = document.querySelector('.center-nav-home');
const navbar = document.querySelector('.navbar');

hamBuger.addEventListener('click', () => {
    leftNavHome.classList.toggle('v-visi');
    rightNavHome.classList.toggle('v-visi');
    centerNavHome.classList.toggle('v-visi');
    navbar.classList.toggle('h-height');
})
