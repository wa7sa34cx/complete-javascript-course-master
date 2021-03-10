'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
};

console.log(poll);

// 1. Createamethod
poll.registerNewAnswer = function () {
  let message = this.question + '\n';
  this.options.forEach(element => {
    message += element + '\n';
  });

  // 1.1. Display a prompt window
  const answer = Number(prompt(message));
  // console.log(answer);

  // 1.2. Update the 'answers' array property
  // Check input value
  if (
    answer < 0 ||
    answer > this.options.length - 1 ||
    !Number.isInteger(answer)
  ) {
    alert(`Please choose between 0 and ${this.options.length - 1}`);
    return;
  }

  // Increase the value
  this.answers[answer]++;

  // Show results
  // console.log(this.answers);
  this.displayResults();
  this.displayResults('string');
};

// poll.registerNewAnswer();

// 2. Call this method whenever the user clicks the "Answer poll" button.
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// 3. Create a method 'displayResults'
poll.displayResults = function (type = 'array') {
  if (type === 'array') {
    console.log(this.answers);
    return;
  }

  if (type === 'string') {
    console.log(`Poll results are: ${this.answers.join(', ')}`);
    return;
  }

  console.log('Incorrect type');
  return;
};

// 5. Bonus
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
