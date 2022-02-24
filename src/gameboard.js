import Ship from './ship';

const Gameboard = () => {
  const ships = [];
  const missedAttacks = [];

  const setShip = (length, coords, direction) => {
    let ship = Ship(length, coords, direction);
    ships.push(ship);
  };

  const receiveAttack = (coord) => {
    let didHit = false;
    ships.forEach(ship => {
      if (ship.hit(coord)) { didHit = true };
    });
    if (!didHit) {missedAttacks.push(coord)};

    return didHit;
  };

  const allSunk = () => {
    return ships.every(ship => ship.isSunk() === true);
  };

  return {
    ships,
    setShip,
    receiveAttack,
    allSunk
  };
};

export default Gameboard;
module.exports = Gameboard;