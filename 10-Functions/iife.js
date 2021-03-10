'use strict';

// Immediately Invoked Functions Expressions

const runOnce = function () {
  console.log('This will never run again!');
};
runOnce();
// 🤷‍♂️ twice
runOnce();

// IIFE
(function () {
  console.log('Fuck rules!');
})();

(() => {
  console.log('Fuck 2 rules!');
})();

{
  const isPrivate = 23;
  var isNotPrivate = 25;
}

// console.log(isPrivate);
console.log(isNotPrivate);
