const bill = 275;
const tip = bill >= 50 && bill <= 300 ? .15 : .2;

console.log(`The bill was ${bill}, the tip was ${bill * tip}, and the total value ${bill * (1 + tip)}`);