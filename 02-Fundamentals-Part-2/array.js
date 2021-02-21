const friends = ['Michael', 'John', 'Stephen'];
console.log(friends);

// const years = new Array(1988, 1985, 2011);
// console.log(years.length);

// Add elements
let newLenght = friends.push('Ray');
console.log(friends);
console.log(newLenght);

friends.unshift('Peter');
console.log(friends);

//Remove elements
const popped = friends.pop();
console.log(friends);
friends.shift();
console.log(friends);
console.log(popped);

console.log(friends.indexOf('Stephen'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Stephen'));