'use strict';

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Python'],
  [4, 'JavaScript'],
  [5, 'PHP'],
  ['correct', 4],
  [true, 'Correct 👍'],
  [false, 'Try again! 😡'],
]);

console.log(question);

// Quiz app
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(value);
  }
}

const answer = Number(prompt('You answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);

// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
