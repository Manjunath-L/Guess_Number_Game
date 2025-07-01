'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnshow = document.querySelectorAll('.show-modal');
const btnclose = document.querySelector('.close-modal');

for (let i = 0; i < btnshow.length; i++) {
    btnshow[i].addEventListener('click', function () {
        model.classList.remove('hidden');
        overlay.classList.remove('hidden')
    });
}

const clodeModel = function () {
    model.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnclose.addEventListener('click', clodeModel);

overlay.addEventListener('click', clodeModel);

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !model.classList.contains('hidden')) {
        clodeModel();
    }
})