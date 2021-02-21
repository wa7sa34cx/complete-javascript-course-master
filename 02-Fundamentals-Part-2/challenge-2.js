const bills = [125, 555, 44];
let total = [];

bills.forEach(function (bill) {
  total.push(bill * (1 + calcTip(bill)));
});


console.log(total);


function calcTip(bill) {
  return (bill >= 50 && bill <= 300) ? .15 : .2;
}