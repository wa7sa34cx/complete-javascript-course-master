const heightMark = 1.69;
const heightJohn = 1.69;

const massMark = 78;
const massJohn = 80;

let bmiMark, bmiJohn;

bmiMark = massMark / heightMark ** 2;
bmiJohn = massJohn / heightJohn ** 2;

let compareText;

if (bmiMark > bmiJohn) {
  compareText = "higher than";
} else if (bmiMark < bmiJohn) {
  compareText = "lower than";
} else {
  compareText = "same as";
}

console.log(`Mark's BMI (${bmiMark}) is ${compareText} John's (${bmiJohn})!`)