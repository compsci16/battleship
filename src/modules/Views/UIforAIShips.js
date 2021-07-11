export default function updateUIWithAIShips(boardAI) {
  document
    .querySelectorAll(`.ship-yard[data-id = '2'] .ship`)
    .forEach((ship) => {
      ship.style.display = "none";
    });

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (boardAI.grid[i][j]["ship"]) {
        const block = document.querySelector(
          `.grid[data-id = '2'] 
           .block[data-row = '${i + 1}'][data-column = '${j + 1}']`
        );
        block.classList.add("ship-block-in-grid");
        block.classList.add("ai-ship");
      }
    }
  }
}
