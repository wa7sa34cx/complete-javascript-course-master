'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iatacode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
  },
};

// new Airline
const eurowings = {
  airline: 'Eurowings',
  iatacode: 'EW',
  bookings: [],
};

// new Airline
const swiss = {
  airline: 'Swiss Air Lines',
  iatacode: 'LX',
  bookings: [],
};

const book = lufthansa.book;

const bookWE = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);

bookWE(23, 'Steven Williamd');
bookSW(77, 'Aaron Paul');

// Define first argument
const bookWE23 = book.bind(eurowings, 23);
bookWE23('Alina Fafarin');

// With event listeners
lufthansa.planes = 3000;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
// const addTax = (rate, value) => {
//   return value * (1 + rate);
// };
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

//CHALLENGE
const addTaxRate = function (rate) {
  return function (value) {
    return value * (1 + rate);
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(200));
