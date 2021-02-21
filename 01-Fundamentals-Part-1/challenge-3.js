const scoreDolphins = [96, 108, 89];
const scoreKoalas = [88, 91, 120];

//console.log(scoreDolphins);


function avrg(arr) {
  let sum = arr[0] + arr[1] + arr[2];
  let avrg = sum / 3;

  return avrg;
}

let avrgDolphins = avrg(scoreDolphins);
let avrgKoalas = avrg(scoreKoalas);

// console.log(avrgDolphins, avrgKoalas);

let comparison = avrgDolphins - avrgKoalas;

if (comparison > 0) {
  console.log("Dolphin has " + comparison + " more avr score than Koalas");
} else if (comparison < 0) {
  console.log("Koalas has " + comparison + " more avr score than Dolphins");
} else {
  console.log("Draw!");
}

