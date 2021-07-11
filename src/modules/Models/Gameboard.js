export default class Gameboard {
    constructor(size) {
        this.size = size;
        this.grid = this.#createMatrix(size);
        this.shipCount = 0;
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
        if (this.isValidCoord(ship, x, y)) {
            if (ship.orientation === 'horizontal')
                this.#placeHorizontally(ship, x, y);
            else if (ship.orientation === 'vertical')
                this.#placeVertically(ship, x, y);
            else throw new Error('Invalid orientation');
            this.shipCount++;
        } else {
            throw new Error('Invalid Coordinates provided');
        }
    }

    #placeHorizontally(ship, x, y) {
        for (let i = 0; i < ship.length; i++) {
            this.grid[x][y]['ship'] = ship;
            this.grid[x][y]['index'] = i;
            y++; //move to next column for next tile placement
        }
    }

    #placeVertically(ship, x, y) {
        for (let i = 0; i < ship.length; i++) {
            this.grid[x][y]['ship'] = ship;
            this.grid[x][y]['index'] = i;
            x++; //move to next row for next tile placement
        }
    }

    isValidCoord(ship, x, y) {
        if (x < 0 || y < 0 || y > this.size || x > this.size) return false;
        if (ship.length > this.size) return false;
        if (
            (ship.orientation === 'horizontal' &&
                this.#areValidCoordForHorizontalShip(ship, x, y)) ||
            (ship.orientation === 'vertical' &&
                this.#areValidCoordForVerticalShip(ship, x, y))
        )
            return true;

        return false;
    }

    #areValidCoordForHorizontalShip(ship, x, y) {
        if (this.size - y < ship.length) return false;
        for (let i = 0; i < ship.length; i++) {
            if (this.grid[x][y + i]['ship']) return false;
        }
        return true;
    }

    #areValidCoordForVerticalShip(ship, x, y) {
        if (this.size - x < ship.length) return false;
        for (let i = 0; i < ship.length; i++) {
            if (this.grid[x + i][y]['ship']) return false;
        }
        return true;
    }

    receiveAttack(x, y) {
        if (!this.grid[x][y].attacked) this.grid[x][y].attacked = true;
        else throw new Error('Already attacked point');
        const ship = this.grid[x][y].ship;
        if (ship) {
            ship.hit(this.grid[x][y].index);
        }
    }

    wasSuccessfullAttack(x, y) {
        if (this.grid[x][y]['ship']) return true;
        return false;
    }

    haveAllSunk() {
        if (this.shipCount === 0) throw new Error('No ships');
        const grid = this.grid;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                const ship = grid[i][j]['ship'];
                if (ship) {
                    if (!ship.isSunk()) {
                        return false;
                    } else {
                        // minor optimization:
                        // move ahead by ship's length to not check the same horizontal ship repeatedly
                        if (ship.orientation === 'horizontal') j += ship.length;
                    }
                }
            }
        }
        return true;
    }
}
