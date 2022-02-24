import Ship from './ship';

const Gameboard = () => {
  const ships = new Array(10);

  const setShip = (length, coords, direction) => {
    let ship = Ship(length, coords, direction);
    ships.push(ship);
  };

  return {
    ships,
    setShip,
  };
};

export default Gameboard;
module.exports = Gameboard;