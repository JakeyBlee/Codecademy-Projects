let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random()*10);

const getAbsoluteDistance = (no1, no2) => Math.abs(no1-no2);

const compareGuesses = (human, computer, target) => {
    if (human<0 || human>9) {
        alert('Number out of range!');
    }
    else if (getAbsoluteDistance(target, human)<=getAbsoluteDistance(target, computer)){
        return true;
    } else {
        return false;
    }
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore+= 1;
    } if (winner === 'computer') {
        computerScore+= 1;
    }
}

const advanceRound = () => currentRoundNumber+= 1;