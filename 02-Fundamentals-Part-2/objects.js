const alexArray = [
  'Alex',
  'Black',
  '35',
  'billionaire',
  ['Patrick', 'Lilo', 'Mark'],
];

console.log(alexArray);

const alex = {
  firstName: 'Alex',
  lastName: 'Black',
  birthYear: 1985,
  profession: 'billionaire',
  friends: ['Patrick', 'Lilo', 'Mark'],
  hasDriversLicense: true,

  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getInfo: function () {
    // if (this.hasDriversLicense) {
    //   hasDriversLicenseText = 'a';
    // } else {
    //   hasDriversLicenseText = 'no';
    // }
    hasDriversLicenseText = this.hasDriversLicense ? 'a' : 'no';

    return `${this.firstName} is a ${this.calcAge()}-years old ${this.profession}, and he has ${hasDriversLicenseText} driver's license`;
  }
}

/*
console.log(alex);
console.log(alex.lastName); // dot notation
console.log(alex['lastName']); // brackets
console.log(alex['last' + 'Name']); // you can put here an operation

let interestedIn = prompt('What do you want to know about Alex? Choose between firstName, lastName, age, profession and friends.');

if (alex[interestedIn]) {
  console.log(alex[interestedIn]);
}

alex.location = 'Moscow';
console.log(alex);

console.log(`Alex has ${alex.friends.length} friends and his best friend is ${alex.friends[0]}`);

*/


// console.log(alex.calcAge());
// console.log(alex['calcAge']());

alex.calcAge();
console.log(alex.age);
console.log(alex.getInfo());
