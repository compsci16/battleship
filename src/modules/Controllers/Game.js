import './Application';
import letHumanDragShips from '../Views/dragFunctionForHuman';
import Gameboard from '../Models/Gameboard';
import displayGameInterface from '../Views/UI';
import areAllShipsPlaced from '../Views/checkNumberOfShipsOfHuman';
import Player from '../Models/Player';
import updateUIWithAIShips from '../Views/UIforAIShips';
import HuntProbAI from '../Models/HuntProbAI';
import setBlockClickListeners from './BlockClick';
import Application from './Application';
import letHumanRotateShips from '../Views/rotateShip';
import { blockClickHandler } from './BlockClick';

const boardHuman = new Gameboard(10);
const boardAI = new Gameboard(10);
const sleep = (delay) => new Promise(resolve => {
    setTimeout(resolve, delay);
  });  
const human = new Player('human', boardHuman, boardAI);
const ai = new HuntProbAI('AI', boardAI, boardHuman);

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
    document.addEventListener('click', updateGame);
}

function isGameOver() {
    return boardHuman.haveAllSunk() || boardAI.haveAllSunk();
}

function whoWon() {
    if (human.hasWon()) return human;
    else if (ai.hasWon()) return ai;
    else return null;
}

async function updateGame() {
    if (isGameOver()) {
        console.log('Game Over');
        const winner = whoWon();
        let boardNum;
        let sum = 3; 
        if (winner === human) boardNum = 1;
        else boardNum = 2;
        let title = document.querySelector(
            `.board[data-id = '${boardNum}'] .title`
        );
        title.textContent = '💥 💥 💥 WINNER FLEET 💥 💥 💥';
        title = document.querySelector(
            `.board[data-id = '${sum -boardNum}'] .title`
        );
        title.textContent = '☠️ ☠️ ☠️ LOSER FLEET ☠️ ☠️ ☠️';
        cleanup();
    }
    await(sleep, 500);
    if (Application.currentPlayer === ai) {
        ai.play();
    }
}

function cleanup() {
    document.querySelectorAll('.grid .block').forEach((block) => {
        block.removeEventListener('click', blockClickHandler);
    });
    document.removeEventListener('click', updateGame);
}
