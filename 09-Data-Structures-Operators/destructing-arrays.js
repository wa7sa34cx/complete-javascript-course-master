"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const myArr = [1, 2, 3];
const a = myArr[0];
const b = myArr[1];
const c = myArr[2];

const [x, y, z] = myArr;
console.log(x, y, z);

let [first, , second] = restaurant.categories;
console.log(first, second);

// Switching
[first, second] = [second, first];
console.log(first, second);

console.log(restaurant.order(2, 0));

// receive 2 return values from function
const [starter, mainCorse] = restaurant.order(2, 0);
console.log(starter, mainCorse);

// Nested destructuring
const nested = [2, 3, [4, 5]];
const [i, , j] = nested;
console.log(i, j);

const [p, , [q, r]] = nested;
console.log(p, q, r);

// Default values
const [f = 1, d = 2, s = 3] = [12, 16];
console.log(f, d, s);
