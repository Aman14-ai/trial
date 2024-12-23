let random  =Math.ceil(1 + Math.random()* (100 - 1))
console.log(random)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const previousGuess = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuesses = 1;

let playGame = true;
if(playGame){
    submit.addEventListener('click' , function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number.")
    }
    else if(guess < 1){
        alert("Please enter a number greater than 1.")
    }
    else if(guess > 100){
        alert("Please enter a number less than 100.")
    }else{
        prevGuess.push(guess)
        if(numGuesses === 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${random}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === random){
        displayMessage(`You win....`)
        endGame();
    }
    if(guess < random){
        displayMessage(`Number is too low.`)
    }
    if(guess > random){
        displayMessage(`Number is too high.`);
    }
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess){
    userInput.value = ''
    previousGuess.innerHTML += `${guess}  `
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled' , "")
    p.classList.add('button')
    p.innerHTML = '<h2 id= "newGame">Start New Game</h2>'
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener('click',function(e){
        random  =Math.ceil(1 + Math.random()* (100 - 1))
        lowOrHi.innerHTML = ''
        prevGuess = [];
        numGuesses = 0;
        previousGuess.innerHTML = ''
        remaining.innerHTML = `${10 - numGuesses}`
        userInput.removeAttribute('disabled' , '')
        startOver.removeChild(p)
        playGame = true;
    })
}
