// falsy: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// But
const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job, lazy dog!");
}