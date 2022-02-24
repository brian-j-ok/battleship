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