import Player from '../src/player';

const Player1 = Player('Test Player');
const Player2 = Player('AI Player');

Player2.board.setShip(5, '1 1', 'v');

test('test if player can attack enemy board', () => {
  Player1.attack(Player2.board, '1 1');
  Player1.attack(Player2.board, '1 2');
  Player1.attack(Player2.board, '1 3');
  Player1.attack(Player2.board, '1 4');
  Player1.attack(Player2.board, '1 5');
  expect(Player2.board.allSunk()).toBe(true);
});