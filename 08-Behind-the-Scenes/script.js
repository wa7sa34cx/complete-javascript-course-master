'use strict';

// console.log(sumDeclaration(2, 5));
// console.log(sumExpression(2, 5));
// console.log(sumArrow(2, 5));

/*
function sumDeclaration(a, b) {
  return a + b;
}

const sumExpression = function (a, b) {
  return a + b;
};

const sumArrow = (a, b) => a + b;

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/*
console.log(this);

const calcAge = function (age) {
  console.log(2037 - age);
  console.log(this);
};

calcAge(1992);

const calcAgeArrow = age => {
  console.log(2037 - age);
  console.log(this);
};

calcAgeArrow(1998);
*/

//------------------------------
/*
const foo = {
  cooka: 45,
  pooka: 1990,
  calcLoo: function () {
    console.log(this);
    console.log(2037 - this.pooka);
  },
};

foo.calcLoo();

const matilda = {
  pooka: 2002,
};

matilda.calcLoo = foo.calcLoo;
matilda.calcLoo();

const goo = foo.calcLoo;
goo();
*/

var cooka = 'Matilda';

const foo = {
  cooka: 'Jake',
  pooka: 1990,
  calcLoo: function () {
    // console.log(this);
    console.log(2037 - this.pooka);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(this);
    //   // console.log(this.pooka >= 1981 && this.pooka <= 1996);
    //   console.log(self.pooka >= 1981 && self.pooka <= 1996);
    // };
    // isMillenial();

    // Solution 2
    const self = this;
    const isMillenial = () => {
      console.log(this);
      console.log(this.pooka >= 1981 && this.pooka <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey, ${this.cooka}`),
};

foo.greet();
foo.calcLoo();

// Arguments
const sumExpression = function (a, b) {
  console.log(arguments);
  return a + b;
};
sumExpression(2, 5);
sumExpression(2, 5, 7, 12, 16);

const arrFunc = (a, b) => {
  console.log(arguments);
  return a + b;
};

arrFunc(2, 6);
