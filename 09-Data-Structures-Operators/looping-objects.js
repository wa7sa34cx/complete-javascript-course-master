'use strict';

const house = {
  citchen: 'red',
  badroom: 234,
  livingroom: {
    poo: 15,
    goo: 14,
  },
};

// Property NAMES
for (let day of Object.keys(house)) {
  console.log(day);
}

// Property VALUES
const values = Object.values(house);
console.log(values);

for (let day of Object.values(house)) {
  console.log(day);
}

// Entire object
const entries = Object.entries(house);
console.log(entries);

for (let day of entries) {
  console.log(day);
}

const livr = Object.entries(house.livingroom);

for (let [key, value] of livr) {
  console.log(`${key} - ${value}`);
}
