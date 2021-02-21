'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriverLicense = true;
}

if (hasDriversLicense) {
  console.log("I can drive :D");
}

// const interface = 'Audio';
// const private = 235;
*/

// arrow function
const calcAge = birthYear => 2037 - birthYear;

let age = calcAge(1991);
console.log(age);

// another arrow function 
const yearsUntilRetirement = (birthYear, firstName) => {
  let age = 2037 - birthYear;
  age = 60 - age;
  return `${firstName} retires in ${age} years`;
}
console.log(yearsUntilRetirement(1991, "Alex"));
console.log(yearsUntilRetirement(1993, "Bob"));