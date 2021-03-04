'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(fn(str));
  console.log(`Transformed by ${fn.name}`);
};

transformer('JavaScript is awesome!', upperFirstWord);
transformer('JavaScript is awesome!', oneWord);

const high5 = function () {
  console.log('🖖');
};

document.body.addEventListener('click', high5);

['1', '2', '3'].forEach(high5);
