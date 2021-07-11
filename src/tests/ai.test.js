import AI from '../modules/Models/AI';
import Application from '../modules/Controllers/Application';
import Gameboard from '../modules/Models/Gameboard';

describe('AI', () => {
    it('can place its ships', () => {
        const aiBoard = new Gameboard(10);
        const humanBoard = new Gameboard(10);
        const ai = new AI('ai', aiBoard, humanBoard);
        ai.placeShips();
        expect(aiBoard.shipCount).toBe(Application.numberOfShips);
    });
});
