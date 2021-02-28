'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('btn--new');
const btnNew = document.querySelector('btn--new');
const btnRoll = document.querySelector('btn--roll');
const btnHold = document.querySelector('btn--hold');

// --------------------
// Starting conditions
// --------------------
document.score0El.textContent = 0);
score1El.textContent = 0;
diceEl.classList.add('hidden');

const currentPlayer = 0;

// ---------------------------
// Rolling dice functionality
//----------------------------
btnRoll.addEventListener('click', function () {
  // 1. Generate random dice roll

  // 2. Display dice

  // 3. Check for rolled 1
});

// -----------
// Hold score
//------------
btnHold.addEventListener('click', function() {

});

// -----------
// Reset game
//------------
btnNew.addEventListener('click', function() {

});

// -------------------------------
// Return integer between 1 and 6
// -------------------------------
function rollDice() {
  return Math.trunc(Math.random() * 6 + 1);
}