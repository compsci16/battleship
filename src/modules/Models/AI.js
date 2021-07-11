import Player from './Player';
import Ship from './Ship';
import Application from '../Controllers/Application';

export default class AI extends Player {
    #nextY;
    #nextX;
    constructor(name, ownBoard, oppBoard) {
        super(name, ownBoard, oppBoard);
        this.attackedBlocks = [];
        this.#nextY = null;
        this.#nextX = null;
    }

    placeShips() {
        Application.lengthsOfShips.forEach((len) => this.#addShipToBoard(len));
    }

    #addShipToBoard(length) {
        const ship = new Ship(length);
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
        do {
            [x, y] = this.#getRandomCoords();
            y = this.#nextY ?? y;
            x = this.#nextX ?? x;
            index = x * 10 + (y + 1); // 0 from (0,0) abstract -> 1 from (1,1) ui
        } while (this.attackedBlocks.includes(index));
        this.attackedBlocks.push(index);
        const block = document.querySelector(
            `.grid[data-id = '1'] .block[data-row = '${
                x + 1
            }'][data-column = '${y + 1}']`
        );

        if (block.matches('.ship-block-in-grid')) {
            if (
                y + 1 < this.oppBoard.size &&
                !this.oppBoard.grid[x][y + 1].attacked
            ) {
                this.#nextX = x;
                this.#nextY = y + 1;
            } else if (y - 1 >= 0 && !this.oppBoard.grid[x][y - 1].attacked) {
                this.#nextX = x;
                this.#nextY = y - 1;
            } else {
                this.#nextX = null;
                this.#nextY = null;
            }
        } else {
            this.#nextX = null;
            this.#nextY = null;
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
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    #hunt() {}

    #isValidIndex() {}
}
