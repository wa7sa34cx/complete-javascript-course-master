// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 3;
// const ab = 4;

// const caclAge = birthYear => 2037 - birthYear;

// console.log(caclAge(1986));

// // TODO FIXME

const temperature1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperature2 = [15, 'error', -8, -1, 'error', 9, 13, 'error', 8, -7, 0, 2];

// 1. Understanding the problem
// What is temp amplitude? Answer: difference between highest and lowest temp
// How to compute max and min temperature?
// What's a sensor error? And what to do?

// 2. Breakin up into sub-problems
// How to ignore errors?
// Find max value in temp array
// Find min value in temp array
// Subtract min from max (amplitude) value and return it

// const max = findMax([7, 3, -18, 9, 11]);
// console.log(max);
//let temperature = [];
let temperature = temperature1.concat(temperature2);
//console.log(temperature);
temperature = clearData(temperature);
// console.log(data);
let max = findMax(temperature);
// console.log(max);
let min = findMin(temperature);
// console.log(min);
let amplitude = calcAmplitude(min, max);
console.log(amplitude);

function clearData(arr) {
  let data = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') data.push(arr[i]);
  }
  return data;
}

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }
  return max;
}

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
  }
  return min;
}

function calcAmplitude(min, max) {
  return max - min;
}
