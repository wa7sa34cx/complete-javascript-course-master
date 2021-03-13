const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (arr1, arr2) {
  const newArr1 = arr1.slice(1).slice(0, -2);
  return newArr1.concat(arr2);
};

const dogs = checkDogs(dogsJulia, dogsKate);

dogs.forEach((year, i) => {
  const mssg = year >= 3 ? 'an adult' : 'still a puppy';
  console.log(`Dog number ${i + 1} is ${mssg}, ${year} years old`);
});
// console.log(dogs);
