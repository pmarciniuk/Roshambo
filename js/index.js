// variables

const playBtn = document.querySelector('.play');
const guideBtn = document.querySelector('.guide');
const exitBtn = document.querySelector('.exit');
const closeBtn = document.querySelector('.close');

const startSection = document.querySelector('.start-section');
const gameSection = document.querySelector('.game-section');
const guideSection = document.querySelector('.guide-section');
const alertSection = document.querySelector('.alert');
const playerFigure = document.querySelector('.player');
const playerIcons = playerFigure.querySelectorAll('.arena__icon');

const computerFigure = document.querySelector('.computer');
const computerIcons = computerFigure.querySelectorAll('.arena__icon');

const userNavList = document.querySelector('.user__nav');
const pointsPlayer = document.querySelector('.game__result-player');
const pointsComputer = document.querySelector('.game__result-enemy');

const startBtn = document.querySelector('.start');
const resultHeading = document.querySelector('.game__heading');
let userChoice ;
let computerChoice;
let playerPoints = 0;
let computerPoints = 0;

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



userNavList.addEventListener('click', (e) => {
    userChoice = parent(e.target);
    userFigure(userChoice);
   
})

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    computerChoice = computerRandom();
    
    
    if (!userChoice) {
        alertSection.classList.add('alert--active');
        return;
    } else {
        alertSection.classList.remove('alert--active');
    }
    
    let result = game(userChoice, computerChoice);
    
    console.log(result);
    
    if (result) {
        resultHeading.textContent = "You win!";
        playerPoints += 1;
    } else if( result === undefined) {
        resultHeading.textContent = "The result is a tie!";
    } else {
        resultHeading.textContent = "You lose!";
        computerPoints += 1;
    }
    
    pointsPlayer.textContent = `${playerPoints}`;
    pointsComputer.textContent = `${computerPoints}`;
    
   
    
})


/////////////////////////////////////////// FUNCTIONS

// randomize computer choice

function computerRandom() {
    let choice = Math.floor(Math.random() * 3) + 1;
    
    if (choice === 1) {
        computerIcons.forEach((icon) => {
            if (icon.classList.contains('rock')) {
                icon.classList.add('arena__icon--active');
            } else {
                icon.classList.remove('arena__icon--active');
            }
        });
        return "rock";
    } else if (choice === 2) {
        computerIcons.forEach((icon) => {
            if (icon.classList.contains('scissors')) {
                icon.classList.add('arena__icon--active');
            } else {
                icon.classList.remove('arena__icon--active');
            }
        });
        return "scissors";
    } else {
        computerIcons.forEach((icon) => {
            if (icon.classList.contains('paper')) {
                icon.classList.add('arena__icon--active');
            } else {
                icon.classList.remove('arena__icon--active');
            }
        });
        return "paper";
    }
}

// USER FIGURE 

function userFigure(el) {
    let choice = el;
    
    
    if (choice === "rock") {
        playerIcons.forEach((icon) => {
            if (icon.classList.contains('rock')) {
                icon.classList.add('arena__icon--active');
            } else {
                icon.classList.remove('arena__icon--active');
            }
        });
    } else if (choice === "scissors") {
        playerIcons.forEach((icon) => {
            if (icon.classList.contains('scissors')) {
                icon.classList.add('arena__icon--active');
            } else {
                icon.classList.remove('arena__icon--active');
            }
        });
    } else {
        playerIcons.forEach((icon) => {
            if (icon.classList.contains('paper')) {
                icon.classList.add('arena__icon--active');
            } else {
                icon.classList.remove('arena__icon--active');
            }
        });
    }
    
}


// Checking if clicked element is LI 

function parent(el) {
    let target = el;
    
    while (target && target.parentNode !== userNavList) {
        target = target.parentNode;
        if (!target) { return; }
    }
    
    if (target.tagName === 'LI') {
        return target.dataset.name;
    }
}

// choice function

function game(choice1, choice2) {
    
    console.log(`User choice: ${choice1}`);
    console.log(`Computer choice: ${choice2}`);
    let result = false;
    
    if (choice1 === choice2) {
        return;
    }

    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            result = true;
        } else {
            result = false;
        }
    };

    if (choice1 === "paper") {
        if (choice2 === 'rock') {
            result = true;
        } else {
            result = false;
        }
    };

    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            result = false;
        } else {
            result = true;
        }
    };
    
    return result;

}

