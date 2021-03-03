'use strict';

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Rizotto',
  'Pizza',
  'Pasta',
  'Spagetti',
]);

console.log(orderSet);

// console.log(new Set('Alex'));

console.log(orderSet.size);

console.log(orderSet.has('Pasta'));
console.log(orderSet.has('Pizza'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);

orderSet.delete('Pizza');
console.log(orderSet);

//There in no indexes!
console.log(orderSet[0]);

// orderSet.clear();
// console.log(orderSet);

// Looping
for (const order of orderSet) {
  console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Director'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
