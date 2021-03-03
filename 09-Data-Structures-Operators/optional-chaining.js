'use strict';

const foo = {
  bar: 13,
  time: {
    lee: 0,
    pee: 23,
  },
  sum(a) {
    return this.bar + a;
  },
};

// IF approach
if (foo.tume) console.log(foo.tume.lee);
if (foo.time) console.log(foo.time.lee);

// OPTIONAL CHAINING approach
console.log(foo.tume?.gee);

console.log('-----');

const days = ['lee', 'pee', 'dee'];
for (const day of days) {
  const opened = foo.time[day] ?? 'closed';
  console.log(opened);
}

// call to method
console.log(foo.cum?.(5) ?? 'Fuck!');
console.log(foo.sum?.(5) ?? 'Fuck!');

console.log('----');

// const hooch = [{ kee: 'pass', nee: 'dass' }];
const hooch = [];
console.log(hooch[0]?.kee ?? 'empty');
