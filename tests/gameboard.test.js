import Gameboard from '../src/gameboard';

test('placeholder test', () => {
  expect(5).toBe(5);
});

test('test if receiveHit properly receives attacks', () => {
  const board = Gameboard();
  board.setShip(5, '1 1', 'v');
  expect(board.receiveAttack('2 2')).toBe(false);
  expect(board.receiveAttack('1 1')).toBe(true);
});

test('test if gameboard can check if every ship has sunk', () => {
  const board = Gameboard();
  board.setShip(5, '1 1', 'v');
  board.receiveAttack('1 1');
  board.receiveAttack('1 2');
  board.receiveAttack('1 3');
  board.receiveAttack('1 4');
  board.receiveAttack('1 5');
  expect(board.allSunk()).toBe(true);
});