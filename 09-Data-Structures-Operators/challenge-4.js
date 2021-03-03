'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// Create event listener
document.querySelector('button').addEventListener('click', textToCamelCase);

// --------------
// Main function
// Return log
function textToCamelCase() {
  // get value from textarea
  const text = document.querySelector('textarea').value;

  // split text into lines
  const lines = text.split('\n');

  // for new formated lines
  let newLines = [];

  // Format looping
  for (let line of lines) {
    line = line.trim().toLowerCase();
    // line = line.replace('__', '_');

    if (!line.includes('_')) {
      newLines.push(line);
      continue;
    }

    // to camel case
    const lineArr = line.split('_');
    line = lineArr[0];
    for (let i = 1; i < lineArr.length; i++) {
      line += lineArr[i][0].toUpperCase() + lineArr[i].slice(1);
    }

    newLines.push(line);
  }

  // Print looping
  for (let i = 0; i < newLines.length; i++) {
    console.log(newLines[i].padEnd(20), '✅'.repeat(i + 1));
  }
}
