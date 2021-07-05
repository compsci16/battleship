import Ship from "../modules/Ship";

describe("Ship", () => {
  const ship = new Ship(1);
  it("returns a ship of passed length", () => {
    expect(ship).toEqual({ length: 1, hitIndices: [] });
  });

  it("throws error on passing 0 or negative lengths", () => {
    expect(() => new Ship(-2)).toThrowError("Invalid length");
  });

  it("stores a hit array for hit locations", () => {
    expect(ship).toMatchObject({ hitIndices: [] });
  });

  it("adds hit index to its hit array", () => {
    ship.hit(0);
    expect(ship).toMatchObject({ hitIndices: [0] });
  });

  it("should not be sunk in the beginning", () => {
    const ship = new Ship(2);
    expect(ship.isSunk()).toEqual(false);
  });

  it("should sink on adding hits", () => {
    const ship = new Ship(2);
    ship.hit(0);
    ship.hit(1);
    expect(ship.isSunk()).toEqual(true);
  });

  it("should not ad duplicate hits", () => {
    const ship = new Ship(2);
    ship.hit(0);
    ship.hit(0);
    expect(ship).toMatchObject({
      hitIndices: [0],
    });
  });
});
