import Gameboard from './gameboard';

const Player = (name) => {
  const getName = () => name;

  const board = Gameboard();

  const attack = (enemyBoard, coords) => {
    enemyBoard.receiveAttack(coords);
  }

  return {
    getName,
    attack,
    board
  }
}

export default Player;
module.exports = Player;