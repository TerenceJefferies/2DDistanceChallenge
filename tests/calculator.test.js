const Calculator = require('./../Answer/Calculator.js');
const Location = require('./../GameEngine/Location.js');
const Player = require('./../GameEngine/Player.js');
const each = require('jest-each').default;

each([
   [
       new Player(new Location(0, 30)),
       new Player(new Location(0, 40)),
       10
   ],
    [
        new Player(new Location(0, 0)),
        new Player(new Location(0, -30)),
        30
    ],
    [
        new Player(new Location(0, -50)),
        new Player(new Location(0, -30)),
        20
    ],
    [
        new Player(new Location(100, 0)),
        new Player(new Location(0, -30)),
        104
    ],
    [
        new Player(new Location(53, 27)),
        new Player(new Location(98, -30)),
        73
    ],
    [
        new Player(new Location(-92, -55)),
        new Player(new Location(-13, -54)),
        79
    ],
    [
        new Player(new Location(65, 22)),
        new Player(new Location(9, -37)),
        81
    ],
    [
        new Player(new Location(300, 0)),
        new Player(new Location(0, 300)),
        424
    ],
    [
        new Player(new Location(1000, 0)),
        new Player(new Location(-1000, 0)),
        2000
    ],
    [
        new Player(new Location(551123, 998123)),
        new Player(new Location(991234, 119911)),
        982321
    ],
    [
        new Player(new Location(331.388, 997.123)),
        new Player(new Location(100.877, 776.12)),
        319
    ]
]).test('Reports the correct distance', (player1, player2, correctAnswer) => {
    const calculator = new Calculator();
    const answer = calculator.getDistanceBetweenPlayers(player1, player2);

    expect(answer).toBe(correctAnswer);
});
