// variables

const playBtn = document.querySelector('.play');
const guideBtn = document.querySelector('.guide');
const exitBtn = document.querySelector('.exit');
const closeBtn = document.querySelector('.close');

const startSection = document.querySelector('.start-section');
const gameSection = document.querySelector('.game-section');
const guideSection = document.querySelector('.guide-section');

const rockBtn = document.querySelector('.user__nav-item--1');
const scissorsBtn = document.querySelector('.user__nav-item--2')
const paperBtn = document.querySelector('.user__nav-item--3')

// Listeners

playBtn.addEventListener('click', () => {
    startSection.classList.remove('start-section__active');
    gameSection.classList.add('game-section__active');
    guideSection.classList.remove('guide-section__active');
});


guideBtn.addEventListener('click', () => {
    startSection.classList.remove('start-section__active');
    gameSection.classList.remove('game-section__active');
    guideSection.classList.add('guide-section__active');
});

exitBtn.addEventListener('click', () => {
    startSection.classList.add('start-section__active');
    gameSection.classList.remove('game-section__active');
    guideSection.classList.remove('guide-section__active');
});

closeBtn.addEventListener('click', () => {
    startSection.classList.add('start-section__active');
    gameSection.classList.remove('game-section__active');
    guideSection.classList.remove('guide-section__active');
});



// IN PROGRESS...