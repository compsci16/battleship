import Application from "../Controllers/Application";

export default function areAllShipsPlaced() {
  return new Promise((resolve, reject) => {
    (function waitForAllShipsToBePlaced() {
      if (
        Application.shipsOfGrid1 === Application.numberOfShips &&
        Application.shipsOfGrid2 === Application.numberOfShips
      )
        return resolve();
      setTimeout(waitForAllShipsToBePlaced, 2000);
    })();
  });
}
