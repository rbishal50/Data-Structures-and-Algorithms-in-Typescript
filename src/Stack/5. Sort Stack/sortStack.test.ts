import { sortStack } from "./sortStack";

describe("sortStack", () => {
  it("should sort an empty stack", () => {
    const stack: number[] = [];
    sortStack(stack);
    expect(stack).toEqual([]);
  });

  it("should sort a stack with one element", () => {
    const stack = [5];
    sortStack(stack);
    expect(stack).toEqual([5]);
  });

  it("should sort a stack with two elements in descending order", () => {
    const stack = [5, 3];
    sortStack(stack);
    expect(stack).toEqual([3, 5]);
  });

  it("should sort a stack with two elements in ascending order", () => {
    const stack = [2, 4];
    sortStack(stack);
    expect(stack).toEqual([2, 4]);
  });

  it("should sort a stack with multiple elements", () => {
    const stack = [3, 1, 4, 2, 5];
    sortStack(stack);
    expect(stack).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort a stack with duplicate elements", () => {
    const stack = [3, 1, 4, 2, 5, 4];
    sortStack(stack);
    expect(stack).toEqual([1, 2, 3, 4, 4, 5]);
  });

  it("should sort a stack with negative numbers", () => {
    const stack = [3, -1, 4, 2, -5];
    sortStack(stack);
    expect(stack).toEqual([-5, -1, 2, 3, 4]);
  });
});
