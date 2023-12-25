import { cycleInGraphAlternative } from "./cycleInGraphAlternative";

describe("cycleInGraphAlternative", () => {
  it("should return false for a graph without cycles", () => {
    const edges = [[1, 2], [2], []];
    expect(cycleInGraphAlternative(edges)).toBe(false);
  });

  it("should return true for a graph with a simple cycle", () => {
    const edges = [[1, 2], [], [0]];
    expect(cycleInGraphAlternative(edges)).toBe(true);
  });

  it("should return true for a graph with a self-loop", () => {
    const edges = [[1], [2], [2]];
    expect(cycleInGraphAlternative(edges)).toBe(true);
  });

  it("should return true for a graph with a complex cycle", () => {
    const edges = [[1, 3], [2, 3, 4], [0], [], [2, 5], []];
    expect(cycleInGraphAlternative(edges)).toBe(true);
  });

  it("should return false for an empty graph", () => {
    const edges: number[][] = [];
    expect(cycleInGraphAlternative(edges)).toBe(false);
  });

  it("should return true for a graph with a cycle involving all vertices", () => {
    const edges = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 0],
      [0, 1],
    ];
    expect(cycleInGraphAlternative(edges)).toBe(true);
  });
});
