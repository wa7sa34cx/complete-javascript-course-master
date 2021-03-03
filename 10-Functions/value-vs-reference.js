'use strict';

const flight = 'FG873';
const alex = {
  name: 'Alex',
  passport: 1239871,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 1239871) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, alex);

// What da fuck is happened with my data? =(
console.log(flight);
console.log(alex);

const newPassport = function (passenger) {
  passenger.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(alex);
checkIn(flight, alex);
