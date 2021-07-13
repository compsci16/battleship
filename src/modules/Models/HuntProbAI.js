import Player from './Player';
import Ship from './Ship';
import Application from '../Controllers/Application';

export default class SmartestAI extends Player {
    #orientations;
    #nextAttacks;
    #probData; // store probability data
    #lengths;
    constructor(name, ownBoard, oppBoard) {
        super(name, ownBoard, oppBoard);
        this.#orientations = { 0: 'horizontal', 1: 'vertical' };
        this.#nextAttacks = [];
        this.#lengths = Application.lengthsOfShips.slice();
        this.#probData = {
            maxX: 0,
            maxY: 0,
            matrix: this.#createMatrix(10),
        };
    }

    placeShips() {
        Application.lengthsOfShips.forEach((len) => this.#addShipToBoard(len));
    }

    #addShipToBoard(length) {
        let orientation = this.#orientations[this.#getRandomInt(0, 2)];
        const ship = new Ship(length, orientation);
        try {
            const [x, y] = this.#getRandomCoords();
            this.ownBoard.placeShip(ship, x, y);
            ++Application.shipsOfGrid2;
        } catch (e) {
            this.#addShipToBoard(length);
        }
    }

    play() {
        let x, y;
        if (this.#nextAttacks.length > 0) {
            let randomIndex = this.#getRandomInt(0, this.#nextAttacks.length);
            [x, y] = this.#nextAttacks.splice(randomIndex, 1)[0];
        } else {
            this.#updateProbabilityDistribution();
            console.table(this.#probData.matrix);
            x = this.#probData.maxX;
            y = this.#probData.maxY;
            this.#probData.matrix = this.#createMatrix(10); // reset matrix for next time;
        }
        const block = document.querySelector(
            `.grid[data-id = '1'] 
             .block[data-row = '${x + 1}'][data-column = '${y + 1}']`
        );
        block.click();
        if (this.oppBoard.wasSuccessfullAttack(x, y)) {
            // if attack was successful and a ship was found, remove that ship from the list of ships
            if (this.oppBoard.grid[x][y]['ship'].isSunk()) {
                const ship = this.oppBoard.grid[x][y]['ship'];
                const length = ship.length;
                const index = this.#lengths.indexOf(length);
                console.log('*****TO REMOVE SHIP OF LENGTH****', length);
                if (index !== -1) {
                    this.#lengths.splice(index, 1);
                    console.log('Now remaining lenghts are ', this.#lengths);
                }
            } else {
                if (this.#isValidIndexToAttack(x, y + 1)) {
                    this.#nextAttacks.push([x, y + 1]);
                }
                if (this.#isValidIndexToAttack(x, y - 1)) {
                    this.#nextAttacks.push([x, y - 1]);
                }
                if (this.#isValidIndexToAttack(x + 1, y)) {
                    this.#nextAttacks.push([x + 1, y]);
                }
                if (this.#isValidIndexToAttack(x - 1, y)) {
                    this.#nextAttacks.push([x - 1, y]);
                }
            }
        }
    }

    #getRandomCoords() {
        const x = this.#getRandomInt(0, 10);
        const y = this.#getRandomInt(0, 10);
        return [x, y];
    }

    #getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    #isValidIndexToAttack(x, y) {
        const size = this.ownBoard.size;
        return (
            x < size &&
            x >= 0 &&
            y < size &&
            y >= 0 &&
            !this.oppBoard.grid[x][y]['attacked']
        );
    }

    #updateProbabilityDistribution() {
        const probData = this.#probData;
        const matrix = probData.matrix;
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                // if the point was attacked and had a ship which has already sunk, there's no point of evaluting it;
                if (this.oppBoard.grid[i][j]['attacked']) {
                    matrix[i][j] = 0;
                    continue;
                }
                this.#lengths.forEach((length) => {
                    // Check if ship can be placed at the position horizontally
                    let flag = true;
                    for (let k = 0; k < length; k++) {
                        // if it encounters an overlfowing block or a block that was attacked but not a ship
                        if (
                            !this.#isValidIndex(i, j + k) ||
                            (this.oppBoard.grid[i][j + k]['attacked'] &&
                                !this.oppBoard.grid[i][j + k]['ship']) ||
                            (this.oppBoard.grid[i][j + k]['attacked'] &&
                                this.oppBoard.grid[i][j + k]['ship'].isSunk())
                        ) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) {
                        for (let k = 0; k < length; k++) {
                            if (this.oppBoard.grid[i][j + k]['attacked']) {
                                matrix[i][j + k] = 0;
                            } else {
                                matrix[i][j + k]++;
                            }
                        }
                    }

                    // Check if ship can be placed at the position vertically
                    flag = true;
                    for (let k = 0; k < length; k++) {
                        if (
                            !this.#isValidIndex(i + k, j) ||
                            (this.oppBoard.grid[i + k][j]['attacked'] &&
                                !this.oppBoard.grid[i + k][j]['ship']) ||
                            (this.oppBoard.grid[i + k][j]['attacked'] &&
                                this.oppBoard.grid[i + k][j]['ship'].isSunk())
                        ) {
                            flag = false;
                            break;
                        }
                    }

                    if (flag) {
                        for (let k = 0; k < length; k++) {
                            if (this.oppBoard.grid[i + k][j]['attacked']) {
                                matrix[i + k][j] = 0;
                            } else {
                                matrix[i + k][j]++;
                            }
                        }
                    }
                });

                if (
                    matrix[i][j] >
                    matrix[this.#probData.maxX][this.#probData.maxY]
                ) {
                    this.#probData.maxX = i;
                    this.#probData.maxY = j;
                }
            }
        }
    }

    #createMatrix(size) {
        const mat = new Array(size);
        for (let i = 0; i < size; i++) {
            mat[i] = new Array(size).fill(0);
        }
        return mat;
    }

    #isValidIndex(x, y) {
        const size = this.ownBoard.size;
        return x < size && x >= 0 && y < size && y >= 0;
    }
}
