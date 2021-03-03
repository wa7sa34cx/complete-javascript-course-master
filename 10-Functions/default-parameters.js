'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 100 * numPassengers
) {
  // default values in ES5
  // numPassengers = numPassengers || 1;
  // price = price || 1900;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  // console.log(booking);

  bookings.push(booking);
};

createBooking('LH241');
createBooking('BK252', 2, 2300);
createBooking('LH241', 5);
createBooking('BX899', undefined, 1900);

console.log(bookings);
