import Player from "./Player";
import { board1, board2 } from "./boardFromUI";
import AI from "./AI";

document.addEventListener("dragend", () => {
  if (board1 && board2) {
    startGame();
  }
});

let currentPlayer, player1, player2;
let currentPlayerIndex;

function startGame() {
  console.log("Start !");
  player1 = new Player("player1", board1, board2, "human");
  player2 = new AI("player2", board2, board1, "AI");
  currentPlayer = player1;
  currentPlayerIndex = 1;
  document.querySelectorAll(".block").forEach((block) => {
    block.addEventListener("click", blockClickHandler);
  });
}

function blockClickHandler(e) {
  const block = e.target;
  const gridNumber = parseInt(block.parentElement.getAttribute("data-id"));
 
  // player can't attack its own grid
  if (gridNumber === currentPlayerIndex) return;

  const x = parseInt(block.getAttribute("data-row")) - 1;
  const y = parseInt(block.getAttribute("data-column")) - 1;
  currentPlayer.attack(x, y);

  // is it a ship block in the grid
  if (block.matches(".ship-block-in-grid")) {
    shipBlockClickHandler(block);
  } else {
    gridBlockClickHandler(block);
    currentPlayerUpdate(); // update only in this case...
    // ...because the player should get another chance in case of successful ship attack
  }
  if (currentPlayer.type === "AI") currentPlayer.play();
  block.removeEventListener("click", blockClickHandler);
}

function gridBlockClickHandler(gridBlock) {
  gridBlock.classList.add("bad-attack");
  gridBlock.innerHTML = `❌`;
}

function shipBlockClickHandler(shipBlock) {
  

  // 1. Mark the ship block as attacked
  shipBlock.classList.add("attacked-ship");
  shipBlock.innerHTML = `💥`;


  if (isGameOver()) {
    alert(whoWon().name); // if it is, print the winner
    cleanUp();
  }
}

function currentPlayerUpdate() {
  currentPlayer = currentPlayer === player1 ? player2 : player1;
  currentPlayerIndex = currentPlayerIndex === 1 ? 2 : 1;
}

function isGameOver() {
  return board1.haveAllSunk() || board2.haveAllSunk();
}

function whoWon() {
  if (player1.hasWon()) return player1;
  else if (player2.hasWon()) return player2;
  return null;
}

function cleanUp() {
  document.querySelectorAll(".block").forEach((block) => {
    block.removeEventListener("click", blockClickHandler);
  });
}
