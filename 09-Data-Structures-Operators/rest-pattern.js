'use strict';

// SPREAD because on RIGHT side of =
const arr = [1, 2, ...[3, 4, 5]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const food = ['Pizza', 'Rizotto', 'Spagetti', 'Macaroni'];
const drinks = ['Wine', 'Beer', 'Vodka', 'Martini'];
// REST
const [foo, , goo, ...doo] = [...food, ...drinks];
console.log(foo, goo, doo);

// Objects
const weeks = {
  monday: 17,
  tuesday: 23,
  wednesday: 76,
  thirsday: 34,
  fryday: 25,
  saturday: 76,
  sunday: 12,
};
const { saturday, ...otherDays } = weeks;
console.log(saturday, otherDays);

// Functions

const add = function (...items) {
  console.log(items);
  let sum = 0;
  items.forEach(item => {
    sum += item;
  });
  return sum;
};

let mySumm;

mySumm = add(2, 3);
mySumm = add(2, 3, 5, 7);
mySumm = add(2, 7, 15, 21, 222);
console.log(mySumm);

const x = [15, 12, 19];
mySumm = add(...x);
console.log(mySumm);

console.log(typeof [123, 15]);

const temp = [] ? 'true' : 'false';
console.log(temp);
