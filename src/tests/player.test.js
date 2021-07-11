import Gameboard from '../modules/Models/Gameboard';
import Player from '../modules/Models/Player';
import Ship from '../modules/Models/Ship';

describe('player', () => {
    const defaultObj = { ship: null, attacked: false, index: -1 };
    it('throws error without board access', () => {
        const ownBoard = new Gameboard(2);
        expect(() => new Player()).toThrowError('No board for player');
        expect(() => new Player('p1', ownBoard)).toThrowError(
            'No opponent board access'
        );
    });

    it('receives passed board', () => {
        const ownBoard = new Gameboard(2);
        const oppBoard = new Gameboard(2);
        expect(new Player('p1', ownBoard, oppBoard)).toMatchObject({
            ownBoard,
            oppBoard,
        });
    });

    it('can attack opponent grid', () => {
        const ownBoard = new Gameboard(2);
        const oppBoard = new Gameboard(2);
        const ship = new Ship(2);
        oppBoard.placeShip(ship, 0, 0);
        const player1 = new Player('p1', ownBoard, oppBoard);
        const player2 = new Player('p2', oppBoard, ownBoard);
        player1.attack(0, 0);
        expect(oppBoard.grid[0][0].attacked).toBe(true);
    });

    it('can sink opponent ship', () => {
        const ownBoard = new Gameboard(2);
        const oppBoard = new Gameboard(2);
        oppBoard.placeShip(new Ship(2), 0, 0);
        const player1 = new Player('p1', ownBoard, oppBoard);
        const player2 = new Player('p2', oppBoard, ownBoard);
        player1.attack(0, 0);
        player1.attack(0, 1);
        expect(oppBoard.grid[0][0].ship.isSunk()).toBe(true);
    });
});
