export default class Player {
  constructor(name, ownBoard, oppBoard, type) {
    if (!ownBoard) throw "No board for player";
    if (!oppBoard) throw "No opponent board access";
    this.ownBoard = ownBoard;
    this.oppBoard = oppBoard;
    this.name = name;
    this.type = type;
  }

  attack(x, y) {
    console.log(`${this.type} attacked (${x}, ${y})`);
    this.oppBoard.receiveAttack(x, y);
  }

  hasWon() {
    return this.oppBoard.haveAllSunk();
  }
}
