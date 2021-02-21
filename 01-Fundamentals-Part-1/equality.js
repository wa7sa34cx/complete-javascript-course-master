const age = 18;

if (age === 18) {
  console.log("Yep! (strict)");
}

if (age == 18) {
  console.log("Yep! (loose)");
}

let favorite = prompt("What's your favorite number?");
console.log(favorite);
console.log(typeof favorite);

favorite = Number(favorite);

if (favorite === 42) {
  console.log("Cool! 42 is amazing number! =)");
}
