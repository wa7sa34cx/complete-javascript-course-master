// https://pig-game-v2.netlify.app/

'use strict';

// ----------
// Variables
// ----------
const maxScore = 20;
let player, playing, turn, dice;
let players = [];

// --------
// Players
// --------
for (let i = 0; i < 2; i++) {
  players.push({
    element: document.querySelector('.player--' + i),
    name: document.querySelector('#name--' + i).textContent,
    score: {
      element: document.querySelector('#score--' + i),
      value: 0,
    },
    currentScore: {
      element: document.querySelector('#current--' + i),
      value: 0,
    },
  });
}

// -----
// Dice
// -----
dice = {
  element: document.querySelector('.dice'),
  value: 0,
};

//---------
// Buttons
// --------
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// --------------------
// Initialize Game
// --------------------
initGame();

// ----------
// Roll dice
//-----------
btnRoll.addEventListener('click', function () {
  // 0. Do we playing?
  if (!playing) return;

  // 1. Generate random dice roll
  dice.value = rollDice();
  // console.log(dice);
  dice.element.classList.remove('hidden');

  // 2. Display dice
  dice.element.src = `dice-${dice.value}.png`;

  // 3. Check for rolled 1: if true, switch to next player
  if (dice.value === 1) {
    switchPlayer();
    return;
  }

  // 4. Add dice roll to current score
  player.currentScore.value += dice.value;

  // 5. Display current score
  setElementValue(player.currentScore.element, player.currentScore.value);
});

// -----------
// Hold score
//------------
btnHold.addEventListener('click', function () {
  // 0. Do we playing?
  if (!playing) return;

  // 1. Add current score to total score and diplay
  player.score.value += player.currentScore.value;
  setElementValue(player.score.element, player.score.value);

  // 2. Check for winning
  if (player.score.value >= maxScore) {
    // console.log(player.name + ' win!');

    // change background copor
    player.element.classList.remove('player--active');
    player.element.classList.add('player--winner');

    // Hide dice
    dice.element.classList.add('hidden');

    // Stop the game
    playing = false;

    return;
  }

  // 3. Switch player
  switchPlayer();
});

// -----------
// Reset game
//------------
btnNew.addEventListener('click', function () {
  initGame();
});

// -------------------------------
// Return integer between 1 and 6
// -------------------------------
function rollDice() {
  return Math.trunc(Math.random() * 6 + 1);
}

// ---------------------
// Set value to element
// ---------------------
function setElementValue(element, value) {
  element.textContent = value;
}

function switchPlayer() {
  turn = turn ? 0 : 1;
  // console.log(turn);

  // reset current score
  player.currentScore.value = 0;
  setElementValue(player.currentScore.element, 0);
  player.element.classList.remove('player--active');

  // change player
  player = players[turn];
  player.element.classList.add('player--active');
}

function initGame() {
  // reset scores
  for (let i = 0; i < 2; i++) {
    player = players[i];
    player.score.value = 0;
    player.currentScore.value = 0;
    setElementValue(player.score.element, 0);
    setElementValue(player.currentScore.element, 0);
    player.element.classList.remove('player--winner');
    player.element.classList.remove('player--active');
  }

  // hide dice
  dice.element.classList.add('hidden');

  // get first turn to Player 1
  turn = 0;
  player = players[turn];
  player.element.classList.add('player--active');

  // Start the game
  playing = true;
}
