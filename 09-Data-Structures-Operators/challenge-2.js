'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (let [key, name] of game.scored.entries()) {
  // console.log(typeof key);
  console.log(`Goal ${key + 1}: ${name}`);
}

// 2.
const odds = Object.values(game.odds);
console.log(odds);
let sum = 0;

odds.forEach(odd => {
  sum += odd;
});
console.log(sum);

let avrOdd = sum / odds.length;
console.log(`Average odd is ${avrOdd}`);

// 3.
for (const [key, value] of Object.entries(game.odds)) {
  let str = game[key] ? 'victory ' + game[key] : 'draw';
  console.log(`Odd of ${str}: ${value}`);
}

// 4. Bonus
let goals = {};
for (const player of game.scored) {
  goals[player] ? goals[player]++ : (goals[player] = 1);
}
for (const [player, score] of Object.entries(goals)) {
  console.log(player + ': ' + score);
}
