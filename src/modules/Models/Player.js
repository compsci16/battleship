export default class Player {
  constructor(name, ownBoard, oppBoard) {
    if (!ownBoard) throw "No board for player";
    if (!oppBoard) throw "No opponent board access";
    this.ownBoard = ownBoard;
    this.oppBoard = oppBoard;
    this.name = name;
  }

  attack(x, y) {
    console.log(`${this.name} attacked (${x}, ${y})`);
    this.oppBoard.receiveAttack(x, y);
  }

  hasWon() {
    return this.oppBoard.haveAllSunk();
  }
}
