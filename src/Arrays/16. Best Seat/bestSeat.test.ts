import { bestSeat } from "./bestSeat";

describe("bestSeat", () => {
  test("should return the seat index of the optimal seat", () => {
    const theatreRow1 = [1, 0, 0, 0, 0, 1];
    expect(bestSeat(theatreRow1)).toBe(2);

    const theatreRow2 = [1, 0, 0, 0, 1, 0, 1];
    expect(bestSeat(theatreRow2)).toBe(2);

    const theatreRow3 = [1, 0, 1, 0, 0, 1];
    expect(bestSeat(theatreRow3)).toBe(3);
  });

  test("should return the seat with the lower index in case of equally good seats", () => {
    const theatreRow5 = [1, 0, 0, 1, 0, 0, 1];
    expect(bestSeat(theatreRow5)).toBe(1);

    const theatreRow6 = [1, 0, 0, 1, 0, 0, 1, 1];
    expect(bestSeat(theatreRow6)).toBe(1);
  });

  test("should handle theatre row with no empty seat", () => {
    const theatreRow7 = [1, 1, 1, 1, 1];
    expect(bestSeat(theatreRow7)).toBe(-1);
  });

  test("should handle theatre row with all empty seats", () => {
    const theatreRow8 = [0, 0, 0, 0, 0];
    expect(bestSeat(theatreRow8)).toBe(2);
  });
});
