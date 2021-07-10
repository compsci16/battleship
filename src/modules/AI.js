import Player from "./Player";

export default class AI extends Player {
  constructor(name, ownBoard, oppBoard, type) {
    super(name, ownBoard, oppBoard, type);
    this.attackedBlocks = [];
  }

  play() {
    let x, y, index;
    do {
      [x, y] = this.#getRandomCoords();
      index = (x - 1) * 10 + y;
    } while (this.attackedBlocks.includes(index));
    this.attackedBlocks.push(index);
    const block = document.querySelector(
      `.grid[data-id = '1'] .block[data-row = '${x}'][data-column = '${y}']`
    );
    block.click();
  }
  #getRandomCoords() {
    const x = this.#getRandomInt(1, 10);
    const y = this.#getRandomInt(1, 10);
    return [x, y];
  }
  #getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
}
