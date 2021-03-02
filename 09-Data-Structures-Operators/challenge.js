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

const players = {
  gk: '',
  fieldPlayers: [],
};

const players1 = Object.assign({}, players);
const players2 = Object.assign({}, players);

// players1.gk = [game.players[0]

[players1.gk, ...players1.fieldPlayers] = game.players[0];
[players2.gk, ...players2.fieldPlayers] = game.players[1];

console.log(players1);
console.log(players2);

// All players in one array
const allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

// Append 3 players to team 1
players1.fieldPlayers = [
  ...players1.fieldPlayers,
  'Thiago',
  'Coutinho',
  'Perisic',
];
console.log(players1);

// Odds
// 1. Approach
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);
// 2. Approach
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// Function
const printGoals = function (...players) {
  // players.forEach(player => {
  //   console.log(player);
  // });
  console.log(`${players.length} goals was scored`);
};

printGoals(...game.scored);

// Likely win
team1 < team2 && console.log('Team 1 is likely to win');
team1 > team2 && console.log('Team 2 is likely to win');
