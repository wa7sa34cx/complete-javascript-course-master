'use strict';

const greet = function (greating) {
  return function (name) {
    console.log(`${greating}, ${name}!`);
  };
};

const greetHey = greet('Hey');
greetHey('Alex');
greetHey('Jonas');

greet('Hello')('Mazafucker');

// Arrow function
const greetArrow = greating => name => console.log(`${greating}, ${name}!`);
greetArrow('Fuck you')('John');
