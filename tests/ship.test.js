import Ship from '../src/ship'

test('test if ship hit function works', () => {
  const ship = Ship(5);
  ship.hit(4);
  expect(ship.hitArray).toEqual([false, false, false, true, false]);
});

test('test if ship hit function works', () => {
  const ship = Ship(5);
  ship.hit(1);
  ship.hit(2);
  ship.hit(3);
  ship.hit(4);
  expect(ship.isSunk()).toBe(false);
  ship.hit(5);
  expect(ship.isSunk()).toBe(true);
});