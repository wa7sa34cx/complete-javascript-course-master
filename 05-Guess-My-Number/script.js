'use strict';

// --------------
// Configuration
// --------------

// Define max range
const maxNumber = 20;

// Define background colors
const backgroundColorDefault = '#222';
const backgroundColorWin = '#60b347';

// ------------------------
// Set starting parameters
// ------------------------

// Set secret number
let secretNumber = setSecretNumber(maxNumber);

// Starting highscore
let highscore = 0;

// Starting score
let score = maxNumber;

// ------------------------------
// Waiting click on button CHECK
// ------------------------------
document.querySelector('.check').addEventListener('click', function () {
  // get value from form
  const guess = Number(document.querySelector('.guess').value);

  if (score === 0) {
    setClassText('message', '🤷‍♂️ Game over!');
    return;
  }

  if (!guess) {
    setClassText('message', '⛔️ No number!');
    return;
  }

  if (secretNumber === guess) {
    setClassText('message', '🎉 Correct number!');
    // change background color
    setBodyBackground(backgroundColorWin);
    // show secret number
    setClassText('number', secretNumber);
    // set highscore
    if (highscore < score) {
      highscore = score;
      setClassText('highscore', highscore);
    }
    return;
  }

  let message = secretNumber > guess ? 'Too low!' : 'Too high!';
  setClassText('message', message);

  score--;
  setClassText('score', score);
});

// ------------------------------
// Waiting click on button AGAIN
// ------------------------------
document.querySelector('.again').addEventListener('click', function () {
  // change background color
  setBodyBackground(backgroundColorDefault);

  // change score
  score = 20;
  setClassText('score', score);

  // change secret number and hide
  secretNumber = setSecretNumber(maxNumber);
  setClassText('number', '?');

  // change message
  setClassText('message', 'Start guessing...');

  // change guess
  setClassText('guess', '');
});

// ----------------------------------
// Generate number between 1 and max
// ----------------------------------
function setSecretNumber(maxNumber) {
  return Math.trunc(Math.random() * maxNumber + 1);
}

// -------------------
// Set text for CSS class
// -------------------
function setClassText(cssClass, text) {
  document.querySelector(`.${cssClass}`).textContent = text;
}

function setBodyBackground(color) {
  document.querySelector('body').style.backgroundColor = color;
}
