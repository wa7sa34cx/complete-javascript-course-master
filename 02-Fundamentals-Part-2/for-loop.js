// -----------
// FOR LOOP
// -----------

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep} 🏋🏻`);
}

const alex = [
  'Alex',
  'Shmalex',
  'Boolex',
  true,
  [1, 2, 3]
];

let types = [];

for (let i = 0; i < alex.length; i++) {
  console.log(alex[i]);
  // types[i] = typeof alex[i];

  // if (typeof alex[i] !== 'string') continue;
  if (typeof alex[i] === 'boolean') break;
  types.push(typeof alex[i]);
}

console.log(types);

for (let i = alex.length - 1; i >= 0; i--) {
  console.log(alex[i]);
}


// -----------
// WHILE LOOP
// -----------

let rep = 1;

while (rep <= 10) {
  console.log(`repetition number ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}

