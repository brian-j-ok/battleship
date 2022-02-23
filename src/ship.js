const Ship = (length) => {
  const sunk = false;
  const hitArray = new Array(length).fill(false);

  const hit = x => {
    hitArray[x - 1] = true;
  };

  const isSunk = () => {
    return hitArray.every(x => x === true);
  };

  return {
    hitArray,
    hit,
    isSunk
  };
};

export default Ship;
module.exports = Ship;