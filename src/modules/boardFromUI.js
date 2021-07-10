import { shipsOfGrid1, shipsOfGrid2 } from "./drag";
import Gameboard from "./Gameboard";
import Ship from "./Ship";

let board1, board2;
const numberOfShips = 5;


document.addEventListener("dragend", () => {
  if (areAllShipsPlaced()) {
    [board1, board2] = getBoards();
  }
});

function areAllShipsPlaced() {
  return shipsOfGrid1 === numberOfShips && shipsOfGrid2 === numberOfShips;
}

function getBoards() {
  const board1 = new Gameboard(10);
  const board2 = new Gameboard(10);
  const boards = [board1, board2];
  for (let i = 1; i <= boards.length; i++) {
    for (let j = 1; j <= numberOfShips; j++) {
      const { length, coords } = getShipData(i, j);
      const ship = new Ship(length);
      const [x, y] = coords;
      boards[i - 1].placeShip(ship, x, y);
    }
  }

  return boards;
}

function getShipData(gridNumber, shipNumber) {
  const points = document.querySelectorAll(
    `.grid[data-id='${gridNumber}'] .block[shipNumber = '${shipNumber}']`
  );
  const startPoint = points[0];
  const endPoint = points[points.length - 1];
  const length =
    parseInt(endPoint.getAttribute("data-number")) -
    parseInt(startPoint.getAttribute("data-number")) +
    1;
  const coords = [
    parseInt(startPoint.getAttribute("data-row")) - 1,
    parseInt(startPoint.getAttribute("data-column")) - 1,
  ];
  return { length, coords };
}

export { board1, board2 };
