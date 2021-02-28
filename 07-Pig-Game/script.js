'use strict';

// --------
// Players
// --------
let players = [];

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

// console.log(players);
// players[0].score.element.textContent = 47;
// console.log(players[0].score.element);

// -----
// Dice
// -----
let dice = {
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
// Starting conditions
// --------------------
// Reset display values
for (let i = 0; i < 2; i++) {
  setElementValue(players[i].score.element, 0);
  setElementValue(players[i].currentScore.element, 0);
}
// Hide dice
dice.element.classList.add('hidden');
// First turn for Player 1
let turn = 0;
let player = players[turn];

// ----------
// Roll dice
//-----------
btnRoll.addEventListener('click', function () {
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
  // 0. Do we have a winner?
  if (player.score.value >= 100) {
    return;
  }

  // 1. Add current score to total score and diplay
  player.score.value += player.currentScore.value;
  setElementValue(player.score.element, player.score.value);

  // 2. Check for winning
  if (player.score.value >= 100) {
    // console.log(player.name + ' win!');

    // change background copor
    player.element.classList.remove('player--active');
    player.element.classList.add('player--winner');

    // Hide dice
    dice.element.classList.add('hidden');

    return;
  }

  // 3. Switch player
  switchPlayer();
});

// -----------
// Reset game
//------------
btnNew.addEventListener('click', function () {
  // reset scores
  for (let i = 0; i < 2; i++) {
    player = players[i];
    player.score.value = 0;
    player.currentScore.value = 0;
    setElementValue(player.score.element, 0);
    setElementValue(player.currentScore.element, 0);
  }
  // hide dice
  dice.element.classList.add('hidden');
  // get first turn to Player 1
  turn = 0;
  player = players[turn];
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
  console.log(turn);

  // reset current score
  player.currentScore.value = 0;
  setElementValue(player.currentScore.element, 0);
  player.element.classList.remove('player--active');

  // change player
  player = players[turn];
  player.element.classList.add('player--active');
}
