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
    return didHit;
  };

  return {
    ships,
    setShip,
    receiveAttack
  };
};

export default Gameboard;
module.exports = Gameboard;