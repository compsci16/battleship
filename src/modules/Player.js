export default class Player {
  constructor(ownBoard, oppBoard) {
    if (!ownBoard) throw "No board for player";
    if (!oppBoard) throw "No opponent board access";
    this.ownBoard = ownBoard;
    this.oppBoard = oppBoard;
  }

  attack(x, y) {
    this.oppBoard.receiveAttack(x, y);
  }
}
