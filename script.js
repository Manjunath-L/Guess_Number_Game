'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}
const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}
const numStyleValuec = function (value, style) {
    document.querySelector('.number').textContent = value;
    document.querySelector('.number').style.width = style;
}

let check = document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage(' ⛔ NO number!');

        //When player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number 🎊');
        document.querySelector('body').style.backgroundColor = '#60b347'
        numStyleValuec(secretNumber, '30rem')

        if (score > highScore) {
            highScore = score;
            displayScore(highScore);
        }
        // When guess is to high
    } else if (guess !== secretNumber) {
        if (guess > 1) {
            displayMessage(guess > secretNumber ? ' 📈Too high!' : '📉 Too low!');
            score--;
            displayScore(score);
        }
        else {
            displayMessage('You lost the game!');
            displayScore(0);
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayMessage('Start guessing...');
    numStyleValuec('?', '15rem');
    displayScore(score);
    document.querySelector('.guess').value = ' ';
    document.querySelector('body').style.backgroundColor = '#222';
})


