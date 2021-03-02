'use strict';

const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];

console.log(newArr);
console.log(...newArr);

const newMenu = [...newArr, 'Gnocci'];
console.log(newMenu);

const newMenuCopy = [...newMenu];

// Join 2 arrays
const joinMenu = [...newMenu, ...newMenuCopy];

// Iterables is: strings, arrays, maps, sers, but NOT objects
const str = 'abcd';
const letters = [...str, 'e'];
console.log(letters);

// Pizza
const ingredients = [
  prompt("Let's make a pasta! Ingredients 1?"),
  prompt('Ingredients 2?'),
  prompt('Ingredients 3?'),
  prompt('Ingredients 4?'),
];

pasta(...ingredients);

function pasta(ing1, ing2, ing3) {
  console.log(`This is a pasta witn ${ing1}, ${ing2} and ${ing3}`);
}

// But what about objects?
const obj = {
  na: 1,
  pa: 'ola',
  ra: [2, 5],
};

const objNew = { ...obj, ga: 'la-la-la' };
console.log(objNew);

const objCopy = { ...objNew };
