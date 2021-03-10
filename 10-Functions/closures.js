'use strict';

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(passengerCount);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// ----------------
// Closure example
// ----------------
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 17;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// re-assigning f function
h();
f();
console.dir(f);

// --------------------
// Yet another example
// --------------------

const boardPassengers = function (n, wait) {
  const perGroupe = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups each with ${perGroupe} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
