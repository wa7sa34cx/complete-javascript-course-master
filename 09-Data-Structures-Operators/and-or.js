'use strict';

// OR
console.log('----OR----');

console.log(3 || 'Alex');
console.log('' || 'Alex');
console.log(true || 0);
console.log(undefined || null);

// Default value
const guests = 0;
const abc = { foo: 'bar' };

let numGuests = abc.noo || 10;
console.log(numGuests);

numGuests = guests || 10;
console.log(numGuests);

// AND
console.log('----AND----');
console.log(3 && 'Alex');
console.log(0 && 'Alex');

// run function if it exists
const myFunc = function (a, b) {
  console.log(a + b);
};

// First method
if (myFunc) myFunc(2, 3);
// Second method
myFunc1 && myFunc(4, 5);
