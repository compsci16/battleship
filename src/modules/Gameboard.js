export default class Gameboard {
  #shipCount;
  constructor(size) {
    this.size = size;
    this.grid = this.#createMatrix(size);
    this.#shipCount = 0;
  }

  #createMatrix(size) {
    const mat = new Array(size);
    for (let i = 0; i < size; i++) {
      // ship - for ship object if it exists, attacked - isAttacked?,
      // index - relative placement of ship tile wrt whole ship, if it exists
      mat[i] = new Array(size)
        .fill()
        .map(() => ({ ship: null, attacked: false, index: -1 }));
    }
    return mat;
  }

  /**
   * @param {Ship} ship to be placed
   * @param {int} x starting x coordinate of ship placement
   * @param {int} y starting y coordinate of ship placement
   */
  placeShip(ship, x, y) {
    if (ship.length > this.size) throw "too long ship";
    if (this.size - y < ship.length) throw "wrong position for ship";
    for (let i = 0; i < ship.length; i++) {
      this.grid[x][y]["ship"] = ship;
      this.grid[x][y]["index"] = i;
      y++; //move to next column for next tile placement
    }
    this.#shipCount++;
  }

  receiveAttack(x, y) {
    if (!this.grid[x][y].attacked) this.grid[x][y].attacked = true;
    else throw new Error("Already attacked point");
    const ship = this.grid[x][y].ship;
    if (ship) {
      ship.hit(this.grid[x][y].index);
    }
  }

  haveAllSunk() {
    if (this.#shipCount === 0) throw new Error("No ships");
    const grid = this.grid;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        const ship = grid[i][j].ship;
        if (ship) {
          if (!ship.isSunk()) {
            return false;
          } else {
            j += ship.length; //move ahead by ship's length to not check the same ship repeatedly
          }
        }
      }
    }
    return true;
  }
}
