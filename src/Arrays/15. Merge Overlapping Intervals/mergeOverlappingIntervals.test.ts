import { mergeOverlappingIntervals } from "./mergeOverlappingIntervals";

describe("mergeOverlappingIntervals", () => {
  test("should merge overlapping intervals", () => {
    const intervals1 = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ];
    expect(mergeOverlappingIntervals(intervals1)).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);

    const intervals2 = [
      [1, 4],
      [4, 5],
    ];
    expect(mergeOverlappingIntervals(intervals2)).toEqual([[1, 5]]);

    const intervals3 = [
      [2, 3],
      [4, 5],
      [6, 7],
      [8, 9],
      [1, 10],
    ];
    expect(mergeOverlappingIntervals(intervals3)).toEqual([[1, 10]]);

    const intervals4 = [
      [1, 4],
      [5, 8],
      [10, 12],
      [13, 16],
      [6, 9],
    ];
    expect(mergeOverlappingIntervals(intervals4)).toEqual([
      [1, 4],
      [5, 9],
      [10, 12],
      [13, 16],
    ]);
  });

  test("should handle non-overlapping intervals", () => {
    const intervals5 = [
      [1, 3],
      [4, 6],
      [7, 9],
    ];
    expect(mergeOverlappingIntervals(intervals5)).toEqual([
      [1, 3],
      [4, 6],
      [7, 9],
    ]);

    const intervals6 = [
      [2, 5],
      [7, 10],
      [12, 15],
    ];
    expect(mergeOverlappingIntervals(intervals6)).toEqual([
      [2, 5],
      [7, 10],
      [12, 15],
    ]);

    const intervals7 = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ];
    expect(mergeOverlappingIntervals(intervals7)).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ]);
  });

  test("should handle single interval", () => {
    const intervals8 = [[1, 5]];
    expect(mergeOverlappingIntervals(intervals8)).toEqual([[1, 5]]);
  });

  test("should handle intervals with duplicate values", () => {
    const intervals9 = [
      [1, 3],
      [2, 5],
      [4, 6],
      [5, 7],
    ];
    expect(mergeOverlappingIntervals(intervals9)).toEqual([[1, 7]]);

    const intervals10 = [
      [3, 5],
      [2, 5],
      [1, 3],
      [6, 8],
      [4, 7],
      [8, 10],
    ];
    expect(mergeOverlappingIntervals(intervals10)).toEqual([[1, 10]]);
  });
});
