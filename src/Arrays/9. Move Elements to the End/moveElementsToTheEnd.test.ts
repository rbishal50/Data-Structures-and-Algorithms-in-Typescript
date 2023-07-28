import { moveElementsToTheEnd } from "./moveElementsToTheEnd";

describe("moveElementsToTheEnd", () => {
  describe("Cases with numToMove in the array", () => {
    test("should move all instances of the numToMove to the end of the array", () => {
      const array1 = [1, 2, 3, 2, 4, 2, 5];
      const numToMove1 = 2;
      const result = moveElementsToTheEnd(array1, numToMove1);
      expect(result.slice(-3)).toEqual([2, 2, 2]);

      const array2 = [4, 5, 6, 4, 7, 8, 4];
      const numToMove2 = 4;
      const result2 = moveElementsToTheEnd(array2, numToMove2);
      expect(result2.slice(-3)).toEqual([4, 4, 4]);
    });
  });

  describe("Cases with numToMove not in the array", () => {
    test("should return the array unchanged", () => {
      const array3 = [1, 2, 3, 4, 5];
      const numToMove3 = 6;
      expect(moveElementsToTheEnd(array3, numToMove3)).toEqual([1, 2, 3, 4, 5]);

      const array4 = [10, 20, 30, 40];
      const numToMove4 = 50;
      expect(moveElementsToTheEnd(array4, numToMove4)).toEqual([
        10, 20, 30, 40,
      ]);
    });
  });

  describe("Cases with multiple instances of the numToMove", () => {
    test("should move all instances of the numToMove to the end of the array", () => {
      const array5 = [2, 2, 2, 2];
      const numToMove5 = 2;
      expect(moveElementsToTheEnd(array5, numToMove5)).toEqual([2, 2, 2, 2]);

      const array6 = [1, 2, 3, 1, 1, 2, 3, 1];
      const numToMove6 = 1;
      const result6 = moveElementsToTheEnd(array6, numToMove6);
      expect(result6.slice(-4)).toEqual([1, 1, 1, 1]);
    });
  });
});
