export default class Ship {
  constructor(length, orientation = "horizontal") {
    if (length <= 0) throw new Error("Invalid length of ship");
    this.length = length;
    this.hitIndices = [];
    this.orientation = orientation; 
  }

  hit(index) {
    if (this.#isValidIndex(index) && !this.hitIndices.includes(index))
      this.hitIndices.push(index);
  }

  isSunk() {
    return this.length === this.hitIndices.length;
  }

  #isValidIndex(index) {
    return index < this.length && index >= 0;
  }
}
