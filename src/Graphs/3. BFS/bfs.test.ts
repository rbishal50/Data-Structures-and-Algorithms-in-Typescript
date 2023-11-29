import { Graph } from "./bfs";

describe("Graph", () => {
  let graph = new Graph();

  beforeEach(() => {
    graph = new Graph();
  });

  describe("bfs", () => {
    it("returns empty array for unknown starting vertex", () => {
      expect(graph.bfsRecursive("A")).toEqual([]);
      expect(graph.bfsQueue("A")).toEqual([]);
    });
    it("returns array with starting vertex if no edges", () => {
      graph.addVertex("A");
      expect(graph.bfsRecursive("A")).toEqual(["A"]);
      expect(graph.bfsQueue("A")).toEqual(["A"]);
    });
    it("returns all visited vertices in bfs order - 1", () => {
      graph.addVertex("A");
      graph.addVertex("B");
      graph.addVertex("C");
      graph.addVertex("D");

      graph.addEdge("A", "B");
      graph.addEdge("A", "C");
      graph.addEdge("B", "D");

      expect(graph.bfsRecursive("A")).toEqual(["A", "B", "C", "D"]);
      expect(graph.bfsQueue("A")).toEqual(["A", "B", "C", "D"]);
    });
    it("returns all visited vertices in bfs order - 2", () => {
      graph.addVertex("A");
      graph.addVertex("B");
      graph.addVertex("C");
      graph.addVertex("D");
      graph.addVertex("E");
      graph.addVertex("F");
      graph.addVertex("G");
      graph.addVertex("H");

      graph.addEdge("A", "B");
      graph.addEdge("A", "C");
      graph.addEdge("A", "D");
      graph.addEdge("A", "E");
      graph.addEdge("B", "F");
      graph.addEdge("B", "G");
      graph.addEdge("F", "H");
      graph.addEdge("H", "C");
      graph.addEdge("D", "G");

      expect(graph.bfsRecursive("A")).toEqual([
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
      ]);
      expect(graph.bfsQueue("A")).toEqual([
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
      ]);
    });
  });
});
