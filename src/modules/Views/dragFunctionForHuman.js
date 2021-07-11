import Ship from "../Models/Ship";
import Application from "../Controllers/Application";

let draggedShip, draggedShipLength, shipBlockNumberDragged;

export default function letHumanDragShips(boardHuman) {
  document
    .querySelectorAll(".ship-yard[data-id = '1'] .ship")
    .forEach((ship) => {
      ship.addEventListener("dragstart", handleDragStart);
      ship.addEventListener("dragend", (e) => handleDragEnd(e, boardHuman));
    });
}

function handleDragStart(e) {
  e.preventDefault();
  this.style.opacity = "0.4";
  draggedShip = e.target;
  if (!draggedShip.matches(".ship")) return;
  draggedShipLength = draggedShip.childElementCount;
  const rect = draggedShip.getBoundingClientRect();
  const blockWidth = rect.width / draggedShipLength;
  shipBlockNumberDragged = Math.floor(e.offsetX / blockWidth + 1);
}

function handleDragEnd(e, boardHuman) {
  e.preventDefault();
  // on which element does drag end on screen - returns an array with parents included
  const elem = document.elementsFromPoint(e.clientX, e.clientY);
  // if it's a block in the right grid
  if (elem[0].matches(`.grid[data-id = '1'] .block`)) {
    const block = elem[0];
    const [row, column] = getUICoords(block);

    const startingBlock = document.querySelector(
      `.grid[data-id = '1'] .block[data-row = '${row}'][data-column = '${
        column - shipBlockNumberDragged + 1
      }']`
    );
    if (!startingBlock) {
      restoreOpacity(e);
      return;
    }

    const [x, y] = getUICoords(startingBlock);
    const ship = new Ship(draggedShipLength);

    try {
      boardHuman.placeShip(ship, x - 1, y - 1); // x-1,y-1 because UI: 1,2,... -> logic:0,1,...\
      ++Application.shipsOfGrid1;
      paintShipOnGrid(parseInt(startingBlock.getAttribute("data-number")));
      draggedShip.style.display = "none";
      return;
    } catch (err) {
      console.log(err.message);
      restoreOpacity(e);
    }
  } else restoreOpacity(e);
}

function paintShipOnGrid(index) {
  for (let i = 0; i < draggedShipLength; i++) {
    const currentBlock = document.querySelector(
      `.grid[data-id = '1'] .block[data-number = '${index++}']`
    );
    currentBlock.classList.add("ship-block-in-grid");
  }
}

function restoreOpacity(e) {
  e.target.style.opacity = 1;
}

function getUICoords(block) {
  const x = block.getAttribute("data-row");
  const y = block.getAttribute("data-column");
  return [x, y];
}
