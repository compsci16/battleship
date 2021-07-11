import Gameboard from '../modules/Models/Gameboard';
import Ship from '../modules/Models/Ship';

describe('gameboard', () => {
    const defaultObj = { ship: null, attacked: false, index: -1 };

    it('creates a gameboard wth a grid of sent size with nulls', () => {
        expect(new Gameboard(2)).toMatchObject({
            grid: [
                [defaultObj, defaultObj],
                [defaultObj, defaultObj],
            ],
        });
    });

    it('cannot place ships at wrong positions', () => {
        const gameboard = new Gameboard(2);
        const ship1 = new Ship(2);
        expect(() => gameboard.placeShip(ship1, 0, 1)).toThrowError();
        expect(() => gameboard.placeShip(ship1, 1, 1)).toThrowError();

        const ship2 = new Ship(3);
        expect(() => gameboard.placeShip(ship2, 1, 1)).toThrowError();

        const gameboard2 = new Gameboard(3);
        expect(() => gameboard2.placeShip(ship2, 1, 1)).toThrowError();
        expect(() => gameboard2.placeShip(ship2, 0, 1)).toThrowError();

        const gameboard3 = new Gameboard(10);
        expect(() => gameboard3.placeShip(ship2, 0, 8)).toThrowError();
    });

    it('places ships', () => {
        const gameboard = new Gameboard(2);
        const ship = new Ship(2);
        gameboard.placeShip(ship, 0, 0);

        expect(gameboard.grid).toEqual([
            [
                { ship: ship, index: 0, attacked: false },
                { ship: ship, index: 1, attacked: false },
            ],
            [defaultObj, defaultObj],
        ]);
    });

    it('cannot place another ship at used position', () => {
        const gameboard = new Gameboard(10);
        const ship = new Ship(8);
        gameboard.placeShip(ship, 0, 0);
        expect(() => gameboard.placeShip(ship, 0, 0)).toThrowError();
    });

    it('receives Attack', () => {
        const gameboard = new Gameboard(2);
        const ship = new Ship(2);
        gameboard.placeShip(ship, 0, 0);
        gameboard.receiveAttack(0, 0);
        expect(gameboard.grid).toEqual([
            [
                { ship: ship, index: 0, attacked: true },
                { ship: ship, index: 1, attacked: false },
            ],
            [defaultObj, defaultObj],
        ]);
    });

    it('modifies attacked ship', () => {
        const gameboard = new Gameboard(2);
        const ship = new Ship(2);
        gameboard.placeShip(ship, 0, 0);
        gameboard.receiveAttack(0, 1);
        expect(gameboard.grid[0][1].ship).toMatchObject({
            hitIndices: [1],
        });
    });

    it('modifies and sinks fully attacked ship', () => {
        const gameboard = new Gameboard(2);
        const ship = new Ship(2);
        gameboard.placeShip(ship, 0, 0);
        gameboard.receiveAttack(0, 1);
        expect(gameboard.grid[0][1].ship.isSunk()).toEqual(false);
        gameboard.receiveAttack(0, 0);
        expect(gameboard.grid[0][1].ship).toMatchObject({
            hitIndices: [1, 0],
        });
        expect(gameboard.grid[0][1].ship.isSunk()).toEqual(true);
    });

    it('throws error on multiple attacks at same point', () => {
        const gameboard = new Gameboard(2);
        const ship = new Ship(2);
        gameboard.placeShip(ship, 0, 0);
        gameboard.receiveAttack(0, 1);
        expect(() => gameboard.receiveAttack(0, 1)).toThrowError();
    });

    it('reports if all ships have sunk', () => {
        const gameboard = new Gameboard(2);
        expect(() => gameboard.haveAllSunk()).toThrowError();
        const ship = new Ship(2);
        gameboard.placeShip(ship, 0, 0);
        gameboard.receiveAttack(0, 1);
        expect(gameboard.haveAllSunk()).toBe(false);
        gameboard.receiveAttack(1, 0);
        expect(gameboard.haveAllSunk()).toBe(false);
        gameboard.receiveAttack(0, 0);
        expect(gameboard.haveAllSunk()).toBe(true);
    });

    it("can check if there's space for other ships", () => {
        const gameboard = new Gameboard(5);
        const ship1 = new Ship(2);
        const ship2 = new Ship(3);
        gameboard.placeShip(ship1, 0, 3);
        expect(() => gameboard.placeShip(ship2, 0, 2)).toThrowError();
        expect(() => gameboard.placeShip(ship2, 0, 0)).not.toThrowError();
        expect(() => gameboard.placeShip(ship2, 0, 1)).toThrowError();
        expect(() => gameboard.placeShip(ship2, 0, 3)).toThrowError();
        expect(() => gameboard.placeShip(ship2, 0, 5)).toThrowError();
    });

    it('can place vertical ships', () => {
        const gameboard = new Gameboard(2);
        const ship = new Ship(2, 'vertical');
        gameboard.placeShip(ship, 0, 0);
        expect(gameboard.grid).toEqual([
            [{ ship: ship, index: 0, attacked: false }, defaultObj],
            [{ ship: ship, index: 1, attacked: false }, defaultObj],
        ]);
    });

    it('can place multiple vertical ships in the same grid', () => {
        const gameboard = new Gameboard(2);
        const ship1 = new Ship(2, 'vertical');
        const ship2 = new Ship(2, 'vertical');
        gameboard.placeShip(ship1, 0, 0);
        gameboard.placeShip(ship2, 0, 1);
        expect(gameboard.grid).toEqual([
            [gridShip(ship1, 0), gridShip(ship2, 0)],
            [gridShip(ship1, 1), gridShip(ship2, 1)],
        ]);
    });

    it('can place multiple vertical and horizontal ships in the same grid', () => {
        const gameboard = new Gameboard(5);
        const ship1 = new Ship(5, 'vertical');
        const ship2 = new Ship(3, 'horizontal');
        const ship3 = new Ship(2, 'horizontal');
        const ship4 = new Ship(2, 'vertical');
        const ship5 = new Ship(2, 'horizontal');
        gameboard.placeShip(ship1, 0, 0);
        gameboard.placeShip(ship2, 1, 1);
        gameboard.placeShip(ship3, 2, 1);
        gameboard.placeShip(ship4, 0, 4);
        gameboard.placeShip(ship5, 3, 2);

        expect(gameboard.grid).toEqual([
            [
                gridShip(ship1, 0),
                defaultObj,
                defaultObj,
                defaultObj,
                gridShip(ship4, 0),
            ],
            [
                gridShip(ship1, 1),
                gridShip(ship2, 0),
                gridShip(ship2, 1),
                gridShip(ship2, 2),
                gridShip(ship4, 1),
            ],
            [
                gridShip(ship1, 2),
                gridShip(ship3, 0),
                gridShip(ship3, 1),
                defaultObj,
                defaultObj,
            ],
            [
                gridShip(ship1, 3),
                defaultObj,
                gridShip(ship5, 0),
                gridShip(ship5, 1),
                defaultObj,
            ],
            [
                gridShip(ship1, 4),
                defaultObj,
                defaultObj,
                defaultObj,
                defaultObj,
            ],
        ]);
    });

    function gridShip(ship, index) {
        return { ship: ship, index: index, attacked: false };
    }
});
