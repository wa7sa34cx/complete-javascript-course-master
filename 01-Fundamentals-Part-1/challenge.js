const heightMark = 1.69;
const heightJohn = 1.95;

const massMark = 78;
const massJohn = 92;

let bmiMark, bmiJohn;

bmiMark = massMark / heightMark ** 2;
bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiMark, bmiJohn);

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);
