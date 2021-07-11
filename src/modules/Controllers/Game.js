import './Application';
import letHumanDragShips from '../Views/dragFunctionForHuman';
import Gameboard from '../Models/Gameboard';
import displayGameInterface from '../Views/UI';
import areAllShipsPlaced from '../Views/checkNumberOfShipsOfHuman';
import Player from '../Models/Player';
import updateUIWithAIShips from '../Views/UIforAIShips';
import AI from '../Models/AI';
import setBlockClickListeners from './BlockClick';
import Application from './Application';
import cleanup from './Cleanup';
import letHumanRotateShips from '../Views/rotateShip';

const boardHuman = new Gameboard(10);
const boardAI = new Gameboard(10);

const human = new Player('human', boardHuman, boardAI);
const ai = new AI('AI', boardAI, boardHuman);

async function setup() {
    console.log('Setup');
    displayGameInterface();
    letHumanRotateShips();
    letHumanDragShips(boardHuman);
    ai.placeShips();
    updateUIWithAIShips(boardAI);
    await areAllShipsPlaced();
    Application.player1 = human;
    Application.player2 = ai;
    Application.currentPlayer = human; // human starts
}
setup().then(() => {
    startGame();
});

function startGame() {
    console.log('START THE GAME!!!');
    setBlockClickListeners();
    document.addEventListener(
        'click',
        (document.fn = () => {
            if (isGameOver()) {
                console.log('Game Over');
                console.log(whoWon());
                cleanup();
            }
            if (Application.currentPlayer === ai) ai.play();
        })
    );
}

function isGameOver() {
    return boardHuman.haveAllSunk() || boardAI.haveAllSunk();
}

function whoWon() {
    if (human.hasWon()) return human;
    else if (ai.hasWon()) return ai;
    else return null;
}
