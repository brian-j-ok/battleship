import Ship from '../src/ship'

test('test if ship hitArray is properly initialized', () => {
  const ship = Ship(5, '1 1', 'y');
  expect(ship.hitArray).toEqual(['1 1', '1 2', '1 3', '1 4', '1 5']);
});

test('test if ship Hit method is working', () => {
  const ship = Ship(5, '1 1', 'h');
  ship.hit('4 1');
  expect(ship.hitArray).toEqual(['1 1', '2 1', '3 1', true, '5 1']);
});

test('test if ship can detect when it has sunk', () => {
  const ship = Ship(5, '1 1', 'v');
  ship.hit('1 1');
  ship.hit('1 2');
  ship.hit('1 3');
  ship.hit('1 4');
  expect(ship.isSunk()).toBe(false);
  ship.hit('1 5');
  expect(ship.isSunk()).toBe(true);
});