let draggedShip, draggedShipLength, shipBlockNumberDragged, gridNumber;
let shipsOfGrid1 = 0;
let shipsOfGrid2 = 0;

document.querySelectorAll(".ship").forEach((ship) => {
  ship.addEventListener("dragstart", handleDragStart);
  ship.addEventListener("dragend", handleDragEnd);
});

function handleDragStart(e) {
  this.style.opacity = "0.4";
  draggedShip = e.target;
  draggedShipLength = draggedShip.childElementCount;
  gridNumber = draggedShip.getAttribute("data-id");
  const rect = draggedShip.getBoundingClientRect();
  const blockWidth = rect.width / draggedShipLength;

  shipBlockNumberDragged = Math.floor(e.offsetX / blockWidth + 1);
}

function handleDragEnd(e) {
  e.preventDefault();
  // on which element does drag end on screen - returns an array with parents included
  const elem = document.elementsFromPoint(e.clientX, e.clientY);
  // if it's a block in the right grid -> AND it's not occupied AND the adjacent blocks have sufficient space
  if (
    elem[0].matches(`.grid[data-id = '${gridNumber}'] .block`) &&
    checkPosition(elem[0])
  )
    handleBlockDrop(elem[0], draggedShipLength);
  else this.style.opacity = 1;
}

function handleBlockDrop(block) {
  let shipNumber;
  if (gridNumber == 1) shipNumber = ++shipsOfGrid1;
  else if (gridNumber == 2) shipNumber = ++shipsOfGrid2;

  const blockNumber = parseInt(block.getAttribute("data-number"));
  let pos = blockNumber - shipBlockNumberDragged + 1;
  for (let i = 0; i < draggedShipLength; i++) {
    const block = document.querySelector(
      `.grid[data-id = '${gridNumber}'] .block[data-number =  '${pos}']`
    );
    block.classList.add("ship-block-in-grid");
    block.setAttribute("shipNumber", shipNumber);
    pos++;
  }
  draggedShip.style.display = "none";
}

// check if current grid-block is the right place for the ship
function checkPosition(block) {
  const blockNumber = parseInt(block.getAttribute("data-number"));
  const column = parseInt(block.getAttribute("data-column"));

  // False if ship overflows:
  // - detect right overflow
  if (draggedShipLength - shipBlockNumberDragged > 10 - column) return false;
  // - detect left overflow
  if (shipBlockNumberDragged > column) return false;

  // the index (1,2,3, ...., 100) of the leftmost block on the grid that touches the ship
  let pos = blockNumber - shipBlockNumberDragged + 1;

  // check if all the blocks starting from the startingBlock are not painted yet

  for (let i = 0; i < draggedShipLength; i++) {
    const block = document.querySelector(
      `.grid[data-id = '${gridNumber}'] .block[data-number =  '${pos}']`
    );
    if (block.matches(".ship-block-in-grid")) return false;
    pos++;
  }

  return true;
}

export {shipsOfGrid1, shipsOfGrid2}; 