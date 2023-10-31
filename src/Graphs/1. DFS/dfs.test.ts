import { Graph } from "./dfs";

describe("Graph", () => {
  let graph = new Graph();

  beforeEach(() => {
    graph = new Graph();
  });

  describe("dfs", () => {
    it("returns empty array for unknown starting vertex", () => {
      expect(graph.dfsRecursive("A")).toEqual([]);
      expect(graph.dfsStack("A")).toEqual([]);
    });

    it("returns array with starting vertex if no edges", () => {
      graph.addVertex("A");
      expect(graph.dfsRecursive("A")).toEqual(["A"]);
      expect(graph.dfsStack("A")).toEqual(["A"]);
    });

    it("returns all visited vertices in dfs order", () => {
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
      graph.addEdge("B", "F");
      graph.addEdge("F", "H");
      graph.addEdge("H", "C");
      graph.addEdge("D", "G");

      expect(graph.dfsRecursive("A")).toEqual([
        "A",
        "B",
        "F",
        "H",
        "C",
        "D",
        "G",
        "E",
      ]);
      expect(graph.dfsStack("A")).toEqual([
        "A",
        "B",
        "F",
        "H",
        "C",
        "D",
        "G",
        "E",
      ]);
    });
  });
});
