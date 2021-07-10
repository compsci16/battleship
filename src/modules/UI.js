// Add 10*10 blocks to the grid
Array.from(document.querySelectorAll(".container .board .grid")).map((grid) => {
  for (let i = 0; i < 100; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.setAttribute("data-column", (i % 10) + 1);
    block.setAttribute("data-number", i + 1);
    block.setAttribute("data-row", Math.floor(i/10 + 1));
    grid.appendChild(block);
  }
});

// Create rectangular blocks to represent ships
function addShiptoUI(length) {
  Array.from(document.querySelectorAll(".ship-yard")).map((shipYard) => {
    const yardNumber = shipYard.getAttribute("data-id");
    const ship = document.createElement("div");
    ship.classList.add("ship");
    ship.setAttribute("draggable", true);
    ship.setAttribute("data-id", yardNumber);
    for (let i = 0; i < length; i++) {
      const block = document.createElement("div");
      block.classList.add("ship-block");
      block.style.width = `${
        document.querySelector(".grid .block").offsetWidth
      }px`;
      ship.appendChild(block);
    }
    shipYard.appendChild(ship);
  });
}

document.querySelector(".container .board .ship-yard");

addShiptoUI(4);
addShiptoUI(3);
addShiptoUI(2);
addShiptoUI(3);
addShiptoUI(5);
