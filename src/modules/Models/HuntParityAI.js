import Player from './Player';
import Ship from './Ship';
import Application from '../Controllers/Application';

export default class HuntParityAI extends Player {
    #orientations;
    #nextAttacks;
    constructor(name, ownBoard, oppBoard) {
        super(name, ownBoard, oppBoard);
        this.#orientations = { 0: 'horizontal', 1: 'vertical' };
        this.#nextAttacks = [];
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
        let x, y, index;
        if (this.#nextAttacks.length > 0) {
            let randomIndex = this.#getRandomInt(0, this.#nextAttacks.length);
            [x, y] = this.#nextAttacks.splice(randomIndex, 1)[0];
        } else {
            do {
                [x, y] = this.#getRandomCoords();
            } while (
                !this.#isValidIndexToAttack(x, y) ||
                !this.#obeyParity(x, y)
            );
        }
        const block = document.querySelector(
            `.grid[data-id = '1'] 
             .block[data-row = '${x + 1}'][data-column = '${y + 1}']`
        );

        if (this.oppBoard.wasSuccessfullAttack(x, y)) {
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
        block.click();
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

    #obeyParity(x, y) {
        x = x + 1;
        y = y + 1;
        const index = (x - 1) * 10 + y;
        return (
            (index % 2 === 0 && x % 2 !== 0) || (index % 2 !== 0 && x % 2 === 0)
        );
    }
}
