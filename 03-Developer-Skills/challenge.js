const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

printForecast(temp1);
printForecast(temp2);

function printForecast(arr) {
  let forecast = '';
  for (let i = 0; i < arr.length; i++) {
    forecast += `... ${arr[i]}oC in ${i + 1} days`;
  }

  console.log(forecast);
}
