const Application = {
  numberOfShips: 5,
  lengthsOfShips: [1, 2, 3, 4, 5],
  shipsOfGrid1: 0,
  shipsOfGrid2: 0,
  player1: undefined,
  player2: undefined,
  currentPlayer: undefined,
  updatePlayer: function () {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
  },
};

export default Application;
