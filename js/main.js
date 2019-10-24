/* typing effect in hero */

const spnText = document.querySelector('.hero_text');
const spnCursor = document.querySelector('.hero_cursor');
const txt = "BURGERS";

// parameteres
let indexText = 0;

// implementation
const addLetter = () => {
    spnText.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) clearInterval(indexTyping);
}

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}

const indexTyping = setInterval(addLetter, 150);
setInterval(cursorAnimation, 400);