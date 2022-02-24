const Ship = (length, startCoords, direction) => {
  let sunk = false;
  const hitArray = [];

  const generateArray = (() => {
    let xCoord = Number.parseInt(startCoords.split(' ')[0]);
    let yCoord = Number.parseInt(startCoords.split(' ')[1]);

    for (let i=0; i<length; i++) {
      hitArray.push(xCoord + ' ' + yCoord);
      if (direction == 'h') {
        xCoord += 1;
      } else {
        yCoord += 1;
      }
    }
  })();

  const hit = coord => {
    if (!hitArray.includes(coord)) return false;

    if (isSunk()) { sunk = true };
    hitArray[hitArray.indexOf(coord)] = true;
    return true;
  };

  const isSunk = () => {
    if (sunk) return sunk;

    if (hitArray.every(x => x === true)) { sunk = true };

    return sunk;
  };

  return {
    hitArray,
    hit,
    isSunk,
    sunk
  };
};

export default Ship;
module.exports = Ship;