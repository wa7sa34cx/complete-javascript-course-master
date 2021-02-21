const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let total = [];

// bills.forEach(function (bill) {
//   total.push(bill * (1 + calcTip(bill)));
// });

for (let i = 0; i < bills.length; i++) {
  total.push(bills[i] * (1 + calcTip(bills[i])));
}

console.log(total);
console.log(calcAverage(total));

function calcTip(bill) {
  return (bill >= 50 && bill <= 300) ? .15 : .2;
}

function calcAverage(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  // console.log(sum);
  return sum / arr.length;
}