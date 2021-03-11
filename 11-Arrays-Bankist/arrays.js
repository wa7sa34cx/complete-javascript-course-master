'use strict';

// Slice
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log(...arr);

// Splice
console.log('----');

// console.log(arr.splice(2));
arr.splice(-1);
arr.splice(1, 2);
console.log(arr);

// Reverce
console.log('----');

const arr2 = ['j', 'i', 'k', 'l', 'm'];
console.log(arr2.reverse());
console.log(arr2);

// Concatenation
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2);

// Join
console.log(letters.join(' - '));
