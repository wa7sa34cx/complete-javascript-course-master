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

lufthansa.book(2456, 'Alex Black');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

// new Airline
const eurowings = {
  airline: 'Eurowings',
  iatacode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Doesn't work
// book(237, 'Mike Shakin');

// Call method
book.call(eurowings, 237, 'Mike Shakin');
console.log(eurowings);

book.call(lufthansa, 238, 'Mary Cooper');
console.log(lufthansa);

// new Airline
const swiss = {
  airline: 'Swiss Air Lines',
  iatacode: 'LX',
  bookings: [],
};

book.call(swiss, 777, 'Yuna Poppy');
console.log(swiss);

// Add new passenger
const flightData = [777, 'Jorge Poppy'];

// Don't use apply in modern JavaScript
// book.apply(swiss, flightData);

// Use spread operator!!!
book.call(swiss, ...flightData);
console.log(swiss);
