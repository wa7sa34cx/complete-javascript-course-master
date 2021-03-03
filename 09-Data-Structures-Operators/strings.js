'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane.length);
console.log('hello'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

console.log(new String('jumanji'));

console.log('----');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

let passenger = 'alEx bLaCK';
passenger = passenger.toLowerCase();
// console.log(passenger);
let passengerArr = passenger.split(' ');
passenger = '';
passengerArr.forEach(el => {
  passenger += el[0].toUpperCase() + el.slice(1) + ' ';
});
passenger = passenger.trim();
console.log(passenger);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));
console.log(plane.endsWith('20'));

const [firstName, lastName] = 'Alex Black'.split(' ');
// console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('Tra-ta-ta'.padEnd(25, '-'));
console.log('XYZ'.padStart(10, '-').padEnd(20, '+'));

const maskCreditCard = function (number) {
  // const str = String(number);
  const str = number + '';
  const lastDigits = str.slice(-4);
  // console.log(lastDigits);
  console.log(lastDigits.padStart(str.length, '*'));
};

maskCreditCard(1238791827391212);
maskCreditCard(283491823477);

// Repeat
const bw = 'Bad weather! All depatures Delayed... ';
console.log(bw.repeat(5));
