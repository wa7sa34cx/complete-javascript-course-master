'use strict';

const items = [1, 2, 5, 12, 15, 222, 99];

for (const item of items) {
  console.log(item);
}

for (const item of items.entries()) {
  console.log(item);
}

// console.log(items.entries());

for (const [i, el] of items.entries()) {
  console.log(i + ': ' + el);
}
